import { useCallback, useEffect, useState } from 'react'
import { ACTIVITY_TO_QUEST, BADGES, type ActivityKind, type Badge } from '../data/badges'
import { getDailyQuests, todayKey, type Quest } from '../data/quests'

const STARS_KEY = 'kitapcenneti-stars'
const STREAK_KEY = 'kitapcenneti-streak'
const LAST_DAY_KEY = 'kitapcenneti-last-quest-day'
const DONE_PREFIX = 'kitapcenneti-quests-'
const BADGES_KEY = 'kitapcenneti-badges'
const COUNTS_KEY = 'kitapcenneti-activity-counts'
const BEDTIME_KEY = 'kitapcenneti-bedtime'
const FAV_AUDIO_KEY = 'kitapcenneti-fav-audio'

type Counts = Partial<Record<ActivityKind, number>>

function readJson<T>(key: string, fallback: T): T {
  try {
    const raw = localStorage.getItem(key)
    return raw ? (JSON.parse(raw) as T) : fallback
  } catch {
    return fallback
  }
}

function evaluateBadges(stars: number, streak: number, counts: Counts, owned: string[]): string[] {
  const next = new Set(owned)
  for (const badge of BADGES) {
    if (next.has(badge.id)) continue
    if (badge.requireStars != null && stars >= badge.requireStars) next.add(badge.id)
    if (badge.requireStreak != null && streak >= badge.requireStreak) next.add(badge.id)
    if (badge.requireActivity) {
      const n = counts[badge.requireActivity] || 0
      const need = badge.requireActivityCount ?? 1
      if (n >= need) next.add(badge.id)
    }
  }
  return [...next]
}

const DAILY_ACT_PREFIX = 'kitapcenneti-act-'

/** Imperative API for pages that don't need full hook re-renders */
export function completeActivity(kind: ActivityKind): { newBadges: Badge[]; questCompleted?: Quest } {
  const today = todayKey()
  const dailyKey = DAILY_ACT_PREFIX + today
  const dailyDone = readJson<string[]>(dailyKey, [])
  const firstToday = !dailyDone.includes(kind)

  const counts = readJson<Counts>(COUNTS_KEY, {})
  // Lifetime counts only bump once per kind per day to avoid spam (viewer remounts etc.)
  if (firstToday) {
    counts[kind] = (counts[kind] || 0) + 1
    localStorage.setItem(COUNTS_KEY, JSON.stringify(counts))
    localStorage.setItem(dailyKey, JSON.stringify([...dailyDone, kind]))
  }

  let stars = Number(localStorage.getItem(STARS_KEY) || 0)
  let streak = Number(localStorage.getItem(STREAK_KEY) || 0)
  const owned = readJson<string[]>(BADGES_KEY, [])

  const questId = ACTIVITY_TO_QUEST[kind]
  const quests = getDailyQuests()
  const quest = questId ? quests.find((q) => q.id === questId) : undefined
  let questCompleted: Quest | undefined

  if (quest) {
    const key = DONE_PREFIX + today
    const done = readJson<string[]>(key, [])
    if (!done.includes(quest.id)) {
      const nextDone = [...done, quest.id]
      localStorage.setItem(key, JSON.stringify(nextDone))
      stars += quest.stars
      localStorage.setItem(STARS_KEY, String(stars))

      if (done.length === 0) {
        const last = localStorage.getItem(LAST_DAY_KEY)
        const yesterday = todayKey(new Date(Date.now() - 86400000))
        streak = last === yesterday ? streak + 1 : last === today ? streak : 1
        localStorage.setItem(STREAK_KEY, String(streak))
        localStorage.setItem(LAST_DAY_KEY, today)
      }
      questCompleted = quest
    }
  } else if (firstToday && ['bedtime', 'favorite'].includes(kind)) {
    // Tiny reward for platform habits when not mapped to a quest
    stars += 1
    localStorage.setItem(STARS_KEY, String(stars))
  }

  const nextBadges = evaluateBadges(stars, streak, counts, owned)
  const newly = nextBadges.filter((id) => !owned.includes(id))
  if (newly.length) localStorage.setItem(BADGES_KEY, JSON.stringify(nextBadges))

  window.dispatchEvent(new CustomEvent('kitapcenneti-progress'))

  return {
    newBadges: BADGES.filter((b) => newly.includes(b.id)),
    questCompleted,
  }
}

export function getBedtime(): boolean {
  return localStorage.getItem(BEDTIME_KEY) === '1'
}

export function setBedtime(on: boolean) {
  localStorage.setItem(BEDTIME_KEY, on ? '1' : '0')
  document.documentElement.classList.toggle('bedtime', on)
  if (on) completeActivity('bedtime')
  window.dispatchEvent(new CustomEvent('kitapcenneti-progress'))
}

export function getFavoriteAudioIds(): string[] {
  return readJson<string[]>(FAV_AUDIO_KEY, [])
}

export function toggleFavoriteAudio(id: string): string[] {
  const current = getFavoriteAudioIds()
  const next = current.includes(id) ? current.filter((x) => x !== id) : [...current, id]
  localStorage.setItem(FAV_AUDIO_KEY, JSON.stringify(next))
  if (!current.includes(id)) completeActivity('favorite')
  window.dispatchEvent(new CustomEvent('kitapcenneti-progress'))
  return next
}

export const CREATE_PREFILL_KEY = 'kitapcenneti-create-prefill'

export function setCreatePrefill(data: { heroName?: string; category?: string; prompt?: string }) {
  sessionStorage.setItem(CREATE_PREFILL_KEY, JSON.stringify(data))
}

export function consumeCreatePrefill(): { heroName?: string; category?: string; prompt?: string } | null {
  try {
    const raw = sessionStorage.getItem(CREATE_PREFILL_KEY)
    if (!raw) return null
    sessionStorage.removeItem(CREATE_PREFILL_KEY)
    return JSON.parse(raw)
  } catch {
    return null
  }
}

export function useProgress() {
  const [stars, setStars] = useState(0)
  const [streak, setStreak] = useState(0)
  const [badgeIds, setBadgeIds] = useState<string[]>([])
  const [counts, setCounts] = useState<Counts>({})
  const [bedtime, setBedtimeState] = useState(false)
  const [doneToday, setDoneToday] = useState<string[]>([])

  const refresh = useCallback(() => {
    setStars(Number(localStorage.getItem(STARS_KEY) || 0))
    setStreak(Number(localStorage.getItem(STREAK_KEY) || 0))
    setBadgeIds(readJson<string[]>(BADGES_KEY, []))
    setCounts(readJson<Counts>(COUNTS_KEY, {}))
    setBedtimeState(getBedtime())
    setDoneToday(readJson<string[]>(DONE_PREFIX + todayKey(), []))
  }, [])

  useEffect(() => {
    refresh()
    document.documentElement.classList.toggle('bedtime', getBedtime())
    const on = () => refresh()
    window.addEventListener('kitapcenneti-progress', on)
    window.addEventListener('storage', on)
    return () => {
      window.removeEventListener('kitapcenneti-progress', on)
      window.removeEventListener('storage', on)
    }
  }, [refresh])

  const badges = BADGES.filter((b) => badgeIds.includes(b.id))
  const lockedBadges = BADGES.filter((b) => !badgeIds.includes(b.id))
  const todayQuests = getDailyQuests()
  const todayProgress = todayQuests.length
    ? Math.round((doneToday.length / todayQuests.length) * 100)
    : 0

  const toggleBedtime = () => {
    const next = !bedtime
    setBedtime(next)
    setBedtimeState(next)
  }

  return {
    stars,
    streak,
    badges,
    lockedBadges,
    counts,
    bedtime,
    toggleBedtime,
    todayQuests,
    doneToday,
    todayProgress,
    refresh,
    record: completeActivity,
  }
}

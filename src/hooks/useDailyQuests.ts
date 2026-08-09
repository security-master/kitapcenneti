import { useEffect, useState } from 'react'
import { getDailyQuests, todayKey, type Quest } from '../data/quests'

const STARS_KEY = 'kitapcenneti-stars'
const STREAK_KEY = 'kitapcenneti-streak'
const DONE_PREFIX = 'kitapcenneti-quests-'

export function useDailyQuests() {
  const [quests] = useState(() => getDailyQuests())
  const [done, setDone] = useState<string[]>([])
  const [stars, setStars] = useState(0)
  const [streak, setStreak] = useState(0)

  useEffect(() => {
    const key = DONE_PREFIX + todayKey()
    try {
      const raw = localStorage.getItem(key)
      setDone(raw ? JSON.parse(raw) : [])
      setStars(Number(localStorage.getItem(STARS_KEY) || 0))
      setStreak(Number(localStorage.getItem(STREAK_KEY) || 0))
    } catch {
      setDone([])
    }
  }, [])

  const toggle = (quest: Quest) => {
    const key = DONE_PREFIX + todayKey()
    const isDone = done.includes(quest.id)
    let next: string[]
    let nextStars = stars

    if (isDone) {
      next = done.filter((id) => id !== quest.id)
      nextStars = Math.max(0, stars - quest.stars)
    } else {
      next = [...done, quest.id]
      nextStars = stars + quest.stars
      // streak: first completion today
      if (done.length === 0) {
        const last = localStorage.getItem('kitapcenneti-last-quest-day')
        const today = todayKey()
        const yesterday = todayKey(new Date(Date.now() - 86400000))
        const newStreak = last === yesterday ? streak + 1 : last === today ? streak : 1
        setStreak(newStreak)
        localStorage.setItem(STREAK_KEY, String(newStreak))
        localStorage.setItem('kitapcenneti-last-quest-day', today)
      }
    }

    setDone(next)
    setStars(nextStars)
    localStorage.setItem(key, JSON.stringify(next))
    localStorage.setItem(STARS_KEY, String(nextStars))
  }

  const progress = quests.length ? Math.round((done.length / quests.length) * 100) : 0

  return { quests, done, stars, streak, progress, toggle, isDone: (id: string) => done.includes(id) }
}

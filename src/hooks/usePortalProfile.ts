import { useCallback, useEffect, useState } from 'react'
import type { PortalMode } from '../types/nav'

const PROFILE_KEY = 'kitapcenneti-portal-profile'
const MODE_KEY = 'kitapcenneti-portal-mode'
const JOURNAL_KEY = 'kitapcenneti-journal'
const WEEK_PLAN_KEY = 'kitapcenneti-week-plan'

export interface PortalProfile {
  childName: string
  avatar: string
  ageGroup: '3-5' | '6-8' | '9-12'
  interests: string[]
  goal: string
}

export interface JournalEntry {
  id: string
  date: string
  kind: string
  title: string
  note: string
  stars: number
}

const DEFAULT_PROFILE: PortalProfile = {
  childName: '',
  avatar: '🦊',
  ageGroup: '6-8',
  interests: ['masal', 'oyun'],
  goal: 'Her gün bir masal veya oyun',
}

function readJson<T>(key: string, fallback: T): T {
  try {
    const raw = localStorage.getItem(key)
    return raw ? (JSON.parse(raw) as T) : fallback
  } catch {
    return fallback
  }
}

export function getPortalMode(): PortalMode {
  return localStorage.getItem(MODE_KEY) === 'parent' ? 'parent' : 'kids'
}

export function setPortalMode(mode: PortalMode) {
  localStorage.setItem(MODE_KEY, mode)
  window.dispatchEvent(new CustomEvent('kitapcenneti-portal'))
}

export function addJournalEntry(entry: Omit<JournalEntry, 'id' | 'date'>) {
  const list = readJson<JournalEntry[]>(JOURNAL_KEY, [])
  const next: JournalEntry = {
    ...entry,
    id: `${Date.now()}`,
    date: new Date().toISOString(),
  }
  localStorage.setItem(JOURNAL_KEY, JSON.stringify([next, ...list].slice(0, 100)))
  window.dispatchEvent(new CustomEvent('kitapcenneti-portal'))
}

export function usePortalProfile() {
  const [profile, setProfileState] = useState<PortalProfile>(DEFAULT_PROFILE)
  const [mode, setModeState] = useState<PortalMode>('kids')
  const [journal, setJournal] = useState<JournalEntry[]>([])
  const [weekPlan, setWeekPlan] = useState<Record<string, string[]>>({})

  const refresh = useCallback(() => {
    setProfileState({ ...DEFAULT_PROFILE, ...readJson(PROFILE_KEY, {}) })
    setModeState(getPortalMode())
    setJournal(readJson(JOURNAL_KEY, []))
    setWeekPlan(readJson(WEEK_PLAN_KEY, {}))
  }, [])

  useEffect(() => {
    refresh()
    const on = () => refresh()
    window.addEventListener('kitapcenneti-portal', on)
    window.addEventListener('storage', on)
    return () => {
      window.removeEventListener('kitapcenneti-portal', on)
      window.removeEventListener('storage', on)
    }
  }, [refresh])

  const saveProfile = (next: PortalProfile) => {
    localStorage.setItem(PROFILE_KEY, JSON.stringify(next))
    setProfileState(next)
    window.dispatchEvent(new CustomEvent('kitapcenneti-portal'))
  }

  const setMode = (m: PortalMode) => {
    setPortalMode(m)
    setModeState(m)
  }

  const saveWeekPlan = (plan: Record<string, string[]>) => {
    localStorage.setItem(WEEK_PLAN_KEY, JSON.stringify(plan))
    setWeekPlan(plan)
    window.dispatchEvent(new CustomEvent('kitapcenneti-portal'))
  }

  return { profile, saveProfile, mode, setMode, journal, weekPlan, saveWeekPlan, refresh }
}

import type { PageId } from '../types/nav'

const KEY = 'kitapcenneti-last-visit'
const MOOD_KEY = 'kitapcenneti-mood'

export interface LastVisit {
  page: PageId
  itemId?: string
  at: number
  label: string
}

const LABELS: Partial<Record<PageId, string>> = {
  audio: 'Sesli masal',
  coloring: 'Boyama',
  activities: 'Oyunlar',
  live: 'Canlı Arena',
  create: 'AI Hikaye',
  quests: 'Görevler',
  stem: 'STEM',
  heroes: 'Kahramanlar',
  fun: 'Eğlence',
  world: 'Dünya haritası',
  library: 'Kütüphane',
  feelings: 'Duygular',
  paths: 'Öğrenme yolu',
  classroom: 'Sınıf',
  challenge: 'Meydan okuma',
}

export function recordLastVisit(page: PageId, itemId?: string) {
  if (page === 'portal' || page === 'home' || page === 'privacy' || page === 'terms') return
  const payload: LastVisit = {
    page,
    itemId,
    at: Date.now(),
    label: LABELS[page] || page,
  }
  try {
    localStorage.setItem(KEY, JSON.stringify(payload))
  } catch {
    /* ignore */
  }
}

export function getLastVisit(): LastVisit | null {
  try {
    const raw = localStorage.getItem(KEY)
    return raw ? (JSON.parse(raw) as LastVisit) : null
  } catch {
    return null
  }
}

export type MoodId = 'mutlu' | 'sakin' | 'meraklı' | 'yorgun' | 'cesur'

export function setMood(mood: MoodId) {
  localStorage.setItem(MOOD_KEY, mood)
  window.dispatchEvent(new CustomEvent('kitapcenneti-portal'))
}

export function getMood(): MoodId {
  const m = localStorage.getItem(MOOD_KEY) as MoodId | null
  return m || 'meraklı'
}

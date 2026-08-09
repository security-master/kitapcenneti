import type { PageId } from '../types/nav'

const KEY = 'kitapcenneti-challenges'

export interface ChallengePayload {
  code: string
  title: string
  page: PageId
  stars: number
  createdAt: number
  fromName: string
}

const ALPH = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789'

export function makeChallengeCode(): string {
  let s = ''
  const arr = new Uint32Array(6)
  crypto.getRandomValues(arr)
  for (let i = 0; i < 6; i++) s += ALPH[arr[i] % ALPH.length]
  return s
}

export function saveChallenge(c: ChallengePayload) {
  const list = readAll()
  localStorage.setItem(KEY, JSON.stringify([c, ...list].slice(0, 30)))
}

export function findChallenge(code: string): ChallengePayload | null {
  const c = code.trim().toUpperCase()
  return readAll().find((x) => x.code === c) || null
}

export function readAll(): ChallengePayload[] {
  try {
    return JSON.parse(localStorage.getItem(KEY) || '[]') as ChallengePayload[]
  } catch {
    return []
  }
}

/** Encode challenge into shareable hash fragment payload */
export function encodeChallengeLink(c: ChallengePayload): string {
  const data = btoa(unescape(encodeURIComponent(JSON.stringify(c))))
  const base = `${window.location.origin}${window.location.pathname}#challenge/${c.code}`
  try {
    sessionStorage.setItem(`kitapcenneti-chal-${c.code}`, data)
  } catch {
    /* ignore */
  }
  return base
}

export function importChallengeFromSession(code: string): ChallengePayload | null {
  try {
    const raw = sessionStorage.getItem(`kitapcenneti-chal-${code}`)
    if (!raw) return null
    const c = JSON.parse(decodeURIComponent(escape(atob(raw)))) as ChallengePayload
    saveChallenge(c)
    return c
  } catch {
    return null
  }
}

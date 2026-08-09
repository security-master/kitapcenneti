/**
 * Seeded procedural content — every hour/day feels unique without a 50MB bundle.
 * Deterministic: same seed → same item.
 */

import type { PageId } from '../types/nav'

export function hashSeed(...parts: (string | number)[]): number {
  let h = 2166136261
  const s = parts.join('|')
  for (let i = 0; i < s.length; i++) {
    h ^= s.charCodeAt(i)
    h = Math.imul(h, 16777619)
  }
  return h >>> 0
}

export function pick<T>(arr: readonly T[], seed: number): T {
  return arr[seed % arr.length]
}

export function hourKey(d = new Date()): string {
  return `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}-${d.getHours()}`
}

export function dayKey(d = new Date()): string {
  return `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`
}

const HEROES = [
  'Mıymıy', 'Cıvıl', 'Pati', 'Nova', 'Tiko', 'Luna', 'Kivilcim', 'Bulut', 'Zeytin', 'Mercan',
  'Pusula', 'Yaprak', 'Fener', 'Rüzgâr', 'Kum', 'İncir', 'Sardunya', 'Mavi', 'Tarçın', 'Lale',
]
const PLACES = [
  'orman', 'kıyı', 'gökyüzü', 'kütüphane', 'bahçe', 'ada', 'dağ', 'köy', 'labirent', 'gölet',
  'uzay istasyonu', 'gökkuşağı köprüsü', 'masal kalesi', 'bilim adası', 'müzik vadisi',
]
const MOODS = ['sakin', 'neşeli', 'meraklı', 'cesur', 'yumuşak', 'parlak', 'sıcak', 'maceralı']
const THEMES = ['Dostluk', 'Cesaret', 'Merak', 'Paylaşım', 'Uyku', 'Doğa', 'Uzay', 'Okul', 'Sanat', 'Spor']
const EMOJIS = ['⭐', '🦊', '🌙', '🌊', '🚀', '🌿', '🎈', '🐻', '🦋', '🌈', '🐢', '🦄', '🐠', '🌻', '🏰', '🧠']

export interface FactoryStory {
  id: string
  title: string
  emoji: string
  age: string
  duration: string
  theme: string
  summary: string
  text: string
  source: 'live'
}

export function factoryStory(seed: number): FactoryStory {
  const hero = pick(HEROES, seed)
  const place = pick(PLACES, seed >> 3)
  const mood = pick(MOODS, seed >> 5)
  const theme = pick(THEMES, seed >> 7)
  const emoji = pick(EMOJIS, seed >> 2)
  const n = (seed % 900) + 1
  return {
    id: `live-story-${seed}`,
    title: `${hero} ve ${place} macerası #${n}`,
    emoji,
    age: pick(['3-5', '4-7', '5-8', '6-9', '7-10'], seed),
    duration: `${3 + (seed % 5)} dk`,
    theme,
    summary: `${mood} bir ${theme.toLowerCase()} masalı — ${hero} ${place}de yeni bir dost bulur.`,
    text: `Bir varmış bir yokmuş, ${place}de ${hero} adında ${mood} bir kahraman yaşarmış.
Bir gün küçük bir sorun çıkmış: kimse yolu bulamıyormuş.
${hero} derin bir nefes almış, etrafına bakmış ve bir plan yapmış.
Dostlarıyla konuşmuş, yardımlaşmış ve sonunda herkes güvende kalmış.
${theme} dolu bu günün sonunda gökyüzü biraz daha parlak görünmüş.
Sen de şimdi ${hero} gibi gülümse… ve tatlı bir nefes al.`,
    source: 'live',
  }
}

export interface FactoryChallenge {
  id: string
  title: string
  emoji: string
  stars: number
  minutes: number
  page: PageId
  hint: string
  window: 'hourly' | 'daily' | 'slot'
  slot?: string
}

const CHALLENGE_TEMPLATES: Omit<FactoryChallenge, 'id' | 'window' | 'slot'>[] = [
  { title: 'Hızlı masal molası', emoji: '🎧', stars: 2, minutes: 5, page: 'audio', hint: 'Bir sesli masal dinle' },
  { title: 'Renk yağmuru', emoji: '🖍️', stars: 2, minutes: 10, page: 'coloring', hint: 'Bir sayfa boya' },
  { title: 'Beyin kıvılcımı', emoji: '❓', stars: 2, minutes: 5, page: 'activities', hint: 'Mini quiz çöz' },
  { title: 'Hafıza şimşeği', emoji: '🧠', stars: 3, minutes: 8, page: 'activities', hint: 'Hafıza oyununu bitir' },
  { title: 'Kelime dansı', emoji: '🔤', stars: 2, minutes: 6, page: 'activities', hint: 'Karıştırma oyna' },
  { title: 'Duygu radar', emoji: '💛', stars: 1, minutes: 3, page: 'feelings', hint: 'Check-in yap' },
  { title: 'STEM kıvılcımı', emoji: '🔬', stars: 2, minutes: 10, page: 'stem', hint: 'Bir deney kartı aç' },
  { title: 'Tekerleme temposu', emoji: '🎵', stars: 2, minutes: 4, page: 'rhymes', hint: 'Bir tekerleme söyle' },
  { title: 'Kahraman selamı', emoji: '🦸', stars: 2, minutes: 5, page: 'heroes', hint: 'Bir kahraman oku' },
  { title: 'AI kıvılcım', emoji: '✨', stars: 3, minutes: 12, page: 'create', hint: 'Kısa hikaye yap' },
  { title: 'Harita keşfi', emoji: '🗺️', stars: 2, minutes: 6, page: 'world', hint: 'Bir bölge aç' },
  { title: 'Kütüphane avı', emoji: '📚', stars: 1, minutes: 5, page: 'library', hint: '3 içerik gez' },
  { title: 'Eğlence çarkı', emoji: '🎡', stars: 1, minutes: 4, page: 'fun', hint: 'Çarkı çevir' },
  { title: 'Koleksiyon turu', emoji: '🧭', stars: 2, minutes: 6, page: 'discover', hint: 'Bir demet incele' },
  { title: 'Sakin nefes', emoji: '🌬️', stars: 1, minutes: 3, page: 'feelings', hint: '3 nefes al' },
]

export function hourlyChallenge(d = new Date()): FactoryChallenge {
  const seed = hashSeed(hourKey(d), 'hourly')
  const t = pick(CHALLENGE_TEMPLATES, seed)
  return {
    ...t,
    id: `hour-${hourKey(d)}-${t.page}`,
    title: `Saatin görevi: ${t.title}`,
    window: 'hourly',
  }
}

export function slotChallenges(d = new Date()): FactoryChallenge[] {
  const hour = d.getHours()
  const slot =
    hour < 11 ? 'morning' : hour < 15 ? 'midday' : hour < 19 ? 'afternoon' : 'evening'
  const seed = hashSeed(dayKey(d), slot)
  return [0, 1, 2].map((i) => {
    const t = pick(CHALLENGE_TEMPLATES, seed + i * 17)
    const labels: Record<string, string> = {
      morning: 'Sabah',
      midday: 'Öğle',
      afternoon: 'İkindi',
      evening: 'Akşam',
    }
    return {
      ...t,
      id: `slot-${dayKey(d)}-${slot}-${i}`,
      title: `${labels[slot]} görevi: ${t.title}`,
      window: 'slot' as const,
      slot,
    }
  })
}

export interface FactoryQuiz {
  question: string
  options: string[]
  answer: number
}

export function factoryQuiz(seed: number): FactoryQuiz {
  const a = 2 + (seed % 12)
  const b = 1 + ((seed >> 3) % 9)
  const kind = seed % 5
  if (kind === 0) {
    return {
      question: `${a} + ${b} kaç eder?`,
      options: [`${a + b - 1}`, `${a + b}`, `${a + b + 1}`, `${a * b}`],
      answer: 1,
    }
  }
  if (kind === 1) {
    const animal = pick(['Kedi', 'Köpek', 'Balık', 'Kuş', 'Tavşan', 'Ayı'], seed)
    return {
      question: `${animal} hangi grupta yer alır?`,
      options: ['Bitki', 'Hayvan', 'Taş', 'Bulut'],
      answer: 1,
    }
  }
  if (kind === 2) {
    const place = pick(['Ankara', 'İstanbul', 'İzmir', 'Bursa'], seed)
    const isCapital = place === 'Ankara'
    return {
      question: 'Türkiye’nin başkenti neresidir?',
      options: isCapital
        ? ['İstanbul', 'Ankara', 'İzmir', 'Bursa']
        : ['İstanbul', 'İzmir', 'Ankara', place],
      answer: isCapital ? 1 : 2,
    }
  }
  if (kind === 3) {
    return {
      question: 'Gökkuşağında yaklaşık kaç renk vardır?',
      options: ['3', '5', '7', '12'],
      answer: 2,
    }
  }
  return {
    question: 'Kitap okumak en çok neyi geliştirir?',
    options: ['Hayal gücünü', 'Sadece uykuyu', 'Koşmayı', 'Hiçbir şeyi'],
    answer: 0,
  }
}

export function factoryQuizBatch(baseSeed: number, count: number): FactoryQuiz[] {
  return Array.from({ length: count }, (_, i) => factoryQuiz(hashSeed(baseSeed, i)))
}

export interface LiveDrop {
  id: string
  emoji: string
  title: string
  blurb: string
  page: PageId
  itemId?: string
  kind: string
}

export function liveDrops(d = new Date(), count = 12): LiveDrop[] {
  const base = hashSeed(hourKey(d), 'drops')
  return Array.from({ length: count }, (_, i) => {
    const seed = hashSeed(base, i)
    const story = factoryStory(seed)
    const page = pick(
      ['audio', 'coloring', 'stem', 'heroes', 'fun', 'activities', 'world', 'discover', 'rhymes', 'feelings'] as PageId[],
      seed,
    )
    return {
      id: `drop-${hourKey(d)}-${i}`,
      emoji: story.emoji,
      title: i % 2 === 0 ? story.title : `Keşif: ${pick(THEMES, seed)} köşesi`,
      blurb: story.summary,
      page,
      itemId: page === 'audio' ? undefined : undefined,
      kind: page,
    }
  })
}

/** How many ms until next hour boundary */
export function msUntilNextHour(d = new Date()): number {
  const next = new Date(d)
  next.setMinutes(0, 0, 0)
  next.setHours(next.getHours() + 1)
  return next.getTime() - d.getTime()
}

export const DAY_SLOTS = [
  { id: 'morning', label: 'Sabah Işığı', emoji: '🌅', start: 6, end: 11 },
  { id: 'midday', label: 'Öğle Kıvılcımı', emoji: '☀️', start: 11, end: 15 },
  { id: 'afternoon', label: 'İkindi Macerası', emoji: '🌤️', start: 15, end: 19 },
  { id: 'evening', label: 'Akşam Yıldızları', emoji: '🌙', start: 19, end: 23 },
  { id: 'night', label: 'Gece Ninnisi', emoji: '😴', start: 23, end: 6 },
] as const

export function currentSlot(d = new Date()) {
  const h = d.getHours()
  for (const s of DAY_SLOTS) {
    if (s.id === 'night') {
      if (h >= 23 || h < 6) return s
    } else if (h >= s.start && h < s.end) return s
  }
  return DAY_SLOTS[0]
}

export function weeklyEvent(d = new Date()) {
  const day = d.getDay()
  const events = [
    { title: 'Pazar Masal Maratonu', emoji: '📖', page: 'audio' as PageId, blurb: '3 masal dinle, ekstra yıldız kap!' },
    { title: 'Pazartesi Beyin Günü', emoji: '🧠', page: 'activities' as PageId, blurb: 'Quiz + hafıza — haftaya güçlü başla.' },
    { title: 'Salı Sanat Atölyesi', emoji: '🎨', page: 'coloring' as PageId, blurb: 'Boyama + doodle günü.' },
    { title: 'Çarşamba Bilim Günü', emoji: '🔬', page: 'stem' as PageId, blurb: 'STEM kartlarını keşfet.' },
    { title: 'Perşembe Duygu Günü', emoji: '💛', page: 'feelings' as PageId, blurb: 'Check-in + sakinleşme.' },
    { title: 'Cuma Eğlence Gecesi', emoji: '🎡', page: 'fun' as PageId, blurb: 'Çark, bilmece, sticker!' },
    { title: 'Cumartesi Aile Günü', emoji: '👨‍👩‍👧', page: 'paths' as PageId, blurb: 'Öğrenme yolu + günlük.' },
  ]
  return events[day]
}

import { dayKey, factoryStory, hashSeed, pick } from '../engines/contentFactory'
import type { AgeGroup } from '../hooks/usePortalProfile'
import { getMood, type MoodId } from './lastVisit'
import type { PageId } from '../types/nav'

export interface SmartPick {
  id: string
  emoji: string
  title: string
  blurb: string
  page: PageId
  reason: string
}

const MOOD_PAGES: Record<MoodId, PageId[]> = {
  mutlu: ['fun', 'playground', 'activities'],
  sakin: ['audio', 'feelings', 'coloring'],
  meraklı: ['stem', 'world', 'playground'],
  yorgun: ['audio', 'feelings', 'rhymes'],
  cesur: ['heroes', 'create', 'live'],
}

const AGE_BIAS: Record<AgeGroup, PageId[]> = {
  '3-5': ['audio', 'coloring', 'playground', 'fun'],
  '6-8': ['activities', 'playground', 'stem', 'live'],
  '9-12': ['create', 'stem', 'world', 'playground'],
}

export function editorPicks(d = new Date()): SmartPick[] {
  const seed = hashSeed(dayKey(d), 'editor')
  const story = factoryStory(seed)
  const catalog: SmartPick[] = [
    {
      id: 'ed-story',
      emoji: story.emoji,
      title: story.title,
      blurb: story.summary,
      page: 'audio',
      reason: 'Editörün masalı',
    },
    {
      id: 'ed-live',
      emoji: '⚡',
      title: 'Canlı Arena saati',
      blurb: 'Saatlik görev ve gizemli kutu seni bekliyor.',
      page: 'live',
      reason: 'Bugünün ritmi',
    },
    {
      id: 'ed-feel',
      emoji: '💛',
      title: 'Duygu check-in',
      blurb: '2 dakikalık sakinleşme ve duygu radarı.',
      page: 'feelings',
      reason: 'Zihin sağlığı',
    },
    {
      id: 'ed-stem',
      emoji: '🔬',
      title: 'Mini bilim kartı',
      blurb: 'Ev malzemeleriyle merak kıvılcımı.',
      page: 'stem',
      reason: 'STEM seçkisi',
    },
    {
      id: 'ed-color',
      emoji: '🖍️',
      title: 'Günün boyaması',
      blurb: 'Sakin tempo, bol renk.',
      page: 'coloring',
      reason: 'Sanat molası',
    },
  ]
  // rotate order by day
  const start = seed % catalog.length
  return [...catalog.slice(start), ...catalog.slice(0, start)]
}

export function smartRecommendations(age: AgeGroup, interests: string[]): SmartPick[] {
  const mood = getMood()
  const seed = hashSeed(dayKey(), mood, age, interests.join(','))
  const pages = Array.from(
    new Set([...MOOD_PAGES[mood], ...AGE_BIAS[age], ...interestPages(interests)]),
  )
  const story = factoryStory(seed)
  return pages.slice(0, 6).map((page, i) => {
    const base = pick(
      [
        { emoji: '🎧', title: 'Sana özel masal', blurb: story.summary, page: 'audio' as PageId },
        { emoji: '🎮', title: 'Hızlı oyun turu', blurb: 'Quiz veya hafıza — 5 dk.', page: 'activities' as PageId },
        { emoji: '🗺️', title: 'Haritada bir durak', blurb: 'Yeni bir bölge keşfet.', page: 'world' as PageId },
        { emoji: '✨', title: 'Kısa AI hikaye', blurb: 'Kendi kahramanını yaz.', page: 'create' as PageId },
        { emoji: '🖍️', title: 'Renk molası', blurb: 'Bir sayfa boya, rahatla.', page: 'coloring' as PageId },
        { emoji: '🦸', title: 'Kahraman selamı', blurb: 'Cesaret ve dostluk.', page: 'heroes' as PageId },
      ],
      seed + i * 13,
    )
    return {
      id: `smart-${page}-${i}`,
      emoji: base.emoji,
      title: base.title,
      blurb: base.blurb,
      page,
      reason: reasonFor(page, mood, age),
    }
  })
}

function interestPages(interests: string[]): PageId[] {
  const map: Record<string, PageId> = {
    masal: 'audio',
    oyun: 'activities',
    boyama: 'coloring',
    uzay: 'world',
    hayvan: 'heroes',
    stem: 'stem',
    müzik: 'rhymes',
    duygu: 'feelings',
  }
  return interests.map((i) => map[i]).filter(Boolean) as PageId[]
}

function reasonFor(page: PageId, mood: MoodId, age: AgeGroup): string {
  if (MOOD_PAGES[mood].includes(page)) return `${mood} ruh haline uygun`
  if (AGE_BIAS[age].includes(page)) return `${age} yaş önerisi`
  return 'İlgi alanına yakın'
}

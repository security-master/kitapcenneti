export type ActivityKind =
  | 'listen'
  | 'color'
  | 'quiz'
  | 'memory'
  | 'rhyme'
  | 'hero'
  | 'story'
  | 'stem'
  | 'feel'
  | 'print'
  | 'blog'
  | 'cert'
  | 'bedtime'
  | 'favorite'
  | 'spin'
  | 'scramble'
  | 'speed'
  | 'doodle'
  | 'sticker'

export interface Badge {
  id: string
  emoji: string
  title: string
  description: string
  /** Total stars needed, or activity count key */
  requireStars?: number
  requireStreak?: number
  requireActivity?: ActivityKind
  requireActivityCount?: number
}

export const BADGES: Badge[] = [
  {
    id: 'first-star',
    emoji: '⭐',
    title: 'İlk Yıldız',
    description: 'İlk yıldızını kazandın!',
    requireStars: 1,
  },
  {
    id: 'star-collector',
    emoji: '🌟',
    title: 'Yıldız Avcısı',
    description: '10 yıldız topladın.',
    requireStars: 10,
  },
  {
    id: 'constellation',
    emoji: '✨',
    title: 'Takımyıldızı',
    description: '25 yıldız — gökyüzü senin!',
    requireStars: 25,
  },
  {
    id: 'streak-3',
    emoji: '🔥',
    title: '3 Gün Serisi',
    description: 'Üç gün üst üste görev yaptın.',
    requireStreak: 3,
  },
  {
    id: 'streak-7',
    emoji: '🏆',
    title: 'Haftalık Kahraman',
    description: '7 gün serisi — muhteşem!',
    requireStreak: 7,
  },
  {
    id: 'listener',
    emoji: '🎧',
    title: 'Masal Dinleyicisi',
    description: '3 sesli masal dinledin.',
    requireActivity: 'listen',
    requireActivityCount: 3,
  },
  {
    id: 'artist',
    emoji: '🖍️',
    title: 'Küçük Ressam',
    description: '3 boyama indirdin.',
    requireActivity: 'color',
    requireActivityCount: 3,
  },
  {
    id: 'storyteller',
    emoji: '📚',
    title: 'Masalcı',
    description: 'İlk AI hikayeni oluşturdun.',
    requireActivity: 'story',
    requireActivityCount: 1,
  },
  {
    id: 'gamer',
    emoji: '🎮',
    title: 'Oyun Ustası',
    description: 'Quiz veya hafıza oyununu bitirdin.',
    requireActivity: 'quiz',
    requireActivityCount: 1,
  },
  {
    id: 'heart',
    emoji: '💛',
    title: 'Duygu Dostu',
    description: 'Duygu check-in yaptın.',
    requireActivity: 'feel',
    requireActivityCount: 1,
  },
  {
    id: 'night-owl',
    emoji: '🌙',
    title: 'Yıldızlı Gece',
    description: 'Yatmadan önce modunu açtın.',
    requireActivity: 'bedtime',
    requireActivityCount: 1,
  },
  {
    id: 'spinner',
    emoji: '🎡',
    title: 'Şanslı Çarkçı',
    description: 'Sürpriz çarkını çevirdin.',
    requireActivity: 'spin',
    requireActivityCount: 1,
  },
  {
    id: 'artist-doodle',
    emoji: '🎨',
    title: 'Serbest Ressam',
    description: 'Doodle tahtasında çizdin.',
    requireActivity: 'doodle',
    requireActivityCount: 1,
  },
  {
    id: 'word-wizard',
    emoji: '🔤',
    title: 'Kelime Sihirbazı',
    description: 'Kelime karıştırmayı çözdün.',
    requireActivity: 'scramble',
    requireActivityCount: 1,
  },
]

/** Maps activity → matching daily quest id */
export const ACTIVITY_TO_QUEST: Partial<Record<ActivityKind, string>> = {
  listen: 'listen',
  color: 'color',
  quiz: 'quiz',
  memory: 'memory',
  rhyme: 'rhyme',
  hero: 'hero',
  story: 'story',
  stem: 'stem',
  feel: 'feel',
  print: 'print',
  blog: 'parent-read',
  cert: 'cert',
}

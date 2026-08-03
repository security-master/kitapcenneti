import type { ArtStyleInfo, CategoryInfo } from '../types'

export const CATEGORIES: CategoryInfo[] = [
  {
    id: 'personalized',
    title: 'Beni Masalda Gezdir',
    emoji: '🦸',
    description: 'İsmini yaz veya fotoğrafını yükle — sen kahraman ol!',
    gradient: 'linear-gradient(135deg, #FF6B9D 0%, #C44DFF 50%, #6B5BFF 100%)',
    samplePrompts: [
      'Ormanın derinliklerinde kaybolan bir macera',
      'Bulutların üstünde uçan sihirli bir yolculuk',
      'Deniz kızlarıyla dostluk kuran sualtı macerası',
      'Ejderha ile arkadaş olan cesur bir kahraman',
      'Yıldızların arasında kayıp gezegeni aramak',
    ],
    featured: true,
  },
  {
    id: 'adventure',
    title: 'Büyülü Maceralar',
    emoji: '🗺️',
    description: 'Gizli hazineler ve sihirli ormanlar seni bekliyor!',
    gradient: 'linear-gradient(135deg, #11998e 0%, #38ef7d 100%)',
    samplePrompts: [
      'Sihirli bir harita bulan cesur kaşifler',
      'Kayıp krallığı kurtaran minik kahramanlar',
      'Gökkuşağı köprüsünden geçen macera',
      'Konuşan ağaçların ormanında kaybolmak',
    ],
  },
  {
    id: 'animals',
    title: 'Hayvan Dostları',
    emoji: '🐻',
    description: 'Sevimli hayvanlarla dolu sıcak hikayeler!',
    gradient: 'linear-gradient(135deg, #f7971e 0%, #ffd200 100%)',
    samplePrompts: [
      'Ormanın en cesur tavşanı ve arkadaşları',
      'Kedilerin gizli şehrinde bir gece macerası',
      'Penguen ailesinin kutup yolculuğu',
      'Fil yavrusunun ilk günü okulda',
    ],
  },
  {
    id: 'space',
    title: 'Uzay Keşfi',
    emoji: '🚀',
    description: 'Yıldızlar arasında muhteşem bir yolculuk!',
    gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    samplePrompts: [
      'Mars\'ta yaşayan minik astronotlar',
      'Uzaylı dostlarla tanışan çocuklar',
      'Kayıp yıldızı arayan roket ekibi',
      'Ay\'da kurulan sihirli çiftlik',
    ],
  },
  {
    id: 'underwater',
    title: 'Deniz Altı',
    emoji: '🐠',
    description: 'Mercan resiflerinde renkli bir dünya!',
    gradient: 'linear-gradient(135deg, #2193b0 0%, #6dd5ed 100%)',
    samplePrompts: [
      'Deniz kızı ile arkadaş olan balıkçı çocuk',
      'Hazine sandığı arayan yunus sürüsü',
      'Mercan sarayında düzenlenen balo',
      'Ahtapotun renkli sanat atölyesi',
    ],
  },
  {
    id: 'fairy',
    title: 'Peri Masalları',
    emoji: '🧚',
    description: 'Periler, prensler ve sihirli kaleler!',
    gradient: 'linear-gradient(135deg, #ee9ca7 0%, #ffdde1 100%)',
    samplePrompts: [
      'Uyuyan prensesi uyandıran minik peri',
      'Sihirli değneği kaybeden peri kız',
      'Bulutlardaki peri okulunda ilk gün',
      'Ejdersiz kalede yaşayan prenses',
    ],
  },
  {
    id: 'dinosaurs',
    title: 'Dinozor Dünyası',
    emoji: '🦕',
    description: 'Tarih öncesi dev dostlarla macera!',
    gradient: 'linear-gradient(135deg, #56ab2f 0%, #a8e063 100%)',
    samplePrompts: [
      'Sevimli dinozor yavrusu ile arkadaşlık',
      'Volkan kraterinde gizli vadi keşfi',
      'T-Rex ile futbol maçı',
      'Dinozorların piknik günü',
    ],
  },
  {
    id: 'superhero',
    title: 'Süper Kahramanlar',
    emoji: '⚡',
    description: 'Süper güçlerle dolu heyecanlı hikayeler!',
    gradient: 'linear-gradient(135deg, #f12711 0%, #f5af19 100%)',
    samplePrompts: [
      'Gizli süper gücünü keşfeden çocuk',
      'Şehri kurtaran minik kahraman takımı',
      'Süper kahraman okulunda ilk ders',
      'Kötü kalpli robotu durduran cesaret',
    ],
  },
  {
    id: 'custom',
    title: 'Kendi Hikayeni Yaz',
    emoji: '✏️',
    description: 'Hayal gücünü serbest bırak, kendi masalını oluştur!',
    gradient: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
    samplePrompts: [
      'Bir gün her şeyin tersine döndüğü komik bir macera',
      'Konuşan ayakkabılarla şehir turu',
      'Bulut fabrikasında çalışan minik işçiler',
      'Zaman makinesiyle geçmişe yolculuk',
    ],
  },
]

export const ART_STYLES: ArtStyleInfo[] = [
  {
    id: 'watercolor',
    name: 'Sulu Boya',
    emoji: '🎨',
    promptSuffix: "beautiful soft watercolor children's book illustration, dreamy pastel colors, gentle brush strokes",
  },
  {
    id: 'cartoon',
    name: 'Çizgi Film',
    emoji: '📺',
    promptSuffix: "vibrant cartoon style children's book illustration, bold outlines, cheerful colors, Disney-like",
  },
  {
    id: 'pixar',
    name: '3D Pixar',
    emoji: '🎬',
    promptSuffix: "Pixar 3D animation style children's book illustration, cute rounded characters, cinematic lighting",
  },
  {
    id: 'anime',
    name: 'Anime',
    emoji: '🌸',
    promptSuffix: "kawaii anime children's book illustration, big expressive eyes, soft shading, Studio Ghibli inspired",
  },
  {
    id: 'storybook',
    name: 'Klasik Masal',
    emoji: '📖',
    promptSuffix: 'classic European fairy tale book illustration, ornate details, warm golden tones, storybook art',
  },
  {
    id: 'clay',
    name: 'Kil Animasyon',
    emoji: '🏺',
    promptSuffix: "claymation stop-motion style children's book illustration, textured clay figures, handmade feel",
  },
  {
    id: 'pastel',
    name: 'Pastel Rüya',
    emoji: '🌈',
    promptSuffix: "soft pastel children's book illustration, dreamy cotton candy colors, whimsical and magical",
  },
]

export const TEXT_MODELS = [
  { id: 'gpt-4o-mini' as const, name: 'Hızlı & Akıllı', emoji: '⚡', description: 'GPT-4o Mini — hızlı üretim' },
  { id: 'gpt-4o' as const, name: 'En Kaliteli', emoji: '💎', description: 'GPT-4o — en iyi hikaye kalitesi' },
  { id: 'claude-3-5-haiku-20241022' as const, name: 'Yaratıcı', emoji: '🎭', description: 'Claude Haiku — yaratıcı anlatım' },
]

export const IMAGE_PROVIDERS = [
  { id: 'pollinations' as const, name: 'Pollinations AI', emoji: '🆓', description: 'Tamamen ücretsiz, API anahtarı gerekmez' },
  { id: 'netlify-gemini' as const, name: 'Gemini (Netlify)', emoji: '✨', description: 'Netlify AI Gateway ile yüksek kalite' },
]

export const AGE_GROUPS = [
  { id: '3-5' as const, label: '3-5 yaş', emoji: '🐣' },
  { id: '6-8' as const, label: '6-8 yaş', emoji: '🌟' },
  { id: '9-12' as const, label: '9-12 yaş', emoji: '🚀' },
]

export const PAGE_COUNTS = [4, 6, 8]

export function getArtStyleSuffix(styleId: string): string {
  return ART_STYLES.find((s) => s.id === styleId)?.promptSuffix ?? ART_STYLES[0].promptSuffix
}

export function getCategoryInfo(id: string): CategoryInfo | undefined {
  return CATEGORIES.find((c) => c.id === id)
}

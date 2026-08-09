export interface Sticker {
  id: string
  emoji: string
  title: string
  hint: string
}

export const STICKERS: Sticker[] = [
  { id: 'star', emoji: '⭐', title: 'Parlak Yıldız', hint: 'Görev bitirerek kazan' },
  { id: 'rocket', emoji: '🚀', title: 'Mini Roket', hint: 'Sürpriz çarkından çıkabilir' },
  { id: 'dragon', emoji: '🐉', title: 'Nazik Ejderha', hint: 'Hikaye oluşturunca' },
  { id: 'unicorn', emoji: '🦄', title: 'Gökkuşağı Unicorn', hint: 'Çark veya favori' },
  { id: 'cat', emoji: '🐱', title: 'Meraklı Kedi', hint: 'Oyun oyna' },
  { id: 'fish', emoji: '🐠', title: 'Neşeli Balık', hint: 'Boyama indir' },
  { id: 'owl', emoji: '🦉', title: 'Bilge Baykuş', hint: 'Quiz bitir' },
  { id: 'fox', emoji: '🦊', title: 'Akıllı Tilki', hint: 'Hafıza oyunu' },
  { id: 'moon', emoji: '🌙', title: 'Yumuşak Ay', hint: 'Yatmadan önce modu' },
  { id: 'rainbow', emoji: '🌈', title: 'Gökkuşağı', hint: 'Duygu check-in' },
  { id: 'robot', emoji: '🤖', title: 'Dost Robot', hint: 'STEM deneyi' },
  { id: 'crown', emoji: '👑', title: 'Altın Taç', hint: 'Sürpriz çarkı jackpot' },
]

export const SPIN_REWARDS: {
  label: string
  emoji: string
  stars: number
  stickerId?: string
  page?: string
}[] = [
  { label: '+2 Yıldız', emoji: '⭐', stars: 2, stickerId: 'star' },
  { label: 'Sesli Masal', emoji: '🎧', stars: 1, page: 'audio' },
  { label: 'Boyama!', emoji: '🖍️', stars: 1, page: 'coloring', stickerId: 'fish' },
  { label: '+3 Yıldız', emoji: '🌟', stars: 3, stickerId: 'rocket' },
  { label: 'Oyun Zamanı', emoji: '🎮', stars: 1, page: 'activities', stickerId: 'cat' },
  { label: 'AI Hikaye', emoji: '✨', stars: 1, page: 'create', stickerId: 'dragon' },
  { label: 'Unicorn!', emoji: '🦄', stars: 2, stickerId: 'unicorn' },
  { label: 'JACKPOT', emoji: '👑', stars: 5, stickerId: 'crown' },
]

export const RIDDLES = [
  { q: 'Kanadı var, kuş değil; uçar ama tüy değil. Nedir?', a: 'Uçak ✈️' },
  { q: 'Gündüz gelir, gece kaçar; ısınır dünya. Nedir?', a: 'Güneş ☀️' },
  { q: 'Suda yaşar, konuşmaz; pulları parlar. Nedir?', a: 'Balık 🐠' },
  { q: 'Evde durur, zamanı söyler; tik tak eder. Nedir?', a: 'Saat ⏰' },
  { q: 'Uzun boynu vardır, yaprak yer. Nedir?', a: 'Zürafa 🦒' },
  { q: 'Gece gökyüzünde parlar, ama güneş değildir. Nedir?', a: 'Yıldız ⭐' },
]

export const JOKES = [
  'Öğretmen: “2 elma + 2 elma kaç eder?” Öğrenci: “Smoothie!” 🍎',
  'Neden kitaplar asla üşümez? Çünkü kapakları vardır! 📘',
  'Balık neden bilgisayar kullanamaz? Çünkü neti çok ıslak! 🐠',
  'Ay neden okula geç kaldı? Çünkü uzay trafiği vardı! 🚀',
  'Kalem neden koştu? Çünkü nokta peşindeydi! ✏️',
]

export const WHAT_NEXT: { emoji: string; title: string; page: string; blurb: string }[] = [
  { emoji: '🎧', title: 'Bir masal dinle', page: 'audio', blurb: '3 dakikalık sıcak bir hikaye' },
  { emoji: '🎮', title: 'Hızlı oyun oyna', page: 'activities', blurb: 'Beyin jimnastiği zamanı' },
  { emoji: '✨', title: 'Kendi masalını yaz', page: 'create', blurb: 'Sen kahraman ol' },
  { emoji: '🖍️', title: 'Boyama yap', page: 'coloring', blurb: 'Renkleri serbest bırak' },
  { emoji: '💛', title: 'Duygu seç', page: 'feelings', blurb: 'Bugün nasıl hissediyorsun?' },
  { emoji: '🔬', title: 'Mini deney', page: 'stem', blurb: 'Merakını gıdıkla' },
  { emoji: '🎨', title: 'Serbest çiz', page: 'fun', blurb: 'Doodle tahtasında çiz' },
  { emoji: '🦸', title: 'Kahraman tanı', page: 'heroes', blurb: 'Özgün karakterler' },
]

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
  { id: 'bear', emoji: '🐻', title: 'Bal Ayısı', hint: 'Masal dinle' },
  { id: 'panda', emoji: '🐼', title: 'Sakin Panda', hint: 'Nefes turu' },
  { id: 'lion', emoji: '🦁', title: 'Cesur Aslan', hint: 'Kahraman oku' },
  { id: 'frog', emoji: '🐸', title: 'Zıplayan Kurbağa', hint: 'Hız oyunu' },
  { id: 'butterfly', emoji: '🦋', title: 'Renkli Kelebek', hint: 'Boyama bitir' },
  { id: 'turtle', emoji: '🐢', title: 'Sabırlı Kaplumbağa', hint: 'Öğrenme yolu adımı' },
  { id: 'whale', emoji: '🐋', title: 'Dev Balina', hint: 'Dünya haritası' },
  { id: 'book', emoji: '📖', title: 'Sihirli Kitap', hint: 'Kütüphanede ara' },
  { id: 'paint', emoji: '🎨', title: 'Palet', hint: 'Doodle çiz' },
  { id: 'medal', emoji: '🏅', title: 'Bronz Madalya', hint: '3 günlük seri' },
  { id: 'spark', emoji: '✨', title: 'Kıvılcım', hint: 'AI hikaye bitir' },
  { id: 'heart', emoji: '💛', title: 'Altın Kalp', hint: 'Aile günlüğü kaydı' },
  { id: 'compass', emoji: '🧭', title: 'Pusula', hint: 'Koleksiyon keşfet' },
  { id: 'gift', emoji: '🎁', title: 'Sürpriz Kutu', hint: 'Ücretsiz paket aç' },
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
  { label: 'Dünya Haritası', emoji: '🗺️', stars: 1, page: 'world', stickerId: 'compass' },
  { label: 'Kütüphane', emoji: '📚', stars: 1, page: 'library', stickerId: 'book' },
  { label: 'JACKPOT', emoji: '👑', stars: 5, stickerId: 'crown' },
]

export const RIDDLES = [
  { q: 'Kanadı var, kuş değil; uçar ama tüy değil. Nedir?', a: 'Uçak ✈️' },
  { q: 'Gündüz gelir, gece kaçar; ısınır dünya. Nedir?', a: 'Güneş ☀️' },
  { q: 'Suda yaşar, konuşmaz; pulları parlar. Nedir?', a: 'Balık 🐠' },
  { q: 'Evde durur, zamanı söyler; tik tak eder. Nedir?', a: 'Saat ⏰' },
  { q: 'Uzun boynu vardır, yaprak yer. Nedir?', a: 'Zürafa 🦒' },
  { q: 'Gece gökyüzünde parlar, ama güneş değildir. Nedir?', a: 'Yıldız ⭐' },
  { q: 'Sayfaları vardır, hikâye anlatır. Nedir?', a: 'Kitap 📖' },
  { q: 'Yaşar ormanda, bal sever. Nedir?', a: 'Ayı 🐻' },
  { q: 'Yuvarlaktır, ayakta durmaz; çocuklar sever. Nedir?', a: 'Top ⚽' },
  { q: 'Kışın yağar, beyaz ve soğuk. Nedir?', a: 'Kar ❄️' },
  { q: 'Gökyüzünde beyaz yastık gibi. Nedir?', a: 'Bulut ☁️' },
  { q: 'Sarıdır, kabuğu soyulur. Nedir?', a: 'Muz 🍌' },
  { q: 'Miyavlar, fare sever. Nedir?', a: 'Kedi 🐱' },
  { q: 'Ray üzerinde gider, ıslık çalar. Nedir?', a: 'Tren 🚂' },
  { q: 'Denizde yüzer, dümeni vardır. Nedir?', a: 'Gemi 🚢' },
  { q: 'Çiçekten bal yapar, vızıldar. Nedir?', a: 'Arı 🐝' },
  { q: 'Gece çıkar, bazen hilal olur. Nedir?', a: 'Ay 🌙' },
  { q: 'Yağmurdan sonra renkli köprü. Nedir?', a: 'Gökkuşağı 🌈' },
  { q: 'Okulda yazı yazılır, tahta vardır. Nedir?', a: 'Sınıf 🎒' },
  { q: 'Küçüktür, delik kazar, toprağı sever. Nedir?', a: 'Karınca 🐜' },
  { q: 'Uçar, renkli kanatları vardır; çiçek sever. Nedir?', a: 'Kelebek 🦋' },
  { q: 'İçinde yıldızlar, gezegenler vardır. Nedir?', a: 'Uzay 🚀' },
]

export const JOKES = [
  'Öğretmen: “2 elma + 2 elma kaç eder?” Öğrenci: “Smoothie!” 🍎',
  'Neden kitaplar asla üşümez? Çünkü kapakları vardır! 📘',
  'Balık neden bilgisayar kullanamaz? Çünkü neti çok ıslak! 🐠',
  'Ay neden okula geç kaldı? Çünkü uzay trafiği vardı! 🚀',
  'Kalem neden koştu? Çünkü nokta peşindeydi! ✏️',
  'Bulut neden ağladı? Çünkü yağmur şakası yaptılar! ☁️',
  'Matematik kitabı neden üzgündü? Çünkü çok problemi vardı! ➕',
  'Deniz neden tuzlu? Çünkü balıklar fıkra anlatınca ağladı! 🌊',
  'Saat neden geç kaldı? Çünkü zamanı kaybetti! ⏰',
  'Kedi neden bilgisayar başında? Çünkü fare yakalamaya çalışıyor! 🖱️',
  'Neden ayakkabılar okul sevmez? Çünkü bağcıkları dolaşıyor! 👟',
  'Zebra neden partiye gitmedi? Çünkü siyah-beyaz davetiye alamadı! 🦓',
  'Muz neden hastaneye gitti? Çünkü kendini soydu! 🍌',
  'Karınca neden spor yapar? Çünkü formda kalmak ister! 🐜',
  'Neden yıldızlar gece çıkar? Çünkü gündüz güneş sahne alır! ⭐',
  'Robot neden gülümsedi? Çünkü bataryası doluydu! 🤖',
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
  { emoji: '🗺️', title: 'Haritada gez', page: 'world', blurb: 'Temalı bölgelere uğra' },
  { emoji: '📚', title: 'Kütüphaneyi aç', page: 'library', blurb: 'Tüm içerikler bir arada' },
  { emoji: '🧭', title: 'Koleksiyon seç', page: 'discover', blurb: 'Hazır demetler seni bekliyor' },
  { emoji: '🛤️', title: 'Yoluna bak', page: 'paths', blurb: 'Yaşına özel program' },
]

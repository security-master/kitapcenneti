import type { PageId } from '../types/nav'

export interface Quest {
  id: string
  title: string
  emoji: string
  stars: number
  minutes: number
  area: string
  link: PageId
  hint: string
}

/** Haftanın gününe göre dönen görev havuzu */
const QUEST_POOL: Quest[] = [
  { id: 'listen', title: 'Bir sesli masal dinle', emoji: '🎧', stars: 2, minutes: 5, area: 'Okuma', link: 'audio', hint: 'Sesli Masallar’dan birini seç ve dinle.' },
  { id: 'color', title: 'Bir boyama sayfası boya', emoji: '🖍️', stars: 2, minutes: 15, area: 'Sanat', link: 'coloring', hint: 'PDF indir veya ekranda bakarak boya.' },
  { id: 'quiz', title: 'Mini quiz çöz', emoji: '❓', stars: 2, minutes: 5, area: 'Bilgi', link: 'activities', hint: 'Oyunlar → Mini Quiz.' },
  { id: 'memory', title: 'Hafıza oyununu bitir', emoji: '🧠', stars: 3, minutes: 8, area: 'Oyun', link: 'activities', hint: 'Tüm çiftleri bul.' },
  { id: 'rhyme', title: 'Bir tekerleme ezberle', emoji: '🎵', stars: 2, minutes: 5, area: 'Dil', link: 'rhymes', hint: 'Şarkılar bölümünden birini sesli oku.' },
  { id: 'hero', title: 'Bir kahraman hikayesi oku', emoji: '🦸', stars: 2, minutes: 5, area: 'Okuma', link: 'heroes', hint: 'Özgün kahramanlardan birini seç.' },
  { id: 'story', title: 'AI ile kısa hikaye yap', emoji: '✨', stars: 3, minutes: 10, area: 'Yaratıcılık', link: 'create', hint: '4 sayfalık bir masal yeterli.' },
  { id: 'stem', title: 'Bir bilim kartı dene', emoji: '🔬', stars: 2, minutes: 10, area: 'STEM', link: 'stem', hint: 'Evde güvenli mini deney.' },
  { id: 'feel', title: 'Duygu check-in yap', emoji: '💛', stars: 1, minutes: 3, area: 'Duygu', link: 'feelings', hint: 'Bugün nasıl hissettiğini seç.' },
  { id: 'print', title: 'Bir çıktı yazdır', emoji: '🖨️', stars: 2, minutes: 10, area: 'Ödev', link: 'printables', hint: 'Çalışma kağıdı veya boyama.' },
  { id: 'parent-read', title: 'Aile blogundan 1 yazı oku', emoji: '📝', stars: 1, minutes: 5, area: 'Aile', link: 'blog', hint: 'Ebeveynlerle birlikte.' },
  { id: 'cert', title: 'Bugünün sertifikasını indir', emoji: '🏆', stars: 2, minutes: 3, area: 'Ödül', link: 'certificates', hint: 'Görevleri bitince ödülünü al.' },
  { id: 'fun-spin', title: 'Eğlence çarkını çevir', emoji: '🎡', stars: 1, minutes: 5, area: 'Eğlence', link: 'fun', hint: 'Çarktan gelen kısa ödülü yap.' },
  { id: 'fun-doodle', title: '2 dakikalık doodle çiz', emoji: '✏️', stars: 1, minutes: 5, area: 'Sanat', link: 'fun', hint: 'Eğlence Bahçesi’nde serbest çiz.' },
  { id: 'listen-sleep', title: 'Uyku masalı dinle', emoji: '🌙', stars: 2, minutes: 5, area: 'Okuma', link: 'audio', hint: 'Sakin temalı bir masal seç.' },
  { id: 'listen-nature', title: 'Doğa temalı masal dinle', emoji: '🌿', stars: 2, minutes: 5, area: 'Okuma', link: 'audio', hint: 'Orman veya deniz masalı dene.' },
  { id: 'color-nature', title: 'Doğa sayfası boya', emoji: '🍃', stars: 2, minutes: 15, area: 'Sanat', link: 'coloring', hint: 'Yeşil ve mavi tonlarla oyna.' },
  { id: 'color-hero', title: 'Kahramanı renklendir', emoji: '🦸', stars: 2, minutes: 15, area: 'Sanat', link: 'coloring', hint: 'Sevdiğin kahramana renk ver.' },
  { id: 'rhyme-clap', title: 'Tekerlemeyi tempoyla söyle', emoji: '👏', stars: 2, minutes: 5, area: 'Dil', link: 'rhymes', hint: 'Ellerinle ritim tut.' },
  { id: 'hero-value', title: 'Kahramanın değerini bul', emoji: '💎', stars: 2, minutes: 6, area: 'Değerler', link: 'heroes', hint: 'Cesaret, yardım, paylaşım… hangisi?' },
  { id: 'create-4page', title: '4 sayfalık masal bitir', emoji: '📘', stars: 3, minutes: 15, area: 'Yaratıcılık', link: 'create', hint: 'Kahraman + sorun + çözüm yaz.' },
  { id: 'create-ending', title: 'Farklı bir son uydur', emoji: '🔀', stars: 2, minutes: 10, area: 'Yaratıcılık', link: 'create', hint: 'Sevdiğin masalın sonunu değiştir.' },
  { id: 'stem-observe', title: 'Deney gözlemi yaz', emoji: '🔎', stars: 2, minutes: 12, area: 'STEM', link: 'stem', hint: 'Ne sandın? Ne oldu? Neden?' },
  { id: 'stem-kitchen', title: 'Mutfak bilimi dene', emoji: '🍋', stars: 3, minutes: 15, area: 'STEM', link: 'stem', hint: 'Yetişkinle güvenli bir kart seç.' },
  { id: 'feel-breath', title: '3 nefes sakinleş', emoji: '🌬️', stars: 1, minutes: 3, area: 'Duygu', link: 'feelings', hint: 'Check-in sonrası nefes turu.' },
  { id: 'feel-name3', title: '3 duygu adı söyle', emoji: '💬', stars: 1, minutes: 4, area: 'Duygu', link: 'feelings', hint: 'Mutlu/üzgün dışında kelimeler dene.' },
  { id: 'print-plan', title: 'Haftalık plan yazdır', emoji: '📅', stars: 2, minutes: 8, area: 'Ödev', link: 'printables', hint: 'Buzdolabına asılacak bir sayfa.' },
  { id: 'quiz-hard', title: 'Zor sorulu quiz dene', emoji: '🧩', stars: 3, minutes: 8, area: 'Bilgi', link: 'activities', hint: 'Bilemediğin soruyu öğrenme say.' },
  { id: 'memory-fast', title: 'Hafızayı daha hızlı bitir', emoji: '⚡', stars: 3, minutes: 8, area: 'Oyun', link: 'activities', hint: 'Dünkinden bir tur daha az deneme.' },
  { id: 'blog-sleep', title: 'Uyku yazısını ebeveynle oku', emoji: '😴', stars: 1, minutes: 6, area: 'Aile', link: 'blog', hint: 'Akşam rutini için 1 yazı.' },
  { id: 'fun-sticker', title: 'Sticker köşesini ziyaret et', emoji: '🌟', stars: 1, minutes: 5, area: 'Eğlence', link: 'fun', hint: 'Bugünün çıkartmasını seç.' },
  { id: 'cert-share', title: 'Sertifikanı aileye göster', emoji: '🎉', stars: 2, minutes: 3, area: 'Ödül', link: 'certificates', hint: 'Alkış + buzdolabı sergisi.' },
]

export function getDailyQuests(date = new Date()): Quest[] {
  const day = Math.floor(date.getTime() / 86400000)
  const picks: Quest[] = []
  for (let i = 0; i < 5; i++) {
    picks.push(QUEST_POOL[(day + i * 3) % QUEST_POOL.length])
  }
  // unique by id
  const seen = new Set<string>()
  return picks.filter((q) => {
    if (seen.has(q.id)) return false
    seen.add(q.id)
    return true
  }).slice(0, 5)
}

export function todayKey(date = new Date()): string {
  return date.toISOString().slice(0, 10)
}

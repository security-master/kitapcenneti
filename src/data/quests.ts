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
  { id: 'lib-browse', title: 'Kütüphanede 3 içerik gez', emoji: '📚', stars: 2, minutes: 8, area: 'Keşif', link: 'library', hint: 'Filtreyle masal veya STEM seç.' },
  { id: 'lib-search', title: 'Kütüphanede bir konu ara', emoji: '🔎', stars: 1, minutes: 5, area: 'Keşif', link: 'search', hint: '“uzay” veya “uyku” yaz.' },
  { id: 'world-visit', title: 'Dünya haritasında 1 bölge aç', emoji: '🗺️', stars: 2, minutes: 6, area: 'Keşif', link: 'world', hint: 'Bir bölgeye dokunup bağlantıya git.' },
  { id: 'world-two', title: 'İki farklı bölgeyi ziyaret et', emoji: '🌍', stars: 3, minutes: 10, area: 'Keşif', link: 'world', hint: 'Orman + uzay gibi iki tema seç.' },
  { id: 'discover-one', title: 'Bir koleksiyon incele', emoji: '🧭', stars: 2, minutes: 7, area: 'Keşif', link: 'discover', hint: 'Uyku veya yağmurlu gün sepeti dene.' },
  { id: 'path-step', title: 'Öğrenme yolunda 1 adım başlat', emoji: '🛤️', stars: 3, minutes: 12, area: 'Eğitim', link: 'paths', hint: 'Yaşına uygun yolu seç.' },
  { id: 'path-browse', title: '3 öğrenme yoluna bak', emoji: '📍', stars: 1, minutes: 5, area: 'Eğitim', link: 'paths', hint: 'Hangisi seni çeker?' },
  { id: 'journal-add', title: 'Gelişim günlüğüne kayıt ekle', emoji: '📔', stars: 2, minutes: 5, area: 'Aile', link: 'journal', hint: 'Bugün ne yaptığını yaz.' },
  { id: 'calendar-plan', title: 'Haftalık plana göz at', emoji: '📅', stars: 1, minutes: 5, area: 'Plan', link: 'calendar', hint: 'Bugünün slotunu aç.' },
  { id: 'calendar-save', title: 'Haftalık planı kaydet', emoji: '✅', stars: 2, minutes: 4, area: 'Plan', link: 'calendar', hint: 'Ailece buzdolabına asılacak.' },
  { id: 'teacher-print', title: 'Öğretmen etkinliği yazdır', emoji: '👩‍🏫', stars: 2, minutes: 10, area: 'Sınıf', link: 'teachers', hint: 'Sabah çemberi veya STEM kartı.' },
  { id: 'shop-open', title: 'Ücretsiz bir paket aç', emoji: '🎁', stars: 2, minutes: 6, area: 'Paket', link: 'shop', hint: 'İlgili bölüme ışınlan.' },
  { id: 'profile-set', title: 'Profilini güncelle', emoji: '🧒', stars: 1, minutes: 5, area: 'Profil', link: 'profile', hint: 'İsim, avatar veya yaş grubu.' },
  { id: 'portal-dash', title: 'Portal ana paneli ziyaret et', emoji: '🏛️', stars: 1, minutes: 3, area: 'Portal', link: 'portal', hint: 'Bugünün kartlarına bak.' },
  { id: 'parents-tip', title: 'Aile köşesinden 1 ipucu oku', emoji: '🏡', stars: 1, minutes: 5, area: 'Aile', link: 'parents', hint: 'Ebeveynle birlikte.' },
  { id: 'scramble', title: 'Kelime karıştırma oyna', emoji: '🔤', stars: 2, minutes: 6, area: 'Oyun', link: 'activities', hint: 'Harfleri doğru sıraya koy.' },
  { id: 'speed-catch', title: 'Hızlı yakalama oyna', emoji: '🎯', stars: 2, minutes: 5, area: 'Oyun', link: 'activities', hint: 'Doğru emojileri yakala.' },
  { id: 'riddle', title: 'Bir bilmece çöz', emoji: '🧩', stars: 1, minutes: 4, area: 'Eğlence', link: 'fun', hint: 'Eğlence Bahçesi bilmeceleri.' },
  { id: 'joke', title: 'Bir fıkra oku ve anlat', emoji: '😄', stars: 1, minutes: 3, area: 'Eğlence', link: 'fun', hint: 'Aileye anlatınca yıldızını hak et.' },
  { id: 'lib-audio', title: 'Kütüphaneden bir masal seç', emoji: '📖', stars: 2, minutes: 6, area: 'Keşif', link: 'library', hint: 'Masal filtresini aç.' },
  { id: 'discover-sleep', title: 'Uyku koleksiyonunu aç', emoji: '🌙', stars: 2, minutes: 6, area: 'Keşif', link: 'discover', hint: 'Akşam rutini sepeti.' },
  { id: 'shop-stem', title: 'STEM paketini ücretsiz aç', emoji: '🧪', stars: 2, minutes: 7, area: 'Paket', link: 'shop', hint: 'Ev laboratuvarı paketi.' },
  { id: 'journal-feel', title: 'Günlüğe bir duygu yaz', emoji: '💛', stars: 1, minutes: 4, area: 'Aile', link: 'journal', hint: 'Bugün nasıl hissettin?' },
  { id: 'teacher-circle', title: 'Sabah çemberi planını incele', emoji: '🌅', stars: 2, minutes: 8, area: 'Sınıf', link: 'teachers', hint: 'Yazdırıp sınıfta dene.' },
  { id: 'path-week', title: 'Yolundaki haftalık adımlara bak', emoji: '🗓️', stars: 2, minutes: 8, area: 'Eğitim', link: 'paths', hint: 'Bu haftanın 2 adımını seç.' },
  { id: 'world-art', title: 'Sanat bölgesini ziyaret et', emoji: '🎨', stars: 2, minutes: 6, area: 'Keşif', link: 'world', hint: 'Gökkuşağı Köyü veya benzeri.' },
  { id: 'profile-goal', title: 'Haftalık hedefini yaz', emoji: '🎯', stars: 1, minutes: 4, area: 'Profil', link: 'profile', hint: 'Örn. her gün 1 masal.' },
  { id: 'search-stem', title: 'Aramada “STEM” yaz', emoji: '🔍', stars: 1, minutes: 3, area: 'Keşif', link: 'search', hint: 'Sonuçlardan birine tıkla.' },
  { id: 'calendar-today', title: 'Bugünün plan slotunu aç', emoji: '📌', stars: 1, minutes: 3, area: 'Plan', link: 'calendar', hint: 'İlk bağlantıya git.' },
  { id: 'print-feel', title: 'Duygu kartı paketini yazdır', emoji: '🖨️', stars: 2, minutes: 8, area: 'Ödev', link: 'printables', hint: 'Feelings PDF.' },
  { id: 'hero-two', title: 'İki kahraman hikâyesi oku', emoji: '🦸', stars: 3, minutes: 10, area: 'Okuma', link: 'heroes', hint: 'Değerlerini karşılaştır.' },
]

export function getDailyQuests(date = new Date()): Quest[] {
  const day = Math.floor(date.getTime() / 86400000)
  const picks: Quest[] = []
  for (let i = 0; i < 5; i++) {
    picks.push(QUEST_POOL[(day + i * 3) % QUEST_POOL.length])
  }
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

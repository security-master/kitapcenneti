import type { PageId } from '../types/nav'

export interface Printable {
  id: string
  title: string
  emoji: string
  age: string
  category: string
  link: PageId
  description: string
}

export const PRINTABLES: Printable[] = [
  { id: 'boyama-pack', title: 'Boyama paketi', emoji: '🖍️', age: '3+', category: 'Sanat', link: 'coloring', description: '30 telifsiz boyama sayfası — PDF indir' },
  { id: 'sertifika', title: 'Başarı sertifikası', emoji: '🏆', age: '3+', category: 'Ödül', link: 'certificates', description: 'İsme özel PDF ödül belgesi' },
  { id: 'gorev', title: 'Günlük görev listesi', emoji: '⭐', age: '4+', category: 'Ödev', link: 'quests', description: 'Bugünün görevlerini tek tıkla PDF indir' },
  { id: 'stem', title: 'STEM deney kartı', emoji: '🔬', age: '4+', category: 'Bilim', link: 'stem', description: 'Ev malzemeleriyle mini deney' },
  { id: 'duygu', title: 'Duygu kartları', emoji: '💛', age: '3+', category: 'Duygu', link: 'feelings', description: 'Yazdırılabilir duygu kartı paketi (PDF)' },
  { id: 'tekerleme', title: 'Tekerleme sayfası', emoji: '🎵', age: '3+', category: 'Dil', link: 'rhymes', description: 'Ezber ve sesli okuma' },
  { id: 'kahraman', title: 'Kahraman dosyası', emoji: '🦸', age: '5+', category: 'Okuma', link: 'heroes', description: 'Özgün karakter biyografileri' },
  { id: 'aile', title: 'Aile rehberi', emoji: '👨‍👩‍👧', age: 'Ebeveyn', category: 'Aile', link: 'blog', description: 'Ebeveyn blog yazıları' },
  { id: 'gunluk', title: 'Günlük sayfası', emoji: '📓', age: '5+', category: 'Yazma', link: 'journal', description: 'Duygu ve çizim günlüğü şablonu' },
  { id: 'takvim', title: 'Haftalık takvim', emoji: '📅', age: '4+', category: 'Plan', link: 'calendar', description: 'Okuma ve oyun günleri planı' },
  { id: 'kutuphane', title: 'Masal listesi', emoji: '📚', age: '3+', category: 'Okuma', link: 'library', description: 'Kütüphane masalları kontrol listesi' },
  { id: 'yol-haritasi', title: 'Öğrenme yolu', emoji: '🛤️', age: '6+', category: 'Eğitim', link: 'paths', description: 'Adım adım beceri planı' },
  { id: 'ogretmen', title: 'Sınıf etkinliği', emoji: '🍎', age: 'Öğretmen', category: 'Eğitim', link: 'teachers', description: 'Sınıfta kullanılabilir fikirler' },
  { id: 'kesfet-kart', title: 'Keşif kartları', emoji: '🔍', age: '5+', category: 'Bilim', link: 'discover', description: 'Haftalık merak konuları' },
  { id: 'dunya-haritasi', title: 'Dünya haritası', emoji: '🌍', age: '6+', category: 'Coğrafya', link: 'world', description: 'Bölgeler ve doğa notları' },
  { id: 'profil-rozet', title: 'Rozet sayfası', emoji: '🏅', age: '4+', category: 'Ödül', link: 'profile', description: 'Yıldız ve ilerleme özeti' },
  { id: 'dukkan-liste', title: 'Ödül listesi', emoji: '🛒', age: '5+', category: 'Motivasyon', link: 'shop', description: 'Yıldızla açılan ödüller' },
  { id: 'kelime-oyunu', title: 'Kelime avı', emoji: '🔤', age: '6+', category: 'Dil', link: 'activities', description: 'Karışık harf oyunu sayfası' },
  { id: 'nefes-karti', title: 'Sakin nefes kartı', emoji: '🌬️', age: '4+', category: 'Duygu', link: 'feelings', description: '4-4 nefes egzersizi' },
  { id: 'aile-sozlesme', title: 'Aile ekran sözleşmesi', emoji: '🤝', age: 'Ebeveyn', category: 'Aile', link: 'parents', description: 'Birlikte imzalanacak kurallar' },
  { id: 'masal-kahraman', title: 'Kahraman kartları', emoji: '🃏', age: '4+', category: 'Okuma', link: 'heroes', description: '12 özgün kahraman özeti' },
  { id: 'bilmece', title: 'Bilmece sayfası', emoji: '🧩', age: '5+', category: 'Eğlence', link: 'fun', description: 'Yazdırılabilir bilmeceler' },
]

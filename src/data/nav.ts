import type { NavItem, PageId } from '../types/nav'

/** Ana menü — çok kalabalık olmasın */
export const NAV_ITEMS: NavItem[] = [
  { id: 'home', label: 'Ana Sayfa', emoji: '🏠', short: 'Ana' },
  { id: 'quests', label: 'Günlük Görev', emoji: '⭐', short: 'Görev' },
  { id: 'audio', label: 'Sesli Masallar', emoji: '🎧', short: 'Ses' },
  { id: 'coloring', label: 'Boyama', emoji: '🖍️', short: 'Boya' },
  { id: 'activities', label: 'Oyunlar', emoji: '🎮', short: 'Oyun' },
  { id: 'fun', label: 'Eğlence', emoji: '🎡', short: 'Eğlence' },
  { id: 'create', label: 'AI Hikaye', emoji: '✨', short: 'AI' },
]

export const MORE_LINKS: { id: PageId; label: string; emoji: string }[] = [
  { id: 'heroes', label: 'Kahramanlar', emoji: '🦸' },
  { id: 'rhymes', label: 'Şarkılar', emoji: '🎵' },
  { id: 'stem', label: 'STEM & Bilim', emoji: '🔬' },
  { id: 'feelings', label: 'Duygular', emoji: '💛' },
  { id: 'blog', label: 'Aile Blog', emoji: '📝' },
  { id: 'parents', label: 'Aile Köşesi', emoji: '👨‍👩‍👧' },
  { id: 'printables', label: 'Çıktılar', emoji: '🖨️' },
  { id: 'certificates', label: 'Sertifika', emoji: '🏆' },
  { id: 'about', label: 'Hakkımızda', emoji: 'ℹ️' },
  { id: 'contact', label: 'İletişim', emoji: '✉️' },
]

export const FEATURE_CARDS = [
  {
    id: 'quests' as const,
    title: 'Günlük Görevler',
    emoji: '⭐',
    desc: 'Her gün yeni mini ödevler — yıldız topla, seriyi bozma!',
    gradient: 'linear-gradient(135deg, #f7971e, #ffd200)',
  },
  {
    id: 'create' as const,
    title: 'AI Hikaye Kitabı',
    emoji: '✨',
    desc: 'İsmini yaz, kahraman ol — yapay zeka ile resimli masal oluştur.',
    gradient: 'linear-gradient(135deg, #FF6B9D, #C44DFF)',
  },
  {
    id: 'audio' as const,
    title: 'Sesli Masallar',
    emoji: '🎧',
    desc: 'Uykudan önce dinlenecek sıcak masallar. Tek tıkla dinle.',
    gradient: 'linear-gradient(135deg, #667eea, #764ba2)',
  },
  {
    id: 'coloring' as const,
    title: 'Boyama Sayfaları',
    emoji: '🖍️',
    desc: 'Telifsiz PDF boyama sayfaları — yazdır, boya, paylaş.',
    gradient: 'linear-gradient(135deg, #11998e, #38ef7d)',
  },
  {
    id: 'stem' as const,
    title: 'STEM & Bilim',
    emoji: '🔬',
    desc: 'Evde yapılabilecek mini deneyler ve merak soruları.',
    gradient: 'linear-gradient(135deg, #2193b0, #6dd5ed)',
  },
  {
    id: 'feelings' as const,
    title: 'Duygu Köşesi',
    emoji: '💛',
    desc: 'Bugün nasıl hissediyorsun? Empati ve sakinleşme kartları.',
    gradient: 'linear-gradient(135deg, #ee9ca7, #ffdde1)',
  },
  {
    id: 'blog' as const,
    title: 'Aile Blog',
    emoji: '📝',
    desc: 'Ebeveynler için okuma, rutin ve ekran rehberleri.',
    gradient: 'linear-gradient(135deg, #a8edea, #fed6e3)',
  },
  {
    id: 'activities' as const,
    title: 'Oyun Salonu',
    emoji: '🎮',
    desc: 'Hafıza, quiz, kelime karıştırma ve hızlı yakalama.',
    gradient: 'linear-gradient(135deg, #f12711, #f5af19)',
  },
  {
    id: 'fun' as const,
    title: 'Eğlence Bahçesi',
    emoji: '🎡',
    desc: 'Sürpriz çarkı, doodle, sticker albümü ve bilmeceler.',
    gradient: 'linear-gradient(135deg, #00b09b, #96c93d)',
  },
]

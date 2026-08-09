import type { NavItem } from '../types/nav'

export const NAV_ITEMS: NavItem[] = [
  { id: 'home', label: 'Ana Sayfa', emoji: '🏠', short: 'Ana' },
  { id: 'create', label: 'AI Hikaye', emoji: '✨', short: 'AI' },
  { id: 'audio', label: 'Sesli Masallar', emoji: '🎧', short: 'Ses' },
  { id: 'coloring', label: 'Boyama', emoji: '🖍️', short: 'Boya' },
  { id: 'heroes', label: 'Kahramanlar', emoji: '🦸', short: 'Kahraman' },
  { id: 'activities', label: 'Oyunlar', emoji: '🎮', short: 'Oyun' },
  { id: 'rhymes', label: 'Şarkılar', emoji: '🎵', short: 'Şarkı' },
  { id: 'certificates', label: 'Sertifikalar', emoji: '🏆', short: 'Ödül' },
  { id: 'parents', label: 'Aile Köşesi', emoji: '👨‍👩‍👧', short: 'Aile' },
]

export const FEATURE_CARDS = [
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
    gradient: 'linear-gradient(135deg, #f7971e, #ffd200)',
  },
  {
    id: 'heroes' as const,
    title: 'Özgün Kahramanlar',
    emoji: '🦸',
    desc: 'Telifsiz, tamamen özgün süper kahramanlar ve maceraları.',
    gradient: 'linear-gradient(135deg, #f12711, #f5af19)',
  },
  {
    id: 'activities' as const,
    title: 'Eğitici Oyunlar',
    emoji: '🎮',
    desc: 'Hafıza, bulmaca ve mini quizlerle eğlenerek öğren.',
    gradient: 'linear-gradient(135deg, #11998e, #38ef7d)',
  },
  {
    id: 'rhymes' as const,
    title: 'Şarkı & Tekerleme',
    emoji: '🎵',
    desc: 'Klasik tekerlemeler ve çocuk şarkıları — sesli okut.',
    gradient: 'linear-gradient(135deg, #ee9ca7, #ffdde1)',
  },
  {
    id: 'certificates' as const,
    title: 'Başarı Sertifikası',
    emoji: '🏆',
    desc: 'Okuma ve boyama başarıları için PDF ödül sertifikası.',
    gradient: 'linear-gradient(135deg, #56ab2f, #a8e063)',
  },
  {
    id: 'parents' as const,
    title: 'Aile Köşesi',
    emoji: '👨‍👩‍👧',
    desc: 'Yaş rehberi, ekran süresi ipuçları ve ebeveyn önerileri.',
    gradient: 'linear-gradient(135deg, #2193b0, #6dd5ed)',
  },
]

import type { NavItem, PageId, PortalMode } from '../types/nav'

export const KIDS_NAV: NavItem[] = [
  { id: 'portal', label: 'Portal', emoji: '🏛️', short: 'Portal', mode: 'kids' },
  { id: 'quests', label: 'Görevler', emoji: '⭐', short: 'Görev', mode: 'kids' },
  { id: 'library', label: 'Kütüphane', emoji: '📚', short: 'Kütüphane', mode: 'kids' },
  { id: 'audio', label: 'Masallar', emoji: '🎧', short: 'Masal', mode: 'kids' },
  { id: 'activities', label: 'Oyunlar', emoji: '🎮', short: 'Oyun', mode: 'kids' },
  { id: 'fun', label: 'Eğlence', emoji: '🎡', short: 'Eğlence', mode: 'kids' },
  { id: 'create', label: 'AI Hikaye', emoji: '✨', short: 'AI', mode: 'kids' },
  { id: 'world', label: 'Dünya Haritası', emoji: '🗺️', short: 'Harita', mode: 'kids' },
]

export const PARENT_NAV: NavItem[] = [
  { id: 'portal', label: 'Aile Paneli', emoji: '👨‍👩‍👧', short: 'Panel', mode: 'parent' },
  { id: 'parents', label: 'Aile Köşesi', emoji: '🏡', short: 'Aile', mode: 'parent' },
  { id: 'blog', label: 'Blog', emoji: '📝', short: 'Blog', mode: 'parent' },
  { id: 'paths', label: 'Öğrenme Yolları', emoji: '🛤️', short: 'Yollar', mode: 'parent' },
  { id: 'calendar', label: 'Haftalık Plan', emoji: '📅', short: 'Plan', mode: 'parent' },
  { id: 'teachers', label: 'Öğretmen', emoji: '👩‍🏫', short: 'Sınıf', mode: 'parent' },
  { id: 'journal', label: 'Gelişim Günlüğü', emoji: '📔', short: 'Günlük', mode: 'parent' },
  { id: 'shop', label: 'Ücretsiz Paketler', emoji: '🎁', short: 'Paket', mode: 'parent' },
]

export const SIDEBAR_EXTRA: { id: PageId; label: string; emoji: string }[] = [
  { id: 'coloring', label: 'Boyama', emoji: '🖍️' },
  { id: 'heroes', label: 'Kahramanlar', emoji: '🦸' },
  { id: 'rhymes', label: 'Şarkılar', emoji: '🎵' },
  { id: 'stem', label: 'STEM', emoji: '🔬' },
  { id: 'feelings', label: 'Duygular', emoji: '💛' },
  { id: 'printables', label: 'Çıktılar', emoji: '🖨️' },
  { id: 'certificates', label: 'Sertifika', emoji: '🏆' },
  { id: 'discover', label: 'Koleksiyonlar', emoji: '🧭' },
  { id: 'profile', label: 'Profilim', emoji: '🧒' },
  { id: 'search', label: 'Ara', emoji: '🔎' },
]

export function navForMode(mode: PortalMode): NavItem[] {
  return mode === 'kids' ? KIDS_NAV : PARENT_NAV
}

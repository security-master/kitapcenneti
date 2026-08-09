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
]

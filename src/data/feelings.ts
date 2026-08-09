export interface Feeling {
  id: string
  label: string
  emoji: string
  color: string
  tip: string
  activity: string
}

export const FEELINGS: Feeling[] = [
  { id: 'happy', label: 'Mutlu', emoji: '😊', color: '#ffe66d', tip: 'Mutluluğunu biriyle paylaşmak onu büyütür.', activity: 'Neşeli bir tekerleme söyle.' },
  { id: 'calm', label: 'Sakin', emoji: '😌', color: '#a8edea', tip: 'Sakinlik bir süper güçtür.', activity: '3 yavaş nefes al.' },
  { id: 'excited', label: 'Heyecanlı', emoji: '🤩', color: '#ff9f43', tip: 'Heyecanını güvenli bir oyuna yönlendir.', activity: 'Kısa bir dans molası!' },
  { id: 'sad', label: 'Üzgün', emoji: '😢', color: '#74b9ff', tip: 'Üzgün olmak sorun değil; anlatmak iyileştirir.', activity: 'Yumuşak bir sesli masal dinle.' },
  { id: 'angry', label: 'Kızgın', emoji: '😤', color: '#ff6b6b', tip: 'Öfke bir sinyaldir; önce bedeni sakinleştir.', activity: 'Yastığa yumruk (oyuncak) veya 10’a kadar say.' },
  { id: 'scared', label: 'Korkmuş', emoji: '😨', color: '#a29bfe', tip: 'Yanında güvenli biri varken korku küçülür.', activity: 'Bir yetişkine anlat + gece lambası.' },
  { id: 'tired', label: 'Yorgun', emoji: '😴', color: '#b2bec3', tip: 'Dinlenmek tembellik değil, ihtiyaçtır.', activity: 'Kısa dinlenme veya erken uyku rutini.' },
  { id: 'proud', label: 'Gururlu', emoji: '🌟', color: '#55efc4', tip: 'Emeğini fark etmek özgüveni besler.', activity: 'Bugün başardığın 1 şeyi söyle.' },
]

export const CALM_SCRIPTS = [
  'Burnundan 4 sayarak nefes al… ağzından 4 sayarak ver.',
  'Ayaklarını yerde hisset. Omuzlarını yumuşat.',
  'Bugün zor bir an olabilir; sen güvendesin.',
  'İçinden söyle: “Bu duygu geçici, ben güçlüyüm.”',
]

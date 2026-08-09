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
  { id: 'curious', label: 'Meraklı', emoji: '🤔', color: '#fdcb6e', tip: 'Merak öğrenmenin kapısıdır.', activity: 'Bugün bir "Neden?" sorusu sor.' },
  { id: 'lonely', label: 'Yalnız', emoji: '🥺', color: '#dfe6e9', tip: 'Yalnız hissetmek normal; konuşmak yardım eder.', activity: 'Güvendiğin birine mesaj veya sarılma.' },
  { id: 'bored', label: 'Sıkılmış', emoji: '😐', color: '#b8e994', tip: 'Sıkılma yaratıcı fikirlerin habercisidir.', activity: 'Yeni bir oyun veya boyama dene.' },
  { id: 'nervous', label: 'Gergin', emoji: '😬', color: '#fab1a0', tip: 'Gerginlik bedenin "hazırlan" demesidir.', activity: 'Omuzları indir, 5 yavaş nefes al.' },
  { id: 'loving', label: 'Sevgi Dolu', emoji: '🥰', color: '#ff7675', tip: 'Sevgini göstermek güzel bir hediyedir.', activity: 'Birine teşekkür et veya sarıl.' },
  { id: 'surprised', label: 'Şaşkın', emoji: '😲', color: '#ffeaa7', tip: 'Şaşkınlık yeni bir şey öğrendiğimiz an olabilir.', activity: 'Ne olduğunu bir cümleyle anlat.' },
  { id: 'hopeful', label: 'Umutlu', emoji: '🌱', color: '#81ecec', tip: 'Umut, zor günlerde bile ışık tutar.', activity: 'Yarın için güzel bir düşünce yaz.' },
  { id: 'grateful', label: 'Minnettar', emoji: '🙏', color: '#a29bfe', tip: 'Teşekkür etmek kalbi hafifletir.', activity: 'Bugün için 3 şey say: neye şükrediyorsun?' },
  { id: 'confused', label: 'Kafası Karışık', emoji: '😕', color: '#636e72', tip: 'Anlamadığın bir şey sorun — bu cesarettir.', activity: 'Bir yetişkine "Anlamadım" de.' },
  { id: 'brave', label: 'Cesur', emoji: '💪', color: '#e17055', tip: 'Cesaret korkusuz olmak değil, denemektir.', activity: 'Bugün küçük bir cesaret göster.' },
  { id: 'peaceful', label: 'Huzurlu', emoji: '🕊️', color: '#74b9ff', tip: 'Huzur anlarını hatırla, tekrar yakala.', activity: 'Sessizce 1 dakika otur, dinle.' },
]

export const CALM_SCRIPTS = [
  'Burnundan 4 sayarak nefes al… ağzından 4 sayarak ver.',
  'Ayaklarını yerde hisset. Omuzlarını yumuşat.',
  'Bugün zor bir an olabilir; sen güvendesin.',
  'İçinden söyle: "Bu duygu geçici, ben güçlüyüm."',
  'Gözlerini kapat, burnundan yavaşça nefes al. 1… 2… 3… 4. Ağzından ver.',
  'Parmaklarını yavaşça aç ve kapat. Bedenin sakinleşiyor.',
  'Karnına elini koy. Nefes alırken karnın şişsin, verirken insin.',
  'Beş şey gör: pencere, renk, bir ses, bir koku, bir dokunuş.',
  'Kendine nazik ol. Herkes bazen zorlanır.',
  'Bu an geçecek. Yanında seni seven biri var.',
  'Dudaklarını birleştir, burnundan nefes al. Sakin bir dalga gibi.',
  'Bugün yaptığın bir iyi şeyi hatırla. Gurur duy.',
]

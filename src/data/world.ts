export interface WorldLink {
  label: string
  page: string
}

export interface WorldRegion {
  id: string
  title: string
  emoji: string
  blurb: string
  color: string
  tags: string[]
  links: WorldLink[]
}

export const WORLD_REGIONS: WorldRegion[] = [
  {
    id: 'masal-ormani',
    title: 'Masal Ormanı',
    emoji: '🌲',
    blurb: 'Yapraklı patikalarda sesli masallar ve orman dostları seni bekliyor.',
    color: 'linear-gradient(135deg, #2d6a4f 0%, #95d5b2 55%, #d8f3dc 100%)',
    tags: ['masal', 'orman', 'dinle'],
    links: [
      { label: 'Sesli masallar', page: 'audio' },
      { label: 'Orman boyamaları', page: 'coloring' },
      { label: 'Dostluk kahramanları', page: 'heroes' },
    ],
  },
  {
    id: 'gokkusagi-koyu',
    title: 'Gökkuşağı Köyü',
    emoji: '🌈',
    blurb: 'Renkler dans eder; boyama, doodle ve yaratıcı atölyeler burada.',
    color: 'linear-gradient(135deg, #ff6b6b 0%, #feca57 35%, #48dbfb 70%, #ff9ff3 100%)',
    tags: ['renk', 'sanat', 'boyama'],
    links: [
      { label: 'Boyama galerisi', page: 'coloring' },
      { label: 'Eğlence bahçesi', page: 'fun' },
      { label: 'Hikaye yarat', page: 'create' },
    ],
  },
  {
    id: 'bilim-adasi',
    title: 'Bilim Adası',
    emoji: '🔬',
    blurb: 'Deney laboratuvarı, merak soruları ve “neden?” diyen keşifçiler adası.',
    color: 'linear-gradient(135deg, #023e8a 0%, #0077b6 45%, #90e0ef 100%)',
    tags: ['stem', 'bilim', 'deney'],
    links: [
      { label: 'STEM kartları', page: 'stem' },
      { label: 'Mini quiz', page: 'activities' },
      { label: 'Deney çıktıları', page: 'printables' },
    ],
  },
  {
    id: 'kahraman-tepe',
    title: 'Kahraman Tepe',
    emoji: '🦸',
    blurb: 'Özgün kahramanlar burada yaşar; cesaret, yardımlaşma ve nazik güç.',
    color: 'linear-gradient(135deg, #6a040f 0%, #dc2f02 50%, #ffba08 100%)',
    tags: ['kahraman', 'cesaret', 'değerler'],
    links: [
      { label: 'Kahramanlar', page: 'heroes' },
      { label: 'Cesaret masalları', page: 'audio' },
      { label: 'Günlük görevler', page: 'quests' },
    ],
  },
  {
    id: 'duygu-golu',
    title: 'Duygu Gölü',
    emoji: '💛',
    blurb: 'Sakin sular: hislerini adlandır, nefes al, yumuşakça paylaş.',
    color: 'linear-gradient(135deg, #ffd166 0%, #f4a261 40%, #e9c46a 100%)',
    tags: ['duygu', 'sakinleşme', 'empati'],
    links: [
      { label: 'Duygu köşesi', page: 'feelings' },
      { label: 'Uyku masalları', page: 'audio' },
      { label: 'Aile blogu', page: 'blog' },
    ],
  },
  {
    id: 'tekerleme-vadisi',
    title: 'Tekerleme Vadisi',
    emoji: '🎵',
    blurb: 'Ritim yankılanır; tekerlemeler, tempo ve dil oyunları vadide yaşar.',
    color: 'linear-gradient(135deg, #7b2cbf 0%, #c77dff 50%, #e0aaff 100%)',
    tags: ['şarkı', 'dil', 'ritim'],
    links: [
      { label: 'Şarkılar & tekerlemeler', page: 'rhymes' },
      { label: 'Kelime oyunları', page: 'activities' },
      { label: 'Eğlence çarkı', page: 'fun' },
    ],
  },
  {
    id: 'yildiz-limani',
    title: 'Yıldız Limanı',
    emoji: '🚀',
    blurb: 'Uzay rüyaları, gece gökyüzü ve hayal gücü roketleri buradan kalkar.',
    color: 'linear-gradient(135deg, #10002b 0%, #240046 40%, #5a189a 70%, #c77dff 100%)',
    tags: ['uzay', 'hayal', 'gece'],
    links: [
      { label: 'Uzay masalları', page: 'audio' },
      { label: 'STEM keşifleri', page: 'stem' },
      { label: 'Kendi uzay hikâyen', page: 'create' },
    ],
  },
  {
    id: 'oyun-meydani',
    title: 'Oyun Meydanı',
    emoji: '🎮',
    blurb: 'Hafıza, quiz, hız ve eğlence: zihin kasları burada ısınır.',
    color: 'linear-gradient(135deg, #fb8500 0%, #ffb703 45%, #8ecae6 100%)',
    tags: ['oyun', 'beyin', 'eğlence'],
    links: [
      { label: 'Oyun salonu', page: 'activities' },
      { label: 'Eğlence bahçesi', page: 'fun' },
      { label: 'Görev panosu', page: 'quests' },
    ],
  },
  {
    id: 'deniz-feneri',
    title: 'Deniz Feneri Sahili',
    emoji: '🌊',
    blurb: 'Dalgalar, deniz koruyucuları ve kıyı boyamalarıyla mavi bir macera.',
    color: 'linear-gradient(135deg, #03045e 0%, #0077b6 40%, #00b4d8 70%, #caf0f8 100%)',
    tags: ['deniz', 'doğa', 'macera'],
    links: [
      { label: 'Deniz masalları', page: 'audio' },
      { label: 'Sahil boyamaları', page: 'coloring' },
      { label: 'Doğa kahramanı', page: 'heroes' },
    ],
  },
  {
    id: 'kutuphane-kulesi',
    title: 'Kütüphane Kulesi',
    emoji: '📖',
    blurb: 'Kitap fısıltıları, yazar yolları ve aile okuma ipuçları kulede buluşur.',
    color: 'linear-gradient(135deg, #4a4e69 0%, #9a8c98 45%, #c9ada7 100%)',
    tags: ['okuma', 'kütüphane', 'yazma'],
    links: [
      { label: 'Sesli masallar', page: 'audio' },
      { label: 'Hikaye oluştur', page: 'create' },
      { label: 'Aile blogu', page: 'blog' },
    ],
  },
  {
    id: 'sertifika-sarayi',
    title: 'Sertifika Sarayı',
    emoji: '🏆',
    blurb: 'Görevleri bitirenler burada alkışlanır; çıktılar ve ödüller parıldar.',
    color: 'linear-gradient(135deg, #b69121 0%, #f0c929 45%, #fff3b0 100%)',
    tags: ['ödül', 'motivasyon', 'görev'],
    links: [
      { label: 'Günlük görevler', page: 'quests' },
      { label: 'Yazdırılabilirler', page: 'printables' },
      { label: 'Eğlence ödülleri', page: 'fun' },
    ],
  },
  {
    id: 'aile-bahcesi',
    title: 'Aile Bahçesi',
    emoji: '🏡',
    blurb: 'Ebeveyn rehberi, öğretmen fikirleri ve birlikte vakit planları yeşerir.',
    color: 'linear-gradient(135deg, #606c38 0%, #dda15e 50%, #fefae0 100%)',
    tags: ['aile', 'ebeveyn', 'plan'],
    links: [
      { label: 'Aile blogu', page: 'blog' },
      { label: 'Öğrenme yolları', page: 'paths' },
      { label: 'Ücretsiz paketler', page: 'shop' },
    ],
  },
]

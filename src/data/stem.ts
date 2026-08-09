export interface StemCard {
  id: string
  title: string
  emoji: string
  age: string
  minutes: number
  materials: string[]
  steps: string[]
  why: string
}

export const STEM_CARDS: StemCard[] = [
  {
    id: 'gokkusagi-sut',
    title: 'Sütte gökkuşağı',
    emoji: '🌈',
    age: '4+',
    minutes: 10,
    materials: ['Süt', 'Tabak', 'Gıda boyası', 'Sıvı bulaşık deterjanı', 'Pamuk'],
    steps: [
      'Tabağa az süt koy.',
      'Birkaç damla farklı renkte gıda boyası damlat.',
      'Pamuk ucuna çok az deterjan değdirip sütün ortasına dokun.',
      'Renklerin dansını izle!',
    ],
    why: 'Deterjan yağ moleküllerini iter; renkler hareket eder. Yüzey gerilimi!',
  },
  {
    id: 'balon-statik',
    title: 'Balon ve diken saçlar',
    emoji: '🎈',
    age: '5+',
    minutes: 5,
    materials: ['Balon', 'Yün kazak veya saç'],
    steps: [
      'Balonu şişir ve bağla.',
      'Yüne veya saça 20 sn sürt.',
      'Balonu küçük kâğıt parçalarına veya saça yaklaştır.',
    ],
    why: 'Sürtünme statik elektrik üretir; zıt yükler birbirini çeker.',
  },
  {
    id: 'yagmur-bulut',
    title: 'Tıraş köpüğü bulutu',
    emoji: '☁️',
    age: '4+',
    minutes: 10,
    materials: ['Su dolu bardak', 'Tıraş köpüğü', 'Gıda boyası'],
    steps: [
      'Bardağı suyla doldur, üstüne tıraş köpüğü koy (bulut).',
      'Köpüğün üstüne boyalı su damlat.',
      '“Yağmur”un buluttan düşmesini izle.',
    ],
    why: 'Bulutlar su buharı + damlacıklarla oluşur; ağırlaşınca yağmur yağar.',
  },
  {
    id: 'miknatis-av',
    title: 'Mıknatıs hazine avı',
    emoji: '🧲',
    age: '5+',
    minutes: 15,
    materials: ['Mıknatıs', 'Ataş / vida (güvenli)', 'Karton kutu'],
    steps: [
      'Kutuya metal ve metal olmayan nesneler koy.',
      'Mıknatısla hangilerinin yapıştığını keşfet.',
      'İki liste yap: yapışanlar / yapışmayanlar.',
    ],
    why: 'Demir içeren metaller mıknatısa gelir; plastik ve tahta gelmez.',
  },
  {
    id: 'golge-tiyatro',
    title: 'El feneri gölge tiyatrosu',
    emoji: '🔦',
    age: '3+',
    minutes: 10,
    materials: ['El feneri veya telefon ışığı', 'Duvar', 'Eller veya oyuncak'],
    steps: [
      'Odayı biraz karart.',
      'Işığı duvara tut, ellerinle şekiller yap.',
      'Işığı yaklaştırıp uzaklaştır — gölge büyüsün küçülsün.',
    ],
    why: 'Işık düz gider; engel olunca gölge oluşur. Mesafe boyutu değiştirir.',
  },
  {
    id: 'bitki-gunluk',
    title: 'Fasulye günlüğü',
    emoji: '🌱',
    age: '6+',
    minutes: 10,
    materials: ['Fasulye', 'Pamuk', 'Kap', 'Su'],
    steps: [
      'Kabın içine pamuk koy, ıslat, fasulyeyi yerleştir.',
      'Her gün bir cümle / resimle günlüğe not al.',
      '5–7 günde filizi gözle.',
    ],
    why: 'Tohumlar su + sıcaklık + hava ile çimlenir. Canlı bilim!',
  },
]

export interface Rhyme {
  id: string
  title: string
  emoji: string
  lyrics: string
}

export const RHYMES: Rhyme[] = [
  {
    id: 'mini-mini',
    title: 'Mini Mini Bir Kuş',
    emoji: '🐦',
    lyrics: `Mini mini bir kuş donmuştu,
Pencereme konmuştu.
Almışım onu içeriye,
Vermiştim bir parça yemyeşil.`,
  },
  {
    id: 'ali-baba',
    title: 'Ali Baba\'nın Çiftliği',
    emoji: '🐄',
    lyrics: `Ali Baba'nın bir çiftliği var,
Çiftliğinde kuzular var.
Me me me diye bağırırlar,
Ali Baba'nın çiftliğinde.`,
  },
  {
    id: 'yumurta',
    title: 'Yumurta',
    emoji: '🥚',
    lyrics: `Yumurta yumurta kırıldı,
Tavuk tavuk üzüldü.
Civciv civciv çıktı,
Herkes çok mutlu oldu.`,
  },
  {
    id: 'kelebek',
    title: 'Kelebek',
    emoji: '🦋',
    lyrics: `Kelebekler uçuşur,
Çiçeklere konuşur.
Renk renk kanatları,
Bahçenin süsü olur.`,
  },
  {
    id: 'el-el',
    title: 'El Ele',
    emoji: '🤝',
    lyrics: `El ele tutuşalım,
Güle güle koşalım.
Bir, iki, üç, dört,
Dostlukla dolu bir dört!`,
  },
  {
    id: 'ay-dede',
    title: 'Ay Dede',
    emoji: '🌙',
    lyrics: `Ay dede ay dede,
Senin evin nerede?
Bulutların arasında,
Yıldızlarla sahnede.`,
  },
  {
    id: 'sayalim',
    title: 'Birden Ona',
    emoji: '🔢',
    lyrics: `Bir elma, iki armut,
Üç kiraz, dört kayısı.
Beş, altı, yedi, sekiz,
Dokuz, on — aferin size!`,
  },
  {
    id: 'iyi-geceler',
    title: 'İyi Geceler',
    emoji: '😴',
    lyrics: `Güneş battı, ay geldi,
Yıldızlar ışık saçtı.
Yastığa başını koy,
Tatlı rüyalara dal.`,
  },
]

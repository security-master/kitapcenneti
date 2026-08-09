export interface AudioStory {
  id: string
  title: string
  emoji: string
  age: string
  duration: string
  theme: string
  summary: string
  text: string
}

export const AUDIO_STORIES: AudioStory[] = [
  {
    id: 'yildiz-uyku',
    title: 'Uyuyan Yıldız',
    emoji: '⭐',
    age: '3-6',
    duration: '3 dk',
    theme: 'Uyku',
    summary: 'Küçük bir yıldızın sakin uykuya dalma yolculuğu.',
    text: `Bir varmış bir yokmuş, gökyüzünde Uykucu adında minik bir yıldız varmış.
Uykucu her gece diğer yıldızlarla parlamak istermiş ama gözleri çok ağır gelirmiş.
Ay teyze ona yumuşak bir bulut yastığı vermiş.
Rüzgar ninni söylemiş: "Uyku uykucuk, rüyalar tatlı olsun."
Uykucu gülümsemiş, gözlerini yummuş ve bütün dünya ile birlikte huzurla uykuya dalmış.
Sen de şimdi Uykucu gibi derin bir nefes al… ve tatlı rüyalara dal.`,
  },
  {
    id: 'orman-dostlari',
    title: 'Ormanın Dostları',
    emoji: '🐻',
    age: '4-8',
    duration: '4 dk',
    theme: 'Dostluk',
    summary: 'Tavşan, ayı ve kuşun birlikte çözdüğü bir sorun.',
    text: `Ormanın kenarında üç iyi dost yaşarmış: Mıymıy Tavşan, Ballı Ayı ve Cıvıl Kuş.
Bir sabah yağmur yağmış ve köprüdeki tahta kırılmış.
Kimse karşıya geçemiyormuş.
Mıymıy plan yapmış, Ballı güçlü kollarıyla yeni tahta taşımış, Cıvıl da yukarıdan yön göstermiş.
Birlikte yeni bir köprü kurmuşlar.
O gün ormandaki herkes öğrenmiş: Birlikte olunca her zorluk kolaylaşırmış.`,
  },
  {
    id: 'deniz-koruyucu',
    title: 'Deniz Koruyucusu Luna',
    emoji: '🌊',
    age: '5-9',
    duration: '5 dk',
    theme: 'Doğa',
    summary: 'Luna mercanları temizleyip dostlarına yardım eder.',
    text: `Luna, denizin altında yaşayan cesur bir koruyucuymuş.
Bir gün mercan bahçesinin arasına plastik bir torba takılmış.
Balıklar korkmuş, yengeçler saklanmış.
Luna ahtapot arkadaşıyla torbayı dikkatle çıkarmış ve kıyıya bırakmış.
Sonra bütün denizi temiz tutmak için bir söz vermişler.
Luna demiş ki: "Denizi seversek, deniz de bizi sever."`,
  },
  {
    id: 'gokkusagi-sehir',
    title: 'Gökkuşağı Şehri',
    emoji: '🌈',
    age: '4-8',
    duration: '4 dk',
    theme: 'Cesaret',
    summary: 'Renkler kaybolunca minik bir kahraman onları geri getirir.',
    text: `Bir sabah Gökkuşağı Şehri'nde bütün renkler solmuş.
Araba gri, çiçekler gri, hatta dondurmalar bile griymiş!
Küçük Mira elindeki fırçayı almış ve ilk kırmızıyı bir elmaya boyamış.
Sonra maviyi gökyüzüne, yeşili çimene, sarıyı güneşe vermiş.
Herkes alkışlamış.
Mira gülerek demiş: "Renkler kalbimizde yaşar, paylaşınca çoğalır."`,
  },
  {
    id: 'cesur-kaplumbaga',
    title: 'Cesur Kaplumbağa Tiko',
    emoji: '🐢',
    age: '3-7',
    duration: '3 dk',
    theme: 'Cesaret',
    summary: 'Yavaş ama kararlı Tiko yarışı nasıl kazanır?',
    text: `Tiko çok yavaş yürürmüş ama asla vazgeçmezmiş.
Bir gün ormanda "Kim daha sabırlı?" yarışı yapılmış.
Tavşan hızla koşup uykuya dalmış.
Tiko adım adım, nefes nefese ama durmadan ilerlemış.
Sonunda ipi göğüsleyen Tiko olmuş.
Herkes öğrenmiş: Acele etmek değil, devam etmek kazanırmış.`,
  },
  {
    id: 'ay-bahcesi',
    title: 'Ay Bahçesi',
    emoji: '🌙',
    age: '3-6',
    duration: '3 dk',
    theme: 'Uyku',
    summary: "Ay'da büyüyen rüya çiçeklerinin hikayesi.",
    text: `Ay'ın arkasında gizli bir bahçe varmış.
Orada rüya çiçekleri açarmış: mavi huzur, pembe sevgi, sarı neşe.
Bahçıvan Nila her akşam çiçekleri sulayıp dünyadaki çocuklara rüya gönderirmiş.
Bu gece senin için en güzel rüya çiçeğini seçmiş.
Şimdi gözlerini kapat, Nila'nın çiçeği yastığına konuyor… Tatlı rüyalar.`,
  },
  {
    id: 'kutup-isiklari',
    title: 'Kutup Işıkları',
    emoji: '❄️',
    age: '5-10',
    duration: '5 dk',
    theme: 'Keşif',
    summary: 'Penguen Pati kuzey ışıklarını ilk kez görür.',
    text: `Penguen Pati hep güneyde yaşamış.
Bir gece gökyüzü yeşil ve mor ışıklarla dans etmiş.
Pati korkmuş ama arkadaşı Fok ona elini uzatmış.
"Bu kutup ışıkları," demiş, "gökyüzünün şarkısı."
Pati dans etmiş, gülmüş ve yeni şeyler öğrenmenin ne kadar güzel olduğunu anlamış.`,
  },
  {
    id: 'kucuk-astronot',
    title: 'Küçük Astronot Ela',
    emoji: '🚀',
    age: '6-10',
    duration: '5 dk',
    theme: 'Bilim',
    summary: 'Ela ilk uzay yolculuğunda dostluk keşfeder.',
    text: `Ela küçük bir astronot olmayı hayal edermiş.
Bir gece rüyasında gerçek bir rokete binmiş.
Ay'da gri toz, yıldızlarda parıltı varmış.
Orada yalnız bir uzaylı yavrusu bulmuş: Zuzu.
Zuzu Türkçe bilmezmiş ama gülüş aynıymış.
Ela ona Dünya'dan bir ayıcık hediye etmiş.
Eve döndüğünde demiş ki: "Uzay büyük, ama dostluk daha büyük."`,
  },
]

export interface ParentTip {
  id: string
  title: string
  emoji: string
  category: string
  body: string
}

export const PARENT_TIPS: ParentTip[] = [
  {
    id: 'screen',
    title: 'Ekran Süresi Dengesi',
    emoji: '📱',
    category: 'Dijital',
    body: 'WHO önerisine göre 2-5 yaş için günde 1 saati aşmayan kaliteli içerik idealdir. Kitap Cenneti\'nde birlikte dinleme ve boyama ekranı pasif tüketimden ayırır.',
  },
  {
    id: 'read-aloud',
    title: 'Sesli Okumanın Gücü',
    emoji: '📖',
    category: 'Okuma',
    body: 'Günde 10-15 dakika sesli okuma, kelime dağarcığını ve empatiyi güçlendirir. Sesli Masallar bölümünü birlikte dinleyip sorular sorun: "Sence kahraman ne hissetti?"',
  },
  {
    id: 'age-3-5',
    title: '3-5 Yaş Rehberi',
    emoji: '🐣',
    category: 'Yaş',
    body: 'Kısa masallar, tekerlemeler ve kalın çizgili boyama sayfaları uygundur. AI hikayede 4 sayfa ve sulu boya stili seçin.',
  },
  {
    id: 'age-6-8',
    title: '6-8 Yaş Rehberi',
    emoji: '🌟',
    category: 'Yaş',
    body: 'Kahramanlar, hafıza oyunu ve 6 sayfalık hikayeler idealdir. Çocuğun kendi ismini hikayeye eklemesi motivasyonu artırır.',
  },
  {
    id: 'age-9-12',
    title: '9-12 Yaş Rehberi',
    emoji: '🚀',
    category: 'Yaş',
    body: 'Daha uzun maceralar, bilim temalı içerik ve kendi hikaye yazma önerilir. Sertifika ile okuma hedefleri koyabilirsiniz.',
  },
  {
    id: 'bedtime',
    title: 'Uyku Rutini',
    emoji: '🌙',
    category: 'Rutin',
    body: 'Yatmadan 30 dk önce sakin sesli masal seçin. Işıkları kısın, ekranı karanlık moda alın, dinledikten sonra cihazı kapatın.',
  },
  {
    id: 'creative',
    title: 'Yaratıcılığı Desteklemek',
    emoji: '🎨',
    category: 'Yaratıcılık',
    body: 'Boyama PDF\'lerini yazdırın, bitince fotoğrafını çekip aile albümüne ekleyin. Özgün kahramanlarla "Benim hikayem" defteri oluşturun.',
  },
  {
    id: 'copyright',
    title: 'Telifsiz İçerik Hakkında',
    emoji: '✅',
    category: 'Güven',
    body: 'Site içindeki kahramanlar (Nova, Tiko, Luna vb.) Kitap Cenneti\'ne özgüdür; ticari marka karakter kopyası değildir. Evde serbestçe kullanabilirsiniz.',
  },
]

export const DAILY_CHALLENGES = [
  'Bugün bir sesli masal dinle ve kahramanı çiz.',
  'Bir boyama sayfası tamamla ve birine göster.',
  'Tekerlemelerden birini ezberle.',
  'AI ile kendi isminle 4 sayfalık hikaye oluştur.',
  'Hafıza oyununda 8 çifti bul.',
  'Ailene bugün öğrendiğin 3 yeni kelimeyi anlat.',
  'Doğa için bir iyilik yap (su tasarrufu, çöp toplama).',
]

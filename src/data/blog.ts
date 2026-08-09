export interface BlogPost {
  id: string
  title: string
  emoji: string
  minutes: number
  tags: string[]
  summary: string
  body: string[]
}

/** Ebeveyn odaklı uzun içerik — AdSense için daha uygun */
export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'ekran-suresi',
    title: 'Çocuklarda ekran süresi: dengeli bir rutin nasıl kurulur?',
    emoji: '📱',
    minutes: 6,
    tags: ['Dijital', 'Rutin'],
    summary: 'Yasaklamak yerine sınır + kaliteli içerik formülü.',
    body: [
      'Ekran süresini tamamen kaldırmak çoğu aile için gerçekçi değildir. Asıl mesele sürenin uzunluğu kadar içeriğin niteliğidir.',
      '3–5 yaş için kısa, birlikte yapılan oturumlar; 6–8 yaş için “görev bitince oyun” yaklaşımı işe yarar.',
      'Kitap Cenneti’nde sesli masal dinlemek veya boyama PDF yazdırmak, pasif video izlemeye göre daha aktif bir deneyim sunar.',
      'Pratik kural: her 20–30 dakikada bir mola, yatmadan 45 dk önce ekranı kapatmak, hafta sonu “ekran menüsü” belirlemek.',
      'En önemlisi: çocuğun yanında oturup “Ne öğrendin?” diye sormak. Birlikte tüketilen içerik, yalnız tüketilenden daha güvenlidir.',
    ],
  },
  {
    id: 'sesli-okuma',
    title: 'Sesli okuma neden hâlâ en güçlü öğrenme aracı?',
    emoji: '📖',
    minutes: 5,
    tags: ['Okuma', 'Okul öncesi'],
    summary: '10 dakika sesli okuma, kelime dağarcığını görünür şekilde büyütür.',
    body: [
      'Araştırmalar, düzenli sesli okumanın dil gelişimi, empati ve dikkat süresi üzerinde güçlü etkisi olduğunu gösteriyor.',
      'Metni mükemmel okumak zorunda değilsiniz. Ses tonu, soru sormak ve resimlere bakmak yeterli.',
      'Uykudan önce aynı saatte kısa bir masal, çocuğa güven veren bir ritüel oluşturur.',
      'Sesli Masallar bölümünü “ben okuyorum / sen dinliyorsun” veya tersi şekilde kullanabilirsiniz.',
      'İpucu: Dinledikten sonra 2 soru sorun — “Kahraman ne hissetti?” ve “Sen olsaydın ne yapardın?”',
    ],
  },
  {
    id: 'odev-aliskanligi',
    title: 'Evde ödev alışkanlığı: kavga etmeden 15 dakikalık sistem',
    emoji: '✏️',
    minutes: 7,
    tags: ['Ödev', 'Alışkanlık'],
    summary: 'Büyük vaatler değil; küçük, tekrar eden adımlar.',
    body: [
      'Ödev savaşlarının çoğu belirsizlikten çıkar: ne zaman, nerede, ne kadar?',
      'Aynı köşe, aynı saat, aynı sıra: 1) su iç 2) günlük görevi aç 3) 15 dk çalış 4) yıldız/sertifika.',
      'Günlük Görevler panosu, çocuğa “bugün ne yapacağım?” sorusunun cevabını hazır verir.',
      'Bitince kutlama şart: alkış, çıkartma veya PDF sertifika. Beyin ödülü hatırlar.',
      'Unutmayın: tutarlılık, mükemmellikten daha değerlidir. Haftada 5 gün yeterli.',
    ],
  },
  {
    id: 'duygu-kosesi',
    title: 'Çocuklar duygularını nasıl adlandırır? Evde 5 dakikalık pratik',
    emoji: '💛',
    minutes: 5,
    tags: ['Duygu', 'İletişim'],
    summary: '“İyi misin?” yerine daha iyi sorular.',
    body: [
      'Küçük çocuklar çoğu zaman “kötü” veya “iyi” der; çünkü kelime dağarcığı sınırlıdır.',
      'Duygu Köşesi’ndeki kartlar: mutlu, üzgün, kızgın, heyecanlı, yorgun… seçenek sunar.',
      'Ebeveyn yargılamadan tekrarlar: “Üzgün hissettiğini duyuyorum.”',
      'Sonra birlikte bir sakinleşme seçin: 3 derin nefes, kısa yürüyüş veya yumuşak bir masal.',
      'Bu pratik, öfke nöbetlerini sihirle bitirmez; ama köprü kurar.',
    ],
  },
  {
    id: 'yaz-tatili',
    title: 'Yaz tatilinde öğrenme tatili olmasın: hafif bir plan',
    emoji: '☀️',
    minutes: 6,
    tags: ['Tatil', 'Plan'],
    summary: 'Her gün 20–30 dakika yeter; programı boğmayın.',
    body: [
      'Yazın amaç okul gibi yapmak değil; merakı canlı tutmaktır.',
      'Öneri menü: 1 sesli masal + 1 boyama veya STEM kartı + dışarıda 20 dk oyun.',
      'Haftada bir “aile proje günü”: kartondan kale, doğa koleksiyonu, mutfak deneyi.',
      'Kitap Cenneti’ndeki görev panosu, tatilde bile ritim tutturmaya yardım eder.',
      'Esnek olun: yağmurlu günde içerik, güneşli günde park öncelikli olsun.',
    ],
  },
  {
    id: 'guvenli-icerik',
    title: 'Çocuklara güvenli dijital içerik seçerken kontrol listesi',
    emoji: '🛡️',
    minutes: 5,
    tags: ['Güvenlik', 'İçerik'],
    summary: 'Şiddet, korku, reklam ve veri: nelere bakmalı?',
    body: [
      'İçerik şiddet veya aşırı korku içeriyor mu? Kahramanlar sorunları nasıl çözüyor?',
      'Reklamlar içeriği bölüyor mu? (Onaylı reklamlarda bile yerleştirme önemlidir.)',
      'Kişisel veri istiyor mu? Küçük çocuklardan gereksiz bilgi alınmamalı.',
      'Telifsiz / özgün karakterler, tanınmış marka kopyalarından daha şeffaftır.',
      'Kitap Cenneti özgün kahramanlar ve aile rehberiyle bu kontrol listesine göre tasarlandı.',
    ],
  },
  {
    id: 'okul-hazirlik',
    title: 'Okula dönüş: 7 günde yumuşak geçiş planı',
    emoji: '🎒',
    minutes: 6,
    tags: ['Okul', 'Rutin'],
    summary: 'Uyku saatini bir anda değil, kademeli kaydırın.',
    body: [
      'Okuldan 1 hafta önce yatma saatini her gün 10–15 dk öne alın.',
      'Sabah rutini prova edin: kahvaltı, çanta, kısa görev.',
      'Akşamları sakin masal ile “okul heyecanı”nı konuşun.',
      'İlk hafta ekstra yorgunluk normal; ekranı azaltmak işe yarar.',
      'Küçük başarıları kutlayın — sertifika bile motivasyon olabilir.',
    ],
  },
  {
    id: 'anne-baba-molasi',
    title: 'Ebeveyn molası: tükenmeden birlikte vakit',
    emoji: '☕',
    minutes: 4,
    tags: ['Ebeveyn', 'Denge'],
    summary: 'Mükemmel aktivite değil, ulaşılabilir anlar.',
    body: [
      'Her akşam 45 dk “eğitici program” planlamak sürdürülebilir değildir.',
      '15 dakikalık kaliteli an: birlikte bir tekerleme, kısa boyama, duygu check-in.',
      'Siz yorgunken sesli masalı cihaz okusun; siz yanlarında oturun.',
      'Kendi molanızı da planlayın — mutlu ebeveyn, daha sakin çocuk demektir.',
      'Aile Blog yazıları size özel; çocuk görevleri onlara. Rolleri karıştırmayın.',
    ],
  },
]

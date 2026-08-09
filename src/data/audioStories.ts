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
  {
    id: 'kucuk-sef',
    title: 'Küçük Şef Mert',
    emoji: '🍪',
    age: '4-8',
    duration: '4 dk',
    theme: 'Paylaşmak',
    summary: 'Mutfakta yapılan kurabiyeler komşulara neşe taşır.',
    text: `Mert annesiyle kurabiye yapmayı çok severmiş.
Bir gün fazla hamur kalmış.
"Komşulara götürsek?" demiş Mert.
Kapı kapı dolaşmışlar; herkes gülümsemiş.
Mert öğrenmiş: Paylaşmak, kurabiyeyi daha tatlı yaparmış.`,
  },
  {
    id: 'gece-kutuphanesi',
    title: 'Gece Kütüphanesi',
    emoji: '📚',
    age: '5-9',
    duration: '5 dk',
    theme: 'Okuma',
    summary: 'Kitaplar gece yarısı fısıldayınca macera başlar.',
    text: `Leyla bir gece uyandığında raftaki kitapların fısıldadığını duymuş.
Bir kitap açılmış: "Bizi oku, dünyamız yaşasın."
Leyla her gece bir sayfa okumuş.
Kitaplar mutlu olmuş, Leyla'nın hayal gücü büyümüş.
Sen de bu gece bir sayfa oku; kütüphane seni bekliyor.`,
  },
  {
    id: 'ruzgarin-mektubu',
    title: 'Rüzgarın Mektubu',
    emoji: '🍃',
    age: '4-8',
    duration: '4 dk',
    theme: 'İletişim',
    summary: 'Küçük bir yaprak, rüzgarla taşınan nazik bir mesaj taşır.',
    text: `Dağın eteğinde Lale adında bir yaprak varmış.
Rüzgar ona fısıldamış: "Aşağıdaki çocuğa bir mesaj götür."
Lale uçmuş, savrulmuş, gülmüş.
Pencerede bekleyen Deniz'in avucuna konmuş.
Mektupta yazıyormuş: "Bugün birine gülümse."
Deniz komşusuna gülümsemiş; bütün sokak aydınlanmış.
Bazen en küçük mesaj, en büyük neşeyi getirirmiş.`,
  },
  {
    id: 'bulut-otobus',
    title: 'Bulut Otobüsü',
    emoji: '☁️',
    age: '3-6',
    duration: '3 dk',
    theme: 'Hayal',
    summary: 'Yumuşak bulut otobüsü çocukları hayal duraklarına götürür.',
    text: `Gökyüzünde puflu bir otobüs varmış.
Şoförü Beyaz Bulut, bileti gülümsemeymiş.
İlk durak: Renkli Şeker Parkı.
İkinci durak: Fısıltı Ormanı.
Üçüncü durak: Yumuşak Yastık İstasyonu.
Sen de biletini al — gözlerini kapat, otobüs geliyor.
Ding-dong! Hayal durağına hoş geldin.`,
  },
  {
    id: 'kayip-corap',
    title: 'Kayıp Çorap Macerası',
    emoji: '🧦',
    age: '4-7',
    duration: '4 dk',
    theme: 'Mizah',
    summary: 'Çamaşır makinesinde kaybolan çorap cesur bir yolculuğa çıkar.',
    text: `Sol Çorap bir sabah sağını bulamamış.
"Ben maceraya çıkıyorum!" demiş.
Sepetin ardında, yatağın altında, hatta oyuncak kutusunda aranmış.
Sonunda balkondaki çiçek saksısının yanında güneşlenirken bulunmuş.
Sağ Çorap gülmüş: "Kaybolmak da bazen keşfetmektir."
O günden sonra ikisi birlikte dolaba dönmüş — ama ara sıra maceraya izin varmış.`,
  },
  {
    id: 'seftali-agaci',
    title: 'Şeftali Ağacının Sırrı',
    emoji: '🍑',
    age: '5-9',
    duration: '5 dk',
    theme: 'Sabır',
    summary: 'Küçük bir tohum büyümeyi beklerken sabrı öğrenir.',
    text: `Minik tohum toprağa düşmüş ve acele etmiş: "Hemen ağaç olmak istiyorum!"
Yağmur demiş: "Biraz bekle."
Güneş demiş: "Biraz daha."
Kökler yavaş yavaş uzamış, filiz güneşe selam vermiş.
Yıllar sonra şeftali ağacı olmuş; gölgesinde çocuklar oynamış.
Tohum anlamış: Güzel şeyler acele etmeden büyürmüş.`,
  },
  {
    id: 'gece-otobus-duragi',
    title: 'Gece Otobüs Durağı',
    emoji: '🚌',
    age: '5-9',
    duration: '4 dk',
    theme: 'Cesaret',
    summary: 'İlk kez yalnız binen bir çocuk yardımlaşmayı keşfeder.',
    text: `Efe ilk kez nineye giden otobüse binecekmiş.
Karnında kelebekler uçuşuyormuş.
Durakta yaşlı bir teyze çantasını düşürmüş; Efe eğilip vermiş.
Teyze gülümsemiş: "Cesaret bazen küçük bir yardımdır."
Otobüs gelmiş, Efe binmiş, pencereye oturmuş.
Kelebekler hâlâ varmış ama artık dans ediyormuş — korkuyla değil, heyecanla.`,
  },
  {
    id: 'muzi-robot',
    title: 'Muzi ve Onaran Robot',
    emoji: '🤖',
    age: '6-10',
    duration: '5 dk',
    theme: 'Bilim',
    summary: 'Bozulan bir oyuncak robot, merak ve denemeyle yeniden çalışır.',
    text: `Muzi'nin robotu bir sabah "bip" demeyi bırakmış.
Muzi ağlamak yerine kapağı açmış (büyüklerle birlikte).
Bir vida gevşek, bir kablo yerinden çıkmış.
Adım adım denemiş, not almış, tekrar denemiş.
Robot yeniden bipleyince Muzi bağırmış: "Bilim buymuş!"
Bazen bozulmak, öğrenmenin başlangıcıymış.`,
  },
  {
    id: 'kardeas-yildizlar',
    title: 'Kardeş Yıldızlar',
    emoji: '✨',
    age: '3-7',
    duration: '3 dk',
    theme: 'Kardeşlik',
    summary: 'İki yıldız kavga edince Ay onlara paylaşmayı öğretir.',
    text: `İki küçük yıldız aynı bulutu istemiş.
"Benim!" "Hayır benim!" diye parlarmış.
Ay teyze araya girmiş: "Bulutu bölüşsenize."
Biri sağını, biri solunu aydınlatmış.
Bulut daha da parlak görünmüş.
Kardeşler öğrenmiş: Paylaşınca ışık çoğalırmış.`,
  },
  {
    id: 'pistachio-pisirir',
    title: 'Aşçı Sincap Fıstık',
    emoji: '🐿️',
    age: '4-8',
    duration: '4 dk',
    theme: 'Paylaşmak',
    summary: 'Sincap Fıstık ormana kış çorbası pişirir ve herkesi davet eder.',
    text: `Fıstık kış için çorba pişirmiş: havuç, elma, biraz tarçın.
Kokusu ormanı sarmış.
Tavşan, baykuş, hatta utangaç kirpi gelmiş.
Fıstık demiş: "Herkese yeter, yeter ki kase getiresiniz."
Birlikte kaşık kaşık içmişler.
En sıcak şey çorba değil, sofra sohbetiymiş.`,
  },
  {
    id: 'gizli-bahce-kapi',
    title: 'Gizli Bahçe Kapısı',
    emoji: '🚪',
    age: '5-9',
    duration: '5 dk',
    theme: 'Keşif',
    summary: 'Eski bir kapı, merak eden çocuğu renkli bir bahçeye götürür.',
    text: `Evin arkasında yosunlu bir kapı varmış.
Kimse açmazmış — ta ki Nisan merak edene kadar.
Kapı gıcırdamış, içeride uçan kelebekler ve fısıldayan çiçekler varmış.
Bir çiçek demiş: "Merak, en güzel anahtardır."
Nisan her hafta bir çiçeğe su vermiş.
Bahçe büyümüş, Nisan'ın cesareti de.`,
  },
  {
    id: 'yagmur-davulu',
    title: 'Yağmur Davulu',
    emoji: '🥁',
    age: '3-6',
    duration: '3 dk',
    theme: 'Müzik',
    summary: 'Damla damla yağmur, çocuklarla ritim tutar.',
    text: `Damla çatıya düşmüş: tak.
İkinci damla: tak tak.
Çocuklar tencerelerle cevap vermiş: dum tek tek!
Yağmur gülmüş, gökkuşağı perdesini indirmiş.
Ev bir konsere dönmüş.
Yağmurlu günler sıkıcı değilmiş — ritmeliymiş.`,
  },
  {
    id: 'kutuphane-kedisi',
    title: 'Kütüphane Kedisi Mırıl',
    emoji: '🐱',
    age: '4-8',
    duration: '4 dk',
    theme: 'Okuma',
    summary: 'Mırıl, okuyan çocukların yanına kıvrılıp hikâyeleri dinler.',
    text: `Kütüphanede Mırıl adında bir kedi yaşarmış.
En çok masal rafını severmiş.
Bir çocuk üzgün gelince Mırıl kucağına çıkmış.
Çocuk okudukça üzüntü sayfa sayfa incelmiş.
Mırıl mırlamış: "Kitaplar ilaçtır, ben de ısıtırım."
Sen de okurken bir yumuşak dost hayal edebilirsin.`,
  },
  {
    id: 'kayip-gulumseme',
    title: 'Kayıp Gülümseme',
    emoji: '😊',
    age: '3-6',
    duration: '3 dk',
    theme: 'Duygu',
    summary: 'Gülümsemesini kaybeden bir çocuk onu paylaşarak bulur.',
    text: `Ela bir sabah gülümsemesini bulamamış.
Aynaya bakmış — yok.
Çantasına bakmış — yok.
Sonra arkadaşının düşen kalemini vermiş.
Arkadaşı gülümsemiş; Ela'nın yüzünde de bir kıvılcım belirmiş.
Gülümseme ceplerde değil, paylaşınca geri gelirmiş.`,
  },
  {
    id: 'uzay-postacisi',
    title: 'Uzay Postacısı Pati',
    emoji: '📮',
    age: '6-10',
    duration: '5 dk',
    theme: 'Macera',
    summary: 'Pati, gezegenler arası mektupları zamanında yetiştirmeye çalışır.',
    text: `Pati'nin roket postası "Zamanında Yetişir" yazarmış.
Bir gün fırtınalı bir göktaşı yağmuru çıkmış.
Pati korkmuş ama mektubu saklamış.
Dost gezegene vardığında küçük bir uzaylı ağlıyormuş.
Mektupta anneanneden gelen bir ninni varmış.
Pati öğrenmiş: Teslim edilen şey bazen kargo değil, teselliymiş.`,
  },
  {
    id: 'buyulu-kalemlik',
    title: 'Büyülü Kalemlik',
    emoji: '✏️',
    age: '5-9',
    duration: '4 dk',
    theme: 'Yaratıcılık',
    summary: 'Kalemler gece vakti çizimleri canlandırır — nazikçe.',
    text: `Kalemlikte kırmızı, mavi ve sarı kalem varmış.
Gece yarısı fısıldaşmışlar: "Bugün ne çizsek?"
Çocuğun defterindeki güneş bir an parlamış, sonra yine resim olmuş.
Kalemler bilirmiş: Büyü, bitmiş işte değil; denenen çizgidedir.
Sabah çocuk yeni bir sayfa açmış.
Kalemler sevinmiş: "Yine başlıyoruz!"`,
  },
  {
    id: 'koy-fieneri',
    title: 'Köy Feneri',
    emoji: '🏮',
    age: '5-9',
    duration: '4 dk',
    theme: 'Topluluk',
    summary: 'Fırtınada sönen feneri köylüler birlikte yeniden yakar.',
    text: `Köyün feneri fırtınada sönmüş.
Herkes kendi evine çekilmiş.
Küçük Mira kapı kapı dolaşmış: "Birer mum getirin."
Mumlar birleşince fener yeniden aydınlanmış.
Fırtına dinmiş, köy gülümsemiş.
Tek başına küçük ışık, birlikte büyük umutmuş.`,
  },
  {
    id: 'uykucu-ejderha',
    title: 'Uykucu Ejderha Pofuduk',
    emoji: '🐉',
    age: '3-6',
    duration: '3 dk',
    theme: 'Uyku',
    summary: 'Küçük ejderha ateş yerine yumuşak horultular üfler.',
    text: `Pofuduk ateş püskürtemezmiş — sadece ılık buhar.
Diğer ejderhalar gülermiş.
Ama köy çocukları Pofuduk'u severmiş; çünkü buharı battaniyeleri ısıtırmış.
Gece olunca Pofuduk usulca horlamış.
Horultusu ninni gibiymiş.
Sen de Pofuduk gibi kıvrıl: ılık, güvenli, uykuya hazır.`,
  },
  {
    id: 'zaman-kum-saati',
    title: 'Zaman Kum Saati',
    emoji: '⏳',
    age: '7-11',
    duration: '5 dk',
    theme: 'Sorumluluk',
    summary: 'Kum saatini boşa harcayan çocuk, zamanı paylaşmayı öğrenir.',
    text: `Can'ın sihirli bir kum saati varmış.
Her taneciği bir dakikaymış.
Can hepsini oyuna harcamış; ödev ve yardım için kum kalmamış.
Saatin içinden küçük bir ses demiş: "Zamanı bölüştür."
Ertesi gün Can kumları üçe ayırmış: iş, oyun, sevgi.
Gün daha dolu, kalp daha hafifmiş.`,
  },
  {
    id: 'deniz-feneri-cocugu',
    title: 'Deniz Feneri Çocuğu',
    emoji: '🕯️',
    age: '6-10',
    duration: '5 dk',
    theme: 'Umut',
    summary: 'Fırtınalı gecede feneri yakan çocuk gemilere yol gösterir.',
    text: `Ada fenerinin bekçisi hastalanmış.
Kızı Ayla basamakları tırmanmış.
Fitili yakmış, camı silmiş, ışığı çevirmiş.
Uzakta bir gemi selam vermiş.
Ayla demiş: "Korksam da ışığı bırakmadım."
Umut bazen büyük bir kahramanlık değil, sönmeyen küçük bir ışıkmış.`,
  },
  {
    id: 'park-banki',
    title: 'Parktaki Mavi Bank',
    emoji: '🟦',
    age: '4-8',
    duration: '4 dk',
    theme: 'Dostluk',
    summary: 'Yalnız oturan iki çocuk aynı bankta arkadaş olur.',
    text: `Parkta mavi bir bank varmış.
Bir ucunda Ege, öbür ucunda Su otururmuş.
İkisi de yalnızmış ama birbirine bakmazmış.
Bir güvercin ekmek kırıntısını aralarına düşürmüş.
İkisi aynı anda uzanmış, gülmüş, konuşmaya başlamış.
Bazen arkadaşlık bir kırıntı kadar küçük bir anda başlarmış.`,
  },
  {
    id: 'kar-tanesi-secimi',
    title: 'Kar Tanesi Seçimi',
    emoji: '❄️',
    age: '3-7',
    duration: '3 dk',
    theme: 'Özgünlük',
    summary: 'Her kar tanesi farklıdır — tıpkı senin gibi.',
    text: `Gökyüzünde binlerce kar tanesi varmış.
Biri üzülmüş: "Ben diğerleri gibi değilim."
Rüzgar demiş: "İyi ki değilsin."
Yere düşünce çocuk onu avucunda incelemiş: "Bu çok güzel!"
Kar tanesi parlamış.
Sen de biriciksin — ve bu, dünyanın en güzel tarafı.`,
  },
  {
    id: 'mutfak-orkestrasi',
    title: 'Mutfak Orkestrası',
    emoji: '🍝',
    age: '4-8',
    duration: '4 dk',
    theme: 'Aile',
    summary: 'Akşam yemeği hazırlığı bir aile konserine dönüşür.',
    text: `Anne kaşığı çırpmış: çın çın.
Baba tencere kapağını tempo tutmuş.
Çocuk tahta spatulayla ritim çalmış.
Makarna suyu kaynarken şarkı büyümüş.
Sofra kurulunca alkışlanmış.
Yemek lezzetliymiş — çünkü birlikte pişmiş.`,
  },
  {
    id: 'yildiz-haritasi',
    title: 'Yıldız Haritası',
    emoji: '🗺️',
    age: '7-11',
    duration: '5 dk',
    theme: 'Keşif',
    summary: 'İki arkadaş balkonlarından aynı yıldızı bularak bağ kurar.',
    text: `Lara ve Kerem komşu binalarda otururmuş.
Bir gece aynı yıldızı işaret etmeye karar vermişler.
Harita çizmiş, açı ölçmüş, fenerle selamlaşmışlar.
Yıldız ikisinin de olmuş — paylaşılınca eksilmeden.
Lara defterine yazmış: "Gökyüzü ortak bahçemiz."
Keşif bazen uzaya gitmek değil, birlikte bakmakmış.`,
  },
]

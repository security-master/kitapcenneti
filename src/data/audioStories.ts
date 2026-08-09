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
  {
    id: 'masal-gen-uyku-1',
    title: 'Uyku Masalı: Elif\'in Yolculuğu',
    emoji: '🌙',
    age: '3-6',
    duration: '3 dk',
    theme: 'Uyku',
    summary: 'Elif, uyku temalı sıcak bir macerada yeni bir şey öğrenir.',
    text: `Bir varmış bir yokmuş, Elif adında meraklı bir çocuk varmış.
Elif, uyku hakkında düşünürken küçük bir sürprizle karşılaşmış.
Önce korkmuş, sonra nefes alıp yardım istemiş.
Arkadaşları ve ailesi birlikte olunca işler kolaylaşmış.
Elif demiş ki: "Her gün küçük bir adım, büyük bir değişim getirir."
Ve o günden sonra uyku ona güzel bir hatırlatma olmuş.
Sen de bugün uyku için minik bir iyilik yapabilirsin.`,
  },
  {
    id: 'masal-gen-dostluk-2',
    title: 'Dostluk Masalı: Deniz\'in Keşfi',
    emoji: '🤝',
    age: '4-8',
    duration: '4 dk',
    theme: 'Dostluk',
    summary: 'Deniz, dostluk temalı sıcak bir macerada yeni bir şey öğrenir.',
    text: `Bir varmış bir yokmuş, Deniz adında meraklı bir çocuk varmış.
Deniz, dostluk hakkında düşünürken küçük bir sürprizle karşılaşmış.
Önce korkmuş, sonra nefes alıp yardım istemiş.
Arkadaşları ve ailesi birlikte olunca işler kolaylaşmış.
Deniz demiş ki: "Her gün küçük bir adım, büyük bir değişim getirir."
Ve o günden sonra dostluk ona güzel bir hatırlatma olmuş.
Sen de bugün dostluk için minik bir iyilik yapabilirsin.`,
  },
  {
    id: 'masal-gen-doga-3',
    title: 'Doğa Masalı: Aras\'in Günü',
    emoji: '🌿',
    age: '4-9',
    duration: '4 dk',
    theme: 'Doğa',
    summary: 'Aras, doğa temalı sıcak bir macerada yeni bir şey öğrenir.',
    text: `Bir varmış bir yokmuş, Aras adında meraklı bir çocuk varmış.
Aras, doğa hakkında düşünürken küçük bir sürprizle karşılaşmış.
Önce korkmuş, sonra nefes alıp yardım istemiş.
Arkadaşları ve ailesi birlikte olunca işler kolaylaşmış.
Aras demiş ki: "Her gün küçük bir adım, büyük bir değişim getirir."
Ve o günden sonra doğa ona güzel bir hatırlatma olmuş.
Sen de bugün doğa için minik bir iyilik yapabilirsin.`,
  },
  {
    id: 'masal-gen-uzay-4',
    title: 'Uzay Masalı: Mira\'in Hikâyesi',
    emoji: '🚀',
    age: '5-10',
    duration: '5 dk',
    theme: 'Uzay',
    summary: 'Mira, uzay temalı sıcak bir macerada yeni bir şey öğrenir.',
    text: `Bir varmış bir yokmuş, Mira adında meraklı bir çocuk varmış.
Mira, uzay hakkında düşünürken küçük bir sürprizle karşılaşmış.
Önce korkmuş, sonra nefes alıp yardım istemiş.
Arkadaşları ve ailesi birlikte olunca işler kolaylaşmış.
Mira demiş ki: "Her gün küçük bir adım, büyük bir değişim getirir."
Ve o günden sonra uzay ona güzel bir hatırlatma olmuş.
Sen de bugün uzay için minik bir iyilik yapabilirsin.`,
  },
  {
    id: 'masal-gen-okul-5',
    title: 'Okul Masalı: Kuzey\'in Macerası',
    emoji: '🎒',
    age: '5-9',
    duration: '4 dk',
    theme: 'Okul',
    summary: 'Kuzey, okul temalı sıcak bir macerada yeni bir şey öğrenir.',
    text: `Bir varmış bir yokmuş, Kuzey adında meraklı bir çocuk varmış.
Kuzey, okul hakkında düşünürken küçük bir sürprizle karşılaşmış.
Önce korkmuş, sonra nefes alıp yardım istemiş.
Arkadaşları ve ailesi birlikte olunca işler kolaylaşmış.
Kuzey demiş ki: "Her gün küçük bir adım, büyük bir değişim getirir."
Ve o günden sonra okul ona güzel bir hatırlatma olmuş.
Sen de bugün okul için minik bir iyilik yapabilirsin.`,
  },
  {
    id: 'masal-gen-duygu-6',
    title: 'Duygu Masalı: Defne\'in Yolculuğu',
    emoji: '💛',
    age: '4-8',
    duration: '4 dk',
    theme: 'Duygu',
    summary: 'Defne, duygu temalı sıcak bir macerada yeni bir şey öğrenir.',
    text: `Bir varmış bir yokmuş, Defne adında meraklı bir çocuk varmış.
Defne, duygu hakkında düşünürken küçük bir sürprizle karşılaşmış.
Önce korkmuş, sonra nefes alıp yardım istemiş.
Arkadaşları ve ailesi birlikte olunca işler kolaylaşmış.
Defne demiş ki: "Her gün küçük bir adım, büyük bir değişim getirir."
Ve o günden sonra duygu ona güzel bir hatırlatma olmuş.
Sen de bugün duygu için minik bir iyilik yapabilirsin.`,
  },
  {
    id: 'masal-gen-macera-7',
    title: 'Macera Masalı: Alp\'in Keşfi',
    emoji: '🗺️',
    age: '6-11',
    duration: '5 dk',
    theme: 'Macera',
    summary: 'Alp, macera temalı sıcak bir macerada yeni bir şey öğrenir.',
    text: `Bir varmış bir yokmuş, Alp adında meraklı bir çocuk varmış.
Alp, macera hakkında düşünürken küçük bir sürprizle karşılaşmış.
Önce korkmuş, sonra nefes alıp yardım istemiş.
Arkadaşları ve ailesi birlikte olunca işler kolaylaşmış.
Alp demiş ki: "Her gün küçük bir adım, büyük bir değişim getirir."
Ve o günden sonra macera ona güzel bir hatırlatma olmuş.
Sen de bugün macera için minik bir iyilik yapabilirsin.`,
  },
  {
    id: 'masal-gen-hayvan-8',
    title: 'Hayvan Masalı: Ece\'in Günü',
    emoji: '🐾',
    age: '3-7',
    duration: '3 dk',
    theme: 'Hayvan',
    summary: 'Ece, hayvan temalı sıcak bir macerada yeni bir şey öğrenir.',
    text: `Bir varmış bir yokmuş, Ece adında meraklı bir çocuk varmış.
Ece, hayvan hakkında düşünürken küçük bir sürprizle karşılaşmış.
Önce korkmuş, sonra nefes alıp yardım istemiş.
Arkadaşları ve ailesi birlikte olunca işler kolaylaşmış.
Ece demiş ki: "Her gün küçük bir adım, büyük bir değişim getirir."
Ve o günden sonra hayvan ona güzel bir hatırlatma olmuş.
Sen de bugün hayvan için minik bir iyilik yapabilirsin.`,
  },
  {
    id: 'masal-gen-deniz-9',
    title: 'Deniz Masalı: Barış\'in Hikâyesi',
    emoji: '🌊',
    age: '4-9',
    duration: '4 dk',
    theme: 'Deniz',
    summary: 'Barış, deniz temalı sıcak bir macerada yeni bir şey öğrenir.',
    text: `Bir varmış bir yokmuş, Barış adında meraklı bir çocuk varmış.
Barış, deniz hakkında düşünürken küçük bir sürprizle karşılaşmış.
Önce korkmuş, sonra nefes alıp yardım istemiş.
Arkadaşları ve ailesi birlikte olunca işler kolaylaşmış.
Barış demiş ki: "Her gün küçük bir adım, büyük bir değişim getirir."
Ve o günden sonra deniz ona güzel bir hatırlatma olmuş.
Sen de bugün deniz için minik bir iyilik yapabilirsin.`,
  },
  {
    id: 'masal-gen-mevsim-10',
    title: 'Mevsim Masalı: Selin\'in Macerası',
    emoji: '🍂',
    age: '4-8',
    duration: '4 dk',
    theme: 'Mevsim',
    summary: 'Selin, mevsim temalı sıcak bir macerada yeni bir şey öğrenir.',
    text: `Bir varmış bir yokmuş, Selin adında meraklı bir çocuk varmış.
Selin, mevsim hakkında düşünürken küçük bir sürprizle karşılaşmış.
Önce korkmuş, sonra nefes alıp yardım istemiş.
Arkadaşları ve ailesi birlikte olunca işler kolaylaşmış.
Selin demiş ki: "Her gün küçük bir adım, büyük bir değişim getirir."
Ve o günden sonra mevsim ona güzel bir hatırlatma olmuş.
Sen de bugün mevsim için minik bir iyilik yapabilirsin.`,
  },
  {
    id: 'masal-gen-uyku-11',
    title: 'Uyku Masalı: Can\'in Yolculuğu',
    emoji: '🌙',
    age: '3-6',
    duration: '3 dk',
    theme: 'Uyku',
    summary: 'Can, uyku temalı sıcak bir macerada yeni bir şey öğrenir.',
    text: `Bir varmış bir yokmuş, Can adında meraklı bir çocuk varmış.
Can, uyku hakkında düşünürken küçük bir sürprizle karşılaşmış.
Önce korkmuş, sonra nefes alıp yardım istemiş.
Arkadaşları ve ailesi birlikte olunca işler kolaylaşmış.
Can demiş ki: "Her gün küçük bir adım, büyük bir değişim getirir."
Ve o günden sonra uyku ona güzel bir hatırlatma olmuş.
Sen de bugün uyku için minik bir iyilik yapabilirsin.`,
  },
  {
    id: 'masal-gen-dostluk-12',
    title: 'Dostluk Masalı: Naz\'in Keşfi',
    emoji: '🤝',
    age: '4-8',
    duration: '4 dk',
    theme: 'Dostluk',
    summary: 'Naz, dostluk temalı sıcak bir macerada yeni bir şey öğrenir.',
    text: `Bir varmış bir yokmuş, Naz adında meraklı bir çocuk varmış.
Naz, dostluk hakkında düşünürken küçük bir sürprizle karşılaşmış.
Önce korkmuş, sonra nefes alıp yardım istemiş.
Arkadaşları ve ailesi birlikte olunca işler kolaylaşmış.
Naz demiş ki: "Her gün küçük bir adım, büyük bir değişim getirir."
Ve o günden sonra dostluk ona güzel bir hatırlatma olmuş.
Sen de bugün dostluk için minik bir iyilik yapabilirsin.`,
  },
  {
    id: 'masal-gen-doga-13',
    title: 'Doğa Masalı: Emre\'in Günü',
    emoji: '🌿',
    age: '4-9',
    duration: '4 dk',
    theme: 'Doğa',
    summary: 'Emre, doğa temalı sıcak bir macerada yeni bir şey öğrenir.',
    text: `Bir varmış bir yokmuş, Emre adında meraklı bir çocuk varmış.
Emre, doğa hakkında düşünürken küçük bir sürprizle karşılaşmış.
Önce korkmuş, sonra nefes alıp yardım istemiş.
Arkadaşları ve ailesi birlikte olunca işler kolaylaşmış.
Emre demiş ki: "Her gün küçük bir adım, büyük bir değişim getirir."
Ve o günden sonra doğa ona güzel bir hatırlatma olmuş.
Sen de bugün doğa için minik bir iyilik yapabilirsin.`,
  },
  {
    id: 'masal-gen-uzay-14',
    title: 'Uzay Masalı: Zeynep\'in Hikâyesi',
    emoji: '🚀',
    age: '5-10',
    duration: '5 dk',
    theme: 'Uzay',
    summary: 'Zeynep, uzay temalı sıcak bir macerada yeni bir şey öğrenir.',
    text: `Bir varmış bir yokmuş, Zeynep adında meraklı bir çocuk varmış.
Zeynep, uzay hakkında düşünürken küçük bir sürprizle karşılaşmış.
Önce korkmuş, sonra nefes alıp yardım istemiş.
Arkadaşları ve ailesi birlikte olunca işler kolaylaşmış.
Zeynep demiş ki: "Her gün küçük bir adım, büyük bir değişim getirir."
Ve o günden sonra uzay ona güzel bir hatırlatma olmuş.
Sen de bugün uzay için minik bir iyilik yapabilirsin.`,
  },
  {
    id: 'masal-gen-okul-15',
    title: 'Okul Masalı: Kaan\'in Macerası',
    emoji: '🎒',
    age: '5-9',
    duration: '4 dk',
    theme: 'Okul',
    summary: 'Kaan, okul temalı sıcak bir macerada yeni bir şey öğrenir.',
    text: `Bir varmış bir yokmuş, Kaan adında meraklı bir çocuk varmış.
Kaan, okul hakkında düşünürken küçük bir sürprizle karşılaşmış.
Önce korkmuş, sonra nefes alıp yardım istemiş.
Arkadaşları ve ailesi birlikte olunca işler kolaylaşmış.
Kaan demiş ki: "Her gün küçük bir adım, büyük bir değişim getirir."
Ve o günden sonra okul ona güzel bir hatırlatma olmuş.
Sen de bugün okul için minik bir iyilik yapabilirsin.`,
  },
  {
    id: 'masal-gen-duygu-16',
    title: 'Duygu Masalı: Yasemin\'in Yolculuğu',
    emoji: '💛',
    age: '4-8',
    duration: '4 dk',
    theme: 'Duygu',
    summary: 'Yasemin, duygu temalı sıcak bir macerada yeni bir şey öğrenir.',
    text: `Bir varmış bir yokmuş, Yasemin adında meraklı bir çocuk varmış.
Yasemin, duygu hakkında düşünürken küçük bir sürprizle karşılaşmış.
Önce korkmuş, sonra nefes alıp yardım istemiş.
Arkadaşları ve ailesi birlikte olunca işler kolaylaşmış.
Yasemin demiş ki: "Her gün küçük bir adım, büyük bir değişim getirir."
Ve o günden sonra duygu ona güzel bir hatırlatma olmuş.
Sen de bugün duygu için minik bir iyilik yapabilirsin.`,
  },
  {
    id: 'masal-gen-macera-17',
    title: 'Macera Masalı: Derin\'in Keşfi',
    emoji: '🗺️',
    age: '6-11',
    duration: '5 dk',
    theme: 'Macera',
    summary: 'Derin, macera temalı sıcak bir macerada yeni bir şey öğrenir.',
    text: `Bir varmış bir yokmuş, Derin adında meraklı bir çocuk varmış.
Derin, macera hakkında düşünürken küçük bir sürprizle karşılaşmış.
Önce korkmuş, sonra nefes alıp yardım istemiş.
Arkadaşları ve ailesi birlikte olunca işler kolaylaşmış.
Derin demiş ki: "Her gün küçük bir adım, büyük bir değişim getirir."
Ve o günden sonra macera ona güzel bir hatırlatma olmuş.
Sen de bugün macera için minik bir iyilik yapabilirsin.`,
  },
  {
    id: 'masal-gen-hayvan-18',
    title: 'Hayvan Masalı: Umut\'in Günü',
    emoji: '🐾',
    age: '3-7',
    duration: '3 dk',
    theme: 'Hayvan',
    summary: 'Umut, hayvan temalı sıcak bir macerada yeni bir şey öğrenir.',
    text: `Bir varmış bir yokmuş, Umut adında meraklı bir çocuk varmış.
Umut, hayvan hakkında düşünürken küçük bir sürprizle karşılaşmış.
Önce korkmuş, sonra nefes alıp yardım istemiş.
Arkadaşları ve ailesi birlikte olunca işler kolaylaşmış.
Umut demiş ki: "Her gün küçük bir adım, büyük bir değişim getirir."
Ve o günden sonra hayvan ona güzel bir hatırlatma olmuş.
Sen de bugün hayvan için minik bir iyilik yapabilirsin.`,
  },
  {
    id: 'masal-gen-deniz-19',
    title: 'Deniz Masalı: Lale\'in Hikâyesi',
    emoji: '🌊',
    age: '4-9',
    duration: '4 dk',
    theme: 'Deniz',
    summary: 'Lale, deniz temalı sıcak bir macerada yeni bir şey öğrenir.',
    text: `Bir varmış bir yokmuş, Lale adında meraklı bir çocuk varmış.
Lale, deniz hakkında düşünürken küçük bir sürprizle karşılaşmış.
Önce korkmuş, sonra nefes alıp yardım istemiş.
Arkadaşları ve ailesi birlikte olunca işler kolaylaşmış.
Lale demiş ki: "Her gün küçük bir adım, büyük bir değişim getirir."
Ve o günden sonra deniz ona güzel bir hatırlatma olmuş.
Sen de bugün deniz için minik bir iyilik yapabilirsin.`,
  },
  {
    id: 'masal-gen-mevsim-20',
    title: 'Mevsim Masalı: Poyraz\'in Macerası',
    emoji: '🍂',
    age: '4-8',
    duration: '4 dk',
    theme: 'Mevsim',
    summary: 'Poyraz, mevsim temalı sıcak bir macerada yeni bir şey öğrenir.',
    text: `Bir varmış bir yokmuş, Poyraz adında meraklı bir çocuk varmış.
Poyraz, mevsim hakkında düşünürken küçük bir sürprizle karşılaşmış.
Önce korkmuş, sonra nefes alıp yardım istemiş.
Arkadaşları ve ailesi birlikte olunca işler kolaylaşmış.
Poyraz demiş ki: "Her gün küçük bir adım, büyük bir değişim getirir."
Ve o günden sonra mevsim ona güzel bir hatırlatma olmuş.
Sen de bugün mevsim için minik bir iyilik yapabilirsin.`,
  },
  {
    id: 'masal-gen-uyku-21',
    title: 'Uyku Masalı: Elif\'in Yolculuğu',
    emoji: '🌙',
    age: '3-6',
    duration: '3 dk',
    theme: 'Uyku',
    summary: 'Elif, uyku temalı sıcak bir macerada yeni bir şey öğrenir.',
    text: `Bir varmış bir yokmuş, Elif adında meraklı bir çocuk varmış.
Elif, uyku hakkında düşünürken küçük bir sürprizle karşılaşmış.
Önce korkmuş, sonra nefes alıp yardım istemiş.
Arkadaşları ve ailesi birlikte olunca işler kolaylaşmış.
Elif demiş ki: "Her gün küçük bir adım, büyük bir değişim getirir."
Ve o günden sonra uyku ona güzel bir hatırlatma olmuş.
Sen de bugün uyku için minik bir iyilik yapabilirsin.`,
  },
  {
    id: 'masal-gen-dostluk-22',
    title: 'Dostluk Masalı: Deniz\'in Keşfi',
    emoji: '🤝',
    age: '4-8',
    duration: '4 dk',
    theme: 'Dostluk',
    summary: 'Deniz, dostluk temalı sıcak bir macerada yeni bir şey öğrenir.',
    text: `Bir varmış bir yokmuş, Deniz adında meraklı bir çocuk varmış.
Deniz, dostluk hakkında düşünürken küçük bir sürprizle karşılaşmış.
Önce korkmuş, sonra nefes alıp yardım istemiş.
Arkadaşları ve ailesi birlikte olunca işler kolaylaşmış.
Deniz demiş ki: "Her gün küçük bir adım, büyük bir değişim getirir."
Ve o günden sonra dostluk ona güzel bir hatırlatma olmuş.
Sen de bugün dostluk için minik bir iyilik yapabilirsin.`,
  },
  {
    id: 'masal-gen-doga-23',
    title: 'Doğa Masalı: Aras\'in Günü',
    emoji: '🌿',
    age: '4-9',
    duration: '4 dk',
    theme: 'Doğa',
    summary: 'Aras, doğa temalı sıcak bir macerada yeni bir şey öğrenir.',
    text: `Bir varmış bir yokmuş, Aras adında meraklı bir çocuk varmış.
Aras, doğa hakkında düşünürken küçük bir sürprizle karşılaşmış.
Önce korkmuş, sonra nefes alıp yardım istemiş.
Arkadaşları ve ailesi birlikte olunca işler kolaylaşmış.
Aras demiş ki: "Her gün küçük bir adım, büyük bir değişim getirir."
Ve o günden sonra doğa ona güzel bir hatırlatma olmuş.
Sen de bugün doğa için minik bir iyilik yapabilirsin.`,
  },
  {
    id: 'masal-gen-uzay-24',
    title: 'Uzay Masalı: Mira\'in Hikâyesi',
    emoji: '🚀',
    age: '5-10',
    duration: '5 dk',
    theme: 'Uzay',
    summary: 'Mira, uzay temalı sıcak bir macerada yeni bir şey öğrenir.',
    text: `Bir varmış bir yokmuş, Mira adında meraklı bir çocuk varmış.
Mira, uzay hakkında düşünürken küçük bir sürprizle karşılaşmış.
Önce korkmuş, sonra nefes alıp yardım istemiş.
Arkadaşları ve ailesi birlikte olunca işler kolaylaşmış.
Mira demiş ki: "Her gün küçük bir adım, büyük bir değişim getirir."
Ve o günden sonra uzay ona güzel bir hatırlatma olmuş.
Sen de bugün uzay için minik bir iyilik yapabilirsin.`,
  },
  {
    id: 'masal-gen-okul-25',
    title: 'Okul Masalı: Kuzey\'in Macerası',
    emoji: '🎒',
    age: '5-9',
    duration: '4 dk',
    theme: 'Okul',
    summary: 'Kuzey, okul temalı sıcak bir macerada yeni bir şey öğrenir.',
    text: `Bir varmış bir yokmuş, Kuzey adında meraklı bir çocuk varmış.
Kuzey, okul hakkında düşünürken küçük bir sürprizle karşılaşmış.
Önce korkmuş, sonra nefes alıp yardım istemiş.
Arkadaşları ve ailesi birlikte olunca işler kolaylaşmış.
Kuzey demiş ki: "Her gün küçük bir adım, büyük bir değişim getirir."
Ve o günden sonra okul ona güzel bir hatırlatma olmuş.
Sen de bugün okul için minik bir iyilik yapabilirsin.`,
  },
  {
    id: 'masal-gen-duygu-26',
    title: 'Duygu Masalı: Defne\'in Yolculuğu',
    emoji: '💛',
    age: '4-8',
    duration: '4 dk',
    theme: 'Duygu',
    summary: 'Defne, duygu temalı sıcak bir macerada yeni bir şey öğrenir.',
    text: `Bir varmış bir yokmuş, Defne adında meraklı bir çocuk varmış.
Defne, duygu hakkında düşünürken küçük bir sürprizle karşılaşmış.
Önce korkmuş, sonra nefes alıp yardım istemiş.
Arkadaşları ve ailesi birlikte olunca işler kolaylaşmış.
Defne demiş ki: "Her gün küçük bir adım, büyük bir değişim getirir."
Ve o günden sonra duygu ona güzel bir hatırlatma olmuş.
Sen de bugün duygu için minik bir iyilik yapabilirsin.`,
  },
  {
    id: 'masal-gen-macera-27',
    title: 'Macera Masalı: Alp\'in Keşfi',
    emoji: '🗺️',
    age: '6-11',
    duration: '5 dk',
    theme: 'Macera',
    summary: 'Alp, macera temalı sıcak bir macerada yeni bir şey öğrenir.',
    text: `Bir varmış bir yokmuş, Alp adında meraklı bir çocuk varmış.
Alp, macera hakkında düşünürken küçük bir sürprizle karşılaşmış.
Önce korkmuş, sonra nefes alıp yardım istemiş.
Arkadaşları ve ailesi birlikte olunca işler kolaylaşmış.
Alp demiş ki: "Her gün küçük bir adım, büyük bir değişim getirir."
Ve o günden sonra macera ona güzel bir hatırlatma olmuş.
Sen de bugün macera için minik bir iyilik yapabilirsin.`,
  },
  {
    id: 'masal-gen-hayvan-28',
    title: 'Hayvan Masalı: Ece\'in Günü',
    emoji: '🐾',
    age: '3-7',
    duration: '3 dk',
    theme: 'Hayvan',
    summary: 'Ece, hayvan temalı sıcak bir macerada yeni bir şey öğrenir.',
    text: `Bir varmış bir yokmuş, Ece adında meraklı bir çocuk varmış.
Ece, hayvan hakkında düşünürken küçük bir sürprizle karşılaşmış.
Önce korkmuş, sonra nefes alıp yardım istemiş.
Arkadaşları ve ailesi birlikte olunca işler kolaylaşmış.
Ece demiş ki: "Her gün küçük bir adım, büyük bir değişim getirir."
Ve o günden sonra hayvan ona güzel bir hatırlatma olmuş.
Sen de bugün hayvan için minik bir iyilik yapabilirsin.`,
  },
  {
    id: 'masal-gen-deniz-29',
    title: 'Deniz Masalı: Barış\'in Hikâyesi',
    emoji: '🌊',
    age: '4-9',
    duration: '4 dk',
    theme: 'Deniz',
    summary: 'Barış, deniz temalı sıcak bir macerada yeni bir şey öğrenir.',
    text: `Bir varmış bir yokmuş, Barış adında meraklı bir çocuk varmış.
Barış, deniz hakkında düşünürken küçük bir sürprizle karşılaşmış.
Önce korkmuş, sonra nefes alıp yardım istemiş.
Arkadaşları ve ailesi birlikte olunca işler kolaylaşmış.
Barış demiş ki: "Her gün küçük bir adım, büyük bir değişim getirir."
Ve o günden sonra deniz ona güzel bir hatırlatma olmuş.
Sen de bugün deniz için minik bir iyilik yapabilirsin.`,
  },
  {
    id: 'masal-gen-mevsim-30',
    title: 'Mevsim Masalı: Selin\'in Macerası',
    emoji: '🍂',
    age: '4-8',
    duration: '4 dk',
    theme: 'Mevsim',
    summary: 'Selin, mevsim temalı sıcak bir macerada yeni bir şey öğrenir.',
    text: `Bir varmış bir yokmuş, Selin adında meraklı bir çocuk varmış.
Selin, mevsim hakkında düşünürken küçük bir sürprizle karşılaşmış.
Önce korkmuş, sonra nefes alıp yardım istemiş.
Arkadaşları ve ailesi birlikte olunca işler kolaylaşmış.
Selin demiş ki: "Her gün küçük bir adım, büyük bir değişim getirir."
Ve o günden sonra mevsim ona güzel bir hatırlatma olmuş.
Sen de bugün mevsim için minik bir iyilik yapabilirsin.`,
  },
  {
    id: 'masal-gen-uyku-31',
    title: 'Uyku Masalı: Can\'in Yolculuğu',
    emoji: '🌙',
    age: '3-6',
    duration: '3 dk',
    theme: 'Uyku',
    summary: 'Can, uyku temalı sıcak bir macerada yeni bir şey öğrenir.',
    text: `Bir varmış bir yokmuş, Can adında meraklı bir çocuk varmış.
Can, uyku hakkında düşünürken küçük bir sürprizle karşılaşmış.
Önce korkmuş, sonra nefes alıp yardım istemiş.
Arkadaşları ve ailesi birlikte olunca işler kolaylaşmış.
Can demiş ki: "Her gün küçük bir adım, büyük bir değişim getirir."
Ve o günden sonra uyku ona güzel bir hatırlatma olmuş.
Sen de bugün uyku için minik bir iyilik yapabilirsin.`,
  },
  {
    id: 'masal-gen-dostluk-32',
    title: 'Dostluk Masalı: Naz\'in Keşfi',
    emoji: '🤝',
    age: '4-8',
    duration: '4 dk',
    theme: 'Dostluk',
    summary: 'Naz, dostluk temalı sıcak bir macerada yeni bir şey öğrenir.',
    text: `Bir varmış bir yokmuş, Naz adında meraklı bir çocuk varmış.
Naz, dostluk hakkında düşünürken küçük bir sürprizle karşılaşmış.
Önce korkmuş, sonra nefes alıp yardım istemiş.
Arkadaşları ve ailesi birlikte olunca işler kolaylaşmış.
Naz demiş ki: "Her gün küçük bir adım, büyük bir değişim getirir."
Ve o günden sonra dostluk ona güzel bir hatırlatma olmuş.
Sen de bugün dostluk için minik bir iyilik yapabilirsin.`,
  },
  {
    id: 'masal-gen-doga-33',
    title: 'Doğa Masalı: Emre\'in Günü',
    emoji: '🌿',
    age: '4-9',
    duration: '4 dk',
    theme: 'Doğa',
    summary: 'Emre, doğa temalı sıcak bir macerada yeni bir şey öğrenir.',
    text: `Bir varmış bir yokmuş, Emre adında meraklı bir çocuk varmış.
Emre, doğa hakkında düşünürken küçük bir sürprizle karşılaşmış.
Önce korkmuş, sonra nefes alıp yardım istemiş.
Arkadaşları ve ailesi birlikte olunca işler kolaylaşmış.
Emre demiş ki: "Her gün küçük bir adım, büyük bir değişim getirir."
Ve o günden sonra doğa ona güzel bir hatırlatma olmuş.
Sen de bugün doğa için minik bir iyilik yapabilirsin.`,
  },
  {
    id: 'masal-gen-uzay-34',
    title: 'Uzay Masalı: Zeynep\'in Hikâyesi',
    emoji: '🚀',
    age: '5-10',
    duration: '5 dk',
    theme: 'Uzay',
    summary: 'Zeynep, uzay temalı sıcak bir macerada yeni bir şey öğrenir.',
    text: `Bir varmış bir yokmuş, Zeynep adında meraklı bir çocuk varmış.
Zeynep, uzay hakkında düşünürken küçük bir sürprizle karşılaşmış.
Önce korkmuş, sonra nefes alıp yardım istemiş.
Arkadaşları ve ailesi birlikte olunca işler kolaylaşmış.
Zeynep demiş ki: "Her gün küçük bir adım, büyük bir değişim getirir."
Ve o günden sonra uzay ona güzel bir hatırlatma olmuş.
Sen de bugün uzay için minik bir iyilik yapabilirsin.`,
  },
  {
    id: 'masal-gen-okul-35',
    title: 'Okul Masalı: Kaan\'in Macerası',
    emoji: '🎒',
    age: '5-9',
    duration: '4 dk',
    theme: 'Okul',
    summary: 'Kaan, okul temalı sıcak bir macerada yeni bir şey öğrenir.',
    text: `Bir varmış bir yokmuş, Kaan adında meraklı bir çocuk varmış.
Kaan, okul hakkında düşünürken küçük bir sürprizle karşılaşmış.
Önce korkmuş, sonra nefes alıp yardım istemiş.
Arkadaşları ve ailesi birlikte olunca işler kolaylaşmış.
Kaan demiş ki: "Her gün küçük bir adım, büyük bir değişim getirir."
Ve o günden sonra okul ona güzel bir hatırlatma olmuş.
Sen de bugün okul için minik bir iyilik yapabilirsin.`,
  },
  {
    id: 'masal-gen-duygu-36',
    title: 'Duygu Masalı: Yasemin\'in Yolculuğu',
    emoji: '💛',
    age: '4-8',
    duration: '4 dk',
    theme: 'Duygu',
    summary: 'Yasemin, duygu temalı sıcak bir macerada yeni bir şey öğrenir.',
    text: `Bir varmış bir yokmuş, Yasemin adında meraklı bir çocuk varmış.
Yasemin, duygu hakkında düşünürken küçük bir sürprizle karşılaşmış.
Önce korkmuş, sonra nefes alıp yardım istemiş.
Arkadaşları ve ailesi birlikte olunca işler kolaylaşmış.
Yasemin demiş ki: "Her gün küçük bir adım, büyük bir değişim getirir."
Ve o günden sonra duygu ona güzel bir hatırlatma olmuş.
Sen de bugün duygu için minik bir iyilik yapabilirsin.`,
  },
  {
    id: 'masal-gen-macera-37',
    title: 'Macera Masalı: Derin\'in Keşfi',
    emoji: '🗺️',
    age: '6-11',
    duration: '5 dk',
    theme: 'Macera',
    summary: 'Derin, macera temalı sıcak bir macerada yeni bir şey öğrenir.',
    text: `Bir varmış bir yokmuş, Derin adında meraklı bir çocuk varmış.
Derin, macera hakkında düşünürken küçük bir sürprizle karşılaşmış.
Önce korkmuş, sonra nefes alıp yardım istemiş.
Arkadaşları ve ailesi birlikte olunca işler kolaylaşmış.
Derin demiş ki: "Her gün küçük bir adım, büyük bir değişim getirir."
Ve o günden sonra macera ona güzel bir hatırlatma olmuş.
Sen de bugün macera için minik bir iyilik yapabilirsin.`,
  },
  {
    id: 'masal-gen-hayvan-38',
    title: 'Hayvan Masalı: Umut\'in Günü',
    emoji: '🐾',
    age: '3-7',
    duration: '3 dk',
    theme: 'Hayvan',
    summary: 'Umut, hayvan temalı sıcak bir macerada yeni bir şey öğrenir.',
    text: `Bir varmış bir yokmuş, Umut adında meraklı bir çocuk varmış.
Umut, hayvan hakkında düşünürken küçük bir sürprizle karşılaşmış.
Önce korkmuş, sonra nefes alıp yardım istemiş.
Arkadaşları ve ailesi birlikte olunca işler kolaylaşmış.
Umut demiş ki: "Her gün küçük bir adım, büyük bir değişim getirir."
Ve o günden sonra hayvan ona güzel bir hatırlatma olmuş.
Sen de bugün hayvan için minik bir iyilik yapabilirsin.`,
  },
  {
    id: 'masal-gen-deniz-39',
    title: 'Deniz Masalı: Lale\'in Hikâyesi',
    emoji: '🌊',
    age: '4-9',
    duration: '4 dk',
    theme: 'Deniz',
    summary: 'Lale, deniz temalı sıcak bir macerada yeni bir şey öğrenir.',
    text: `Bir varmış bir yokmuş, Lale adında meraklı bir çocuk varmış.
Lale, deniz hakkında düşünürken küçük bir sürprizle karşılaşmış.
Önce korkmuş, sonra nefes alıp yardım istemiş.
Arkadaşları ve ailesi birlikte olunca işler kolaylaşmış.
Lale demiş ki: "Her gün küçük bir adım, büyük bir değişim getirir."
Ve o günden sonra deniz ona güzel bir hatırlatma olmuş.
Sen de bugün deniz için minik bir iyilik yapabilirsin.`,
  },
  {
    id: 'masal-gen-mevsim-40',
    title: 'Mevsim Masalı: Poyraz\'in Macerası',
    emoji: '🍂',
    age: '4-8',
    duration: '4 dk',
    theme: 'Mevsim',
    summary: 'Poyraz, mevsim temalı sıcak bir macerada yeni bir şey öğrenir.',
    text: `Bir varmış bir yokmuş, Poyraz adında meraklı bir çocuk varmış.
Poyraz, mevsim hakkında düşünürken küçük bir sürprizle karşılaşmış.
Önce korkmuş, sonra nefes alıp yardım istemiş.
Arkadaşları ve ailesi birlikte olunca işler kolaylaşmış.
Poyraz demiş ki: "Her gün küçük bir adım, büyük bir değişim getirir."
Ve o günden sonra mevsim ona güzel bir hatırlatma olmuş.
Sen de bugün mevsim için minik bir iyilik yapabilirsin.`,
  },
  {
    id: 'masal-gen-uyku-41',
    title: 'Uyku Masalı: Elif\'in Yolculuğu',
    emoji: '🌙',
    age: '3-6',
    duration: '3 dk',
    theme: 'Uyku',
    summary: 'Elif, uyku temalı sıcak bir macerada yeni bir şey öğrenir.',
    text: `Bir varmış bir yokmuş, Elif adında meraklı bir çocuk varmış.
Elif, uyku hakkında düşünürken küçük bir sürprizle karşılaşmış.
Önce korkmuş, sonra nefes alıp yardım istemiş.
Arkadaşları ve ailesi birlikte olunca işler kolaylaşmış.
Elif demiş ki: "Her gün küçük bir adım, büyük bir değişim getirir."
Ve o günden sonra uyku ona güzel bir hatırlatma olmuş.
Sen de bugün uyku için minik bir iyilik yapabilirsin.`,
  },
  {
    id: 'masal-gen-dostluk-42',
    title: 'Dostluk Masalı: Deniz\'in Keşfi',
    emoji: '🤝',
    age: '4-8',
    duration: '4 dk',
    theme: 'Dostluk',
    summary: 'Deniz, dostluk temalı sıcak bir macerada yeni bir şey öğrenir.',
    text: `Bir varmış bir yokmuş, Deniz adında meraklı bir çocuk varmış.
Deniz, dostluk hakkında düşünürken küçük bir sürprizle karşılaşmış.
Önce korkmuş, sonra nefes alıp yardım istemiş.
Arkadaşları ve ailesi birlikte olunca işler kolaylaşmış.
Deniz demiş ki: "Her gün küçük bir adım, büyük bir değişim getirir."
Ve o günden sonra dostluk ona güzel bir hatırlatma olmuş.
Sen de bugün dostluk için minik bir iyilik yapabilirsin.`,
  },
  {
    id: 'masal-gen-doga-43',
    title: 'Doğa Masalı: Aras\'in Günü',
    emoji: '🌿',
    age: '4-9',
    duration: '4 dk',
    theme: 'Doğa',
    summary: 'Aras, doğa temalı sıcak bir macerada yeni bir şey öğrenir.',
    text: `Bir varmış bir yokmuş, Aras adında meraklı bir çocuk varmış.
Aras, doğa hakkında düşünürken küçük bir sürprizle karşılaşmış.
Önce korkmuş, sonra nefes alıp yardım istemiş.
Arkadaşları ve ailesi birlikte olunca işler kolaylaşmış.
Aras demiş ki: "Her gün küçük bir adım, büyük bir değişim getirir."
Ve o günden sonra doğa ona güzel bir hatırlatma olmuş.
Sen de bugün doğa için minik bir iyilik yapabilirsin.`,
  },
  {
    id: 'masal-gen-uzay-44',
    title: 'Uzay Masalı: Mira\'in Hikâyesi',
    emoji: '🚀',
    age: '5-10',
    duration: '5 dk',
    theme: 'Uzay',
    summary: 'Mira, uzay temalı sıcak bir macerada yeni bir şey öğrenir.',
    text: `Bir varmış bir yokmuş, Mira adında meraklı bir çocuk varmış.
Mira, uzay hakkında düşünürken küçük bir sürprizle karşılaşmış.
Önce korkmuş, sonra nefes alıp yardım istemiş.
Arkadaşları ve ailesi birlikte olunca işler kolaylaşmış.
Mira demiş ki: "Her gün küçük bir adım, büyük bir değişim getirir."
Ve o günden sonra uzay ona güzel bir hatırlatma olmuş.
Sen de bugün uzay için minik bir iyilik yapabilirsin.`,
  },
  {
    id: 'masal-gen-okul-45',
    title: 'Okul Masalı: Kuzey\'in Macerası',
    emoji: '🎒',
    age: '5-9',
    duration: '4 dk',
    theme: 'Okul',
    summary: 'Kuzey, okul temalı sıcak bir macerada yeni bir şey öğrenir.',
    text: `Bir varmış bir yokmuş, Kuzey adında meraklı bir çocuk varmış.
Kuzey, okul hakkında düşünürken küçük bir sürprizle karşılaşmış.
Önce korkmuş, sonra nefes alıp yardım istemiş.
Arkadaşları ve ailesi birlikte olunca işler kolaylaşmış.
Kuzey demiş ki: "Her gün küçük bir adım, büyük bir değişim getirir."
Ve o günden sonra okul ona güzel bir hatırlatma olmuş.
Sen de bugün okul için minik bir iyilik yapabilirsin.`,
  },
  {
    id: 'masal-gen-duygu-46',
    title: 'Duygu Masalı: Defne\'in Yolculuğu',
    emoji: '💛',
    age: '4-8',
    duration: '4 dk',
    theme: 'Duygu',
    summary: 'Defne, duygu temalı sıcak bir macerada yeni bir şey öğrenir.',
    text: `Bir varmış bir yokmuş, Defne adında meraklı bir çocuk varmış.
Defne, duygu hakkında düşünürken küçük bir sürprizle karşılaşmış.
Önce korkmuş, sonra nefes alıp yardım istemiş.
Arkadaşları ve ailesi birlikte olunca işler kolaylaşmış.
Defne demiş ki: "Her gün küçük bir adım, büyük bir değişim getirir."
Ve o günden sonra duygu ona güzel bir hatırlatma olmuş.
Sen de bugün duygu için minik bir iyilik yapabilirsin.`,
  },
  {
    id: 'masal-gen-macera-47',
    title: 'Macera Masalı: Alp\'in Keşfi',
    emoji: '🗺️',
    age: '6-11',
    duration: '5 dk',
    theme: 'Macera',
    summary: 'Alp, macera temalı sıcak bir macerada yeni bir şey öğrenir.',
    text: `Bir varmış bir yokmuş, Alp adında meraklı bir çocuk varmış.
Alp, macera hakkında düşünürken küçük bir sürprizle karşılaşmış.
Önce korkmuş, sonra nefes alıp yardım istemiş.
Arkadaşları ve ailesi birlikte olunca işler kolaylaşmış.
Alp demiş ki: "Her gün küçük bir adım, büyük bir değişim getirir."
Ve o günden sonra macera ona güzel bir hatırlatma olmuş.
Sen de bugün macera için minik bir iyilik yapabilirsin.`,
  },
  {
    id: 'masal-gen-hayvan-48',
    title: 'Hayvan Masalı: Ece\'in Günü',
    emoji: '🐾',
    age: '3-7',
    duration: '3 dk',
    theme: 'Hayvan',
    summary: 'Ece, hayvan temalı sıcak bir macerada yeni bir şey öğrenir.',
    text: `Bir varmış bir yokmuş, Ece adında meraklı bir çocuk varmış.
Ece, hayvan hakkında düşünürken küçük bir sürprizle karşılaşmış.
Önce korkmuş, sonra nefes alıp yardım istemiş.
Arkadaşları ve ailesi birlikte olunca işler kolaylaşmış.
Ece demiş ki: "Her gün küçük bir adım, büyük bir değişim getirir."
Ve o günden sonra hayvan ona güzel bir hatırlatma olmuş.
Sen de bugün hayvan için minik bir iyilik yapabilirsin.`,
  },
  {
    id: 'masal-gen-deniz-49',
    title: 'Deniz Masalı: Barış\'in Hikâyesi',
    emoji: '🌊',
    age: '4-9',
    duration: '4 dk',
    theme: 'Deniz',
    summary: 'Barış, deniz temalı sıcak bir macerada yeni bir şey öğrenir.',
    text: `Bir varmış bir yokmuş, Barış adında meraklı bir çocuk varmış.
Barış, deniz hakkında düşünürken küçük bir sürprizle karşılaşmış.
Önce korkmuş, sonra nefes alıp yardım istemiş.
Arkadaşları ve ailesi birlikte olunca işler kolaylaşmış.
Barış demiş ki: "Her gün küçük bir adım, büyük bir değişim getirir."
Ve o günden sonra deniz ona güzel bir hatırlatma olmuş.
Sen de bugün deniz için minik bir iyilik yapabilirsin.`,
  },
  {
    id: 'masal-gen-mevsim-50',
    title: 'Mevsim Masalı: Selin\'in Macerası',
    emoji: '🍂',
    age: '4-8',
    duration: '4 dk',
    theme: 'Mevsim',
    summary: 'Selin, mevsim temalı sıcak bir macerada yeni bir şey öğrenir.',
    text: `Bir varmış bir yokmuş, Selin adında meraklı bir çocuk varmış.
Selin, mevsim hakkında düşünürken küçük bir sürprizle karşılaşmış.
Önce korkmuş, sonra nefes alıp yardım istemiş.
Arkadaşları ve ailesi birlikte olunca işler kolaylaşmış.
Selin demiş ki: "Her gün küçük bir adım, büyük bir değişim getirir."
Ve o günden sonra mevsim ona güzel bir hatırlatma olmuş.
Sen de bugün mevsim için minik bir iyilik yapabilirsin.`,
  },
  {
    id: 'masal-gen-uyku-51',
    title: 'Uyku Masalı: Can\'in Yolculuğu',
    emoji: '🌙',
    age: '3-6',
    duration: '3 dk',
    theme: 'Uyku',
    summary: 'Can, uyku temalı sıcak bir macerada yeni bir şey öğrenir.',
    text: `Bir varmış bir yokmuş, Can adında meraklı bir çocuk varmış.
Can, uyku hakkında düşünürken küçük bir sürprizle karşılaşmış.
Önce korkmuş, sonra nefes alıp yardım istemiş.
Arkadaşları ve ailesi birlikte olunca işler kolaylaşmış.
Can demiş ki: "Her gün küçük bir adım, büyük bir değişim getirir."
Ve o günden sonra uyku ona güzel bir hatırlatma olmuş.
Sen de bugün uyku için minik bir iyilik yapabilirsin.`,
  },
  {
    id: 'masal-gen-dostluk-52',
    title: 'Dostluk Masalı: Naz\'in Keşfi',
    emoji: '🤝',
    age: '4-8',
    duration: '4 dk',
    theme: 'Dostluk',
    summary: 'Naz, dostluk temalı sıcak bir macerada yeni bir şey öğrenir.',
    text: `Bir varmış bir yokmuş, Naz adında meraklı bir çocuk varmış.
Naz, dostluk hakkında düşünürken küçük bir sürprizle karşılaşmış.
Önce korkmuş, sonra nefes alıp yardım istemiş.
Arkadaşları ve ailesi birlikte olunca işler kolaylaşmış.
Naz demiş ki: "Her gün küçük bir adım, büyük bir değişim getirir."
Ve o günden sonra dostluk ona güzel bir hatırlatma olmuş.
Sen de bugün dostluk için minik bir iyilik yapabilirsin.`,
  },
  {
    id: 'masal-gen-doga-53',
    title: 'Doğa Masalı: Emre\'in Günü',
    emoji: '🌿',
    age: '4-9',
    duration: '4 dk',
    theme: 'Doğa',
    summary: 'Emre, doğa temalı sıcak bir macerada yeni bir şey öğrenir.',
    text: `Bir varmış bir yokmuş, Emre adında meraklı bir çocuk varmış.
Emre, doğa hakkında düşünürken küçük bir sürprizle karşılaşmış.
Önce korkmuş, sonra nefes alıp yardım istemiş.
Arkadaşları ve ailesi birlikte olunca işler kolaylaşmış.
Emre demiş ki: "Her gün küçük bir adım, büyük bir değişim getirir."
Ve o günden sonra doğa ona güzel bir hatırlatma olmuş.
Sen de bugün doğa için minik bir iyilik yapabilirsin.`,
  },
  {
    id: 'masal-gen-uzay-54',
    title: 'Uzay Masalı: Zeynep\'in Hikâyesi',
    emoji: '🚀',
    age: '5-10',
    duration: '5 dk',
    theme: 'Uzay',
    summary: 'Zeynep, uzay temalı sıcak bir macerada yeni bir şey öğrenir.',
    text: `Bir varmış bir yokmuş, Zeynep adında meraklı bir çocuk varmış.
Zeynep, uzay hakkında düşünürken küçük bir sürprizle karşılaşmış.
Önce korkmuş, sonra nefes alıp yardım istemiş.
Arkadaşları ve ailesi birlikte olunca işler kolaylaşmış.
Zeynep demiş ki: "Her gün küçük bir adım, büyük bir değişim getirir."
Ve o günden sonra uzay ona güzel bir hatırlatma olmuş.
Sen de bugün uzay için minik bir iyilik yapabilirsin.`,
  },
  {
    id: 'masal-gen-okul-55',
    title: 'Okul Masalı: Kaan\'in Macerası',
    emoji: '🎒',
    age: '5-9',
    duration: '4 dk',
    theme: 'Okul',
    summary: 'Kaan, okul temalı sıcak bir macerada yeni bir şey öğrenir.',
    text: `Bir varmış bir yokmuş, Kaan adında meraklı bir çocuk varmış.
Kaan, okul hakkında düşünürken küçük bir sürprizle karşılaşmış.
Önce korkmuş, sonra nefes alıp yardım istemiş.
Arkadaşları ve ailesi birlikte olunca işler kolaylaşmış.
Kaan demiş ki: "Her gün küçük bir adım, büyük bir değişim getirir."
Ve o günden sonra okul ona güzel bir hatırlatma olmuş.
Sen de bugün okul için minik bir iyilik yapabilirsin.`,
  },
  {
    id: 'masal-gen-duygu-56',
    title: 'Duygu Masalı: Yasemin\'in Yolculuğu',
    emoji: '💛',
    age: '4-8',
    duration: '4 dk',
    theme: 'Duygu',
    summary: 'Yasemin, duygu temalı sıcak bir macerada yeni bir şey öğrenir.',
    text: `Bir varmış bir yokmuş, Yasemin adında meraklı bir çocuk varmış.
Yasemin, duygu hakkında düşünürken küçük bir sürprizle karşılaşmış.
Önce korkmuş, sonra nefes alıp yardım istemiş.
Arkadaşları ve ailesi birlikte olunca işler kolaylaşmış.
Yasemin demiş ki: "Her gün küçük bir adım, büyük bir değişim getirir."
Ve o günden sonra duygu ona güzel bir hatırlatma olmuş.
Sen de bugün duygu için minik bir iyilik yapabilirsin.`,
  },
  {
    id: 'masal-gen-macera-57',
    title: 'Macera Masalı: Derin\'in Keşfi',
    emoji: '🗺️',
    age: '6-11',
    duration: '5 dk',
    theme: 'Macera',
    summary: 'Derin, macera temalı sıcak bir macerada yeni bir şey öğrenir.',
    text: `Bir varmış bir yokmuş, Derin adında meraklı bir çocuk varmış.
Derin, macera hakkında düşünürken küçük bir sürprizle karşılaşmış.
Önce korkmuş, sonra nefes alıp yardım istemiş.
Arkadaşları ve ailesi birlikte olunca işler kolaylaşmış.
Derin demiş ki: "Her gün küçük bir adım, büyük bir değişim getirir."
Ve o günden sonra macera ona güzel bir hatırlatma olmuş.
Sen de bugün macera için minik bir iyilik yapabilirsin.`,
  },
  {
    id: 'masal-gen-hayvan-58',
    title: 'Hayvan Masalı: Umut\'in Günü',
    emoji: '🐾',
    age: '3-7',
    duration: '3 dk',
    theme: 'Hayvan',
    summary: 'Umut, hayvan temalı sıcak bir macerada yeni bir şey öğrenir.',
    text: `Bir varmış bir yokmuş, Umut adında meraklı bir çocuk varmış.
Umut, hayvan hakkında düşünürken küçük bir sürprizle karşılaşmış.
Önce korkmuş, sonra nefes alıp yardım istemiş.
Arkadaşları ve ailesi birlikte olunca işler kolaylaşmış.
Umut demiş ki: "Her gün küçük bir adım, büyük bir değişim getirir."
Ve o günden sonra hayvan ona güzel bir hatırlatma olmuş.
Sen de bugün hayvan için minik bir iyilik yapabilirsin.`,
  },
  {
    id: 'masal-portal-1',
    title: 'Dostluk Masalı 1',
    emoji: '🦊',
    age: '4-7',
    duration: '4 dk',
    theme: 'Dostluk',
    summary: 'Dostluk temalı kısa bir masal — dinle, hisset, paylaş.',
    text: `Bir varmış bir yokmuş, dostluk dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş ve gökyüzü biraz daha parlak görünmüş.
Sen de derin bir nefes al… bu masalın sıcaklığını yanında tut.`,
  },
  {
    id: 'masal-portal-2',
    title: 'Doğa Masalı 2',
    emoji: '🌙',
    age: '5-8',
    duration: '5 dk',
    theme: 'Doğa',
    summary: 'Doğa temalı kısa bir masal — dinle, hisset, paylaş.',
    text: `Bir varmış bir yokmuş, doğa dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş ve gökyüzü biraz daha parlak görünmüş.
Sen de derin bir nefes al… bu masalın sıcaklığını yanında tut.`,
  },
  {
    id: 'masal-portal-3',
    title: 'Uzay Masalı 3',
    emoji: '🌊',
    age: '6-9',
    duration: '6 dk',
    theme: 'Uzay',
    summary: 'Uzay temalı kısa bir masal — dinle, hisset, paylaş.',
    text: `Bir varmış bir yokmuş, uzay dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş ve gökyüzü biraz daha parlak görünmüş.
Sen de derin bir nefes al… bu masalın sıcaklığını yanında tut.`,
  },
  {
    id: 'masal-portal-4',
    title: 'Okul Masalı 4',
    emoji: '🚀',
    age: '7-10',
    duration: '3 dk',
    theme: 'Okul',
    summary: 'Okul temalı kısa bir masal — dinle, hisset, paylaş.',
    text: `Bir varmış bir yokmuş, okul dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş ve gökyüzü biraz daha parlak görünmüş.
Sen de derin bir nefes al… bu masalın sıcaklığını yanında tut.`,
  },
  {
    id: 'masal-portal-5',
    title: 'Duygu Masalı 5',
    emoji: '🌿',
    age: '3-5',
    duration: '4 dk',
    theme: 'Duygu',
    summary: 'Duygu temalı kısa bir masal — dinle, hisset, paylaş.',
    text: `Bir varmış bir yokmuş, duygu dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş ve gökyüzü biraz daha parlak görünmüş.
Sen de derin bir nefes al… bu masalın sıcaklığını yanında tut.`,
  },
  {
    id: 'masal-portal-6',
    title: 'Macera Masalı 6',
    emoji: '🎈',
    age: '4-7',
    duration: '5 dk',
    theme: 'Macera',
    summary: 'Macera temalı kısa bir masal — dinle, hisset, paylaş.',
    text: `Bir varmış bir yokmuş, macera dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş ve gökyüzü biraz daha parlak görünmüş.
Sen de derin bir nefes al… bu masalın sıcaklığını yanında tut.`,
  },
  {
    id: 'masal-portal-7',
    title: 'Hayvan Masalı 7',
    emoji: '🐻',
    age: '5-8',
    duration: '6 dk',
    theme: 'Hayvan',
    summary: 'Hayvan temalı kısa bir masal — dinle, hisset, paylaş.',
    text: `Bir varmış bir yokmuş, hayvan dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş ve gökyüzü biraz daha parlak görünmüş.
Sen de derin bir nefes al… bu masalın sıcaklığını yanında tut.`,
  },
  {
    id: 'masal-portal-8',
    title: 'Deniz Masalı 8',
    emoji: '🦋',
    age: '6-9',
    duration: '3 dk',
    theme: 'Deniz',
    summary: 'Deniz temalı kısa bir masal — dinle, hisset, paylaş.',
    text: `Bir varmış bir yokmuş, deniz dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş ve gökyüzü biraz daha parlak görünmüş.
Sen de derin bir nefes al… bu masalın sıcaklığını yanında tut.`,
  },
  {
    id: 'masal-portal-9',
    title: 'Mevsim Masalı 9',
    emoji: '🌈',
    age: '7-10',
    duration: '4 dk',
    theme: 'Mevsim',
    summary: 'Mevsim temalı kısa bir masal — dinle, hisset, paylaş.',
    text: `Bir varmış bir yokmuş, mevsim dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş ve gökyüzü biraz daha parlak görünmüş.
Sen de derin bir nefes al… bu masalın sıcaklığını yanında tut.`,
  },
  {
    id: 'masal-portal-10',
    title: 'Cesaret Masalı 10',
    emoji: '🐢',
    age: '3-5',
    duration: '5 dk',
    theme: 'Cesaret',
    summary: 'Cesaret temalı kısa bir masal — dinle, hisset, paylaş.',
    text: `Bir varmış bir yokmuş, cesaret dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş ve gökyüzü biraz daha parlak görünmüş.
Sen de derin bir nefes al… bu masalın sıcaklığını yanında tut.`,
  },
  {
    id: 'masal-portal-11',
    title: 'Paylaşım Masalı 11',
    emoji: '🦄',
    age: '4-7',
    duration: '6 dk',
    theme: 'Paylaşım',
    summary: 'Paylaşım temalı kısa bir masal — dinle, hisset, paylaş.',
    text: `Bir varmış bir yokmuş, paylaşım dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş ve gökyüzü biraz daha parlak görünmüş.
Sen de derin bir nefes al… bu masalın sıcaklığını yanında tut.`,
  },
  {
    id: 'masal-portal-12',
    title: 'Uyku Masalı 12',
    emoji: '🐠',
    age: '5-8',
    duration: '3 dk',
    theme: 'Uyku',
    summary: 'Uyku temalı kısa bir masal — dinle, hisset, paylaş.',
    text: `Bir varmış bir yokmuş, uyku dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş ve gökyüzü biraz daha parlak görünmüş.
Sen de derin bir nefes al… bu masalın sıcaklığını yanında tut.`,
  },
  {
    id: 'masal-portal-13',
    title: 'Dostluk Masalı 13',
    emoji: '🌻',
    age: '6-9',
    duration: '4 dk',
    theme: 'Dostluk',
    summary: 'Dostluk temalı kısa bir masal — dinle, hisset, paylaş.',
    text: `Bir varmış bir yokmuş, dostluk dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş ve gökyüzü biraz daha parlak görünmüş.
Sen de derin bir nefes al… bu masalın sıcaklığını yanında tut.`,
  },
  {
    id: 'masal-portal-14',
    title: 'Doğa Masalı 14',
    emoji: '🏰',
    age: '7-10',
    duration: '5 dk',
    theme: 'Doğa',
    summary: 'Doğa temalı kısa bir masal — dinle, hisset, paylaş.',
    text: `Bir varmış bir yokmuş, doğa dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş ve gökyüzü biraz daha parlak görünmüş.
Sen de derin bir nefes al… bu masalın sıcaklığını yanında tut.`,
  },
  {
    id: 'masal-portal-15',
    title: 'Uzay Masalı 15',
    emoji: '🧠',
    age: '3-5',
    duration: '6 dk',
    theme: 'Uzay',
    summary: 'Uzay temalı kısa bir masal — dinle, hisset, paylaş.',
    text: `Bir varmış bir yokmuş, uzay dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş ve gökyüzü biraz daha parlak görünmüş.
Sen de derin bir nefes al… bu masalın sıcaklığını yanında tut.`,
  },
  {
    id: 'masal-portal-16',
    title: 'Okul Masalı 16',
    emoji: '💛',
    age: '4-7',
    duration: '3 dk',
    theme: 'Okul',
    summary: 'Okul temalı kısa bir masal — dinle, hisset, paylaş.',
    text: `Bir varmış bir yokmuş, okul dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş ve gökyüzü biraz daha parlak görünmüş.
Sen de derin bir nefes al… bu masalın sıcaklığını yanında tut.`,
  },
  {
    id: 'masal-portal-17',
    title: 'Duygu Masalı 17',
    emoji: '🎵',
    age: '5-8',
    duration: '4 dk',
    theme: 'Duygu',
    summary: 'Duygu temalı kısa bir masal — dinle, hisset, paylaş.',
    text: `Bir varmış bir yokmuş, duygu dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş ve gökyüzü biraz daha parlak görünmüş.
Sen de derin bir nefes al… bu masalın sıcaklığını yanında tut.`,
  },
  {
    id: 'masal-portal-18',
    title: 'Macera Masalı 18',
    emoji: '⭐',
    age: '6-9',
    duration: '5 dk',
    theme: 'Macera',
    summary: 'Macera temalı kısa bir masal — dinle, hisset, paylaş.',
    text: `Bir varmış bir yokmuş, macera dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş ve gökyüzü biraz daha parlak görünmüş.
Sen de derin bir nefes al… bu masalın sıcaklığını yanında tut.`,
  },
  {
    id: 'masal-portal-19',
    title: 'Hayvan Masalı 19',
    emoji: '🦊',
    age: '7-10',
    duration: '6 dk',
    theme: 'Hayvan',
    summary: 'Hayvan temalı kısa bir masal — dinle, hisset, paylaş.',
    text: `Bir varmış bir yokmuş, hayvan dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş ve gökyüzü biraz daha parlak görünmüş.
Sen de derin bir nefes al… bu masalın sıcaklığını yanında tut.`,
  },
  {
    id: 'masal-portal-20',
    title: 'Deniz Masalı 20',
    emoji: '🌙',
    age: '3-5',
    duration: '3 dk',
    theme: 'Deniz',
    summary: 'Deniz temalı kısa bir masal — dinle, hisset, paylaş.',
    text: `Bir varmış bir yokmuş, deniz dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş ve gökyüzü biraz daha parlak görünmüş.
Sen de derin bir nefes al… bu masalın sıcaklığını yanında tut.`,
  },
  {
    id: 'masal-portal-21',
    title: 'Mevsim Masalı 21',
    emoji: '🌊',
    age: '4-7',
    duration: '4 dk',
    theme: 'Mevsim',
    summary: 'Mevsim temalı kısa bir masal — dinle, hisset, paylaş.',
    text: `Bir varmış bir yokmuş, mevsim dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş ve gökyüzü biraz daha parlak görünmüş.
Sen de derin bir nefes al… bu masalın sıcaklığını yanında tut.`,
  },
  {
    id: 'masal-portal-22',
    title: 'Cesaret Masalı 22',
    emoji: '🚀',
    age: '5-8',
    duration: '5 dk',
    theme: 'Cesaret',
    summary: 'Cesaret temalı kısa bir masal — dinle, hisset, paylaş.',
    text: `Bir varmış bir yokmuş, cesaret dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş ve gökyüzü biraz daha parlak görünmüş.
Sen de derin bir nefes al… bu masalın sıcaklığını yanında tut.`,
  },
  {
    id: 'masal-portal-23',
    title: 'Paylaşım Masalı 23',
    emoji: '🌿',
    age: '6-9',
    duration: '6 dk',
    theme: 'Paylaşım',
    summary: 'Paylaşım temalı kısa bir masal — dinle, hisset, paylaş.',
    text: `Bir varmış bir yokmuş, paylaşım dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş ve gökyüzü biraz daha parlak görünmüş.
Sen de derin bir nefes al… bu masalın sıcaklığını yanında tut.`,
  },
  {
    id: 'masal-portal-24',
    title: 'Uyku Masalı 24',
    emoji: '🎈',
    age: '7-10',
    duration: '3 dk',
    theme: 'Uyku',
    summary: 'Uyku temalı kısa bir masal — dinle, hisset, paylaş.',
    text: `Bir varmış bir yokmuş, uyku dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş ve gökyüzü biraz daha parlak görünmüş.
Sen de derin bir nefes al… bu masalın sıcaklığını yanında tut.`,
  },
  {
    id: 'masal-portal-25',
    title: 'Dostluk Masalı 25',
    emoji: '🐻',
    age: '3-5',
    duration: '4 dk',
    theme: 'Dostluk',
    summary: 'Dostluk temalı kısa bir masal — dinle, hisset, paylaş.',
    text: `Bir varmış bir yokmuş, dostluk dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş ve gökyüzü biraz daha parlak görünmüş.
Sen de derin bir nefes al… bu masalın sıcaklığını yanında tut.`,
  },
  {
    id: 'masal-portal-26',
    title: 'Doğa Masalı 26',
    emoji: '🦋',
    age: '4-7',
    duration: '5 dk',
    theme: 'Doğa',
    summary: 'Doğa temalı kısa bir masal — dinle, hisset, paylaş.',
    text: `Bir varmış bir yokmuş, doğa dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş ve gökyüzü biraz daha parlak görünmüş.
Sen de derin bir nefes al… bu masalın sıcaklığını yanında tut.`,
  },
  {
    id: 'masal-portal-27',
    title: 'Uzay Masalı 27',
    emoji: '🌈',
    age: '5-8',
    duration: '6 dk',
    theme: 'Uzay',
    summary: 'Uzay temalı kısa bir masal — dinle, hisset, paylaş.',
    text: `Bir varmış bir yokmuş, uzay dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş ve gökyüzü biraz daha parlak görünmüş.
Sen de derin bir nefes al… bu masalın sıcaklığını yanında tut.`,
  },
  {
    id: 'masal-portal-28',
    title: 'Okul Masalı 28',
    emoji: '🐢',
    age: '6-9',
    duration: '3 dk',
    theme: 'Okul',
    summary: 'Okul temalı kısa bir masal — dinle, hisset, paylaş.',
    text: `Bir varmış bir yokmuş, okul dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş ve gökyüzü biraz daha parlak görünmüş.
Sen de derin bir nefes al… bu masalın sıcaklığını yanında tut.`,
  },
  {
    id: 'masal-portal-29',
    title: 'Duygu Masalı 29',
    emoji: '🦄',
    age: '7-10',
    duration: '4 dk',
    theme: 'Duygu',
    summary: 'Duygu temalı kısa bir masal — dinle, hisset, paylaş.',
    text: `Bir varmış bir yokmuş, duygu dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş ve gökyüzü biraz daha parlak görünmüş.
Sen de derin bir nefes al… bu masalın sıcaklığını yanında tut.`,
  },
  {
    id: 'masal-portal-30',
    title: 'Macera Masalı 30',
    emoji: '🐠',
    age: '3-5',
    duration: '5 dk',
    theme: 'Macera',
    summary: 'Macera temalı kısa bir masal — dinle, hisset, paylaş.',
    text: `Bir varmış bir yokmuş, macera dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş ve gökyüzü biraz daha parlak görünmüş.
Sen de derin bir nefes al… bu masalın sıcaklığını yanında tut.`,
  },
  {
    id: 'masal-portal-31',
    title: 'Hayvan Masalı 31',
    emoji: '🌻',
    age: '4-7',
    duration: '6 dk',
    theme: 'Hayvan',
    summary: 'Hayvan temalı kısa bir masal — dinle, hisset, paylaş.',
    text: `Bir varmış bir yokmuş, hayvan dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş ve gökyüzü biraz daha parlak görünmüş.
Sen de derin bir nefes al… bu masalın sıcaklığını yanında tut.`,
  },
  {
    id: 'masal-portal-32',
    title: 'Deniz Masalı 32',
    emoji: '🏰',
    age: '5-8',
    duration: '3 dk',
    theme: 'Deniz',
    summary: 'Deniz temalı kısa bir masal — dinle, hisset, paylaş.',
    text: `Bir varmış bir yokmuş, deniz dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş ve gökyüzü biraz daha parlak görünmüş.
Sen de derin bir nefes al… bu masalın sıcaklığını yanında tut.`,
  },
  {
    id: 'masal-portal-33',
    title: 'Mevsim Masalı 33',
    emoji: '🧠',
    age: '6-9',
    duration: '4 dk',
    theme: 'Mevsim',
    summary: 'Mevsim temalı kısa bir masal — dinle, hisset, paylaş.',
    text: `Bir varmış bir yokmuş, mevsim dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş ve gökyüzü biraz daha parlak görünmüş.
Sen de derin bir nefes al… bu masalın sıcaklığını yanında tut.`,
  },
  {
    id: 'masal-portal-34',
    title: 'Cesaret Masalı 34',
    emoji: '💛',
    age: '7-10',
    duration: '5 dk',
    theme: 'Cesaret',
    summary: 'Cesaret temalı kısa bir masal — dinle, hisset, paylaş.',
    text: `Bir varmış bir yokmuş, cesaret dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş ve gökyüzü biraz daha parlak görünmüş.
Sen de derin bir nefes al… bu masalın sıcaklığını yanında tut.`,
  },
  {
    id: 'masal-portal-35',
    title: 'Paylaşım Masalı 35',
    emoji: '🎵',
    age: '3-5',
    duration: '6 dk',
    theme: 'Paylaşım',
    summary: 'Paylaşım temalı kısa bir masal — dinle, hisset, paylaş.',
    text: `Bir varmış bir yokmuş, paylaşım dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş ve gökyüzü biraz daha parlak görünmüş.
Sen de derin bir nefes al… bu masalın sıcaklığını yanında tut.`,
  },
  {
    id: 'masal-portal-36',
    title: 'Uyku Masalı 36',
    emoji: '⭐',
    age: '4-7',
    duration: '3 dk',
    theme: 'Uyku',
    summary: 'Uyku temalı kısa bir masal — dinle, hisset, paylaş.',
    text: `Bir varmış bir yokmuş, uyku dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş ve gökyüzü biraz daha parlak görünmüş.
Sen de derin bir nefes al… bu masalın sıcaklığını yanında tut.`,
  },
  {
    id: 'masal-portal-37',
    title: 'Dostluk Masalı 37',
    emoji: '🦊',
    age: '5-8',
    duration: '4 dk',
    theme: 'Dostluk',
    summary: 'Dostluk temalı kısa bir masal — dinle, hisset, paylaş.',
    text: `Bir varmış bir yokmuş, dostluk dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş ve gökyüzü biraz daha parlak görünmüş.
Sen de derin bir nefes al… bu masalın sıcaklığını yanında tut.`,
  },
  {
    id: 'masal-portal-38',
    title: 'Doğa Masalı 38',
    emoji: '🌙',
    age: '6-9',
    duration: '5 dk',
    theme: 'Doğa',
    summary: 'Doğa temalı kısa bir masal — dinle, hisset, paylaş.',
    text: `Bir varmış bir yokmuş, doğa dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş ve gökyüzü biraz daha parlak görünmüş.
Sen de derin bir nefes al… bu masalın sıcaklığını yanında tut.`,
  },
  {
    id: 'masal-portal-39',
    title: 'Uzay Masalı 39',
    emoji: '🌊',
    age: '7-10',
    duration: '6 dk',
    theme: 'Uzay',
    summary: 'Uzay temalı kısa bir masal — dinle, hisset, paylaş.',
    text: `Bir varmış bir yokmuş, uzay dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş ve gökyüzü biraz daha parlak görünmüş.
Sen de derin bir nefes al… bu masalın sıcaklığını yanında tut.`,
  },
  {
    id: 'masal-portal-40',
    title: 'Okul Masalı 40',
    emoji: '🚀',
    age: '3-5',
    duration: '3 dk',
    theme: 'Okul',
    summary: 'Okul temalı kısa bir masal — dinle, hisset, paylaş.',
    text: `Bir varmış bir yokmuş, okul dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş ve gökyüzü biraz daha parlak görünmüş.
Sen de derin bir nefes al… bu masalın sıcaklığını yanında tut.`,
  },
  {
    id: 'masal-portal-41',
    title: 'Duygu Masalı 41',
    emoji: '🌿',
    age: '4-7',
    duration: '4 dk',
    theme: 'Duygu',
    summary: 'Duygu temalı kısa bir masal — dinle, hisset, paylaş.',
    text: `Bir varmış bir yokmuş, duygu dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş ve gökyüzü biraz daha parlak görünmüş.
Sen de derin bir nefes al… bu masalın sıcaklığını yanında tut.`,
  },
  {
    id: 'masal-portal-42',
    title: 'Macera Masalı 42',
    emoji: '🎈',
    age: '5-8',
    duration: '5 dk',
    theme: 'Macera',
    summary: 'Macera temalı kısa bir masal — dinle, hisset, paylaş.',
    text: `Bir varmış bir yokmuş, macera dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş ve gökyüzü biraz daha parlak görünmüş.
Sen de derin bir nefes al… bu masalın sıcaklığını yanında tut.`,
  },
  {
    id: 'masal-portal-43',
    title: 'Hayvan Masalı 43',
    emoji: '🐻',
    age: '6-9',
    duration: '6 dk',
    theme: 'Hayvan',
    summary: 'Hayvan temalı kısa bir masal — dinle, hisset, paylaş.',
    text: `Bir varmış bir yokmuş, hayvan dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş ve gökyüzü biraz daha parlak görünmüş.
Sen de derin bir nefes al… bu masalın sıcaklığını yanında tut.`,
  },
  {
    id: 'masal-portal-44',
    title: 'Deniz Masalı 44',
    emoji: '🦋',
    age: '7-10',
    duration: '3 dk',
    theme: 'Deniz',
    summary: 'Deniz temalı kısa bir masal — dinle, hisset, paylaş.',
    text: `Bir varmış bir yokmuş, deniz dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş ve gökyüzü biraz daha parlak görünmüş.
Sen de derin bir nefes al… bu masalın sıcaklığını yanında tut.`,
  },
  {
    id: 'masal-portal-45',
    title: 'Mevsim Masalı 45',
    emoji: '🌈',
    age: '3-5',
    duration: '4 dk',
    theme: 'Mevsim',
    summary: 'Mevsim temalı kısa bir masal — dinle, hisset, paylaş.',
    text: `Bir varmış bir yokmuş, mevsim dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş ve gökyüzü biraz daha parlak görünmüş.
Sen de derin bir nefes al… bu masalın sıcaklığını yanında tut.`,
  },
  {
    id: 'masal-portal-46',
    title: 'Cesaret Masalı 46',
    emoji: '🐢',
    age: '4-7',
    duration: '5 dk',
    theme: 'Cesaret',
    summary: 'Cesaret temalı kısa bir masal — dinle, hisset, paylaş.',
    text: `Bir varmış bir yokmuş, cesaret dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş ve gökyüzü biraz daha parlak görünmüş.
Sen de derin bir nefes al… bu masalın sıcaklığını yanında tut.`,
  },
  {
    id: 'masal-portal-47',
    title: 'Paylaşım Masalı 47',
    emoji: '🦄',
    age: '5-8',
    duration: '6 dk',
    theme: 'Paylaşım',
    summary: 'Paylaşım temalı kısa bir masal — dinle, hisset, paylaş.',
    text: `Bir varmış bir yokmuş, paylaşım dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş ve gökyüzü biraz daha parlak görünmüş.
Sen de derin bir nefes al… bu masalın sıcaklığını yanında tut.`,
  },
  {
    id: 'masal-portal-48',
    title: 'Uyku Masalı 48',
    emoji: '🐠',
    age: '6-9',
    duration: '3 dk',
    theme: 'Uyku',
    summary: 'Uyku temalı kısa bir masal — dinle, hisset, paylaş.',
    text: `Bir varmış bir yokmuş, uyku dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş ve gökyüzü biraz daha parlak görünmüş.
Sen de derin bir nefes al… bu masalın sıcaklığını yanında tut.`,
  },
  {
    id: 'masal-portal-49',
    title: 'Dostluk Masalı 49',
    emoji: '🌻',
    age: '7-10',
    duration: '4 dk',
    theme: 'Dostluk',
    summary: 'Dostluk temalı kısa bir masal — dinle, hisset, paylaş.',
    text: `Bir varmış bir yokmuş, dostluk dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş ve gökyüzü biraz daha parlak görünmüş.
Sen de derin bir nefes al… bu masalın sıcaklığını yanında tut.`,
  },
  {
    id: 'masal-portal-50',
    title: 'Doğa Masalı 50',
    emoji: '🏰',
    age: '3-5',
    duration: '5 dk',
    theme: 'Doğa',
    summary: 'Doğa temalı kısa bir masal — dinle, hisset, paylaş.',
    text: `Bir varmış bir yokmuş, doğa dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş ve gökyüzü biraz daha parlak görünmüş.
Sen de derin bir nefes al… bu masalın sıcaklığını yanında tut.`,
  },
  {
    id: 'masal-portal-51',
    title: 'Uzay Masalı 51',
    emoji: '🧠',
    age: '4-7',
    duration: '6 dk',
    theme: 'Uzay',
    summary: 'Uzay temalı kısa bir masal — dinle, hisset, paylaş.',
    text: `Bir varmış bir yokmuş, uzay dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş ve gökyüzü biraz daha parlak görünmüş.
Sen de derin bir nefes al… bu masalın sıcaklığını yanında tut.`,
  },
  {
    id: 'masal-portal-52',
    title: 'Okul Masalı 52',
    emoji: '💛',
    age: '5-8',
    duration: '3 dk',
    theme: 'Okul',
    summary: 'Okul temalı kısa bir masal — dinle, hisset, paylaş.',
    text: `Bir varmış bir yokmuş, okul dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş ve gökyüzü biraz daha parlak görünmüş.
Sen de derin bir nefes al… bu masalın sıcaklığını yanında tut.`,
  },
  {
    id: 'masal-portal-53',
    title: 'Duygu Masalı 53',
    emoji: '🎵',
    age: '6-9',
    duration: '4 dk',
    theme: 'Duygu',
    summary: 'Duygu temalı kısa bir masal — dinle, hisset, paylaş.',
    text: `Bir varmış bir yokmuş, duygu dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş ve gökyüzü biraz daha parlak görünmüş.
Sen de derin bir nefes al… bu masalın sıcaklığını yanında tut.`,
  },
  {
    id: 'masal-portal-54',
    title: 'Macera Masalı 54',
    emoji: '⭐',
    age: '7-10',
    duration: '5 dk',
    theme: 'Macera',
    summary: 'Macera temalı kısa bir masal — dinle, hisset, paylaş.',
    text: `Bir varmış bir yokmuş, macera dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş ve gökyüzü biraz daha parlak görünmüş.
Sen de derin bir nefes al… bu masalın sıcaklığını yanında tut.`,
  },
  {
    id: 'masal-portal-55',
    title: 'Hayvan Masalı 55',
    emoji: '🦊',
    age: '3-5',
    duration: '6 dk',
    theme: 'Hayvan',
    summary: 'Hayvan temalı kısa bir masal — dinle, hisset, paylaş.',
    text: `Bir varmış bir yokmuş, hayvan dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş ve gökyüzü biraz daha parlak görünmüş.
Sen de derin bir nefes al… bu masalın sıcaklığını yanında tut.`,
  },
  {
    id: 'masal-portal-56',
    title: 'Deniz Masalı 56',
    emoji: '🌙',
    age: '4-7',
    duration: '3 dk',
    theme: 'Deniz',
    summary: 'Deniz temalı kısa bir masal — dinle, hisset, paylaş.',
    text: `Bir varmış bir yokmuş, deniz dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş ve gökyüzü biraz daha parlak görünmüş.
Sen de derin bir nefes al… bu masalın sıcaklığını yanında tut.`,
  },
  {
    id: 'masal-portal-57',
    title: 'Mevsim Masalı 57',
    emoji: '🌊',
    age: '5-8',
    duration: '4 dk',
    theme: 'Mevsim',
    summary: 'Mevsim temalı kısa bir masal — dinle, hisset, paylaş.',
    text: `Bir varmış bir yokmuş, mevsim dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş ve gökyüzü biraz daha parlak görünmüş.
Sen de derin bir nefes al… bu masalın sıcaklığını yanında tut.`,
  },
  {
    id: 'masal-portal-58',
    title: 'Cesaret Masalı 58',
    emoji: '🚀',
    age: '6-9',
    duration: '5 dk',
    theme: 'Cesaret',
    summary: 'Cesaret temalı kısa bir masal — dinle, hisset, paylaş.',
    text: `Bir varmış bir yokmuş, cesaret dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş ve gökyüzü biraz daha parlak görünmüş.
Sen de derin bir nefes al… bu masalın sıcaklığını yanında tut.`,
  },
  {
    id: 'masal-portal-59',
    title: 'Paylaşım Masalı 59',
    emoji: '🌿',
    age: '7-10',
    duration: '6 dk',
    theme: 'Paylaşım',
    summary: 'Paylaşım temalı kısa bir masal — dinle, hisset, paylaş.',
    text: `Bir varmış bir yokmuş, paylaşım dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş ve gökyüzü biraz daha parlak görünmüş.
Sen de derin bir nefes al… bu masalın sıcaklığını yanında tut.`,
  },
  {
    id: 'masal-portal-60',
    title: 'Uyku Masalı 60',
    emoji: '🎈',
    age: '3-5',
    duration: '3 dk',
    theme: 'Uyku',
    summary: 'Uyku temalı kısa bir masal — dinle, hisset, paylaş.',
    text: `Bir varmış bir yokmuş, uyku dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş ve gökyüzü biraz daha parlak görünmüş.
Sen de derin bir nefes al… bu masalın sıcaklığını yanında tut.`,
  },
  {
    id: 'masal-portal-61',
    title: 'Dostluk Masalı 61',
    emoji: '🐻',
    age: '4-7',
    duration: '4 dk',
    theme: 'Dostluk',
    summary: 'Dostluk temalı kısa bir masal — dinle, hisset, paylaş.',
    text: `Bir varmış bir yokmuş, dostluk dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş ve gökyüzü biraz daha parlak görünmüş.
Sen de derin bir nefes al… bu masalın sıcaklığını yanında tut.`,
  },
  {
    id: 'masal-portal-62',
    title: 'Doğa Masalı 62',
    emoji: '🦋',
    age: '5-8',
    duration: '5 dk',
    theme: 'Doğa',
    summary: 'Doğa temalı kısa bir masal — dinle, hisset, paylaş.',
    text: `Bir varmış bir yokmuş, doğa dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş ve gökyüzü biraz daha parlak görünmüş.
Sen de derin bir nefes al… bu masalın sıcaklığını yanında tut.`,
  },
  {
    id: 'masal-portal-63',
    title: 'Uzay Masalı 63',
    emoji: '🌈',
    age: '6-9',
    duration: '6 dk',
    theme: 'Uzay',
    summary: 'Uzay temalı kısa bir masal — dinle, hisset, paylaş.',
    text: `Bir varmış bir yokmuş, uzay dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş ve gökyüzü biraz daha parlak görünmüş.
Sen de derin bir nefes al… bu masalın sıcaklığını yanında tut.`,
  },
  {
    id: 'masal-portal-64',
    title: 'Okul Masalı 64',
    emoji: '🐢',
    age: '7-10',
    duration: '3 dk',
    theme: 'Okul',
    summary: 'Okul temalı kısa bir masal — dinle, hisset, paylaş.',
    text: `Bir varmış bir yokmuş, okul dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş ve gökyüzü biraz daha parlak görünmüş.
Sen de derin bir nefes al… bu masalın sıcaklığını yanında tut.`,
  },
  {
    id: 'masal-portal-65',
    title: 'Duygu Masalı 65',
    emoji: '🦄',
    age: '3-5',
    duration: '4 dk',
    theme: 'Duygu',
    summary: 'Duygu temalı kısa bir masal — dinle, hisset, paylaş.',
    text: `Bir varmış bir yokmuş, duygu dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş ve gökyüzü biraz daha parlak görünmüş.
Sen de derin bir nefes al… bu masalın sıcaklığını yanında tut.`,
  },
  {
    id: 'masal-portal-66',
    title: 'Macera Masalı 66',
    emoji: '🐠',
    age: '4-7',
    duration: '5 dk',
    theme: 'Macera',
    summary: 'Macera temalı kısa bir masal — dinle, hisset, paylaş.',
    text: `Bir varmış bir yokmuş, macera dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş ve gökyüzü biraz daha parlak görünmüş.
Sen de derin bir nefes al… bu masalın sıcaklığını yanında tut.`,
  },
  {
    id: 'masal-portal-67',
    title: 'Hayvan Masalı 67',
    emoji: '🌻',
    age: '5-8',
    duration: '6 dk',
    theme: 'Hayvan',
    summary: 'Hayvan temalı kısa bir masal — dinle, hisset, paylaş.',
    text: `Bir varmış bir yokmuş, hayvan dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş ve gökyüzü biraz daha parlak görünmüş.
Sen de derin bir nefes al… bu masalın sıcaklığını yanında tut.`,
  },
  {
    id: 'masal-portal-68',
    title: 'Deniz Masalı 68',
    emoji: '🏰',
    age: '6-9',
    duration: '3 dk',
    theme: 'Deniz',
    summary: 'Deniz temalı kısa bir masal — dinle, hisset, paylaş.',
    text: `Bir varmış bir yokmuş, deniz dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş ve gökyüzü biraz daha parlak görünmüş.
Sen de derin bir nefes al… bu masalın sıcaklığını yanında tut.`,
  },
  {
    id: 'masal-portal-69',
    title: 'Mevsim Masalı 69',
    emoji: '🧠',
    age: '7-10',
    duration: '4 dk',
    theme: 'Mevsim',
    summary: 'Mevsim temalı kısa bir masal — dinle, hisset, paylaş.',
    text: `Bir varmış bir yokmuş, mevsim dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş ve gökyüzü biraz daha parlak görünmüş.
Sen de derin bir nefes al… bu masalın sıcaklığını yanında tut.`,
  },
  {
    id: 'masal-portal-70',
    title: 'Cesaret Masalı 70',
    emoji: '💛',
    age: '3-5',
    duration: '5 dk',
    theme: 'Cesaret',
    summary: 'Cesaret temalı kısa bir masal — dinle, hisset, paylaş.',
    text: `Bir varmış bir yokmuş, cesaret dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş ve gökyüzü biraz daha parlak görünmüş.
Sen de derin bir nefes al… bu masalın sıcaklığını yanında tut.`,
  }
]

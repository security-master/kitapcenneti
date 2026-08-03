export type StoryCategory =
  | 'beni-masalda'
  | 'macera'
  | 'hayvanlar'
  | 'uzay'
  | 'dostluk'
  | 'sihir'
  | 'dogga'
  | 'kahraman'

export interface PromptTemplate {
  id: string
  title: string
  category: StoryCategory
  description: string
  prompt: string
  ageRange: string
  coverGradient: string
  emoji: string
}

export interface CategoryInfo {
  id: StoryCategory
  title: string
  subtitle: string
  description: string
  accent: string
  path: string
  featured?: boolean
}

export const CATEGORIES: CategoryInfo[] = [
  {
    id: 'beni-masalda',
    title: 'Beni Masalda Gezdir',
    subtitle: 'Sen de masalın yıldızı ol!',
    description:
      'İsmini yaz veya fotoğrafını yükle — masalda senin bir rolün olsun. Cesur kahraman, nazik prenses veya konuşan bir hayvan olabilirsin!',
    accent: 'var(--coral)',
    path: '/beni-masalda',
    featured: true,
  },
  {
    id: 'macera',
    title: 'Macera',
    subtitle: 'Heyecan dolu yolculuklar',
    description: 'Gizli haritalar, kayıp hazineler ve cesur keşifler.',
    accent: 'var(--sun)',
    path: '/olustur?kategori=macera',
  },
  {
    id: 'hayvanlar',
    title: 'Hayvan Dostları',
    subtitle: 'Sevimli kahramanlar',
    description: 'Konuşan tilkiler, uçan kediler ve orman arkadaşları.',
    accent: 'var(--mint)',
    path: '/olustur?kategori=hayvanlar',
  },
  {
    id: 'uzay',
    title: 'Uzay Yolculuğu',
    subtitle: 'Yıldızların ötesine',
    description: 'Renkli gezegenler, nazik uzaylılar ve ay tozu.',
    accent: 'var(--sky)',
    path: '/olustur?kategori=uzay',
  },
  {
    id: 'dostluk',
    title: 'Dostluk',
    subtitle: 'Birlikte daha güzel',
    description: 'Paylaşmak, yardımlaşmak ve yeni arkadaşlar.',
    accent: 'var(--peach)',
    path: '/olustur?kategori=dostluk',
  },
  {
    id: 'sihir',
    title: 'Sihirli Dünya',
    subtitle: 'Büyülü masallar',
    description: 'Uçan kilimler, konuşan ağaçlar ve ışık büyüleri.',
    accent: 'var(--lilac)',
    path: '/olustur?kategori=sihir',
  },
  {
    id: 'dogga',
    title: 'Doğa',
    subtitle: 'Orman ve deniz',
    description: 'Çiçek bahçeleri, dalgalar ve gökkuşağı yağmurları.',
    accent: 'var(--leaf)',
    path: '/olustur?kategori=dogga',
  },
  {
    id: 'kahraman',
    title: 'Küçük Kahramanlar',
    subtitle: 'Cesaret ve iyilik',
    description: 'Zorlukları aşan, iyiliği seçen küçük kahramanlar.',
    accent: 'var(--coral)',
    path: '/olustur?kategori=kahraman',
  },
]

export const PROMPT_LIBRARY: PromptTemplate[] = [
  {
    id: 'hazine-haritasi',
    title: 'Kayıp Hazine Haritası',
    category: 'macera',
    description: 'Eski bir harita çocukları gizli bir adaya götürür.',
    prompt:
      'Küçük bir çocuk eski bir sandıkta renkli bir hazine haritası bulur. Harita onu ve en iyi arkadaşını konuşan martıların yaşadığı gizli bir adaya götürür. Orada dostlukla hazinenin aslında paylaşılacak bir hediye olduğunu öğrenirler. 5-7 yaş için neşereli, güvenli bir macera.',
    ageRange: '5-8',
    coverGradient: 'linear-gradient(135deg, #FFC857, #FF8A5B)',
    emoji: '🗺️',
  },
  {
    id: 'tilki-ve-yildiz',
    title: 'Tilki ve Düşen Yıldız',
    category: 'hayvanlar',
    description: 'Meraklı bir tilki gökyüzünden düşen bir yıldızı kurtarır.',
    prompt:
      'Turuncu tüylü meraklı bir tilki, ormana düşen parlak bir yıldızı bulur. Yıldız çok üzgündür çünkü evine dönememiştir. Tilki ve orman arkadaşları yıldızı gökyüzüne geri yollamak için birlikte çalışır. Sıcak, nazik ve umut dolu bir hayvan masalı.',
    ageRange: '4-7',
    coverGradient: 'linear-gradient(135deg, #7ED9A9, #4DB8E8)',
    emoji: '🦊',
  },
  {
    id: 'ay-otobusu',
    title: 'Ay Otogarı',
    category: 'uzay',
    description: 'Bir çocuk gece otobüsüne biner ve aya gider.',
    prompt:
      'Meraklı bir çocuk bir gece penceresinden parlayan bir otobüs görür. Otobüs onu ay otogarına götürür; orada renkli uzaylı çocuklarla oyun oynar ve yıldız tozuyla resim yapar. Sabah evine döner ama cebinde küçük bir ay taşı kalır. Eğlenceli ve güvenli bir uzay masalı.',
    ageRange: '5-9',
    coverGradient: 'linear-gradient(135deg, #5B8DEF, #A78BFA)',
    emoji: '🚀',
  },
  {
    id: 'paylasilan-sandvic',
    title: 'Paylaşılan Sandviç',
    category: 'dostluk',
    description: 'İki yeni arkadaş bir sandvici paylaşarak dost olur.',
    prompt:
      'Okulun ilk gününde utangaç bir çocuk parkta oturur. Yanına neşeli bir çocuk gelir ve sandvicini paylaşır. Birlikte oyun oynarlar, birbirlerinin dilini öğrenmeye çalışırlar ve günün sonunda en iyi arkadaş olurlar. Sıcak bir dostluk masalı.',
    ageRange: '4-8',
    coverGradient: 'linear-gradient(135deg, #FFB4A2, #FFC857)',
    emoji: '🥪',
  },
  {
    id: 'ucan-kitaplik',
    title: 'Uçan Kitaplık',
    category: 'sihir',
    description: 'Kitaplar gece uyanır ve çocuğu masal diyarına götürür.',
    prompt:
      'Bir çocuğun odasındaki kitaplar gece yarısı kanatlanır. Kitaplık onu renkli bir masal diyarına götürür; orada hikâyeler canlıdır. Çocuk bir masalı tamamlayarak eve döner ve artık her kitabı daha dikkatli okur. Büyülü, renkli bir çocuk masalı.',
    ageRange: '5-9',
    coverGradient: 'linear-gradient(135deg, #C4B5FD, #F9A8D4)',
    emoji: '📚',
  },
  {
    id: 'yagmur-bahcesi',
    title: 'Gökkuşağı Bahçesi',
    category: 'dogga',
    description: 'Yağmurdan sonra büyüyen sihirli bir bahçe.',
    prompt:
      'Küçük bir çocuk yağmurdan sonra bahçesinde tuhaf renkli çiçekler görür. Her çiçek bir duyguyu temsil eder: neşe, cesaret, şükran. Çocuk bahçeyi sular ve komşularıyla çiçekleri paylaşır. Doğa sevgisi aşılayan huzurlu bir masal.',
    ageRange: '3-7',
    coverGradient: 'linear-gradient(135deg, #86EFAC, #67E8F9)',
    emoji: '🌈',
  },
  {
    id: 'kucuk-isik',
    title: 'Küçük Işık',
    category: 'kahraman',
    description: 'Küçük bir fener köyü aydınlatır.',
    prompt:
      'Fırtınalı bir gecede köyün ışıkları söner. Küçük bir çocuk elindeki minik fenerle komşularına yardım eder: yaşlılara yol gösterir, korkmuş hayvanları sakinleştirir. Sabah herkes onun cesaretini kutlar. İyilik ve cesaret temalı bir kahraman masalı.',
    ageRange: '5-9',
    coverGradient: 'linear-gradient(135deg, #FCD34D, #FB7185)',
    emoji: '🔦',
  },
  {
    id: 'deniz-kaplumbagasi',
    title: 'Deniz Kaplumbağası Mektubu',
    category: 'hayvanlar',
    description: 'Bir kaplumbağa okyanuslar arası bir mektup taşır.',
    prompt:
      'Yaşlı bir deniz kaplumbağası, bir çocuk tarafından yazılmış renkli bir mektubu okyanusun öbür ucundaki bir arkadaşa götürür. Yolculukta yunuslar, mercanlar ve nazik bir balina yardım eder. Mektup ulaşınca iki çocuk mektup arkadaş olur. Deniz temalı sıcak bir masal.',
    ageRange: '4-8',
    coverGradient: 'linear-gradient(135deg, #38BDF8, #2DD4BF)',
    emoji: '🐢',
  },
  {
    id: 'bulut-pastanesi',
    title: 'Bulut Pastanesi',
    category: 'sihir',
    description: 'Gökyüzünde bir pastane açılır.',
    prompt:
      'Bir çocuk rüzgârlı bir günde gökyüzünde bir pastane görür. Bulutlardan yapılmış pastalar, yıldız şekeri ve gökkuşağı reçeli vardır. Çocuk pastacıya yardım eder ve en güzel pastayı yerdeki arkadaşlarıyla paylaşmak için indirir. Tatlı ve eğlenceli bir sihir masalı.',
    ageRange: '3-7',
    coverGradient: 'linear-gradient(135deg, #FDA4AF, #FDE68A)',
    emoji: '🧁',
  },
  {
    id: 'robot-cicek',
    title: 'Robot ve Çiçek',
    category: 'dostluk',
    description: 'Bir robot bir çiçeğe bakmayı öğrenir.',
    prompt:
      'Meraklı küçük bir robot, balkonda solmakta olan bir çiçek bulur. Su vermeyi, güneş ışığını ve sabrı öğrenir. Çiçek açınca robot ilk kez gülümser. Teknoloji ve doğanın dostluğunu anlatan sevimli bir masal.',
    ageRange: '5-9',
    coverGradient: 'linear-gradient(135deg, #93C5FD, #BBF7D0)',
    emoji: '🤖',
  },
  {
    id: 'kar-ejderi',
    title: 'Uyuyan Kar Ejderi',
    category: 'macera',
    description: 'Dağda uyuyan nazik bir ejder uyandırılır.',
    prompt:
      'İki kardeş dağda yürürken uyuyan beyaz bir ejder bulur. Ejder üşümüştür ve yalnızdır. Kardeşler ona sıcak çikolata ve ninni getirir. Ejder uyanınca onlara kar taneleriyle dans etmeyi öğretir. Korkutmayan, nazik bir macera.',
    ageRange: '4-8',
    coverGradient: 'linear-gradient(135deg, #BAE6FD, #E9D5FF)',
    emoji: '🐉',
  },
  {
    id: 'gece-pazar',
    title: 'Yıldız Pazarı',
    category: 'uzay',
    description: 'Gece gökyüzünde açılan bir pazar yeri.',
    prompt:
      'Bir çocuk terastan yıldızların arasında parlayan bir pazar görür. Orada gezegenlerden gelmiş satıcılar şarkı, gülüş ve cesaret satar. Çocuk bir avuç cesaret yıldızı alır ve ertesi gün okulda utangaç arkadaşını savunur. İlham verici bir uzay masalı.',
    ageRange: '6-10',
    coverGradient: 'linear-gradient(135deg, #818CF8, #F472B6)',
    emoji: '✨',
  },
]

export const MASAL_WORLDS = [
  {
    id: 'ormani-krallik',
    title: 'Orman Krallığı',
    description: 'Konuşan ağaçlar ve yaprak taçlar',
    promptHint: 'yeşil orman krallığında, konuşan hayvanlar ve yaprak saraylar arasında',
    gradient: 'linear-gradient(135deg, #34D399, #059669)',
  },
  {
    id: 'bulut-sehri',
    title: 'Bulut Şehri',
    description: 'Gökyüzünde yüzen evler',
    promptHint: 'bulutların üstünde yüzen pastel bir şehirde, uçan balonlar ve yumuşak rüzgârlarla',
    gradient: 'linear-gradient(135deg, #7DD3FC, #A5B4FC)',
  },
  {
    id: 'denizalti',
    title: 'Mercan Sarayı',
    description: 'Denizin altında renkli bir dünya',
    promptHint: 'denizin altındaki mercan sarayında, yunuslar ve parlak balıklar arasında',
    gradient: 'linear-gradient(135deg, #22D3EE, #0284C7)',
  },
  {
    id: 'tatli-koy',
    title: 'Tatlı Köy',
    description: 'Kurabiye evler ve şeker bahçeler',
    promptHint: 'kurabiye evli tatlı bir köyde, şeker çiçekleri ve sıcak fırın kokusuyla',
    gradient: 'linear-gradient(135deg, #FB7185, #FBBF24)',
  },
  {
    id: 'yildiz-kampi',
    title: 'Yıldız Kampı',
    description: 'Ay ışığında macera',
    promptHint: 'yıldızların altında bir kamp alanında, ay ışığı ve nazik ateş böcekleriyle',
    gradient: 'linear-gradient(135deg, #6366F1, #F472B6)',
  },
  {
    id: 'ejder-vadisi',
    title: 'Ejder Vadisi',
    description: 'Nazik ejderlerle dostluk',
    promptHint: 'renkli nazik ejderlerin yaşadığı bir vadide, macera ve dostlukla',
    gradient: 'linear-gradient(135deg, #F59E0B, #EF4444)',
  },
]

export const STORY_MODELS = [
  { id: 'gemini-2.5-flash', label: 'Gemini 2.5 Flash', provider: 'gemini' as const, free: true },
  { id: 'gemini-2.0-flash', label: 'Gemini 2.0 Flash', provider: 'gemini' as const, free: true },
  { id: 'gpt-4o-mini', label: 'GPT-4o Mini', provider: 'openai' as const, free: true },
  { id: 'gpt-4.1-mini', label: 'GPT-4.1 Mini', provider: 'openai' as const, free: true },
  { id: 'gpt-4.1-nano', label: 'GPT-4.1 Nano', provider: 'openai' as const, free: true },
  { id: 'claude-haiku-4-5', label: 'Claude Haiku 4.5', provider: 'openai' as const, free: true },
]

export const IMAGE_MODELS = [
  { id: 'gemini-2.5-flash-image', label: 'Gemini Flash Image', provider: 'gemini' as const },
  { id: 'gemini-3.1-flash-image-preview', label: 'Gemini 3.1 Flash Image', provider: 'gemini' as const },
  { id: 'pollinations', label: 'Pollinations (ücretsiz)', provider: 'pollinations' as const },
]

export function getPromptsByCategory(category?: string) {
  if (!category || category === 'hepsi') return PROMPT_LIBRARY
  return PROMPT_LIBRARY.filter((p) => p.category === category)
}

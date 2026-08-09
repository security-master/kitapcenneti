export interface AdventureNode {
  id: string
  text: string
  emoji: string
  choices?: { label: string; next: string; stars?: number }[]
  ending?: boolean
}

export interface Adventure {
  id: string
  title: string
  emoji: string
  start: string
  nodes: Record<string, AdventureNode>
}

export const ADVENTURES: Adventure[] = [
  {
    id: 'forest-lantern',
    title: 'Kayıp Fener',
    emoji: '🏮',
    start: 'start',
    nodes: {
      start: {
        id: 'start',
        emoji: '🌲',
        text: 'Ormanda küçük bir ışık titriyor. Yanına mı gidersin, yoksa yolu mu sorarsın?',
        choices: [
          { label: 'Işığa yaklaş', next: 'light', stars: 1 },
          { label: 'Baykuşa sor', next: 'owl' },
        ],
      },
      light: {
        id: 'light',
        emoji: '✨',
        text: 'Bir tilki feneri tutuyor. “Rüzgâr söndürdü” diyor. Üfler misin, yoksa korur musun?',
        choices: [
          { label: 'Koruyarak taşı', next: 'safe', stars: 2 },
          { label: 'Birlikte üfle', next: 'blow' },
        ],
      },
      owl: {
        id: 'owl',
        emoji: '🦉',
        text: 'Baykuş: “Fener köprüde.” Köprü sallanıyor — yavaş mı, koşarak mı?',
        choices: [
          { label: 'Yavaş ve dikkatli', next: 'safe', stars: 2 },
          { label: 'Koş!', next: 'slip' },
        ],
      },
      blow: {
        id: 'blow',
        emoji: '🌬️',
        text: 'Üflediniz… ama fener yeniden yandı! Tilki gülümsüyor.',
        choices: [{ label: 'Köye dön', next: 'end-warm', stars: 1 }],
      },
      slip: {
        id: 'slip',
        emoji: '🌉',
        text: 'Ayağın kaydı ama dostun tuttu. Birlikte feneri aldınız.',
        choices: [{ label: 'Teşekkür et', next: 'end-warm', stars: 1 }],
      },
      safe: {
        id: 'safe',
        emoji: '🏡',
        text: 'Fener köy meydanını aydınlattı. Herkes alkışlıyor!',
        choices: [{ label: 'Son', next: 'end-warm', stars: 1 }],
      },
      'end-warm': {
        id: 'end-warm',
        emoji: '⭐',
        text: 'Macera bitti: cesaret + dostluk kazandı. Yeni bir hikâyeye hazır mısın?',
        ending: true,
      },
    },
  },
  {
    id: 'space-crumb',
    title: 'Uzayda Kraker',
    emoji: '🚀',
    start: 'start',
    nodes: {
      start: {
        id: 'start',
        emoji: '🌌',
        text: 'Kapsülde kraker uçuşuyor! Yakala mı, yoksa önce emniyet kemeri mi?',
        choices: [
          { label: 'Önce kemer', next: 'belt', stars: 2 },
          { label: 'Krakeri kap', next: 'crumb' },
        ],
      },
      belt: {
        id: 'belt',
        emoji: '🛟',
        text: 'Güvendesin. Şimdi kraker yavaşça sana geliyor — paylaşır mısın?',
        choices: [
          { label: 'Robotla paylaş', next: 'end-share', stars: 2 },
          { label: 'Hepsini ye', next: 'end-funny' },
        ],
      },
      crumb: {
        id: 'crumb',
        emoji: '🍪',
        text: 'Yakaldın ama döndün! Robot gülüyor. Kemeri takıp toparlanır mısın?',
        choices: [{ label: 'Evet, toparlan', next: 'belt', stars: 1 }],
      },
      'end-share': {
        id: 'end-share',
        emoji: '🤖',
        text: 'Paylaşmak uzayı daha sıcak yaptı. Görev tamam!',
        ending: true,
      },
      'end-funny': {
        id: 'end-funny',
        emoji: '😂',
        text: 'Krakerler… burun deliğine uçtu! Bir dahaki sefere paylaşmayı dene.',
        ending: true,
      },
    },
  },
  {
    id: 'rainbow-brush',
    title: 'Fırça Kaçtı',
    emoji: '🖌️',
    start: 'start',
    nodes: {
      start: {
        id: 'start',
        emoji: '🎨',
        text: 'Fırça kendi kendine boyuyor! Peşinden mi koşarsın, yoksa renk mi sorarsın?',
        choices: [
          { label: 'Peşinden koş', next: 'chase' },
          { label: '“Hangi renk?” diye sor', next: 'ask', stars: 1 },
        ],
      },
      chase: {
        id: 'chase',
        emoji: '🏃',
        text: 'Fırça gökkuşağına çıktı. Sen de bir renk seç!',
        choices: [
          { label: 'Mavi sakinlik', next: 'end-art', stars: 1 },
          { label: 'Sarı neşe', next: 'end-art', stars: 1 },
        ],
      },
      ask: {
        id: 'ask',
        emoji: '💬',
        text: 'Fırça: “Senin rengin hangisi?” Kalbinden bir renk söyle.',
        choices: [{ label: 'Rengimi seçtim', next: 'end-art', stars: 2 }],
      },
      'end-art': {
        id: 'end-art',
        emoji: '🌈',
        text: 'Duvar bir tabloya dönüştü. Sen de sanatçısın!',
        ending: true,
      },
    },
  },
]

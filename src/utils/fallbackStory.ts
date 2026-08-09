import type { Story, StoryRequest } from '../types'

type Theme = {
  setting: string
  emoji: string
  /** Turkish scene phrases for story text */
  scenes: string[]
  /** English scene phrases for image models */
  imageScenes: string[]
  imageSetting: string
}

const CATEGORY_THEMES: Record<string, Theme> = {
  personalized: {
    setting: 'sihirli bir dünya',
    imageSetting: 'a magical adventure world',
    emoji: '🦸',
    scenes: [
      'parlayan bir kapıyı keşfetmek',
      'konuşan hayvanlarla tanışmak',
      'gizli bir harita bulmak',
      'bulutların üstünde uçmak',
      'sihirli bir hazinenin peşine düşmek',
      'yeni dostlar edinmek',
      'büyük bir sırrı çözmek',
      'mutlu bir dönüş yapmak',
    ],
    imageScenes: [
      'discovering a glowing magical door',
      'meeting talking animals',
      'finding a secret treasure map',
      'flying above soft clouds',
      'searching for a magical treasure',
      'making new friends',
      'solving a big mystery',
      'returning home happily',
    ],
  },
  adventure: {
    setting: 'büyülü orman',
    imageSetting: 'an enchanted forest',
    emoji: '🗺️',
    scenes: [
      'eski bir harita bulmak',
      'konuşan ağaçlarla karşılaşmak',
      'gizli bir mağaraya girmek',
      'gökkuşağı köprüsünden geçmek',
      'sihirli bir çiçek toplamak',
      'kaybolan yolu bulmak',
      'hazine sandığını açmak',
      'kahramanca eve dönmek',
    ],
    imageScenes: [
      'finding an old adventure map',
      'meeting talking trees',
      'entering a secret cave',
      'crossing a rainbow bridge',
      'picking a magical flower',
      'finding the lost path home',
      'opening a treasure chest',
      'returning home as a hero',
    ],
  },
  animals: {
    setting: 'sevimli hayvanların ormanı',
    imageSetting: 'a sunny forest of cute animals',
    emoji: '🐻',
    scenes: [
      'tavşanla tanışmak',
      'ormanda piknik yapmak',
      'kuşlarla şarkı söylemek',
      'ayı ile balık tutmak',
      'tilki ile saklambaç oynamak',
      'gece yıldızları izlemek',
      'hep birlikte dans etmek',
      'güzel bir veda partisi',
    ],
    imageScenes: [
      'meeting a friendly rabbit',
      'having a picnic in the forest',
      'singing with colorful birds',
      'fishing with a friendly bear',
      'playing hide and seek with a fox',
      'watching stars at night',
      'dancing happily together',
      'a joyful farewell party',
    ],
  },
  space: {
    setting: 'yıldızlar arası',
    imageSetting: 'colorful outer space',
    emoji: '🚀',
    scenes: [
      'roketle fırlamak',
      'Ay\'da yürümek',
      'uzaylı dostlarla tanışmak',
      'kuyruklu yıldızı izlemek',
      'Mars\'ta keşif yapmak',
      'yıldız tozu toplamak',
      'galaksi haritası çizmek',
      'Dünya\'ya mutlu dönüş',
    ],
    imageScenes: [
      'launching in a colorful rocket',
      'walking on the moon',
      'meeting friendly aliens',
      'watching a sparkling comet',
      'exploring Mars',
      'collecting stardust',
      'drawing a galaxy map',
      'returning happily to Earth',
    ],
  },
  underwater: {
    setting: 'renkli deniz altı',
    imageSetting: 'a bright underwater coral reef',
    emoji: '🐠',
    scenes: [
      'deniz kızı ile tanışmak',
      'mercan resiflerini keşfetmek',
      'yunuslarla yüzmek',
      'hazine sandığı bulmak',
      'ahtapotun sanat galerisini gezmek',
      'balık sürüsüyle dans etmek',
      'deniz yıldızı toplamak',
      'yüzeye çıkıp güneşi selamlamak',
    ],
    imageScenes: [
      'meeting a friendly mermaid',
      'exploring coral reefs',
      'swimming with dolphins',
      'finding a treasure chest underwater',
      'visiting an octopus art gallery',
      'dancing with a school of fish',
      'collecting starfish',
      'surfacing and greeting the sun',
    ],
  },
  fairy: {
    setting: 'peri krallığı',
    imageSetting: 'a fairy tale castle kingdom',
    emoji: '🧚',
    scenes: [
      'peri tozu bulmak',
      'sihirli değneği öğrenmek',
      'bulutlardaki kaleyi görmek',
      'ejderha ile barış yapmak',
      'büyülü çiçek bahçesini gezmek',
      'peri balosuna katılmak',
      'kayıp tacı bulmak',
      'mutlu son yaşamak',
    ],
    imageScenes: [
      'finding sparkling fairy dust',
      'learning to use a magic wand',
      'seeing a castle in the clouds',
      'making peace with a friendly dragon',
      'walking in a magical flower garden',
      'joining a fairy ball',
      'finding a lost crown',
      'celebrating a happy ending',
    ],
  },
  dinosaurs: {
    setting: 'dinozor vadisi',
    imageSetting: 'a friendly dinosaur valley',
    emoji: '🦕',
    scenes: [
      'dinozor yavrusu ile tanışmak',
      'dev yaprakları toplamak',
      'volkanı keşfetmek',
      'T-Rex ile arkadaş olmak',
      'fosil aramak',
      'dinozor pikniği yapmak',
      'uçan dinozor görmek',
      'güvenli mağarada uyumak',
    ],
    imageScenes: [
      'meeting a baby dinosaur',
      'collecting giant leaves',
      'exploring a gentle volcano',
      'becoming friends with a T-Rex',
      'hunting for fossils',
      'having a dinosaur picnic',
      'seeing a flying dinosaur',
      'sleeping safely in a cave',
    ],
  },
  superhero: {
    setting: 'süper kahraman şehri',
    imageSetting: 'a cheerful superhero city',
    emoji: '⚡',
    scenes: [
      'süper gücünü keşfetmek',
      'yardıma koşmak',
      'kötü hava durumunu durdurmak',
      'takım arkadaşları bulmak',
      'gizli üsse girmek',
      'şehri kurtarmak',
      'medal almak',
      'kahraman olarak kutlanmak',
    ],
    imageScenes: [
      'discovering a colorful superpower',
      'running to help others',
      'stopping a storm with kindness',
      'finding hero teammates',
      'entering a secret hero base',
      'saving the cheerful city',
      'receiving a shiny medal',
      'being celebrated as a hero',
    ],
  },
  custom: {
    setting: 'hayal dünyası',
    imageSetting: 'a whimsical world of imagination',
    emoji: '✨',
    scenes: [
      'maceraya başlamak',
      'ilginç bir karakterle tanışmak',
      'büyük bir zorlukla karşılaşmak',
      'akıllıca bir çözüm bulmak',
      'sürpriz bir keşif yapmak',
      'yardımlaşmak',
      'başarıya ulaşmak',
      'mutlu son',
    ],
    imageScenes: [
      'starting a big adventure',
      'meeting an interesting character',
      'facing a big challenge',
      'finding a clever solution',
      'making a surprise discovery',
      'helping each other',
      'reaching success together',
      'happy ending celebration',
    ],
  },
}

function buildPageTexts(request: StoryRequest): string[] {
  const hero = request.heroName || 'Cesur Kahraman'
  const theme = CATEGORY_THEMES[request.category] ?? CATEGORY_THEMES.custom
  const promptHint = request.prompt ? ` ${request.prompt} konusunda` : ''
  const isPersonalized = request.category === 'personalized' || !!request.heroName

  const intros = isPersonalized
    ? [
        `Bir zamanlar ${hero} adında meraklı ve cesur bir çocuk yaşarmış.${promptHint}`,
        `${hero} bir sabah uyandığında odasında ${theme.emoji} parlayan bir ışık görmüş!`,
      ]
    : [
        `Bir varmış bir yokmuş, ${theme.setting} diye bir yer varmış.${promptHint}`,
        `Orada yaşayan çocuklar her gün yeni maceralar ararmış ${theme.emoji}`,
      ]

  const middles = theme.scenes.slice(0, request.pageCount - 3).map((scene) => {
    if (isPersonalized) {
      return `${hero}, ${scene} için yola çıkmış. Her adımda daha da heyecanlanmış!`
    }
    return `Bir gün çocuklar ${scene} karar vermişler. Ne kadar eğlenceli olacağını hayal bile edemezlerdi!`
  })

  const endings = isPersonalized
    ? [
        `${hero} gülümseyerek eve dönmüş, kalbinde sıcak bir mutluluk taşıyormuş.`,
        `Ve o günden sonra ${hero} her gece bu macerayı rüyasında yaşarmış. Masal burada bitmiş, mutluluklar daim olsun! 🌟`,
      ]
    : [
        'Çocuklar birbirlerine sarılmış, bu günün ne kadar özel olduğunu anlamışlar.',
        'Ve o günden sonra o yerde her zaman kahkaha ve mutluluk eksik olmamış. Masal burada bitmiş! 🌟',
      ]

  const all = [...intros, ...middles, ...endings]
  return all.slice(0, request.pageCount)
}

export function generateFallbackStory(request: StoryRequest): Story {
  const heroName = request.heroName
  const theme = CATEGORY_THEMES[request.category] ?? CATEGORY_THEMES.custom
  const texts = buildPageTexts(request)

  const title = heroName
    ? `${heroName}'ın Sihirli Macerası`
    : request.prompt
      ? request.prompt.slice(0, 40) + (request.prompt.length > 40 ? '...' : '')
      : `${theme.emoji} Sihirli Bir Masal`

  const pages = texts.map((text, i) => {
    const scene = theme.imageScenes[i % theme.imageScenes.length]
    return {
      pageNumber: i + 1,
      text,
      imagePrompt: heroName
        ? `${scene}, ${theme.imageSetting}, cheerful child hero`
        : `${scene}, ${theme.imageSetting}, cute children, magical and colorful`,
    }
  })

  return {
    title,
    pages,
    heroName: request.heroName,
    heroImage: request.heroImage,
    category: request.category,
    artStyle: request.artStyle,
  }
}

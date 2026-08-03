import type { Story, StoryRequest } from '../types'
import { getArtStyleSuffix } from '../data/prompts'

const CATEGORY_THEMES: Record<string, { setting: string; emoji: string; scenes: string[] }> = {
  personalized: {
    setting: 'sihirli bir dünya',
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
  },
  adventure: {
    setting: 'büyülü orman',
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
  },
  animals: {
    setting: 'sevimli hayvanların ormanı',
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
  },
  space: {
    setting: 'yıldızlar arası',
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
  },
  underwater: {
    setting: 'renkli deniz altı',
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
  },
  fairy: {
    setting: 'peri krallığı',
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
  },
  dinosaurs: {
    setting: 'dinozor vadisi',
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
  },
  superhero: {
    setting: 'süper kahraman şehri',
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
  },
  custom: {
    setting: 'hayal dünyası',
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

  const pages = texts.map((text, i) => ({
    pageNumber: i + 1,
    text,
    imagePrompt: heroName
      ? `A cheerful child hero named ${heroName}, ${theme.scenes[i % theme.scenes.length]}, ${theme.setting}, children's book illustration`
      : `Children's storybook scene: ${theme.scenes[i % theme.scenes.length]}, ${theme.setting}, magical and colorful`,
  }))

  return {
    title,
    pages,
    heroName: request.heroName,
    heroImage: request.heroImage,
    category: request.category,
    artStyle: request.artStyle,
  }
}

export function buildImagePrompt(
  basePrompt: string,
  request: StoryRequest,
  pageIndex: number,
): string {
  const heroContext = request.heroName
    ? `, featuring a cheerful child hero named ${request.heroName}`
    : ''
  const style = getArtStyleSuffix(request.artStyle)
  return `${basePrompt}${heroContext}, ${style}, children's book illustration, no text, no watermark, page ${pageIndex + 1}`
}

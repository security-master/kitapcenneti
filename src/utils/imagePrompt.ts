import type { ArtStyle, StoryCategory } from '../types'

/** Compact style cues that still steer Flux well (kept short for URL length). */
const STYLE_SHORT: Record<ArtStyle, string> = {
  watercolor: "soft watercolor children's book, pastel colors",
  cartoon: 'vibrant cartoon kids book, bold outlines',
  pixar: 'Pixar 3D cute characters, cinematic light',
  anime: 'kawaii anime kids illustration, soft shading',
  storybook: 'classic fairy tale book art, warm tones',
  clay: 'claymation stop-motion, handmade clay figures',
  pastel: 'soft pastel dreamy kids illustration',
}

const CATEGORY_SCENE: Record<StoryCategory, string> = {
  personalized: 'magical adventure world',
  adventure: 'enchanted forest adventure',
  animals: 'friendly animals in a sunny forest',
  space: 'colorful outer space adventure',
  underwater: 'bright underwater coral reef',
  fairy: 'fairy tale castle kingdom',
  dinosaurs: 'friendly dinosaur valley',
  superhero: 'cheerful superhero city',
  custom: 'whimsical imagination world',
}

/** Map common Turkish scene fragments → English for image models. */
const TR_TO_EN: Array<[RegExp, string]> = [
  [/parlayan bir kapıyı keşfetmek/gi, 'discovering a glowing magical door'],
  [/konuşan hayvanlarla tanışmak/gi, 'meeting talking animals'],
  [/gizli bir harita bulmak/gi, 'finding a secret treasure map'],
  [/bulutların üstünde uçmak/gi, 'flying above soft clouds'],
  [/sihirli bir hazinenin peşine düşmek/gi, 'searching for a magical treasure'],
  [/yeni dostlar edinmek/gi, 'making new friends'],
  [/büyük bir sırrı çözmek/gi, 'solving a big mystery'],
  [/mutlu bir dönüş yapmak/gi, 'returning home happily'],
  [/eski bir harita bulmak/gi, 'finding an old adventure map'],
  [/konuşan ağaçlarla karşılaşmak/gi, 'meeting talking trees'],
  [/gizli bir mağaraya girmek/gi, 'entering a secret cave'],
  [/gökkuşağı köprüsünden geçmek/gi, 'crossing a rainbow bridge'],
  [/sihirli bir çiçek toplamak/gi, 'picking a magical flower'],
  [/kaybolan yolu bulmak/gi, 'finding the lost path home'],
  [/hazine sandığını açmak/gi, 'opening a treasure chest'],
  [/kahramanca eve dönmek/gi, 'returning home as a hero'],
  [/tavşanla tanışmak/gi, 'meeting a friendly rabbit'],
  [/ormanda piknik yapmak/gi, 'having a picnic in the forest'],
  [/kuşlarla şarkı söylemek/gi, 'singing with colorful birds'],
  [/ayı ile balık tutmak/gi, 'fishing with a friendly bear'],
  [/tilki ile saklambaç oynamak/gi, 'playing hide and seek with a fox'],
  [/gece yıldızları izlemek/gi, 'watching stars at night'],
  [/hep birlikte dans etmek/gi, 'dancing happily together'],
  [/güzel bir veda partisi/gi, 'a joyful farewell party'],
  [/roketle fırlamak/gi, 'launching in a colorful rocket'],
  [/Ay'?da yürümek/gi, 'walking on the moon'],
  [/uzaylı dostlarla tanışmak/gi, 'meeting friendly aliens'],
  [/kuyruklu yıldızı izlemek/gi, 'watching a sparkling comet'],
  [/Mars'?ta keşif yapmak/gi, 'exploring Mars'],
  [/yıldız tozu toplamak/gi, 'collecting stardust'],
  [/galaksi haritası çizmek/gi, 'drawing a galaxy map'],
  [/Dünya'?ya mutlu dönüş/gi, 'returning happily to Earth'],
  [/deniz kızı ile tanışmak/gi, 'meeting a friendly mermaid'],
  [/mercan resiflerini keşfetmek/gi, 'exploring coral reefs'],
  [/yunuslarla yüzmek/gi, 'swimming with dolphins'],
  [/hazine sandığı bulmak/gi, 'finding a treasure chest'],
  [/ahtapotun sanat galerisini gezmek/gi, 'visiting an octopus art gallery'],
  [/balık sürüsüyle dans etmek/gi, 'dancing with a school of fish'],
  [/deniz yıldızı toplamak/gi, 'collecting starfish'],
  [/yüzeye çıkıp güneşi selamlamak/gi, 'surfacing and greeting the sun'],
  [/peri tozu bulmak/gi, 'finding fairy dust'],
  [/sihirli değneği öğrenmek/gi, 'learning to use a magic wand'],
  [/bulutlardaki kaleyi görmek/gi, 'seeing a castle in the clouds'],
  [/ejderha ile barış yapmak/gi, 'making peace with a friendly dragon'],
  [/büyülü çiçek bahçesini gezmek/gi, 'walking in a magical flower garden'],
  [/peri balosuna katılmak/gi, 'joining a fairy ball'],
  [/kayıp tacı bulmak/gi, 'finding a lost crown'],
  [/mutlu son yaşamak/gi, 'celebrating a happy ending'],
  [/dinozor yavrusu ile tanışmak/gi, 'meeting a baby dinosaur'],
  [/dev yaprakları toplamak/gi, 'collecting giant leaves'],
  [/volkanı keşfetmek/gi, 'exploring a gentle volcano'],
  [/T-Rex ile arkadaş olmak/gi, 'becoming friends with a T-Rex'],
  [/fosil aramak/gi, 'hunting for fossils'],
  [/dinozor pikniği yapmak/gi, 'having a dinosaur picnic'],
  [/uçan dinozor görmek/gi, 'seeing a flying dinosaur'],
  [/güvenli mağarada uyumak/gi, 'sleeping safely in a cave'],
  [/süper gücünü keşfetmek/gi, 'discovering a superpower'],
  [/yardıma koşmak/gi, 'running to help others'],
  [/kötü hava durumunu durdurmak/gi, 'stopping a storm with kindness'],
  [/takım arkadaşları bulmak/gi, 'finding hero teammates'],
  [/gizli üsse girmek/gi, 'entering a secret hero base'],
  [/şehri kurtarmak/gi, 'saving the cheerful city'],
  [/medal almak/gi, 'receiving a medal'],
  [/kahraman olarak kutlanmak/gi, 'being celebrated as a hero'],
  [/maceraya başlamak/gi, 'starting a big adventure'],
  [/ilginç bir karakterle tanışmak/gi, 'meeting an interesting character'],
  [/büyük bir zorlukla karşılaşmak/gi, 'facing a big challenge'],
  [/akıllıca bir çözüm bulmak/gi, 'finding a clever solution'],
  [/sürpriz bir keşif yapmak/gi, 'making a surprise discovery'],
  [/yardımlaşmak/gi, 'helping each other'],
  [/başarıya ulaşmak/gi, 'reaching success together'],
  [/mutlu son/gi, 'happy ending celebration'],
  [/sihirli bir dünya/gi, 'a magical world'],
  [/büyülü orman/gi, 'an enchanted forest'],
  [/sevimli hayvanların ormanı/gi, 'a forest of cute animals'],
  [/yıldızlar arası/gi, 'among the stars'],
  [/renkli deniz altı/gi, 'a colorful underwater world'],
  [/peri krallığı/gi, 'a fairy kingdom'],
  [/dinozor vadisi/gi, 'a dinosaur valley'],
  [/süper kahraman şehri/gi, 'a superhero city'],
  [/hayal dünyası/gi, 'a world of imagination'],
]

function translateScene(scene: string): string {
  let out = scene
  for (const [re, en] of TR_TO_EN) out = out.replace(re, en)
  return out
}

function cleanSceneText(scene: string): string {
  return translateScene(scene)
    .replace(/children'?s book illustration/gi, '')
    .replace(/no text|no watermark|text overlay/gi, '')
    .replace(/\s+/g, ' ')
    .replace(/^[,;:\-\s]+|[,;:\-\s]+$/g, '')
    .trim()
}

/**
 * Build a concise English image prompt.
 * Avoids the old `.split(',')[0]` bug that dropped the actual scene.
 */
export function buildShortImagePrompt(
  scene: string,
  heroName?: string,
  artStyle: ArtStyle = 'watercolor',
  category?: StoryCategory,
  maxLen = 180,
): string {
  const style = STYLE_SHORT[artStyle] ?? STYLE_SHORT.watercolor
  const setting = category ? CATEGORY_SCENE[category] : ''
  const cleaned = cleanSceneText(scene)

  // Drop redundant hero/boilerplate so the action remains
  let sceneCore = cleaned
    .replace(/^A cheerful child hero named [^,]+,?\s*/i, '')
    .replace(/^Children'?s storybook scene:\s*/i, '')
    .replace(/\bcheerful child hero\b/gi, '')
    .replace(/\bcute children\b/gi, '')
    .replace(/\bmagical and colorful\b/gi, '')
    .replace(/\s+,/g, ',')
    .replace(/,\s*,+/g, ', ')
    .replace(/^[,;:\-\s]+|[,;:\-\s]+$/g, '')
    .trim()

  // Remove setting phrases already present (EN category cue or translated TR setting)
  const dropSettings = [setting, 'a magical world', 'an enchanted forest', 'among the stars'].filter(Boolean)
  for (const s of dropSettings) {
    const re = new RegExp(s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'gi')
    sceneCore = sceneCore.replace(re, '')
  }
  sceneCore = sceneCore
    .replace(/,\s*,+/g, ', ')
    .replace(/\ba\s*,/gi, '')
    .replace(/^[, ]+|[, ]+$/g, '')
    .replace(/\s+/g, ' ')
    .trim()

  const heroBit = heroName
    ? `cheerful child named ${heroName.trim().slice(0, 20)}`
    : 'cute cheerful children'

  const parts = [heroBit, sceneCore.slice(0, 90), setting, style, 'no text no watermark'].filter(
    (p) => p && p.length > 1,
  )

  const prompt = parts.join(', ').replace(/,\s*,+/g, ', ').replace(/\s+/g, ' ').trim()
  return prompt.slice(0, maxLen)
}

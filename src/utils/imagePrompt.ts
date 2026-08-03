import type { ArtStyle } from '../types'

const STYLE_SHORT: Record<ArtStyle, string> = {
  watercolor: 'watercolor pastel',
  cartoon: 'cartoon colorful',
  pixar: 'pixar 3d cute',
  anime: 'anime kawaii',
  storybook: 'fairy tale book',
  clay: 'claymation cute',
  pastel: 'pastel dreamy',
}

export function buildShortImagePrompt(
  scene: string,
  heroName?: string,
  artStyle: ArtStyle = 'watercolor',
): string {
  const hero = heroName ? `child ${heroName}` : 'cute children'
  const style = STYLE_SHORT[artStyle]
  const cleanScene = scene
    .replace(/children's book illustration/gi, '')
    .replace(/no text|no watermark/gi, '')
    .split(',')[0]
    .trim()
    .slice(0, 80)

  const prompt = `${hero}, ${cleanScene}, ${style}, storybook art`
  return prompt.slice(0, 150)
}

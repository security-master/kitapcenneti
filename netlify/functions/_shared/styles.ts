export const ART_STYLE_HINTS: Record<string, string> = {
  suluboya:
    "soft watercolor children's book illustration, warm colors, gentle brush strokes, child-safe",
  'cizgi-film':
    'bright cartoon animation style for kids, bold shapes, cheerful colors, child-safe',
  pastel: 'soft pastel chalk illustration, dreamy atmosphere, kid-friendly, child-safe',
  'kağıt-kesik':
    'paper-cut collage illustration for children, layered colorful paper textures, child-safe',
  'masal-kitabi':
    'classic fairy tale storybook illustration, rich detail, magical lighting, child-safe',
}

export function styleHint(style?: string) {
  return ART_STYLE_HINTS[style || 'masal-kitabi'] || ART_STYLE_HINTS['masal-kitabi']
}

export function buildImagePrompt(scene: string, artStyle?: string, characterNote?: string) {
  const style = styleHint(artStyle)
  const character = characterNote ? ` Main character: ${characterNote}.` : ''
  return `${scene}.${character} Style: ${style}. Full-bleed storybook scene, no text, no watermark, no logos, wholesome and safe for young children.`
}

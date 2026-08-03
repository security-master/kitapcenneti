export interface StoryPage {
  pageNumber: number
  text: string
  imagePrompt: string
  imageUrl?: string
  imageStatus?: 'pending' | 'loading' | 'ready' | 'error'
}

export interface StoryBook {
  id: string
  title: string
  summary: string
  coverPrompt: string
  coverUrl?: string
  pages: StoryPage[]
  characterName?: string
  world?: string
  createdAt: string
  style: ArtStyle
}

export type ArtStyle =
  | 'suluboya'
  | 'cizgi-film'
  | 'pastel'
  | 'kağıt-kesik'
  | 'masal-kitabi'

export const ART_STYLES: { id: ArtStyle; label: string; hint: string }[] = [
  {
    id: 'suluboya',
    label: 'Suluboya',
    hint: "soft watercolor children's book illustration, warm colors, gentle brush strokes",
  },
  {
    id: 'cizgi-film',
    label: 'Çizgi Film',
    hint: 'bright cartoon animation style for kids, bold shapes, cheerful colors',
  },
  {
    id: 'pastel',
    label: 'Pastel',
    hint: 'soft pastel chalk illustration, dreamy atmosphere, kid-friendly',
  },
  {
    id: 'kağıt-kesik',
    label: 'Kağıt Kesik',
    hint: 'paper-cut collage illustration for children, layered colorful paper textures',
  },
  {
    id: 'masal-kitabi',
    label: 'Klasik Masal',
    hint: 'classic fairy tale storybook illustration, rich detail, magical lighting, child-safe',
  },
]

export interface GenerateStoryRequest {
  prompt: string
  childName?: string
  childDescription?: string
  worldHint?: string
  pageCount?: number
  artStyle?: ArtStyle
  model?: string
  language?: string
}

export interface GenerateImageRequest {
  prompt: string
  artStyle?: ArtStyle
  model?: string
  referenceImage?: string
  referenceMimeType?: string
}

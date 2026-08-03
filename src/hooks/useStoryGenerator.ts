import { useState, useCallback } from 'react'
import type { Story, StoryRequest } from '../types'
import { getArtStyleSuffix } from '../data/prompts'

interface GenerationState {
  isGenerating: boolean
  progress: number
  status: string
  error: string | null
}

function buildPollinationsUrl(prompt: string, seed?: number): string {
  const encoded = encodeURIComponent(prompt)
  const seedParam = seed !== undefined ? `&seed=${seed}` : ''
  return `https://image.pollinations.ai/prompt/${encoded}?width=1024&height=768&nologo=true${seedParam}`
}

function generateFallbackStory(request: StoryRequest): Story {
  const heroName = request.heroName || 'Cesur Kahraman'
  const isPersonalized = request.category === 'personalized'

  const templates = isPersonalized
    ? [
        `Bir zamanlar ${heroName} adında çok meraklı bir çocuk yaşarmış.`,
        `${heroName} bir sabah uyandığında odasının duvarları parlamaya başlamış!`,
        `Cesaretle parlayan duvara dokundu ve kendini sihirli bir ormanda buldu.`,
        `Ormanda konuşan bir tavşanla tanıştı: "Seni bekliyorduk ${heroName}!"`,
        `Birlikte gizli bir hazinenin peşine düştüler.`,
        `Hazine aslında en değerli şeymiş: gerçek dostluk!`,
        `${heroName} gülümseyerek eve döndü, kalbinde sıcak bir his taşıyordu.`,
        `Ve o günden sonra her gece yıldızlara bakıp maceralarını hatırlardı.`,
      ]
    : [
        'Bir varmış bir yokmuş, çok uzaklarda renkli bir köy varmış.',
        'Köydeki çocuklar her gün oyun oynar, şarkı söylerlermiş.',
        'Bir gün gökyüzünden altın renkli bir yıldız düşmüş!',
        'Yıldız konuşmuş: "Beni eve götürün, size bir dilek vereceğim!"',
        'Çocuklar cesurca yola çıkmış, birlikte maceraya atılmışlar.',
        'Yol boyunca birbirlerine yardım etmişler.',
        'Sonunda yıldızı evine ulaştırmışlar ve herkes mutlu olmuş.',
        'O günden sonra köyde her zaman güneş parlamış.',
      ]

  const pages = Array.from({ length: request.pageCount }, (_, i) => {
    const text = templates[i % templates.length]
    const imagePrompt = isPersonalized
      ? `A cheerful child hero named ${heroName} in a magical adventure scene, page ${i + 1}, ${getArtStyleSuffix(request.artStyle)}`
      : `A colorful children's storybook scene, page ${i + 1}, magical adventure, ${getArtStyleSuffix(request.artStyle)}`

    return {
      pageNumber: i + 1,
      text,
      imagePrompt,
    }
  })

  return {
    title: isPersonalized ? `${heroName}'ın Sihirli Macerası` : 'Sihirli Bir Masal',
    pages,
    heroName: request.heroName,
    heroImage: request.heroImage,
    category: request.category,
    artStyle: request.artStyle,
  }
}

export function useStoryGenerator() {
  const [state, setState] = useState<GenerationState>({
    isGenerating: false,
    progress: 0,
    status: '',
    error: null,
  })
  const [story, setStory] = useState<Story | null>(null)

  const updateState = (partial: Partial<GenerationState>) => {
    setState((prev) => ({ ...prev, ...partial }))
  }

  const generateImage = async (
    prompt: string,
    provider: StoryRequest['imageProvider'],
    seed: number,
  ): Promise<string> => {
    if (provider === 'pollinations') {
      return buildPollinationsUrl(prompt, seed)
    }

    try {
      const res = await fetch('/.netlify/functions/generate-image', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt }),
      })

      if (res.ok) {
        const data = await res.json()
        if (data.imageUrl) return data.imageUrl
      }
    } catch {
      // fallback to pollinations
    }

    return buildPollinationsUrl(prompt, seed)
  }

  const generateStory = useCallback(async (request: StoryRequest) => {
    setStory(null)
    updateState({ isGenerating: true, progress: 5, status: 'Hikaye yazılıyor...', error: null })

    let generatedStory: Story

    try {
      const res = await fetch('/.netlify/functions/generate-story', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(request),
      })

      if (res.ok) {
        generatedStory = await res.json()
      } else {
        generatedStory = generateFallbackStory(request)
      }
    } catch {
      generatedStory = generateFallbackStory(request)
    }

    updateState({ progress: 30, status: 'Görseller çiziliyor...' })

    const pagesWithImages = [...generatedStory.pages]
    const totalPages = pagesWithImages.length

    for (let i = 0; i < totalPages; i++) {
      const page = pagesWithImages[i]
      updateState({
        progress: 30 + Math.round(((i + 1) / totalPages) * 65),
        status: `Sayfa ${i + 1}/${totalPages} resimleniyor...`,
      })

      const heroContext = request.heroName
        ? ` featuring a child hero named ${request.heroName}`
        : ''
      const fullPrompt = `${page.imagePrompt}${heroContext}, ${getArtStyleSuffix(request.artStyle)}, no text, no watermark`

      const imageUrl = await generateImage(fullPrompt, request.imageProvider, i * 42 + 7)
      pagesWithImages[i] = { ...page, imageUrl }
    }

    const finalStory: Story = { ...generatedStory, pages: pagesWithImages }
    setStory(finalStory)
    updateState({ isGenerating: false, progress: 100, status: 'Hikaye hazır!' })
  }, [])

  const resetStory = useCallback(() => {
    setStory(null)
    setState({ isGenerating: false, progress: 0, status: '', error: null })
  }, [])

  return { ...state, story, generateStory, resetStory }
}

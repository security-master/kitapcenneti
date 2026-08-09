import { useState, useCallback } from 'react'
import type { Story, StoryRequest } from '../types'
import { generateFallbackStory } from '../utils/fallbackStory'
import { buildShortImagePrompt } from '../utils/imagePrompt'
import { buildDirectPollinationsUrl, callApi } from '../utils/api'

interface GenerationState {
  isGenerating: boolean
  progress: number
  status: string
  error: string | null
}

async function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

async function generateImage(
  scene: string,
  request: StoryRequest,
  pageIndex: number,
): Promise<string> {
  const prompt = buildShortImagePrompt(scene, request.heroName, request.artStyle)
  const seed = pageIndex * 42 + 7

  const data = await callApi<{ imageUrl?: string }>('generate-image', { prompt, seed })
  if (data?.imageUrl) return data.imageUrl

  return buildDirectPollinationsUrl(prompt, seed)
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

  const generateStory = useCallback(async (request: StoryRequest) => {
    setStory(null)
    updateState({ isGenerating: true, progress: 5, status: 'Hikaye yazılıyor...', error: null })

    const apiStory = await callApi<Story>('generate-story', request)
    const generatedStory = apiStory ?? generateFallbackStory(request)

    updateState({ progress: 30, status: 'Görseller çiziliyor... ✨' })

    const pagesWithImages = [...generatedStory.pages]
    const totalPages = pagesWithImages.length

    for (let i = 0; i < totalPages; i++) {
      const page = pagesWithImages[i]
      updateState({
        progress: 30 + Math.round(((i + 1) / totalPages) * 65),
        status: `Sayfa ${i + 1}/${totalPages} resimleniyor... 🎨`,
      })

      const imageUrl = await generateImage(page.imagePrompt, request, i)
      pagesWithImages[i] = { ...page, imageUrl }

      if (i < totalPages - 1) await delay(2500)
    }

    const finalStory: Story = { ...generatedStory, pages: pagesWithImages }
    setStory(finalStory)
    updateState({ isGenerating: false, progress: 100, status: 'Hikaye hazır! 📚' })
  }, [])

  const loadStory = useCallback((saved: Story) => {
    setStory(saved)
    updateState({ isGenerating: false, progress: 100, status: '' })
  }, [])

  const resetStory = useCallback(() => {
    setStory(null)
    setState({ isGenerating: false, progress: 0, status: '', error: null })
  }, [])

  return { ...state, story, generateStory, loadStory, resetStory }
}

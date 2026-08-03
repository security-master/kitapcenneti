import { useState, useCallback } from 'react'
import type { Story, StoryRequest } from '../types'
import { generateFallbackStory, buildImagePrompt } from '../utils/fallbackStory'

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
        body: JSON.stringify({ prompt, seed }),
      })

      if (res.ok) {
        const data = await res.json()
        if (data.imageUrl) return data.imageUrl
      }
    } catch {
      // fallback
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

    updateState({ progress: 30, status: 'Görseller çiziliyor... ✨' })

    const pagesWithImages = [...generatedStory.pages]
    const totalPages = pagesWithImages.length

    for (let i = 0; i < totalPages; i++) {
      const page = pagesWithImages[i]
      updateState({
        progress: 30 + Math.round(((i + 1) / totalPages) * 65),
        status: `Sayfa ${i + 1}/${totalPages} resimleniyor... 🎨`,
      })

      const fullPrompt = buildImagePrompt(page.imagePrompt, request, i)
      const imageUrl = await generateImage(fullPrompt, request.imageProvider, i * 42 + 7)
      pagesWithImages[i] = { ...page, imageUrl }
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

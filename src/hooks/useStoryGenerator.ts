import { useState, useCallback } from 'react'
import type { Story, StoryRequest } from '../types'
import { generateFallbackStory } from '../utils/fallbackStory'
import { buildShortImagePrompt } from '../utils/imagePrompt'

interface GenerationState {
  isGenerating: boolean
  progress: number
  status: string
  error: string | null
}

async function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

async function fetchImageFromServer(prompt: string, seed: number): Promise<string | null> {
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
    // fallback below
  }
  return null
}

function buildDirectPollinationsUrl(prompt: string, seed: number): string {
  const short = prompt.slice(0, 120)
  const encoded = encodeURIComponent(short)
  return `https://image.pollinations.ai/prompt/${encoded}?width=768&height=576&nologo=true&seed=${seed}&model=flux`
}

async function generateImage(
  scene: string,
  request: StoryRequest,
  pageIndex: number,
): Promise<string> {
  const prompt = buildShortImagePrompt(scene, request.heroName, request.artStyle)
  const seed = pageIndex * 42 + 7

  const serverImage = await fetchImageFromServer(prompt, seed)
  if (serverImage) return serverImage

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

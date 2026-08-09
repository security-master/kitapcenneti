import { useState, useEffect } from 'react'
import type { Story } from '../types'
import { buildDirectPollinationsUrl } from '../utils/api'
import { buildShortImagePrompt } from '../utils/imagePrompt'

const STORAGE_KEY = 'kitapcenneti-stories'

export function useSavedStories() {
  const [savedStories, setSavedStories] = useState<Story[]>([])

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY)
      if (raw) setSavedStories(JSON.parse(raw))
    } catch {
      setSavedStories([])
    }
  }, [])

  const saveStory = (story: Story) => {
    // localStorage can't hold large data: URLs — keep a Pollinations URL instead
    const stripped: Story = {
      ...story,
      pages: story.pages.map((p, i) => {
        if (p.imageUrl && !p.imageUrl.startsWith('data:')) {
          return p
        }
        const prompt = buildShortImagePrompt(
          p.imagePrompt,
          story.heroName,
          story.artStyle,
          story.category,
        )
        return {
          ...p,
          imageUrl: buildDirectPollinationsUrl(prompt, i * 42 + 7),
        }
      }),
    }
    const updated = [stripped, ...savedStories.filter((s) => s.title !== story.title)].slice(0, 10)
    setSavedStories(updated)
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated))
  }

  const deleteStory = (title: string) => {
    const updated = savedStories.filter((s) => s.title !== title)
    setSavedStories(updated)
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated))
  }

  return { savedStories, saveStory, deleteStory }
}

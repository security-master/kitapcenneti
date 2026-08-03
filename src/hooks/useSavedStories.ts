import { useState, useEffect } from 'react'
import type { Story } from '../types'

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
    const updated = [story, ...savedStories.filter((s) => s.title !== story.title)].slice(0, 10)
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

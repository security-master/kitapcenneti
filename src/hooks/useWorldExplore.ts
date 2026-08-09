import { useCallback, useEffect, useState } from 'react'
import { getActiveProfileId } from './usePortalProfile'
import { completeActivity, addBonusStars } from './useProgress'
import { WORLD_REGIONS } from '../data/world'

const BASE = 'kitapcenneti-world'

export interface WorldExploreState {
  visited: string[]
  treasures: string[]
  activeId: string | null
}

function key() {
  return `${BASE}::${getActiveProfileId()}`
}

function read(): WorldExploreState {
  try {
    return {
      visited: [],
      treasures: [],
      activeId: null,
      ...JSON.parse(localStorage.getItem(key()) || '{}'),
    }
  } catch {
    return { visited: [], treasures: [], activeId: null }
  }
}

export function useWorldExplore() {
  const [state, setState] = useState<WorldExploreState>({ visited: [], treasures: [], activeId: null })

  const refresh = useCallback(() => setState(read()), [])

  useEffect(() => {
    refresh()
    const on = () => refresh()
    window.addEventListener('kitapcenneti-portal', on)
    return () => window.removeEventListener('kitapcenneti-portal', on)
  }, [refresh])

  const persist = (next: WorldExploreState) => {
    localStorage.setItem(key(), JSON.stringify(next))
    setState(next)
    window.dispatchEvent(new CustomEvent('kitapcenneti-portal'))
  }

  const visit = (id: string) => {
    const first = !state.visited.includes(id)
    const next = {
      ...state,
      activeId: id,
      visited: first ? [...state.visited, id] : state.visited,
    }
    persist(next)
    if (first) {
      completeActivity('explore')
      if (next.visited.length % 5 === 0) addBonusStars(2)
    }
    return first
  }

  const collectTreasure = (id: string) => {
    if (state.treasures.includes(id) || !state.visited.includes(id)) return false
    persist({ ...state, treasures: [...state.treasures, id] })
    addBonusStars(1)
    completeActivity('hunt')
    return true
  }

  const progress = Math.round((state.visited.length / Math.max(1, WORLD_REGIONS.length)) * 100)

  return { ...state, visit, collectTreasure, progress, total: WORLD_REGIONS.length, refresh }
}

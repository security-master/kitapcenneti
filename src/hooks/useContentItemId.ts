import { useEffect, useState } from 'react'
import { parseContentHash } from '../utils/share'

/** Sync selected content id with `#page/itemId` deep links */
export function useContentItemId(page: string, fallbackId: string) {
  const [itemId, setItemIdState] = useState(() => {
    const parsed = parseContentHash(window.location.hash)
    if (parsed.page === page && parsed.itemId) return parsed.itemId
    return fallbackId
  })

  useEffect(() => {
    const onHash = () => {
      const parsed = parseContentHash(window.location.hash)
      if (parsed.page === page && parsed.itemId) setItemIdState(parsed.itemId)
    }
    window.addEventListener('hashchange', onHash)
    return () => window.removeEventListener('hashchange', onHash)
  }, [page])

  const setItemId = (id: string) => {
    setItemIdState(id)
    const next = `#${page}/${encodeURIComponent(id)}`
    if (window.location.hash !== next) {
      window.history.replaceState(null, '', next)
    }
  }

  return [itemId, setItemId] as const
}

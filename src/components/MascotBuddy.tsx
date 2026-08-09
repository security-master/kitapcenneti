import { useMemo, useState } from 'react'
import type { PageId } from '../types/nav'
import { WHAT_NEXT } from '../data/stickers'

interface MascotBuddyProps {
  onNavigate: (page: PageId) => void
}

const LINES = [
  'Bugün nereye bakalım?',
  'Kısa bir oyun ister misin?',
  'Bir masal dinleyelim mi?',
  'Sürpriz çarkı seni bekliyor.',
  'Yeni bir sticker açabilirsin.',
  'Canlı Arena’da saatlik görev var!',
  'Gizemli kutu şarj olmuş olabilir…',
  'Portal dostun karnı acıkmış olabilir!',
  'Etkileşim Arenası’nda ritim dansı var!',
  'Haritada açılmamış bir hazine olabilir…',
]

export function MascotBuddy({ onNavigate }: MascotBuddyProps) {
  const [open, setOpen] = useState(false)
  const [tick, setTick] = useState(0)
  const line = useMemo(() => LINES[tick % LINES.length], [tick])
  const tip = useMemo(() => WHAT_NEXT[tick % WHAT_NEXT.length], [tick])

  return (
    <div className={`mascot ${open ? 'is-open' : ''}`}>
      {open && (
        <div className="mascot__bubble">
          <p>{line}</p>
          <button
            type="button"
            className="btn btn--small"
            onClick={() => {
              onNavigate(tip.page as PageId)
              setOpen(false)
            }}
          >
            {tip.emoji} {tip.title}
          </button>
          <button
            type="button"
            className="mascot__shuffle"
            onClick={() => setTick((t) => t + 1)}
          >
            Başka öneri
          </button>
        </div>
      )}
      <button
        type="button"
        className="mascot__btn"
        aria-label="Yardımsever maskot"
        onClick={() => {
          setOpen((v) => !v)
          setTick((t) => t + 1)
        }}
      >
        <span className="mascot__face">🦊</span>
      </button>
    </div>
  )
}

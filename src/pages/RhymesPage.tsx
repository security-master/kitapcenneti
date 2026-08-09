import { useState } from 'react'
import { RHYMES } from '../data/rhymes'
import { useSpeech } from '../hooks/useSpeech'

export function RhymesPage() {
  const [activeId, setActiveId] = useState(RHYMES[0].id)
  const rhyme = RHYMES.find((r) => r.id === activeId) || RHYMES[0]
  const { speaking, speak, stop } = useSpeech()

  return (
    <div className="page">
      <header className="page-header">
        <h1>🎵 Şarkılar & Tekerlemeler</h1>
        <p>Klasik çocuk tekerlemeleri — ezberle, söyle, sesli okut.</p>
      </header>

      <div className="rhymes-grid">
        {RHYMES.map((r) => (
          <button
            key={r.id}
            className={`rhyme-chip ${activeId === r.id ? 'is-active' : ''}`}
            onClick={() => {
              stop()
              setActiveId(r.id)
            }}
          >
            {r.emoji} {r.title}
          </button>
        ))}
      </div>

      <div className="panel">
        <h2>{rhyme.emoji} {rhyme.title}</h2>
        <pre className="lyrics">{rhyme.lyrics}</pre>
        <div className="btn-row">
          <button
            className="btn btn--primary"
            onClick={() => (speaking ? stop() : speak(rhyme.lyrics, 0.85))}
          >
            {speaking ? '⏹ Durdur' : '🎧 Sesli Oku'}
          </button>
        </div>
      </div>
    </div>
  )
}

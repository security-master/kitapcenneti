import { STEM_CARDS } from '../data/stem'
import { AdSlot } from '../components/AdSlot'
import { useState } from 'react'

export function StemPage() {
  const [activeId, setActiveId] = useState(STEM_CARDS[0].id)
  const card = STEM_CARDS.find((c) => c.id === activeId) || STEM_CARDS[0]

  return (
    <div className="page">
      <header className="page-header">
        <h1>🔬 STEM & Bilim</h1>
        <p>Ev malzemeleriyle güvenli mini deneyler. Merak et, dene, nedenini öğren.</p>
      </header>

      <div className="stem-grid">
        {STEM_CARDS.map((c) => (
          <button
            key={c.id}
            className={`stem-chip ${activeId === c.id ? 'is-active' : ''}`}
            onClick={() => setActiveId(c.id)}
          >
            {c.emoji} {c.title}
          </button>
        ))}
      </div>

      <div className="panel">
        <h2>{card.emoji} {card.title}</h2>
        <p><strong>Yaş:</strong> {card.age} · <strong>Süre:</strong> ~{card.minutes} dk</p>
        <h3>Malzemeler</h3>
        <ul className="tip-list">{card.materials.map((m) => <li key={m}>{m}</li>)}</ul>
        <h3>Adımlar</h3>
        <ol className="tip-list">{card.steps.map((s) => <li key={s}>{s}</li>)}</ol>
        <h3>Neden oluyor?</h3>
        <p>{card.why}</p>
      </div>

      <AdSlot slot="bottom" />
    </div>
  )
}

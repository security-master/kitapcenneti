import type { PageId } from '../types/nav'
import { COLLECTIONS } from '../data/collections'

interface Props {
  onNavigate: (page: PageId) => void
}

export function DiscoverPage({ onNavigate }: Props) {
  return (
    <div className="page">
      <header className="page-header">
        <h1>🧭 Koleksiyonlar</h1>
        <p>{COLLECTIONS.length} küratör seçkisi — uyku, okul, duygu, macera… hazır demetler.</p>
      </header>
      <div className="discover-grid">
        {COLLECTIONS.map((c) => (
          <article key={c.id} className="panel discover-card">
            <h2>
              {c.emoji} {c.title}
            </h2>
            <p>{c.description}</p>
            <small>{c.tags.join(' · ')}</small>
            <ul className="discover-items">
              {c.items.map((item) => (
                <li key={`${c.id}-${item.label}`}>
                  <button type="button" className="week-link" onClick={() => onNavigate(item.page as PageId)}>
                    {item.emoji} {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </div>
  )
}

import { useMemo, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { CATEGORIES, PROMPT_LIBRARY, getPromptsByCategory } from '../data/prompts'

export function LibraryPage() {
  const [filter, setFilter] = useState('hepsi')
  const navigate = useNavigate()
  const prompts = useMemo(() => getPromptsByCategory(filter), [filter])

  return (
    <div className="app-shell section">
      <div className="section__head">
        <div>
          <h1 className="section__title">Prompt Kütüphanesi</h1>
          <p className="section__sub">
            Hazır masal fikirlerinden birini seç veya kendi promptunu yaz.
          </p>
        </div>
        <Link to="/olustur" className="btn btn-primary">
          Kendi promptum
        </Link>
      </div>

      <div className="chip-row" style={{ marginBottom: '1.2rem' }}>
        <button
          type="button"
          className={`chip ${filter === 'hepsi' ? 'active' : ''}`}
          onClick={() => setFilter('hepsi')}
        >
          Hepsi ({PROMPT_LIBRARY.length})
        </button>
        {CATEGORIES.filter((c) => c.id !== 'beni-masalda').map((cat) => (
          <button
            key={cat.id}
            type="button"
            className={`chip ${filter === cat.id ? 'active' : ''}`}
            onClick={() => setFilter(cat.id)}
          >
            {cat.title}
          </button>
        ))}
      </div>

      <div className="prompt-grid">
        {prompts.map((prompt) => (
          <button
            key={prompt.id}
            type="button"
            className="prompt-tile"
            style={{ background: prompt.coverGradient }}
            onClick={() =>
              navigate(
                `/olustur?prompt=${encodeURIComponent(prompt.prompt)}&title=${encodeURIComponent(prompt.title)}&kategori=${prompt.category}`,
              )
            }
          >
            <div>
              <div className="prompt-tile__emoji" aria-hidden="true">
                {prompt.emoji}
              </div>
              <h3>{prompt.title}</h3>
              <p>{prompt.description}</p>
            </div>
            <div className="prompt-tile__meta">Yaş {prompt.ageRange} · Dokun ve üret</div>
          </button>
        ))}
      </div>
    </div>
  )
}

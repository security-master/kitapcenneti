import { useState } from 'react'
import type { PageId } from '../types/nav'
import { LEARNING_PATHS } from '../data/paths'
import { usePortalProfile } from '../hooks/usePortalProfile'
import { addJournalEntry } from '../hooks/usePortalProfile'
import { showToast } from '../components/Toast'

interface Props {
  onNavigate: (page: PageId) => void
}

export function PathsPage({ onNavigate }: Props) {
  const { profile } = usePortalProfile()
  const [activeId, setActiveId] = useState(
    () => LEARNING_PATHS.find((p) => p.age === profile.ageGroup)?.id || LEARNING_PATHS[0].id,
  )
  const path = LEARNING_PATHS.find((p) => p.id === activeId) || LEARNING_PATHS[0]

  return (
    <div className="page">
      <header className="page-header">
        <h1>🛤️ Öğrenme Yolları</h1>
        <p>
          {LEARNING_PATHS.length} yaşa özel program. Adım adım ilerle — her adım portalın bir
          bölümüne bağlanır.
        </p>
      </header>

      <div className="path-list">
        {LEARNING_PATHS.map((p) => (
          <button
            key={p.id}
            type="button"
            className={`path-pill ${activeId === p.id ? 'is-active' : ''}`}
            onClick={() => setActiveId(p.id)}
          >
            {p.emoji} {p.title}
            <small>{p.age}</small>
          </button>
        ))}
      </div>

      <article className="panel path-detail">
        <h2>
          {path.emoji} {path.title}
        </h2>
        <p>{path.summary}</p>
        <small>
          {path.weeks} hafta · {path.steps.length} adım · {path.tags.join(' · ')}
        </small>
        <ol className="path-steps">
          {path.steps.map((step, i) => (
            <li key={`${step.title}-${i}`}>
              <div>
                <strong>
                  {i + 1}. {step.title}
                </strong>
                <p>{step.tip}</p>
                <small>~{step.minutes} dk</small>
              </div>
              <button
                type="button"
                className="btn btn--primary"
                onClick={() => {
                  addJournalEntry({
                    kind: 'path',
                    title: `${path.title}: ${step.title}`,
                    note: step.tip,
                    stars: 1,
                  })
                  showToast('Adım günlüğe işlendi')
                  onNavigate(step.page as PageId)
                }}
              >
                Başla →
              </button>
            </li>
          ))}
        </ol>
      </article>
    </div>
  )
}

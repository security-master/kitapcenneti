import { useState } from 'react'
import { TEACHER_RESOURCES } from '../data/teachers'
import { addJournalEntry } from '../hooks/usePortalProfile'
import { showToast } from '../components/Toast'
import { printHtml } from '../utils/pdf'

export function TeachersPage() {
  const [activeId, setActiveId] = useState(TEACHER_RESOURCES[0].id)
  const [subject, setSubject] = useState('Tümü')
  const subjects = ['Tümü', ...Array.from(new Set(TEACHER_RESOURCES.map((t) => t.subject)))]
  const list = subject === 'Tümü' ? TEACHER_RESOURCES : TEACHER_RESOURCES.filter((t) => t.subject === subject)
  const res = list.find((t) => t.id === activeId) || list[0] || TEACHER_RESOURCES[0]

  return (
    <div className="page">
      <header className="page-header">
        <h1>👩‍🏫 Öğretmen & Sınıf Köşesi</h1>
        <p>
          {TEACHER_RESOURCES.length} hazır etkinlik — sabah çemberinden STEM’e. Yazdır, uygula, günlüğe işle.
        </p>
      </header>

      <div className="library-filters" style={{ marginBottom: 16 }}>
        {subjects.map((s) => (
          <button
            key={s}
            type="button"
            className={`stem-chip ${subject === s ? 'is-active' : ''}`}
            onClick={() => {
              setSubject(s)
              const first = s === 'Tümü' ? TEACHER_RESOURCES[0] : TEACHER_RESOURCES.find((t) => t.subject === s)
              if (first) setActiveId(first.id)
            }}
          >
            {s}
          </button>
        ))}
      </div>

      <div className="split">
        <div className="story-list">
          {list.map((t) => (
            <button
              key={t.id}
              type="button"
              className={`story-list__item ${activeId === t.id ? 'is-active' : ''}`}
              onClick={() => setActiveId(t.id)}
            >
              <span className="story-list__emoji">{t.emoji}</span>
              <div>
                <strong>{t.title}</strong>
                <small>
                  {t.subject} · {t.age} · {t.duration}
                </small>
              </div>
            </button>
          ))}
        </div>

        <article className="panel">
          <h2>
            {res.emoji} {res.title}
          </h2>
          <p>{res.summary}</p>
          <p>
            <strong>Yaş:</strong> {res.age} · <strong>Süre:</strong> {res.duration}
          </p>
          <h3>Malzemeler</h3>
          <ul className="tip-list">
            {res.materials.map((m) => (
              <li key={m}>{m}</li>
            ))}
          </ul>
          <h3>Adımlar</h3>
          <ol className="tip-list">
            {res.steps.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ol>
          <div className="btn-row">
            <button
              type="button"
              className="btn btn--primary"
              onClick={() => {
                printHtml(
                  res.title,
                  `<p>${res.summary}</p><h3>Malzemeler</h3><ul>${res.materials.map((m) => `<li>${m}</li>`).join('')}</ul><h3>Adımlar</h3><ol>${res.steps.map((s) => `<li>${s}</li>`).join('')}</ol>`,
                )
              }}
            >
              🖨️ Yazdır
            </button>
            <button
              type="button"
              className="btn btn--ghost"
              onClick={() => {
                addJournalEntry({
                  kind: 'ödev',
                  title: res.title,
                  note: res.summary,
                  stars: 2,
                })
                showToast('Etkinlik günlüğe işlendi')
              }}
            >
              Günlüğe işle
            </button>
          </div>
        </article>
      </div>
    </div>
  )
}

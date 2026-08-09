import { useState } from 'react'
import { addJournalEntry, usePortalProfile } from '../hooks/usePortalProfile'
import { showToast } from '../components/Toast'

const KINDS = ['masal', 'oyun', 'boyama', 'stem', 'duygu', 'ödev', 'diğer']

export function JournalPage() {
  const { journal, profile } = usePortalProfile()
  const [kind, setKind] = useState('masal')
  const [title, setTitle] = useState('')
  const [note, setNote] = useState('')

  const save = () => {
    if (!title.trim()) {
      alert('Kısa bir başlık yaz')
      return
    }
    addJournalEntry({ kind, title: title.trim(), note: note.trim(), stars: 1 })
    setTitle('')
    setNote('')
    showToast('Günlüğe eklendi 📔')
  }

  return (
    <div className="page">
      <header className="page-header">
        <h1>📔 Gelişim Günlüğü</h1>
        <p>
          {profile.childName || 'Çocuğunuz'} ne dinledi, ne oynadı, ne öğrendi — ailece kaydedin.
          Cihazda saklanır, üyelik gerekmez.
        </p>
      </header>

      <div className="panel journal-form">
        <h2>Yeni kayıt</h2>
        <div className="library-filters">
          {KINDS.map((k) => (
            <button
              key={k}
              type="button"
              className={`stem-chip ${kind === k ? 'is-active' : ''}`}
              onClick={() => setKind(k)}
            >
              {k}
            </button>
          ))}
        </div>
        <label>
          Başlık
          <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Örn. Uzay masalı dinledik" maxLength={80} />
        </label>
        <label>
          Not
          <textarea value={note} onChange={(e) => setNote(e.target.value)} placeholder="Ne güzeldi? Zorlanan ne vardı?" rows={3} maxLength={300} />
        </label>
        <button type="button" className="btn btn--primary" onClick={save}>
          Kaydet
        </button>
      </div>

      <section className="section">
        <h2 className="section__title">Kayıtlar ({journal.length})</h2>
        {journal.length === 0 && <p className="section-hint">Henüz kayıt yok — ilkini ekle.</p>}
        <div className="journal-list">
          {journal.map((j) => (
            <article key={j.id} className="panel journal-item">
              <div>
                <strong>{j.title}</strong>
                <p>{j.note || '—'}</p>
                <small>
                  {j.kind} · {new Date(j.date).toLocaleString('tr-TR')} · +{j.stars}⭐
                </small>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  )
}

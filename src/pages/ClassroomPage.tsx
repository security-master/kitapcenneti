import { useMemo, useState } from 'react'
import type { PageId } from '../types/nav'
import { TEACHER_RESOURCES } from '../data/teachers'
import { getDailyQuests } from '../data/quests'
import { printHtml } from '../utils/pdf'
import { escapeHtml } from '../utils/escapeHtml'
import { showToast } from '../components/Toast'
import { addJournalEntry } from '../hooks/usePortalProfile'

interface Props {
  onNavigate: (page: PageId) => void
}

const CLASS_KEY = 'kitapcenneti-classroom'

interface ClassroomState {
  code: string
  name: string
  assigned: string[]
}

function loadClass(): ClassroomState {
  try {
    return {
      code: '',
      name: 'Sınıfım',
      assigned: [],
      ...JSON.parse(localStorage.getItem(CLASS_KEY) || '{}'),
    }
  } catch {
    return { code: '', name: 'Sınıfım', assigned: [] }
  }
}

function makeClassCode() {
  return `SINIF-${Math.random().toString(36).slice(2, 6).toUpperCase()}`
}

export function ClassroomPage({ onNavigate }: Props) {
  const [room, setRoom] = useState<ClassroomState>(() => loadClass())
  const quests = getDailyQuests()
  const weekPlan = useMemo(() => {
    const days = ['Pzt', 'Sal', 'Çar', 'Per', 'Cum']
    return days.map((d, i) => {
      const res = TEACHER_RESOURCES[(i * 7) % TEACHER_RESOURCES.length]
      return { day: d, title: res.title, subject: res.subject, id: res.id }
    })
  }, [])

  const persist = (next: ClassroomState) => {
    setRoom(next)
    localStorage.setItem(CLASS_KEY, JSON.stringify(next))
  }

  const printWeek = () => {
    const body = `
      <h2>${escapeHtml(room.name)} — Haftalık sınıf planı</h2>
      <p>Sınıf kodu: <strong>${escapeHtml(room.code || '—')}</strong></p>
      <ol>
        ${weekPlan
          .map(
            (w) =>
              `<li><strong>${w.day}</strong> — ${escapeHtml(w.title)} <em>(${escapeHtml(w.subject)})</em></li>`,
          )
          .join('')}
      </ol>
      <h3>Toplu görevler</h3>
      <ul>
        ${quests.map((q) => `<li>${escapeHtml(q.title)} (+${q.stars}⭐)</li>`).join('')}
      </ul>
    `
    printHtml('Haftalık Sınıf Planı', body)
    showToast('Yazdırma / PDF hazır')
  }

  return (
    <div className="page">
      <header className="page-header">
        <h1>🏫 Sınıf merkezi</h1>
        <p>Sınıf kodu, toplu görevler ve haftalık plan — tek yerden yazdırıp paylaş.</p>
      </header>

      <div className="panel journal-form">
        <label>
          Sınıf adı
          <input
            value={room.name}
            onChange={(e) => persist({ ...room, name: e.target.value })}
            maxLength={40}
          />
        </label>
        <div className="btn-row">
          <button
            type="button"
            className="btn btn--primary"
            onClick={() => {
              const code = makeClassCode()
              persist({ ...room, code })
              void navigator.clipboard?.writeText(code)
              showToast(`Sınıf kodu: ${code}`)
            }}
          >
            Sınıf kodu oluştur
          </button>
          {room.code && <strong className="class-code">{room.code}</strong>}
        </div>
      </div>

      <section className="section">
        <h2 className="section__title">Toplu görevler (bugün)</h2>
        <div className="live-slot-grid">
          {quests.map((q) => {
            const on = room.assigned.includes(q.id)
            return (
              <article key={q.id} className={`panel live-slot ${on ? 'is-done' : ''}`}>
                <strong>{q.title}</strong>
                <p>+{q.stars}⭐</p>
                <button
                  type="button"
                  className="btn btn--small btn--primary"
                  onClick={() => {
                    const assigned = on
                      ? room.assigned.filter((id) => id !== q.id)
                      : [...room.assigned, q.id]
                    persist({ ...room, assigned })
                    if (!on) {
                      addJournalEntry({
                        kind: 'ödev',
                        title: `Sınıf görevi: ${q.title}`,
                        note: room.code || room.name,
                        stars: 0,
                      })
                    }
                    showToast(on ? 'Görev çıkarıldı' : 'Sınıfa atandı')
                  }}
                >
                  {on ? 'Atandı ✓' : 'Sınıfa ata'}
                </button>
                <button
                  type="button"
                  className="btn btn--small btn--ghost"
                  onClick={() => onNavigate(q.link as PageId)}
                >
                  Aç
                </button>
              </article>
            )
          })}
        </div>
      </section>

      <section className="section">
        <h2 className="section__title">Haftalık sınıf planı</h2>
        <div className="week-grid">
          {weekPlan.map((w) => (
            <button
              key={w.day}
              type="button"
              className="portal-dash-card"
              onClick={() => onNavigate('teachers')}
            >
              <span>📅</span>
              <h2>{w.day}</h2>
              <p>{w.title}</p>
              <small>{w.subject}</small>
            </button>
          ))}
        </div>
        <div className="btn-row" style={{ marginTop: 16 }}>
          <button type="button" className="btn btn--primary" onClick={printWeek}>
            Planı PDF / Yazdır
          </button>
          <button type="button" className="btn btn--ghost" onClick={() => onNavigate('teachers')}>
            Etkinlik kütüphanesi
          </button>
        </div>
      </section>
    </div>
  )
}

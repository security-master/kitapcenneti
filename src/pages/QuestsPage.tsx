import type { PageId } from '../types/nav'
import { AdSlot } from '../components/AdSlot'
import { useDailyQuests } from '../hooks/useDailyQuests'

interface QuestsPageProps {
  onNavigate: (page: PageId) => void
}

export function QuestsPage({ onNavigate }: QuestsPageProps) {
  const { quests, done, stars, streak, progress, toggle, isDone } = useDailyQuests()

  return (
    <div className="page">
      <header className="page-header">
        <h1>⭐ Günlük Görevler</h1>
        <p>Her gün yeni mini ödevler. Bitir, yıldız topla, seriyi bozma — kayıt cihazında kalır, üyelik gerekmez.</p>
      </header>

      <div className="quest-stats">
        <div className="quest-stat"><strong>{stars}</strong><span>Toplam yıldız</span></div>
        <div className="quest-stat"><strong>{streak}🔥</strong><span>Gün serisi</span></div>
        <div className="quest-stat"><strong>{done.length}/{quests.length}</strong><span>Bugün</span></div>
      </div>

      <div className="loading-progress" style={{ maxWidth: '100%', marginBottom: 20 }}>
        <div className="loading-progress__bar" style={{ width: `${progress}%` }} />
      </div>

      <div className="quest-list">
        {quests.map((q) => (
          <article key={q.id} className={`quest-card ${isDone(q.id) ? 'is-done' : ''}`}>
            <span className="quest-card__emoji">{q.emoji}</span>
            <div className="quest-card__body">
              <h3>{q.title}</h3>
              <p>{q.hint}</p>
              <small>{q.area} · ~{q.minutes} dk · {q.stars}⭐</small>
            </div>
            <div className="quest-card__actions">
              <button className="btn btn--ghost" onClick={() => onNavigate(q.link)}>Git</button>
              <button className="btn btn--primary" onClick={() => toggle(q)}>
                {isDone(q.id) ? '↩️ Geri al' : '✓ Bitirdim'}
              </button>
            </div>
          </article>
        ))}
      </div>

      {progress === 100 && (
        <div className="win-banner">
          🎉 Bugünün tüm görevleri bitti! Sertifika indirmeye ne dersin?
          <div className="btn-row" style={{ justifyContent: 'center' }}>
            <button className="btn btn--primary" onClick={() => onNavigate('certificates')}>
              🏆 Sertifika al
            </button>
          </div>
        </div>
      )}

      <AdSlot slot="bottom" />
    </div>
  )
}

import type { PageId } from '../types/nav'
import { useProgress } from '../hooks/useProgress'

interface ProgressHubProps {
  onNavigate?: (page: PageId) => void
  compact?: boolean
}

export function ProgressHub({ onNavigate, compact = false }: ProgressHubProps) {
  const { stars, streak, badges, lockedBadges, todayProgress, bedtime, toggleBedtime, doneToday, todayQuests } =
    useProgress()

  return (
    <section className={`progress-hub ${compact ? 'progress-hub--compact' : ''}`}>
      <div className="progress-hub__stats">
        <div className="progress-hub__stat">
          <strong>{stars}</strong>
          <span>Yıldız</span>
        </div>
        <div className="progress-hub__stat">
          <strong>{streak}🔥</strong>
          <span>Seri</span>
        </div>
        <div className="progress-hub__stat">
          <strong>{doneToday.length}/{todayQuests.length}</strong>
          <span>Bugün</span>
        </div>
        <div className="progress-hub__stat">
          <strong>{badges.length}</strong>
          <span>Rozet</span>
        </div>
      </div>

      <div className="progress-hub__bar" aria-hidden="true">
        <div style={{ width: `${todayProgress}%` }} />
      </div>

      {!compact && (
        <>
          <div className="progress-hub__row">
            <h3>🏅 Rozetlerin</h3>
            <button
              type="button"
              className={`bedtime-toggle ${bedtime ? 'is-on' : ''}`}
              onClick={toggleBedtime}
              title="Ekranı yumuşatır, gece okumaya uygun hale getirir"
            >
              {bedtime ? '🌙 Gece açık' : '☀️ Gündüz'}
            </button>
          </div>

          <div className="badge-row">
            {badges.length === 0 && (
              <p className="section-hint" style={{ margin: 0 }}>
                Görev bitir, oyun oyna, masal dinle — rozetler burada birikir.
              </p>
            )}
            {badges.map((b) => (
              <div key={b.id} className="badge-chip" title={b.description}>
                <span>{b.emoji}</span>
                <strong>{b.title}</strong>
              </div>
            ))}
            {lockedBadges.slice(0, 3).map((b) => (
              <div key={b.id} className="badge-chip badge-chip--locked" title={b.description}>
                <span>🔒</span>
                <strong>{b.title}</strong>
              </div>
            ))}
          </div>

          {onNavigate && (
            <div className="progress-hub__actions">
              <button type="button" className="btn btn--primary" onClick={() => onNavigate('quests')}>
                ⭐ Görevlere git
              </button>
              <button type="button" className="btn btn--ghost" onClick={() => onNavigate('certificates')}>
                🏆 Sertifika
              </button>
              <button type="button" className="btn btn--ghost" onClick={() => onNavigate('create')}>
                ✨ Hikaye yap
              </button>
            </div>
          )}
        </>
      )}
    </section>
  )
}

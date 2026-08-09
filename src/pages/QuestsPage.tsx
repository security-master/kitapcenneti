import type { PageId } from '../types/nav'
import { AdSlot } from '../components/AdSlot'
import { ProgressHub } from '../components/ProgressHub'
import { useDailyQuests } from '../hooks/useDailyQuests'
import { downloadQuestChecklistPdf } from '../utils/pdf'
import { announceActivityResult } from '../components/Toast'
import { completeActivity } from '../hooks/useProgress'
import { SocialShare } from '../components/SocialShare'

interface QuestsPageProps {
  onNavigate: (page: PageId) => void
}

export function QuestsPage({ onNavigate }: QuestsPageProps) {
  const { quests, done, stars, streak, progress, toggle, isDone } = useDailyQuests()
  const todayKey = new Date().toISOString().slice(0, 10)
  const questSummary = quests.map((q) => `${q.emoji} ${q.title}`).join(' · ')

  return (
    <div className="page">
      <header className="page-header">
        <h1>⭐ Günlük Görevler</h1>
        <p>
          Görevleri burada işaretleyebilirsin — ama masal dinlemek, oyun bitirmek veya boyama indirmek
          de görevi otomatik tamamlar.
        </p>
      </header>

      <ProgressHub compact />

      <div className="quest-stats">
        <div className="quest-stat"><strong>{stars}</strong><span>Toplam yıldız</span></div>
        <div className="quest-stat"><strong>{streak}🔥</strong><span>Gün serisi</span></div>
        <div className="quest-stat"><strong>{done.length}/{quests.length}</strong><span>Bugün</span></div>
      </div>

      <div className="loading-progress" style={{ maxWidth: '100%', marginBottom: 20 }}>
        <div className="loading-progress__bar" style={{ width: `${progress}%` }} />
      </div>

      <div className="btn-row" style={{ marginBottom: 16 }}>
        <button
          type="button"
          className="btn btn--ghost"
          onClick={() => {
            downloadQuestChecklistPdf(quests)
            announceActivityResult(completeActivity('print'))
          }}
        >
          🖨️ Bugünün listesini PDF indir
        </button>
      </div>

      <SocialShare
        payload={{
          title: '⭐ Bugünün görevleri',
          text: `${done.length}/${quests.length} tamamlandı · ${questSummary}`,
          page: 'quests',
          itemId: todayKey,
          hashtags: ['KitapCenneti', 'Gorev', 'Cocuk'],
        }}
      />

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

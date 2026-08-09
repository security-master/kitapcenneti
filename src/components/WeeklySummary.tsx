import { useMemo } from 'react'
import { usePortalProfile } from '../hooks/usePortalProfile'
import { useProgress } from '../hooks/useProgress'
import { useLiveEngagement } from '../hooks/useLiveEngagement'
import { printHtml } from '../utils/pdf'
import { escapeHtml } from '../utils/escapeHtml'

export function WeeklySummary() {
  const { profile, journal } = usePortalProfile()
  const { stars, streak, stickers, badges } = useProgress()
  const live = useLiveEngagement()

  const week = useMemo(() => {
    const since = Date.now() - 7 * 86400000
    const entries = journal.filter((j) => new Date(j.date).getTime() >= since)
    const byKind: Record<string, number> = {}
    for (const e of entries) byKind[e.kind] = (byKind[e.kind] || 0) + 1
    return { entries, byKind, count: entries.length }
  }, [journal])

  const shareText = () => {
    const lines = [
      `Kitap Cenneti — Haftalık özet`,
      `${profile.childName || 'Çocuk'} ${profile.avatar}`,
      `⭐ ${stars} yıldız · 🔥 ${streak} gün seri`,
      `🏷️ ${stickers.length} sticker · 🏅 ${badges.length} rozet`,
      `⚡ Saatlik seri ${live.hourlyStreak} · ziyaret ${live.visitCount}`,
      `Bu hafta günlük: ${week.count} kayıt`,
      ...Object.entries(week.byKind).map(([k, n]) => `· ${k}: ${n}`),
    ]
    return lines.join('\n')
  }

  return (
    <section className="section weekly-summary">
      <h2 className="section__title">Haftalık aile özeti</h2>
      <article className="panel weekly-summary__card">
        <p>
          <strong>{profile.childName || 'Çocuğunuz'}</strong> bu hafta{' '}
          <strong>{week.count}</strong> günlük kaydı biriktirdi.
        </p>
        <ul className="weekly-summary__stats">
          <li>⭐ {stars} yıldız</li>
          <li>🔥 {streak} gün seri</li>
          <li>🏷️ {stickers.length} sticker</li>
          <li>⚡ Saatlik seri {live.hourlyStreak}</li>
        </ul>
        {Object.keys(week.byKind).length > 0 && (
          <p className="section-hint">
            {Object.entries(week.byKind)
              .map(([k, n]) => `${k} ×${n}`)
              .join(' · ')}
          </p>
        )}
        <div className="btn-row">
          <button
            type="button"
            className="btn btn--primary"
            onClick={() => {
              void navigator.clipboard?.writeText(shareText())
            }}
          >
            Özeti kopyala
          </button>
          <button
            type="button"
            className="btn btn--ghost"
            onClick={() =>
              printHtml(
                'Haftalık Aile Özeti',
                `<pre style="white-space:pre-wrap;font-family:Nunito,sans-serif">${escapeHtml(shareText())}</pre>`,
              )
            }
          >
            PDF / Yazdır
          </button>
        </div>
      </article>
    </section>
  )
}

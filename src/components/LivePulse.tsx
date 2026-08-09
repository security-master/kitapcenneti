import { useEffect, useState } from 'react'
import type { PageId } from '../types/nav'
import { useLiveEngagement } from '../hooks/useLiveEngagement'
import { currentSlot, msUntilNextHour, weeklyEvent } from '../engines/contentFactory'
import { showToast } from './Toast'

interface Props {
  onNavigate: (page: PageId) => void
}

function formatMs(ms: number) {
  const s = Math.max(0, Math.floor(ms / 1000))
  const m = Math.floor(s / 60)
  const r = s % 60
  return `${m}:${r.toString().padStart(2, '0')}`
}

export function LivePulse({ onNavigate }: Props) {
  const live = useLiveEngagement()
  const slot = currentSlot(live.now)
  const weekly = weeklyEvent(live.now)
  const [left, setLeft] = useState(() => msUntilNextHour())

  useEffect(() => {
    const t = window.setInterval(() => setLeft(msUntilNextHour()), 1000)
    return () => clearInterval(t)
  }, [])

  useEffect(() => {
    if (live.welcomeBack) {
      showToast(live.welcomeBack)
      live.clearWelcome()
    }
  }, [live.welcomeBack])

  return (
    <section className="live-pulse">
      <div className="live-pulse__head">
        <h2 className="section__title">⚡ Şimdi canlı</h2>
        <button type="button" className="btn btn--small btn--primary" onClick={() => onNavigate('live')}>
          Canlı Arena →
        </button>
      </div>

      <div className="live-pulse__grid">
        <button type="button" className="live-pulse__card" onClick={() => onNavigate(live.challenge.page)}>
          <span>{live.challenge.emoji}</span>
          <strong>Saatin görevi</strong>
          <p>{live.challenge.title.replace('Saatin görevi: ', '')}</p>
          <small>
            {live.hourlyDone ? 'Tamam ✓' : `+${live.challenge.stars}⭐`} · sonraki {formatMs(left)}
          </small>
        </button>

        <button type="button" className="live-pulse__card" onClick={() => onNavigate('live')}>
          <span>{slot.emoji}</span>
          <strong>{slot.label}</strong>
          <p>{live.slots.length} dilim görevi hazır</p>
          <small>🔥 seri {live.hourlyStreak}</small>
        </button>

        <button
          type="button"
          className={`live-pulse__card ${live.mysteryReady ? 'is-hot' : ''}`}
          onClick={() => onNavigate('live')}
        >
          <span>🎁</span>
          <strong>Gizemli kutu</strong>
          <p>{live.mysteryReady ? 'Açmaya hazır!' : '3 saatte bir yenilenir'}</p>
          <small>Ziyaret: {live.visitCount}</small>
        </button>

        <button type="button" className="live-pulse__card" onClick={() => onNavigate(weekly.page)}>
          <span>{weekly.emoji}</span>
          <strong>Haftanın günü</strong>
          <p>{weekly.title}</p>
          <small>{weekly.blurb}</small>
        </button>
      </div>
    </section>
  )
}

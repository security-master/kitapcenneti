import type { PageId } from '../types/nav'
import type { AgeGroup } from '../hooks/usePortalProfile'
import { editorPicks, smartRecommendations } from '../utils/recommendations'
import { getMood, setMood, type MoodId } from '../utils/lastVisit'
import { useState } from 'react'

const MOODS: { id: MoodId; emoji: string; label: string }[] = [
  { id: 'mutlu', emoji: '😄', label: 'Mutlu' },
  { id: 'sakin', emoji: '😌', label: 'Sakin' },
  { id: 'meraklı', emoji: '🧐', label: 'Meraklı' },
  { id: 'yorgun', emoji: '😴', label: 'Yorgun' },
  { id: 'cesur', emoji: '🦸', label: 'Cesur' },
]

interface Props {
  ageGroup: AgeGroup
  interests: string[]
  onNavigate: (page: PageId) => void
}

export function SmartPicks({ ageGroup, interests, onNavigate }: Props) {
  const [mood, setMoodState] = useState<MoodId>(() => getMood())
  const editors = editorPicks()
  const smart = smartRecommendations(ageGroup, interests)

  return (
    <section className="section smart-picks">
      <h2 className="section__title">Bugünün 5’lisi & sana özel</h2>
      <div className="mood-row" role="group" aria-label="Ruh hali">
        {MOODS.map((m) => (
          <button
            key={m.id}
            type="button"
            className={`mood-chip ${mood === m.id ? 'is-active' : ''}`}
            onClick={() => {
              setMood(m.id)
              setMoodState(m.id)
            }}
          >
            {m.emoji} {m.label}
          </button>
        ))}
      </div>
      <div className="smart-picks__grid">
        {editors.slice(0, 5).map((p) => (
          <button key={p.id} type="button" className="smart-pick" onClick={() => onNavigate(p.page)}>
            <span>{p.emoji}</span>
            <strong>{p.title}</strong>
            <small>{p.reason}</small>
          </button>
        ))}
      </div>
      <div className="smart-picks__grid smart-picks__grid--soft">
        {smart.slice(0, 4).map((p) => (
          <button key={p.id} type="button" className="smart-pick" onClick={() => onNavigate(p.page)}>
            <span>{p.emoji}</span>
            <strong>{p.title}</strong>
            <small>{p.reason}</small>
          </button>
        ))}
      </div>
    </section>
  )
}

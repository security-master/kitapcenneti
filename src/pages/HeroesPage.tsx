import { useState } from 'react'
import { HEROES } from '../data/heroes'
import { useSpeech } from '../hooks/useSpeech'
import { VoicePicker } from '../components/VoicePicker'
import { announceActivityResult } from '../components/Toast'
import { completeActivity, setCreatePrefill } from '../hooks/useProgress'
import type { PageId } from '../types/nav'

interface HeroesPageProps {
  onNavigate: (page: PageId) => void
}

export function HeroesPage({ onNavigate }: HeroesPageProps) {
  const [activeId, setActiveId] = useState(HEROES[0].id)
  const hero = HEROES.find((h) => h.id === activeId) || HEROES[0]
  const { speaking, speak, stop, profile, setProfile } = useSpeech()

  return (
    <div className="page">
      <header className="page-header">
        <h1>🦸 Özgün Kahramanlar</h1>
        <p>
          Marvel/DC kopyası değil — tamamen Kitap Cenneti’ne ait telifsiz karakterler.
          Çiz, oyna, hikayene ekle.
        </p>
      </header>

      <VoicePicker profile={profile} onChange={setProfile} />

      <div className="heroes-grid">
        {HEROES.map((h) => (
          <button
            key={h.id}
            className={`hero-card ${activeId === h.id ? 'is-active' : ''}`}
            style={{ background: h.color }}
            onClick={() => setActiveId(h.id)}
          >
            <span>{h.emoji}</span>
            <strong>{h.name}</strong>
            <small>{h.motto}</small>
          </button>
        ))}
      </div>

      <div className="panel hero-detail">
        <div className="hero-detail__top">
          <span className="hero-detail__emoji">{hero.emoji}</span>
          <div>
            <h2>{hero.name}</h2>
            <p className="hero-detail__motto">“{hero.motto}”</p>
          </div>
        </div>
        <div className="hero-detail__meta">
          <span>⚡ {hero.power}</span>
          <span>👶 {hero.age}</span>
          <span>✅ Telifsiz</span>
        </div>
        <p>{hero.bio}</p>
        <h3>📖 Mini Macera</h3>
        <p>{hero.adventure}</p>
        <h3>💡 Aile İpucu</h3>
        <p>{hero.tip}</p>
        <div className="btn-row">
          <button
            className="btn btn--primary"
            onClick={() => {
              if (speaking) stop()
              else {
                speak(`${hero.name}. ${hero.bio} ${hero.adventure}`)
                announceActivityResult(completeActivity('hero'))
              }
            }}
          >
            {speaking ? '⏹ Durdur' : '🎧 Hikayeyi Dinle'}
          </button>
          <button
            className="btn btn--ghost"
            onClick={() => {
              setCreatePrefill({
                heroName: hero.name.split(' ')[0],
                category: 'personalized',
                prompt: `${hero.name} adlı kahraman: ${hero.motto}. Gücü: ${hero.power}. ${hero.adventure}`,
              })
              onNavigate('create')
            }}
          >
            ✨ Bu kahramanla AI hikaye yap
          </button>
          <button className="btn btn--ghost" onClick={() => onNavigate('coloring')}>
            🖍️ Boyama sayfalarına git
          </button>
        </div>
      </div>
    </div>
  )
}

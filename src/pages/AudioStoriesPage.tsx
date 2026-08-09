import { useMemo, useState } from 'react'
import { AUDIO_STORIES } from '../data/audioStories'
import { useSpeech } from '../hooks/useSpeech'
import { VoicePicker } from '../components/VoicePicker'
import { announceActivityResult } from '../components/Toast'
import {
  completeActivity,
  getFavoriteAudioIds,
  toggleFavoriteAudio,
  useProgress,
} from '../hooks/useProgress'
import { printHtml } from '../utils/pdf'

export function AudioStoriesPage() {
  const [activeId, setActiveId] = useState(AUDIO_STORIES[0].id)
  const [favorites, setFavorites] = useState(() => getFavoriteAudioIds())
  const [onlyFavs, setOnlyFavs] = useState(false)
  const { bedtime, toggleBedtime } = useProgress()
  const active = AUDIO_STORIES.find((s) => s.id === activeId) || AUDIO_STORIES[0]
  const { speaking, paused, speak, stop, togglePause, profile, setProfile } = useSpeech()

  const list = useMemo(() => {
    if (!onlyFavs) return AUDIO_STORIES
    return AUDIO_STORIES.filter((s) => favorites.includes(s.id))
  }, [favorites, onlyFavs])

  const startListen = () => {
    speak(active.text, bedtime ? 0.85 : 1)
    announceActivityResult(completeActivity('listen'))
  }

  return (
    <div className={`page ${bedtime ? 'page--bedtime' : ''}`}>
      <header className="page-header">
        <h1>🎧 Sesli Masallar</h1>
        <p>Kadın, çocuk veya erkek anlatıcıyla dinle. Yatmadan önce modu yumuşak ışık ve yavaş tempo getirir.</p>
      </header>

      <div className="audio-toolbar">
        <VoicePicker profile={profile} onChange={setProfile} />
        <div className="btn-row">
          <button
            type="button"
            className={`bedtime-toggle ${bedtime ? 'is-on' : ''}`}
            onClick={toggleBedtime}
          >
            {bedtime ? '🌙 Yatmadan önce açık' : '🌙 Yatmadan önce'}
          </button>
          <button
            type="button"
            className={`btn btn--ghost ${onlyFavs ? 'is-active-filter' : ''}`}
            onClick={() => setOnlyFavs((v) => !v)}
          >
            ❤️ Favoriler {favorites.length ? `(${favorites.length})` : ''}
          </button>
        </div>
      </div>

      <div className="split">
        <div className="story-list">
          {list.length === 0 && (
            <p className="section-hint">Henüz favori yok — bir masala ❤️ ekle.</p>
          )}
          {list.map((story) => (
            <button
              key={story.id}
              className={`story-list__item ${activeId === story.id ? 'is-active' : ''}`}
              onClick={() => {
                stop()
                setActiveId(story.id)
              }}
            >
              <span className="story-list__emoji">{story.emoji}</span>
              <div>
                <strong>{story.title}</strong>
                <small>{story.age} yaş · {story.duration} · {story.theme}</small>
              </div>
              {favorites.includes(story.id) && <span aria-hidden="true">❤️</span>}
            </button>
          ))}
        </div>

        <div className="audio-player panel">
          <div className="audio-player__hero">
            <span>{active.emoji}</span>
            <div>
              <h2>{active.title}</h2>
              <p>{active.summary}</p>
            </div>
          </div>
          <div className="audio-player__controls">
            {!speaking ? (
              <button className="btn btn--primary" onClick={startListen}>
                ▶ Dinle
              </button>
            ) : (
              <>
                <button className="btn btn--primary" onClick={togglePause}>
                  {paused ? '▶ Devam' : '⏸ Duraklat'}
                </button>
                <button className="btn btn--ghost" onClick={stop}>⏹ Durdur</button>
              </>
            )}
            <button
              className="btn btn--ghost"
              onClick={() => setFavorites(toggleFavoriteAudio(active.id))}
            >
              {favorites.includes(active.id) ? '❤️ Favoride' : '🤍 Favorile'}
            </button>
            <button
              className="btn btn--ghost"
              onClick={() => {
                printHtml(active.title, `<p style="white-space:pre-wrap;line-height:1.8">${active.text}</p>`)
                announceActivityResult(completeActivity('print'))
              }}
            >
              🖨️ Yazdır
            </button>
          </div>
          <div className="audio-player__text">{active.text}</div>
        </div>
      </div>
    </div>
  )
}

import { useState } from 'react'
import { AUDIO_STORIES } from '../data/audioStories'
import { useSpeech } from '../hooks/useSpeech'
import { VoicePicker } from '../components/VoicePicker'
import { printHtml } from '../utils/pdf'

export function AudioStoriesPage() {
  const [activeId, setActiveId] = useState(AUDIO_STORIES[0].id)
  const active = AUDIO_STORIES.find((s) => s.id === activeId) || AUDIO_STORIES[0]
  const { speaking, paused, speak, stop, togglePause, profile, setProfile } = useSpeech()

  return (
    <div className="page">
      <header className="page-header">
        <h1>🎧 Sesli Masallar</h1>
        <p>Kadın, çocuk veya erkek anlatıcıyla dinle. Tarayıcı sesiyle Türkçe okut.</p>
      </header>

      <VoicePicker profile={profile} onChange={setProfile} />

      <div className="split">
        <div className="story-list">
          {AUDIO_STORIES.map((story) => (
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
              <button className="btn btn--primary" onClick={() => speak(active.text)}>
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
              onClick={() => printHtml(active.title, `<p style="white-space:pre-wrap;line-height:1.8">${active.text}</p>`)}
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

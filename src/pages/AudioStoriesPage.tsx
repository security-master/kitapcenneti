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
import { escapeHtml } from '../utils/escapeHtml'
import { SocialShare } from '../components/SocialShare'
import { ContentPortalBar } from '../components/ContentPortalBar'
import { useContentItemId } from '../hooks/useContentItemId'
import { dayKey, factoryStory, hashSeed } from '../engines/contentFactory'

export function AudioStoriesPage() {
  const liveStories = useMemo(() => {
    const base = hashSeed(dayKey(), 'audio-live')
    return Array.from({ length: 48 }, (_, i) => factoryStory(hashSeed(base, i)))
  }, [])

  const library = useMemo(() => [...liveStories, ...AUDIO_STORIES], [liveStories])

  const [activeId, setActiveId] = useContentItemId('audio', library[0].id)
  const [favorites, setFavorites] = useState(() => getFavoriteAudioIds())
  const [onlyFavs, setOnlyFavs] = useState(false)
  const [query, setQuery] = useState('')
  const [theme, setTheme] = useState('Tümü')
  const { bedtime, toggleBedtime } = useProgress()
  const active = library.find((s) => s.id === activeId) || library[0]
  const { speaking, paused, speak, stop, togglePause, profile, setProfile } = useSpeech()

  const themes = useMemo(
    () => ['Tümü', 'Canlı Düşüş', ...Array.from(new Set(AUDIO_STORIES.map((s) => s.theme)))],
    [],
  )

  const list = useMemo(() => {
    const q = query.trim().toLowerCase()
    return library.filter((s) => {
      if (onlyFavs && !favorites.includes(s.id)) return false
      if (theme === 'Canlı Düşüş') return s.id.startsWith('live-story-')
      if (theme !== 'Tümü' && s.theme !== theme) return false
      if (!q) return true
      return `${s.title} ${s.summary} ${s.theme} ${s.age}`.toLowerCase().includes(q)
    })
  }, [favorites, onlyFavs, query, theme, library])

  const startListen = () => {
    speak(active.text, bedtime ? 0.85 : 1)
    announceActivityResult(completeActivity('listen'))
  }

  return (
    <div className={`page ${bedtime ? 'page--bedtime' : ''}`}>
      <header className="page-header">
        <h1>🎧 Sesli Masallar Portalı</h1>
        <p>
          {library.length}+ masal (statik + bugünün 48 canlı düşüşü) · her gün yeni · dinle, yazdır,
          paylaş.
        </p>
      </header>

      <ContentPortalBar
        count={list.length}
        label="Masal"
        query={query}
        onQuery={setQuery}
        placeholder="Masal, tema veya yaş ara…"
        filters={themes.map((t) => ({ id: t, label: t }))}
        activeFilter={theme}
        onFilter={setTheme}
      />

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
          {list.length === 0 && <p className="section-hint">Sonuç yok — filtreyi genişlet.</p>}
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
                <small>
                  {story.age} yaş · {story.duration} · {story.theme}
                </small>
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
                <button className="btn btn--ghost" onClick={stop}>
                  ⏹ Durdur
                </button>
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
                printHtml(
                  active.title,
                  `<p style="white-space:pre-wrap;line-height:1.8">${escapeHtml(active.text)}</p>`,
                )
                announceActivityResult(completeActivity('print'))
              }}
            >
              🖨️ Yazdır
            </button>
          </div>
          <div className="audio-player__text">{active.text}</div>
          <SocialShare
            payload={{
              title: `${active.emoji} ${active.title}`,
              text: active.summary,
              page: 'audio',
              itemId: active.id,
              hashtags: ['KitapCenneti', 'Masal', active.theme.replace(/\s+/g, '')],
            }}
          />
        </div>
      </div>
    </div>
  )
}

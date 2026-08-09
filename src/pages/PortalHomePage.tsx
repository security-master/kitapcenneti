import type { PageId } from '../types/nav'
import { ModeBanner } from '../components/PortalShell'
import { ProgressHub } from '../components/ProgressHub'
import { usePortalProfile } from '../hooks/usePortalProfile'
import { useProgress } from '../hooks/useProgress'
import { LEARNING_PATHS } from '../data/paths'
import { COLLECTIONS } from '../data/collections'
import { WORLD_REGIONS } from '../data/world'
import { SHOP_PACKS } from '../data/shop'
import { AUDIO_STORIES } from '../data/audioStories'
import { TEACHER_RESOURCES } from '../data/teachers'
import { getDailyQuests } from '../data/quests'

interface Props {
  onNavigate: (page: PageId) => void
}

export function PortalHomePage({ onNavigate }: Props) {
  const { mode, setMode, profile } = usePortalProfile()
  const { spinAvailable } = useProgress()
  const quests = getDailyQuests()
  const path = LEARNING_PATHS.find((p) => p.age === profile.ageGroup) || LEARNING_PATHS[0]
  const story = AUDIO_STORIES[new Date().getDate() % AUDIO_STORIES.length]

  if (mode === 'parent') {
    return (
      <div className="page portal-home">
        <header className="page-header">
          <h1>Aile Portalı</h1>
          <p>
            Planla, izle, destekle — {profile.childName || 'çocuğunuz'} için öğrenme yolları,
            sınıf kaynakları ve gelişim günlüğü tek yerde.
          </p>
        </header>
        <ModeBanner mode={mode} onSwitch={setMode} />

        <div className="portal-dash-grid">
          <button type="button" className="portal-dash-card" onClick={() => onNavigate('calendar')}>
            <span>📅</span>
            <h2>Haftalık Plan</h2>
            <p>7 güne yayılmış aile etkinlik takvimi</p>
          </button>
          <button type="button" className="portal-dash-card" onClick={() => onNavigate('paths')}>
            <span>🛤️</span>
            <h2>Öğrenme Yolları</h2>
            <p>{LEARNING_PATHS.length} yaşa özel program</p>
          </button>
          <button type="button" className="portal-dash-card" onClick={() => onNavigate('journal')}>
            <span>📔</span>
            <h2>Gelişim Günlüğü</h2>
            <p>Ne dinlendi, ne oynandı — kayıt altında</p>
          </button>
          <button type="button" className="portal-dash-card" onClick={() => onNavigate('teachers')}>
            <span>👩‍🏫</span>
            <h2>Öğretmen Köşesi</h2>
            <p>{TEACHER_RESOURCES.length} sınıf etkinliği</p>
          </button>
          <button type="button" className="portal-dash-card" onClick={() => onNavigate('shop')}>
            <span>🎁</span>
            <h2>Ücretsiz Paketler</h2>
            <p>{SHOP_PACKS.length} indirilebilir içerik paketi</p>
          </button>
          <button type="button" className="portal-dash-card" onClick={() => onNavigate('blog')}>
            <span>📝</span>
            <h2>Aile Blog</h2>
            <p>Rutin, ekran ve okuma rehberleri</p>
          </button>
        </div>

        <section className="section">
          <h2 className="section__title">Önerilen yol</h2>
          <article className="panel path-card">
            <div className="path-card__top">
              <span>{path.emoji}</span>
              <div>
                <h3>{path.title}</h3>
                <p>{path.summary}</p>
                <small>{path.age} yaş · {path.weeks} hafta · {path.steps.length} adım</small>
              </div>
            </div>
            <button type="button" className="btn btn--primary" onClick={() => onNavigate('paths')}>
              Yolları incele
            </button>
          </article>
        </section>
      </div>
    )
  }

  return (
    <div className="page portal-home">
      <header className="page-header">
        <h1>
          Merhaba{profile.childName ? `, ${profile.childName}` : ''}! {profile.avatar}
        </h1>
        <p>
          Kitap Cenneti Portalı’na hoş geldin — kütüphane, dünya haritası, görevler, oyunlar ve
          sürprizler seni bekliyor.
        </p>
      </header>
      <ModeBanner mode={mode} onSwitch={setMode} />

      <ProgressHub onNavigate={onNavigate} />

      <section className="section">
        <h2 className="section__title">Bugünün portalı</h2>
        <div className="portal-dash-grid">
          <button type="button" className="portal-dash-card portal-dash-card--accent" onClick={() => onNavigate('quests')}>
            <span>⭐</span>
            <h2>Görevler</h2>
            <p>{quests.length} görev hazır</p>
          </button>
          <button type="button" className="portal-dash-card" onClick={() => onNavigate('audio')}>
            <span>{story.emoji}</span>
            <h2>Günün Masalı</h2>
            <p>{story.title}</p>
          </button>
          <button type="button" className="portal-dash-card" onClick={() => onNavigate('library')}>
            <span>📚</span>
            <h2>Kütüphane</h2>
            <p>Tüm içerikler tek katalogda</p>
          </button>
          <button type="button" className="portal-dash-card" onClick={() => onNavigate('world')}>
            <span>🗺️</span>
            <h2>Dünya Haritası</h2>
            <p>{WORLD_REGIONS.length} temalı bölge</p>
          </button>
          <button type="button" className="portal-dash-card" onClick={() => onNavigate('fun')}>
            <span>🎡</span>
            <h2>Eğlence</h2>
            <p>{spinAvailable ? 'Çark seni bekliyor' : 'Sticker albümüne bak'}</p>
          </button>
          <button type="button" className="portal-dash-card" onClick={() => onNavigate('discover')}>
            <span>🧭</span>
            <h2>Koleksiyonlar</h2>
            <p>{COLLECTIONS.length} küratör seçkisi</p>
          </button>
          <button type="button" className="portal-dash-card" onClick={() => onNavigate('create')}>
            <span>✨</span>
            <h2>AI Hikaye</h2>
            <p>Kendi kitabını yap</p>
          </button>
          <button type="button" className="portal-dash-card" onClick={() => onNavigate('activities')}>
            <span>🎮</span>
            <h2>Oyun Salonu</h2>
            <p>4+ mini oyun</p>
          </button>
        </div>
      </section>

      <section className="section">
        <h2 className="section__title">Hızlı koleksiyonlar</h2>
        <div className="collection-row">
          {COLLECTIONS.slice(0, 6).map((c) => (
            <button key={c.id} type="button" className="collection-chip" onClick={() => onNavigate('discover')}>
              <span>{c.emoji}</span>
              <strong>{c.title}</strong>
            </button>
          ))}
        </div>
      </section>
    </div>
  )
}

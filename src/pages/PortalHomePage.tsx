import { useState } from 'react'
import type { PageId } from '../types/nav'
import { ModeBanner } from '../components/PortalShell'
import { ProgressHub } from '../components/ProgressHub'
import { usePortalProfile } from '../hooks/usePortalProfile'
import { useProgress } from '../hooks/useProgress'
import { LEARNING_PATHS } from '../data/paths'
import { COLLECTIONS } from '../data/collections'
import { WORLD_REGIONS } from '../data/world'
import { SHOP_PACKS } from '../data/shop'
import { TEACHER_RESOURCES } from '../data/teachers'
import { getDailyQuests } from '../data/quests'
import { factoryStory, hashSeed, dayKey } from '../engines/contentFactory'
import { LivePulse } from '../components/LivePulse'
import { ContinueCard } from '../components/ContinueCard'
import { SmartPicks } from '../components/SmartPicks'
import { WeeklySummary } from '../components/WeeklySummary'
import { InstallPrompt } from '../components/InstallPrompt'
import { ReminderPanel } from '../components/ReminderPanel'
import { FamilyLockModal } from '../components/FamilyLockModal'
import { PetCare } from '../components/PetCare'

interface Props {
  onNavigate: (page: PageId) => void
}

export function PortalHomePage({ onNavigate }: Props) {
  const { mode, setMode, profile, pinEnabled, checkFamilyPin } = usePortalProfile()
  const { spinAvailable } = useProgress()
  const [lockOpen, setLockOpen] = useState(false)
  const quests = getDailyQuests()
  const path = LEARNING_PATHS.find((p) => p.age === profile.ageGroup) || LEARNING_PATHS[0]
  const story = factoryStory(hashSeed(dayKey(), 'home-feature'))

  const switchMode = (m: typeof mode) => {
    if (m === 'parent' && mode !== 'parent' && pinEnabled) {
      setLockOpen(true)
      return
    }
    setMode(m)
  }

  if (mode === 'parent') {
    return (
      <div className="page portal-home">
        <FamilyLockModal
          open={lockOpen}
          onClose={() => setLockOpen(false)}
          checkPin={checkFamilyPin}
          onUnlock={() => {
            setLockOpen(false)
            setMode('parent')
          }}
        />
        <header className="page-header">
          <h1>Aile Portalı</h1>
          <p>
            Planla, izle, destekle — {profile.childName || 'çocuğunuz'} için öğrenme yolları,
            sınıf kaynakları ve gelişim günlüğü tek yerde.
          </p>
        </header>
        <ModeBanner mode={mode} onSwitch={switchMode} />
        <InstallPrompt />
        <WeeklySummary />
        <ReminderPanel />
        <LivePulse onNavigate={onNavigate} />

        <div className="portal-dash-grid">
          <button type="button" className="portal-dash-card" onClick={() => onNavigate('calendar')}>
            <span>📅</span>
            <h2>Haftalık Plan</h2>
            <p>7 güne yayılmış aile etkinlik takvimi</p>
          </button>
          <button type="button" className="portal-dash-card" onClick={() => onNavigate('classroom')}>
            <span>🏫</span>
            <h2>Sınıf Merkezi</h2>
            <p>Kod, toplu görev, plan PDF</p>
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
                <small>
                  {path.age} yaş · {path.weeks} hafta · {path.steps.length} adım
                </small>
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
      <FamilyLockModal
        open={lockOpen}
        onClose={() => setLockOpen(false)}
        checkPin={checkFamilyPin}
        onUnlock={() => {
          setLockOpen(false)
          setMode('parent')
        }}
      />
      <header className="page-header">
        <h1>
          Merhaba{profile.childName ? `, ${profile.childName}` : ''}! {profile.avatar}
        </h1>
        <p>
          Kitap Cenneti Portalı’na hoş geldin — kütüphane, dünya haritası, görevler, oyunlar ve
          sürprizler seni bekliyor.
        </p>
      </header>
      <ModeBanner mode={mode} onSwitch={switchMode} />
      <ContinueCard onNavigate={onNavigate} />
      <InstallPrompt />
      <SmartPicks ageGroup={profile.ageGroup} interests={profile.interests} onNavigate={onNavigate} />
      <LivePulse onNavigate={onNavigate} />
      <section className="section">
        <h2 className="section__title">Portal dostun</h2>
        <PetCare />
      </section>
      <ProgressHub onNavigate={onNavigate} />

      <section className="section">
        <h2 className="section__title">Bugünün portalı</h2>
        <div className="portal-dash-grid">
          <button
            type="button"
            className="portal-dash-card portal-dash-card--accent"
            onClick={() => onNavigate('live')}
          >
            <span>⚡</span>
            <h2>Canlı Arena</h2>
            <p>Saatlik görev · gizemli kutu · düşüşler</p>
          </button>
          <button
            type="button"
            className="portal-dash-card portal-dash-card--accent"
            onClick={() => onNavigate('playground')}
          >
            <span>🕹️</span>
            <h2>Etkileşim Arenası</h2>
            <p>Ritim · macera · dost · hazine</p>
          </button>
          <button
            type="button"
            className="portal-dash-card portal-dash-card--accent"
            onClick={() => onNavigate('challenge')}
          >
            <span>🤝</span>
            <h2>Meydan Okuma</h2>
            <p>Kod paylaş, birlikte tamamla</p>
          </button>
          <button
            type="button"
            className="portal-dash-card portal-dash-card--accent"
            onClick={() => onNavigate('quests')}
          >
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
            <button
              key={c.id}
              type="button"
              className="collection-chip"
              onClick={() => onNavigate('discover')}
            >
              <span>{c.emoji}</span>
              <strong>{c.title}</strong>
            </button>
          ))}
        </div>
      </section>
    </div>
  )
}

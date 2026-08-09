import { useEffect, useState } from 'react'
import type { PageId } from '../types/nav'
import { usePortalProfile, type PortalProfile } from '../hooks/usePortalProfile'
import { showToast } from '../components/Toast'
import { useProgress } from '../hooks/useProgress'
import { STICKERS } from '../data/stickers'

const AVATARS = ['🦊', '🐻', '🦄', '🐱', '🐼', '🦁', '🐸', '🦉', '🐯', '🐨']
const INTERESTS = ['masal', 'oyun', 'boyama', 'uzay', 'hayvan', 'stem', 'müzik', 'duygu']

interface Props {
  onNavigate: (page: PageId) => void
}

export function ProfilePage({ onNavigate }: Props) {
  const { profile, saveProfile } = usePortalProfile()
  const { stars, streak, badges, stickers } = useProgress()
  const [draft, setDraft] = useState<PortalProfile>(profile)

  useEffect(() => {
    setDraft(profile)
  }, [profile])

  const toggleInterest = (tag: string) => {
    setDraft((d) => ({
      ...d,
      interests: d.interests.includes(tag)
        ? d.interests.filter((t) => t !== tag)
        : [...d.interests, tag].slice(0, 6),
    }))
  }

  return (
    <div className="page">
      <header className="page-header">
        <h1>🧒 Portal Profili</h1>
        <p>İsim, avatar, yaş grubu ve hedefler — öneriler buna göre kişiselleşir.</p>
      </header>

      <div className="portal-dash-grid" style={{ marginBottom: 20 }}>
        <div className="portal-dash-card"><span>⭐</span><h2>{stars}</h2><p>Yıldız</p></div>
        <div className="portal-dash-card"><span>🔥</span><h2>{streak}</h2><p>Gün serisi</p></div>
        <div className="portal-dash-card"><span>🏅</span><h2>{badges.length}</h2><p>Rozet</p></div>
        <div className="portal-dash-card"><span>🏷️</span><h2>{stickers.length}/{STICKERS.length}</h2><p>Sticker</p></div>
      </div>

      <div className="panel journal-form">
        <label>
          Çocuğun adı
          <input
            value={draft.childName}
            onChange={(e) => setDraft({ ...draft, childName: e.target.value })}
            maxLength={30}
            placeholder="Örn. Elif"
          />
        </label>

        <p><strong>Avatar</strong></p>
        <div className="library-filters">
          {AVATARS.map((a) => (
            <button
              key={a}
              type="button"
              className={`stem-chip ${draft.avatar === a ? 'is-active' : ''}`}
              onClick={() => setDraft({ ...draft, avatar: a })}
            >
              {a}
            </button>
          ))}
        </div>

        <label>
          Yaş grubu
          <select
            value={draft.ageGroup}
            onChange={(e) => setDraft({ ...draft, ageGroup: e.target.value as PortalProfile['ageGroup'] })}
          >
            <option value="3-5">3–5 yaş</option>
            <option value="6-8">6–8 yaş</option>
            <option value="9-12">9–12 yaş</option>
          </select>
        </label>

        <p><strong>İlgi alanları</strong></p>
        <div className="library-filters">
          {INTERESTS.map((tag) => (
            <button
              key={tag}
              type="button"
              className={`stem-chip ${draft.interests.includes(tag) ? 'is-active' : ''}`}
              onClick={() => toggleInterest(tag)}
            >
              {tag}
            </button>
          ))}
        </div>

        <label>
          Haftalık hedef
          <input
            value={draft.goal}
            onChange={(e) => setDraft({ ...draft, goal: e.target.value })}
            maxLength={80}
            placeholder="Örn. Her gün 1 masal"
          />
        </label>

        <div className="btn-row">
          <button
            type="button"
            className="btn btn--primary"
            onClick={() => {
              saveProfile(draft)
              showToast('Profil kaydedildi')
            }}
          >
            Kaydet
          </button>
          <button type="button" className="btn btn--ghost" onClick={() => onNavigate('paths')}>
            Yaşıma uygun yol
          </button>
          <button type="button" className="btn btn--ghost" onClick={() => onNavigate('journal')}>
            Günlüğe git
          </button>
        </div>
      </div>
    </div>
  )
}

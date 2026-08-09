import { useEffect, useState } from 'react'
import type { PageId } from '../types/nav'
import {
  encodeChallengeLink,
  findChallenge,
  importChallengeFromSession,
  makeChallengeCode,
  saveChallenge,
  type ChallengePayload,
} from '../utils/challengeCode'
import { usePortalProfile } from '../hooks/usePortalProfile'
import { showToast } from '../components/Toast'
import { SocialShare } from '../components/SocialShare'
import { useContentItemId } from '../hooks/useContentItemId'

interface Props {
  onNavigate: (page: PageId, itemId?: string) => void
}

const PRESETS: { title: string; page: PageId; stars: number; emoji: string }[] = [
  { title: '1 masal dinle', page: 'audio', stars: 2, emoji: '🎧' },
  { title: '1 sayfa boya', page: 'coloring', stars: 2, emoji: '🖍️' },
  { title: 'Canlı Arena görevi', page: 'live', stars: 3, emoji: '⚡' },
  { title: 'Mini quiz çöz', page: 'activities', stars: 2, emoji: '❓' },
  { title: 'STEM kartı aç', page: 'stem', stars: 2, emoji: '🔬' },
]

export function ChallengePage({ onNavigate }: Props) {
  const { profile } = usePortalProfile()
  const [codeParam] = useContentItemId('challenge', '')
  const [joinCode, setJoinCode] = useState('')
  const [created, setCreated] = useState<ChallengePayload | null>(null)
  const [joined, setJoined] = useState<ChallengePayload | null>(null)

  useEffect(() => {
    if (!codeParam) return
    const fromSession = importChallengeFromSession(codeParam)
    const found = fromSession || findChallenge(codeParam)
    if (found) setJoined(found)
    setJoinCode(codeParam)
  }, [codeParam])

  const create = (preset: (typeof PRESETS)[number]) => {
    const c: ChallengePayload = {
      code: makeChallengeCode(),
      title: `${preset.emoji} ${preset.title}`,
      page: preset.page,
      stars: preset.stars,
      createdAt: Date.now(),
      fromName: profile.childName || 'Bir dost',
    }
    saveChallenge(c)
    setCreated(c)
    const link = encodeChallengeLink(c)
    void navigator.clipboard?.writeText(link)
    showToast('Meydan okuma kodu kopyalandı')
  }

  return (
    <div className="page">
      <header className="page-header">
        <h1>🤝 Güvenli meydan okuma</h1>
        <p>
          Hesapsız, aile içi veya arkadaş koduyla — kimse herkese açık profil görmez. Kod paylaş, birlikte
          tamamla.
        </p>
      </header>

      <section className="section">
        <h2 className="section__title">Meydan okuma oluştur</h2>
        <div className="portal-dash-grid">
          {PRESETS.map((p) => (
            <button key={p.title} type="button" className="portal-dash-card" onClick={() => create(p)}>
              <span>{p.emoji}</span>
              <h2>{p.title}</h2>
              <p>+{p.stars}⭐ ödül hedefi</p>
            </button>
          ))}
        </div>
        {created && (
          <article className="panel" style={{ marginTop: 16 }}>
            <h3>Kod: {created.code}</h3>
            <p>
              {created.fromName} → {created.title}
            </p>
            <SocialShare
              payload={{
                title: `Meydan okuma: ${created.title}`,
                text: `${created.fromName} seni Kitap Cenneti’nde meydan okuyor! Kod: ${created.code}`,
                page: 'challenge',
                itemId: created.code,
                hashtags: ['KitapCenneti', 'MeydanOkuma'],
              }}
            />
          </article>
        )}
      </section>

      <section className="section">
        <h2 className="section__title">Koda katıl</h2>
        <div className="panel journal-form">
          <label>
            6 haneli kod
            <input
              value={joinCode}
              onChange={(e) => setJoinCode(e.target.value.toUpperCase())}
              maxLength={6}
              placeholder="Örn. AB12CD"
            />
          </label>
          <button
            type="button"
            className="btn btn--primary"
            onClick={() => {
              const c = findChallenge(joinCode) || importChallengeFromSession(joinCode)
              if (!c) {
                showToast('Kod bulunamadı — aynı cihazda oluşturulan veya paylaşılan link gerekir')
                return
              }
              setJoined(c)
              showToast('Meydan okuma bulundu!')
            }}
          >
            Katıl
          </button>
        </div>
        {joined && (
          <article className="panel" style={{ marginTop: 12 }}>
            <h3>{joined.title}</h3>
            <p>
              Gönderen: {joined.fromName} · Hedef +{joined.stars}⭐
            </p>
            <button type="button" className="btn btn--primary" onClick={() => onNavigate(joined.page)}>
              Göreve git →
            </button>
          </article>
        )}
      </section>
    </div>
  )
}

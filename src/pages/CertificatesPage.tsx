import { useState } from 'react'
import { announceActivityResult } from '../components/Toast'
import { completeActivity } from '../hooks/useProgress'
import { downloadCertificatePdf } from '../utils/pdf'
import { SocialShare } from '../components/SocialShare'

const ACHIEVEMENTS = [
  'Bugün bir sesli masal dinledi',
  'Bir boyama sayfasını tamamladı',
  'AI ile kendi hikaye kitabını oluşturdu',
  'Hafıza oyununda tüm çiftleri buldu',
  'Bir tekerlemeyi ezberledi',
  'Bir hafta boyunca her gün okudu',
  'Doğa için bir iyilik yaptı',
  'Kardeşine / arkadaşına hikaye anlattı',
]

export function CertificatesPage() {
  const [name, setName] = useState('')
  const [achievement, setAchievement] = useState(ACHIEVEMENTS[0])
  const displayName = name.trim() || 'Küçük Kahraman'

  return (
    <div className="page">
      <header className="page-header">
        <h1>🏆 Başarı Sertifikası</h1>
        <p>Çocuğunun başarısını PDF sertifika ile ödüllendir — yazdırılabilir.</p>
      </header>

      <div className="panel certificate-form">
        <label>
          Çocuğun adı
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Örn. Elif"
            maxLength={40}
          />
        </label>
        <label>
          Başarı
          <select value={achievement} onChange={(e) => setAchievement(e.target.value)}>
            {ACHIEVEMENTS.map((a) => (
              <option key={a} value={a}>{a}</option>
            ))}
          </select>
        </label>
        <label>
          Özel başarı yaz (isteğe bağlı)
          <input
            value={achievement}
            onChange={(e) => setAchievement(e.target.value)}
            maxLength={80}
          />
        </label>

        <div className="certificate-preview">
          <p className="certificate-preview__eyebrow">Önizleme</p>
          <h2>BAŞARI SERTİFİKASI</h2>
          <p className="certificate-preview__name">{displayName}</p>
          <p>{achievement}</p>
        </div>

        <button
          className="btn btn--primary"
          onClick={() => {
            downloadCertificatePdf(displayName, achievement)
            announceActivityResult(completeActivity('cert'))
          }}
        >
          ⬇️ PDF Sertifika İndir
        </button>

        <SocialShare
          payload={{
            title: `🏆 ${displayName} — Başarı Sertifikası`,
            text: achievement,
            page: 'certificates',
            itemId: achievement.slice(0, 40).replace(/\s+/g, '-').toLowerCase(),
            hashtags: ['KitapCenneti', 'Basari', 'Sertifika'],
          }}
        />
      </div>
    </div>
  )
}

import { useState } from 'react'
import { downloadCertificatePdf } from '../utils/pdf'

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
          <p className="certificate-preview__name">{name || 'Küçük Kahraman'}</p>
          <p>{achievement}</p>
        </div>

        <button
          className="btn btn--primary"
          onClick={() => downloadCertificatePdf(name.trim() || 'Küçük Kahraman', achievement)}
        >
          ⬇️ PDF Sertifika İndir
        </button>
      </div>
    </div>
  )
}

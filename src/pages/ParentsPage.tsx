import { PARENT_TIPS, DAILY_CHALLENGES } from '../data/parentTips'

export function ParentsPage() {
  return (
    <div className="page">
      <header className="page-header">
        <h1>👨‍👩‍👧 Aile Köşesi</h1>
        <p>Yaş rehberi, ekran süresi, uyku rutini ve güvenli içerik ipuçları.</p>
      </header>

      <div className="panel" style={{ marginBottom: 20 }}>
        <h2>📅 Bu Haftanın Görevleri</h2>
        <ul className="tip-list">
          {DAILY_CHALLENGES.map((c) => (
            <li key={c}>{c}</li>
          ))}
        </ul>
      </div>

      <div className="tips-grid">
        {PARENT_TIPS.map((tip) => (
          <article key={tip.id} className="panel tip-card">
            <div className="tip-card__top">
              <span>{tip.emoji}</span>
              <small>{tip.category}</small>
            </div>
            <h3>{tip.title}</h3>
            <p>{tip.body}</p>
          </article>
        ))}
      </div>

      <div className="panel safety-box">
        <h2>🛡️ Güvenlik Notu</h2>
        <p>
          AI hikaye üretimi internet bağlantısı gerektirir. Küçük çocuklar uygulamayı
          ebeveyn eşliğinde kullanmalıdır. Kişisel fotoğraflar cihazınızda kalır;
          kaydetmediğiniz sürece sunucuya uzun süreli saklanmaz.
        </p>
      </div>
    </div>
  )
}

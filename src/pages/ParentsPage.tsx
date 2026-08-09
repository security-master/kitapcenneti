import { PARENT_TIPS, DAILY_CHALLENGES } from '../data/parentTips'
import { AdSlot } from '../components/AdSlot'

export function ParentsPage() {
  return (
    <div className="page">
      <header className="page-header">
        <h1>👨‍👩‍👧 Aile Köşesi</h1>
        <p>Yaş rehberi, ekran süresi, uyku rutini ve güvenli içerik ipuçları. Daha uzun yazılar için Aile Blog’a bakın.</p>
      </header>

      <AdSlot slot="top" format="horizontal" />

      <div className="panel" style={{ marginBottom: 20 }}>
        <h2>📅 Bu Haftanın İlhamları</h2>
        <ul className="tip-list">
          {DAILY_CHALLENGES.map((c) => (
            <li key={c}>{c}</li>
          ))}
        </ul>
        <div className="btn-row">
          <a className="btn btn--primary" href="#blog">📝 Aile Blog’u oku</a>
          <a className="btn btn--ghost" href="#quests">⭐ Çocuk görev panosu</a>
        </div>
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

      <AdSlot slot="in-article" />

      <div className="panel safety-box">
        <h2>🛡️ Güvenlik Notu</h2>
        <p>
          Küçük çocuklar uygulamayı ebeveyn eşliğinde kullanmalıdır. Reklamlar (AdSense)
          onay sonrası özellikle ebeveyn içeriklerinde gösterilir. Detaylar için Gizlilik Politikası’na bakın.
        </p>
      </div>
    </div>
  )
}

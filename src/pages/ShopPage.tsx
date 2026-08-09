import type { PageId } from '../types/nav'
import { SHOP_PACKS } from '../data/shop'
import { showToast } from '../components/Toast'
import { addJournalEntry } from '../hooks/usePortalProfile'

interface Props {
  onNavigate: (page: PageId) => void
}

export function ShopPage({ onNavigate }: Props) {
  return (
    <div className="page">
      <header className="page-header">
        <h1>🎁 Ücretsiz İçerik Marketi</h1>
        <p>
          {SHOP_PACKS.length} paket — hepsi ücretsiz. “Al” demek: ilgili bölüme git ve kullanmaya başla.
        </p>
      </header>
      <div className="shop-grid">
        {SHOP_PACKS.map((pack) => (
          <article key={pack.id} className="panel shop-card">
            <span className="shop-card__emoji">{pack.emoji}</span>
            <h2>{pack.title}</h2>
            <p>{pack.description}</p>
            <small>
              {pack.age} · {pack.tags.join(' · ')}
            </small>
            <ul>
              {pack.includes.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
            <button
              type="button"
              className="btn btn--primary"
              onClick={() => {
                addJournalEntry({
                  kind: 'ödev',
                  title: `Paket: ${pack.title}`,
                  note: pack.description,
                  stars: 1,
                })
                showToast('Paket açıldı — bölüme gidiyorsun')
                onNavigate(pack.page as PageId)
              }}
            >
              Ücretsiz aç →
            </button>
          </article>
        ))}
      </div>
    </div>
  )
}

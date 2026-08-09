import type { PageId } from '../types/nav'
import { SHOP_PACKS } from '../data/shop'
import { showToast } from '../components/Toast'
import { addJournalEntry } from '../hooks/usePortalProfile'
import { SocialShare } from '../components/SocialShare'
import { useContentItemId } from '../hooks/useContentItemId'

interface Props {
  onNavigate: (page: PageId) => void
}

export function ShopPage({ onNavigate }: Props) {
  const [activeId, setActiveId] = useContentItemId('shop', SHOP_PACKS[0].id)
  const activePack = SHOP_PACKS.find((p) => p.id === activeId) || SHOP_PACKS[0]

  return (
    <div className="page">
      <header className="page-header">
        <h1>🎁 Ücretsiz İçerik Marketi</h1>
        <p>
          {SHOP_PACKS.length} paket — hepsi ücretsiz. "Al" demek: ilgili bölüme git ve kullanmaya başla.
        </p>
      </header>
      <div className="shop-grid">
        {SHOP_PACKS.map((pack) => (
          <article
            key={pack.id}
            className={`panel shop-card ${activeId === pack.id ? 'is-active' : ''}`}
            onClick={() => setActiveId(pack.id)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault()
                setActiveId(pack.id)
              }
            }}
          >
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
              onClick={(e) => {
                e.stopPropagation()
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
            {activeId === pack.id && (
              <SocialShare
                compact
                payload={{
                  title: `${pack.emoji} ${pack.title}`,
                  text: pack.description,
                  page: 'shop',
                  itemId: pack.id,
                  hashtags: ['KitapCenneti', 'Ucretsiz', ...pack.tags.slice(0, 2)],
                }}
              />
            )}
          </article>
        ))}
      </div>

      <div className="panel" style={{ marginTop: 20 }}>
        <h2>{activePack.emoji} {activePack.title}</h2>
        <p>{activePack.description}</p>
        <SocialShare
          payload={{
            title: `${activePack.emoji} ${activePack.title}`,
            text: `${activePack.description} — ${activePack.includes.slice(0, 2).join(', ')}`,
            page: 'shop',
            itemId: activePack.id,
            hashtags: ['KitapCenneti', 'Ucretsiz', ...activePack.tags.slice(0, 2)],
          }}
        />
      </div>
    </div>
  )
}

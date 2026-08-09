import type { PageId } from '../types/nav'
import { NAV_ITEMS } from '../data/nav'

interface NavbarProps {
  current: PageId
  onNavigate: (page: PageId) => void
}

export function Navbar({ current, onNavigate }: NavbarProps) {
  return (
    <nav className="navbar" aria-label="Ana menü">
      <div className="navbar__brand" onClick={() => onNavigate('home')} role="button" tabIndex={0}>
        <span className="navbar__logo">📚</span>
        <div>
          <div className="navbar__title">Kitap Cenneti</div>
          <div className="navbar__tag">Çocuk & Aile Platformu</div>
        </div>
      </div>
      <div className="navbar__links">
        {NAV_ITEMS.map((item) => (
          <button
            key={item.id}
            className={`navbar__link ${current === item.id ? 'navbar__link--active' : ''}`}
            onClick={() => onNavigate(item.id)}
            title={item.label}
          >
            <span>{item.emoji}</span>
            <span className="navbar__link-label">{item.short}</span>
          </button>
        ))}
      </div>
    </nav>
  )
}

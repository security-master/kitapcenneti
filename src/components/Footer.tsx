import type { PageId } from '../types/nav'

interface FooterProps {
  onNavigate?: (page: PageId) => void
}

export function Footer({ onNavigate }: FooterProps) {
  const go = (id: PageId) => {
    if (onNavigate) onNavigate(id)
    else window.location.hash = id
  }

  return (
    <footer className="footer">
      <div className="footer__content">
        <p className="footer__brand">📚 Kitap Cenneti</p>
        <p className="footer__text">
          Çocuklar ve aileler için ücretsiz, güvenli ve eğlenceli içerik ✨
        </p>
        <div className="footer__nav">
          <button onClick={() => go('about')}>Hakkımızda</button>
          <button onClick={() => go('blog')}>Aile Blog</button>
          <button onClick={() => go('quests')}>Günlük Görev</button>
          <button onClick={() => go('privacy')}>Gizlilik</button>
          <button onClick={() => go('terms')}>Koşullar</button>
          <button onClick={() => go('contact')}>İletişim</button>
        </div>
        <div className="footer__links">
          <span>Sesli Masallar</span>
          <span>•</span>
          <span>Boyama PDF</span>
          <span>•</span>
          <span>STEM</span>
          <span>•</span>
          <span>Duygular</span>
        </div>
        <p className="footer__tech">GitHub Pages · React · Vite</p>
      </div>
    </footer>
  )
}

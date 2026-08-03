import { NavLink, Outlet } from 'react-router-dom'

export function Layout() {
  return (
    <>
      <header className="site-header">
        <div className="app-shell site-header__inner">
          <NavLink to="/" className="brand" aria-label="Kitap Cenneti ana sayfa">
            <span className="brand__mark" aria-hidden="true">
              <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 7h9c3.5 0 6 2.2 6 5.5V25c-2.8-1.6-5.2-2.2-8-2.2H5V7z" fill="#FFF9F2" />
                <path d="M27 7h-9c-3.5 0-6 2.2-6 5.5V25c2.8-1.6 5.2-2.2 8-2.2h7V7z" fill="#FFE29A" />
              </svg>
            </span>
            <span className="brand__text">
              Kitap Cenneti
              <span>görselli masal kitabı</span>
            </span>
          </NavLink>
          <nav className="nav-links" aria-label="Ana menü">
            <NavLink to="/kutuphane">Prompt Kütüphanesi</NavLink>
            <NavLink to="/olustur">Masal Yaz</NavLink>
            <NavLink to="/beni-masalda" className="nav-cta btn btn-primary">
              Beni Masalda Gezdir
            </NavLink>
          </nav>
        </div>
      </header>
      <main>
        <Outlet />
      </main>
      <footer className="site-footer">
        <div className="app-shell">
          Kitap Cenneti — çocuklar için ücretsiz görselli masallar ✨
        </div>
      </footer>
    </>
  )
}

import { Link } from 'react-router-dom'
import { CATEGORIES, PROMPT_LIBRARY } from '../data/prompts'

export function HomePage() {
  const featured = CATEGORIES.find((c) => c.featured)!
  const others = CATEGORIES.filter((c) => !c.featured)
  const previewPrompts = PROMPT_LIBRARY.slice(0, 6)

  return (
    <>
      <section className="hero">
        <div className="hero__bg" aria-hidden="true">
          <div className="floaters">
            <span className="floater" style={{ left: '12%', bottom: '20%', background: '#fff', animationDelay: '0s' }} />
            <span className="floater" style={{ left: '30%', bottom: '10%', background: '#FFC44D', animationDelay: '2s' }} />
            <span className="floater" style={{ left: '70%', bottom: '18%', background: '#fff', animationDelay: '1s' }} />
            <span className="floater" style={{ left: '85%', bottom: '8%', background: '#FF6B5B', animationDelay: '3s' }} />
          </div>
        </div>
        <div className="app-shell hero__content">
          <h1 className="hero__brand">Kitap Cenneti</h1>
          <p className="hero__headline">Görselli masallar, seninle başlar</p>
          <p className="hero__sub">
            Hazır promptlarla veya kendi fikrinle renkli bir masal kitabı üret.
            İstersen fotoğrafınla masalın yıldızı ol!
          </p>
          <div className="hero__actions">
            <Link to="/beni-masalda" className="btn btn-primary">
              Beni Masalda Gezdir
            </Link>
            <Link to="/kutuphane" className="btn btn-secondary">
              Prompt Kütüphanesi
            </Link>
          </div>
        </div>
      </section>

      <div className="app-shell">
        <section className="section">
          <div className="feature-spotlight">
            <div className="feature-spotlight__visual" role="img" aria-label="Beni Masalda Gezdir görseli" />
            <div className="feature-spotlight__copy">
              <h2>{featured.title}</h2>
              <p>{featured.description}</p>
              <div>
                <Link to={featured.path} className="btn btn-mint">
                  Hemen başla
                </Link>
              </div>
            </div>
          </div>

          <div className="section__head">
            <div>
              <h2 className="section__title">Masal dünyaları</h2>
              <p className="section__sub">Bir kategori seç, hikâyen şekillenmeye başlasın.</p>
            </div>
          </div>
          <div className="category-rail">
            {others.map((cat) => (
              <Link
                key={cat.id}
                to={cat.path}
                className="category-tile"
                style={{ background: `linear-gradient(145deg, ${cat.accent}, rgba(42,45,69,0.35))` }}
              >
                <h3>{cat.title}</h3>
                <p>{cat.subtitle}</p>
              </Link>
            ))}
          </div>
        </section>

        <section className="section">
          <div className="section__head">
            <div>
              <h2 className="section__title">Hazır promptlar</h2>
              <p className="section__sub">Tek dokunuşla masal üretmeye hazır fikirler.</p>
            </div>
            <Link to="/kutuphane" className="btn btn-secondary">
              Tümünü gör
            </Link>
          </div>
          <div className="prompt-grid">
            {previewPrompts.map((prompt) => (
              <Link
                key={prompt.id}
                to={`/olustur?prompt=${encodeURIComponent(prompt.prompt)}&title=${encodeURIComponent(prompt.title)}`}
                className="prompt-tile"
                style={{ background: prompt.coverGradient }}
              >
                <div>
                  <div className="prompt-tile__emoji" aria-hidden="true">
                    {prompt.emoji}
                  </div>
                  <h3>{prompt.title}</h3>
                  <p>{prompt.description}</p>
                </div>
                <div className="prompt-tile__meta">Yaş {prompt.ageRange}</div>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </>
  )
}

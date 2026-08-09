import type { PageId } from '../types/nav'
import { FEATURE_CARDS } from '../data/nav'
import { AUDIO_STORIES } from '../data/audioStories'
import { HEROES } from '../data/heroes'
import { COLORING_PAGES } from '../data/coloringPages'
import { DAILY_CHALLENGES } from '../data/parentTips'
import { motion } from 'framer-motion'

interface HomePageProps {
  onNavigate: (page: PageId) => void
}

export function HomePage({ onNavigate }: HomePageProps) {
  const dayIndex = new Date().getDay() % DAILY_CHALLENGES.length
  const challenge = DAILY_CHALLENGES[dayIndex]
  const featuredStory = AUDIO_STORIES[dayIndex % AUDIO_STORIES.length]
  const featuredHero = HEROES[dayIndex % HEROES.length]

  return (
    <div className="home">
      <section className="home-hero">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <p className="home-hero__eyebrow">Çocuklar & Aileler İçin</p>
          <h1 className="home-hero__title">Kitap Cenneti</h1>
          <p className="home-hero__desc">
            Sesli masallar, AI hikaye kitabı, telifsiz kahramanlar, boyama PDF’leri,
            oyunlar ve aile rehberi — hepsi tek yerde.
          </p>
          <div className="home-hero__actions">
            <button className="btn btn--primary" onClick={() => onNavigate('create')}>
              ✨ Hikaye Oluştur
            </button>
            <button className="btn btn--ghost" onClick={() => onNavigate('audio')}>
              🎧 Sesli Masal Dinle
            </button>
          </div>
        </motion.div>
        <div className="home-hero__visual" aria-hidden="true">
          <div className="home-orbit">
            <span>📚</span>
            <span>🎧</span>
            <span>🖍️</span>
            <span>🦸</span>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="challenge-banner">
          <div>
            <h2>🌟 Günün Görevi</h2>
            <p>{challenge}</p>
          </div>
          <button className="btn btn--small" onClick={() => onNavigate('activities')}>
            Başla
          </button>
        </div>
      </section>

      <section className="section">
        <h2 className="section__title"><span className="section__title-emoji">🗺️</span> Keşfet</h2>
        <div className="feature-grid">
          {FEATURE_CARDS.map((card, i) => (
            <motion.button
              key={card.id}
              className="feature-card"
              style={{ background: card.gradient }}
              onClick={() => onNavigate(card.id)}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.04 }}
            >
              <span className="feature-card__emoji">{card.emoji}</span>
              <h3>{card.title}</h3>
              <p>{card.desc}</p>
            </motion.button>
          ))}
        </div>
      </section>

      <section className="section home-highlights">
        <div className="highlight-card" onClick={() => onNavigate('audio')}>
          <span>{featuredStory.emoji}</span>
          <div>
            <h3>Günün Masalı</h3>
            <p>{featuredStory.title} · {featuredStory.duration}</p>
          </div>
        </div>
        <div className="highlight-card" onClick={() => onNavigate('heroes')}>
          <span>{featuredHero.emoji}</span>
          <div>
            <h3>Günün Kahramanı</h3>
            <p>{featuredHero.name}</p>
          </div>
        </div>
        <div className="highlight-card" onClick={() => onNavigate('coloring')}>
          <span>🖍️</span>
          <div>
            <h3>Boyama Arşivi</h3>
            <p>{COLORING_PAGES.length} telifsiz PDF sayfa</p>
          </div>
        </div>
      </section>

      <section className="section trust-strip">
        <div>✅ Telifsiz özgün kahramanlar</div>
        <div>🆓 Ücretsiz kullanım</div>
        <div>👨‍👩‍👧 Aile rehberi</div>
        <div>📱 Telefonda da çalışır</div>
      </section>
    </div>
  )
}

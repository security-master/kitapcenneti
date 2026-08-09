import type { PageId } from '../types/nav'
import { FEATURE_CARDS } from '../data/nav'
import { AUDIO_STORIES } from '../data/audioStories'
import { HEROES } from '../data/heroes'
import { COLORING_PAGES } from '../data/coloringPages'
import { DAILY_CHALLENGES } from '../data/parentTips'
import { motion } from 'framer-motion'
import { ProgressHub } from '../components/ProgressHub'
import { useProgress } from '../hooks/useProgress'

interface HomePageProps {
  onNavigate: (page: PageId) => void
}

const ORBIT_LINKS: { emoji: string; label: string; page: PageId }[] = [
  { emoji: '📚', label: 'AI Hikaye', page: 'create' },
  { emoji: '🎧', label: 'Sesli Masal', page: 'audio' },
  { emoji: '🖍️', label: 'Boyama', page: 'coloring' },
  { emoji: '🦸', label: 'Kahramanlar', page: 'heroes' },
]

export function HomePage({ onNavigate }: HomePageProps) {
  const dayIndex = new Date().getDay() % DAILY_CHALLENGES.length
  const challenge = DAILY_CHALLENGES[dayIndex]
  const featuredStory = AUDIO_STORIES[dayIndex % AUDIO_STORIES.length]
  const featuredHero = HEROES[dayIndex % HEROES.length]
  const { bedtime, toggleBedtime } = useProgress()

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
            Günlük görevler, rozetler, sesli masallar, görselli AI kitap PDF’leri ve aile köşesi —
            ücretsiz, güvenli, her gün biraz daha büyüyen bir dünya.
          </p>
          <div className="home-hero__actions">
            <button className="btn btn--primary" onClick={() => onNavigate('quests')}>
              ⭐ Bugünün Görevleri
            </button>
            <button className="btn btn--ghost" onClick={() => onNavigate('create')}>
              ✨ Hikaye Yap
            </button>
            <button
              type="button"
              className={`bedtime-toggle ${bedtime ? 'is-on' : ''}`}
              onClick={toggleBedtime}
            >
              {bedtime ? '🌙 Gece modu' : '🌙 Yatmadan önce'}
            </button>
          </div>
        </motion.div>
        <div className="home-hero__visual">
          <div className="home-orbit">
            {ORBIT_LINKS.map((item, i) => (
              <button
                key={item.page}
                type="button"
                className="home-orbit__btn"
                style={{ animationDelay: `${i * 0.3}s` }}
                onClick={() => onNavigate(item.page)}
                aria-label={item.label}
                title={item.label}
              >
                <span aria-hidden="true">{item.emoji}</span>
                <small>{item.label}</small>
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <h2 className="section__title">
          <span className="section__title-emoji">🌈</span>
          Senin Dünyan
        </h2>
        <p className="section-hint">Yıldızlar, seri ve rozetler cihazında saklanır — üyelik yok.</p>
        <ProgressHub onNavigate={onNavigate} />
      </section>

      <section className="section">
        <div className="challenge-banner">
          <div>
            <h2>🌟 Günün Görevi</h2>
            <p>{challenge}</p>
          </div>
          <button className="btn btn--small" onClick={() => onNavigate('quests')}>
            Görev panosuna git
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
        <div>🏅 Rozet & seri takibi</div>
        <div>📕 Görselli hikaye PDF</div>
      </section>
    </div>
  )
}

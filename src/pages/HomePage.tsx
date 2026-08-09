import type { PageId } from '../types/nav'
import { FEATURE_CARDS } from '../data/nav'
import { AUDIO_STORIES } from '../data/audioStories'
import { HEROES } from '../data/heroes'
import { COLORING_PAGES } from '../data/coloringPages'
import { STICKERS, WHAT_NEXT } from '../data/stickers'
import { motion } from 'framer-motion'
import { ProgressHub } from '../components/ProgressHub'
import { useProgress } from '../hooks/useProgress'
import { useState } from 'react'

interface HomePageProps {
  onNavigate: (page: PageId) => void
}

export function HomePage({ onNavigate }: HomePageProps) {
  const dayIndex = new Date().getDay()
  const featuredStory = AUDIO_STORIES[dayIndex % AUDIO_STORIES.length]
  const featuredHero = HEROES[dayIndex % HEROES.length]
  const { bedtime, toggleBedtime, stickers, spinAvailable } = useProgress()
  const [idea, setIdea] = useState(() => Math.floor(Math.random() * WHAT_NEXT.length))
  const tip = WHAT_NEXT[idea % WHAT_NEXT.length]

  return (
    <div className="home">
      <section className="home-hero home-hero--playground">
        <div className="home-hero__glow" aria-hidden="true" />
        <motion.div
          className="home-hero__copy"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
        >
          <p className="home-hero__eyebrow">Bugün de maceradasın</p>
          <h1 className="home-hero__title">Kitap Cenneti</h1>
          <p className="home-hero__desc">
            Çark çevir, oyun oyna, masal dinle, sticker topla — burası sıkılmak için değil,
            keşfetmek için.
          </p>
          <div className="home-hero__actions">
            <button className="btn btn--primary btn--pop" onClick={() => onNavigate('fun')}>
              🎡 Eğlence Bahçesi
            </button>
            <button className="btn btn--sun" onClick={() => onNavigate('activities')}>
              🎮 Oyun Salonu
            </button>
            <button className="btn btn--ghost" onClick={() => onNavigate('create')}>
              ✨ Hikaye Yap
            </button>
          </div>
          <div className="home-hero__meta">
            <span>{stickers.length}/{STICKERS.length} sticker</span>
            <span>{spinAvailable ? 'Çark hazır 🎯' : 'Çark yarın 🌅'}</span>
            <button type="button" className={`bedtime-toggle ${bedtime ? 'is-on' : ''}`} onClick={toggleBedtime}>
              {bedtime ? '🌙 Gece' : '🌙 Gece modu'}
            </button>
          </div>
        </motion.div>

        <motion.div
          className="home-hero__stage"
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.15, duration: 0.55 }}
        >
          <div className="playground-stage">
            <button type="button" className="stage-bubble stage-bubble--a" onClick={() => onNavigate('audio')}>
              🎧
            </button>
            <button type="button" className="stage-bubble stage-bubble--b" onClick={() => onNavigate('coloring')}>
              🖍️
            </button>
            <button type="button" className="stage-bubble stage-bubble--c" onClick={() => onNavigate('fun')}>
              🎡
            </button>
            <button type="button" className="stage-bubble stage-bubble--d" onClick={() => onNavigate('heroes')}>
              🦸
            </button>
            <div className="stage-mascot" aria-hidden="true">🦊</div>
            <p className="stage-caption">Tıkla, keşfet, oyna</p>
          </div>
        </motion.div>
      </section>

      <section className="section surprise-strip">
        <div className="surprise-card">
          <span>{tip.emoji}</span>
          <div>
            <h2>Şimdi ne yapsak?</h2>
            <p>{tip.title} — {tip.blurb}</p>
          </div>
          <div className="btn-row">
            <button className="btn btn--primary" onClick={() => onNavigate(tip.page as PageId)}>
              Başla
            </button>
            <button className="btn btn--ghost" onClick={() => setIdea((i) => i + 1)}>
              Değiştir
            </button>
          </div>
        </div>
      </section>

      <section className="section">
        <h2 className="section__title">
          <span className="section__title-emoji">🌈</span>
          Senin Dünyan
        </h2>
        <ProgressHub onNavigate={onNavigate} />
      </section>

      <section className="section">
        <h2 className="section__title"><span className="section__title-emoji">🗺️</span> Keşfet</h2>
        <div className="feature-grid feature-grid--lively">
          {FEATURE_CARDS.map((card, i) => (
            <motion.button
              key={card.id}
              className="feature-card"
              style={{ background: card.gradient }}
              onClick={() => onNavigate(card.id)}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.04 }}
              whileHover={{ y: -6, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
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
        <div className="highlight-card" onClick={() => onNavigate('fun')}>
          <span>🏷️</span>
          <div>
            <h3>Sticker Albümü</h3>
            <p>{stickers.length} / {STICKERS.length} toplandı</p>
          </div>
        </div>
      </section>

      <section className="section trust-strip trust-strip--bright">
        <div>🎡 Sürpriz çarkı</div>
        <div>🎮 4 mini oyun</div>
        <div>🏷️ Sticker koleksiyonu</div>
        <div>📕 Görselli hikaye PDF</div>
      </section>
    </div>
  )
}

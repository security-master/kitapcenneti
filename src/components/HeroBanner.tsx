import { motion } from 'framer-motion'

export function HeroBanner() {
  return (
    <motion.div
      className="hero-banner"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="hero-banner__content">
        <div className="hero-banner__text">
          <h2 className="hero-banner__title">
            Hayal Et, Yaz, Oku! 🌈
          </h2>
          <p className="hero-banner__desc">
            Yapay zeka ile sana özel, renkli resimli hikaye kitapları oluştur.
            İsmini yaz, masalın kahramanı sen ol!
          </p>
          <div className="hero-banner__stats">
            <span className="hero-stat">📚 9 Kategori</span>
            <span className="hero-stat">🎨 7 Stil</span>
            <span className="hero-stat">🆓 Ücretsiz</span>
          </div>
        </div>
        <div className="hero-banner__visual" aria-hidden="true">
          <div className="hero-book">
            <div className="hero-book__page hero-book__page--1">🦄</div>
            <div className="hero-book__page hero-book__page--2">🚀</div>
            <div className="hero-book__page hero-book__page--3">🧚</div>
            <div className="hero-book__cover">📖</div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

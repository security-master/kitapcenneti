import { motion } from 'framer-motion'
import type { StoryCategory } from '../types'
import { CATEGORIES } from '../data/prompts'

interface CategoryGridProps {
  selected: StoryCategory
  onSelect: (category: StoryCategory) => void
}

export function CategoryGrid({ selected, onSelect }: CategoryGridProps) {
  return (
    <section className="section">
      <h2 className="section__title">
        <span className="section__title-emoji">🎨</span>
        Kategori Seç
      </h2>
      <div className="category-grid">
        {CATEGORIES.map((cat, index) => (
          <motion.button
            key={cat.id}
            className={`category-card ${cat.featured ? 'category-card--featured' : ''} ${selected === cat.id ? 'category-card--selected' : ''}`}
            style={{ background: cat.gradient }}
            onClick={() => onSelect(cat.id)}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {cat.featured && <span className="category-card__featured-badge">⭐ Özel</span>}
            <span className="category-card__bg-emoji">{cat.emoji}</span>
            <span className="category-card__emoji">{cat.emoji}</span>
            <h3 className="category-card__title">{cat.title}</h3>
            <p className="category-card__desc">{cat.description}</p>
          </motion.button>
        ))}
      </div>
    </section>
  )
}

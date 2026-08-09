import type { StoryCategory } from '../types'
import { CATEGORIES, getCategoryInfo } from '../data/prompts'

interface CategoryGridProps {
  selected: StoryCategory
  onSelect: (category: StoryCategory) => void
}

export function CategoryGrid({ selected, onSelect }: CategoryGridProps) {
  const selectedInfo = getCategoryInfo(selected)

  return (
    <section className="section" id="create-step-category">
      <h2 className="section__title">
        <span className="section__title-emoji">🎨</span>
        1. Kategori Seç
      </h2>
      <p className="section-hint">Bir karta dokun — seçimin sarı çerçeve ve ✓ ile görünür, sonra alta kayarız.</p>

      {selectedInfo && (
        <div className="category-selected-banner" style={{ background: selectedInfo.gradient }}>
          <span>{selectedInfo.emoji}</span>
          <div>
            <strong>Seçili: {selectedInfo.title}</strong>
            <small>{selectedInfo.description}</small>
          </div>
          <em>✓ Hazır</em>
        </div>
      )}

      <div className="category-grid">
        {CATEGORIES.map((cat) => {
          const isSelected = selected === cat.id
          return (
            <button
              key={cat.id}
              type="button"
              className={`category-card ${cat.featured ? 'category-card--featured' : ''} ${isSelected ? 'category-card--selected' : ''}`}
              style={{ background: cat.gradient }}
              onClick={() => onSelect(cat.id)}
              aria-pressed={isSelected}
            >
              {cat.featured && <span className="category-card__featured-badge">⭐ Özel</span>}
              {isSelected && <span className="category-card__check">✓ Seçildi</span>}
              <span className="category-card__bg-emoji" aria-hidden="true">{cat.emoji}</span>
              <span className="category-card__emoji">{cat.emoji}</span>
              <h3 className="category-card__title">{cat.title}</h3>
              <p className="category-card__desc">{cat.description}</p>
            </button>
          )
        })}
      </div>
    </section>
  )
}

/** Scroll helper used by CreateStoryPage */
export function scrollToCreateStep(id: string) {
  requestAnimationFrame(() => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  })
}

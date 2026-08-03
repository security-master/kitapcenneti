import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Download, RotateCcw } from 'lucide-react'
import type { Story } from '../types'

interface StoryViewerProps {
  story: Story
  onReset: () => void
}

export function StoryViewer({ story, onReset }: StoryViewerProps) {
  const [currentPage, setCurrentPage] = useState(0)
  const page = story.pages[currentPage]

  const goNext = () => setCurrentPage((p) => Math.min(p + 1, story.pages.length - 1))
  const goPrev = () => setCurrentPage((p) => Math.max(p - 1, 0))

  const handleDownload = () => {
    const content = story.pages
      .map((p) => `--- Sayfa ${p.pageNumber} ---\n${p.text}\n`)
      .join('\n')
    const blob = new Blob([`${story.title}\n\n${content}`], { type: 'text/plain;charset=utf-8' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `${story.title.replace(/\s+/g, '_')}.txt`
    a.click()
    URL.revokeObjectURL(url)
  }

  return (
    <div className="story-viewer">
      <div className="story-viewer__header">
        <h2 className="story-viewer__title">{story.title}</h2>
        {story.heroName && (
          <p style={{ color: 'var(--purple)', fontWeight: 700 }}>
            🦸 Kahraman: {story.heroName}
          </p>
        )}
      </div>

      <div className="story-viewer__actions">
        <button className="action-btn action-btn--secondary" onClick={onReset}>
          <RotateCcw size={18} />
          Yeni Hikaye
        </button>
        <button className="action-btn action-btn--secondary" onClick={handleDownload}>
          <Download size={18} />
          Metni İndir
        </button>
      </div>

      <div className="storybook">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            className="storybook__page"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.3 }}
          >
            <div className="storybook__image-wrap">
              {page.imageUrl ? (
                <img
                  className="storybook__image"
                  src={page.imageUrl}
                  alt={`Sayfa ${page.pageNumber} illüstrasyonu`}
                  loading="lazy"
                />
              ) : (
                <div className="storybook__image-placeholder">
                  <span>🎨</span>
                  <p>Resim yükleniyor...</p>
                </div>
              )}
            </div>
            <div className="storybook__content">
              <p className="storybook__page-number">
                Sayfa {page.pageNumber} / {story.pages.length}
              </p>
              <p className="storybook__text">{page.text}</p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="storybook__nav">
        <button className="nav-btn" onClick={goPrev} disabled={currentPage === 0}>
          <ChevronLeft size={24} />
        </button>

        <div className="page-dots">
          {story.pages.map((_, i) => (
            <button
              key={i}
              className={`page-dot ${i === currentPage ? 'page-dot--active' : ''}`}
              onClick={() => setCurrentPage(i)}
              aria-label={`Sayfa ${i + 1}`}
            />
          ))}
        </div>

        <button
          className="nav-btn"
          onClick={goNext}
          disabled={currentPage === story.pages.length - 1}
        >
          <ChevronRight size={24} />
        </button>
      </div>

      <div className="thumbnails">
        {story.pages.map((p, i) => (
          <button
            key={i}
            className={`thumbnail ${i === currentPage ? 'thumbnail--active' : ''}`}
            onClick={() => setCurrentPage(i)}
          >
            {p.imageUrl ? (
              <img src={p.imageUrl} alt={`Sayfa ${i + 1}`} />
            ) : (
              <span>📄</span>
            )}
          </button>
        ))}
      </div>
    </div>
  )
}

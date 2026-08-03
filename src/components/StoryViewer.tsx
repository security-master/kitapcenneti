import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Download, RotateCcw, Share2, Maximize2, Minimize2, Bookmark } from 'lucide-react'
import type { Story } from '../types'

interface StoryViewerProps {
  story: Story
  onReset: () => void
  onSave?: (story: Story) => void
}

export function StoryViewer({ story, onReset, onSave }: StoryViewerProps) {
  const [currentPage, setCurrentPage] = useState(0)
  const [isFullscreen, setIsFullscreen] = useState(false)
  const [saved, setSaved] = useState(false)
  const page = story.pages[currentPage]

  const goNext = useCallback(() => {
    setCurrentPage((p) => Math.min(p + 1, story.pages.length - 1))
  }, [story.pages.length])

  const goPrev = useCallback(() => {
    setCurrentPage((p) => Math.max(p - 1, 0))
  }, [])

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') goNext()
      if (e.key === 'ArrowLeft') goPrev()
      if (e.key === 'Escape' && isFullscreen) setIsFullscreen(false)
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [goNext, goPrev, isFullscreen])

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

  const handleShare = async () => {
    const text = `${story.title}\n\n${story.pages.map((p) => p.text).join('\n\n')}`
    if (navigator.share) {
      try {
        await navigator.share({ title: story.title, text })
        return
      } catch {
        // cancelled
      }
    }
    await navigator.clipboard.writeText(text)
    alert('Hikaye panoya kopyalandı! 📋')
  }

  const handleSave = () => {
    onSave?.(story)
    setSaved(true)
  }

  return (
    <div className={`story-viewer ${isFullscreen ? 'story-viewer--fullscreen' : ''}`}>
      <div className="story-viewer__header">
        <h2 className="story-viewer__title">{story.title}</h2>
        {story.heroName && (
          <div className="story-viewer__hero">
            {story.heroImage && (
              <img src={story.heroImage} alt={story.heroName} className="story-viewer__hero-avatar" />
            )}
            <p>🦸 Kahraman: <strong>{story.heroName}</strong></p>
          </div>
        )}
      </div>

      <div className="story-viewer__actions">
        <button className="action-btn action-btn--secondary" onClick={onReset}>
          <RotateCcw size={18} />
          Yeni Hikaye
        </button>
        <button className="action-btn action-btn--secondary" onClick={handleDownload}>
          <Download size={18} />
          İndir
        </button>
        <button className="action-btn action-btn--secondary" onClick={handleShare}>
          <Share2 size={18} />
          Paylaş
        </button>
        {onSave && (
          <button
            className="action-btn action-btn--secondary"
            onClick={handleSave}
            disabled={saved}
          >
            <Bookmark size={18} />
            {saved ? 'Kaydedildi!' : 'Kaydet'}
          </button>
        )}
        <button
          className="action-btn action-btn--secondary"
          onClick={() => setIsFullscreen(!isFullscreen)}
        >
          {isFullscreen ? <Minimize2 size={18} /> : <Maximize2 size={18} />}
          {isFullscreen ? 'Küçült' : 'Tam Ekran'}
        </button>
      </div>

      <div className="storybook">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            className="storybook__page"
            initial={{ opacity: 0, rotateY: 15 }}
            animate={{ opacity: 1, rotateY: 0 }}
            exit={{ opacity: 0, rotateY: -15 }}
            transition={{ duration: 0.4 }}
          >
            <div className="storybook__image-wrap">
              {page.imageUrl ? (
                <img
                  className="storybook__image"
                  src={page.imageUrl}
                  alt={`Sayfa ${page.pageNumber} illüstrasyonu`}
                  loading="eager"
                  onError={async (e) => {
                    const img = e.currentTarget
                    if (img.dataset.retried) return
                    img.dataset.retried = '1'
                    const shortPrompt = page.imagePrompt.slice(0, 120)
                    try {
                      const res = await fetch('/.netlify/functions/generate-image', {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({ prompt: shortPrompt, seed: page.pageNumber * 99 }),
                      })
                      if (res.ok) {
                        const data = await res.json()
                        if (data.imageUrl) {
                          img.src = data.imageUrl
                          return
                        }
                      }
                    } catch { /* ignore */ }
                    const seed = page.pageNumber * 99
                    img.src = `https://image.pollinations.ai/prompt/${encodeURIComponent(shortPrompt)}?width=768&height=576&nologo=true&seed=${seed}&model=flux`
                  }}
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
        <button className="nav-btn" onClick={goPrev} disabled={currentPage === 0} aria-label="Önceki sayfa">
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
          aria-label="Sonraki sayfa"
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

import { useMemo, useState } from 'react'
import type { StoryBook } from '../types'

interface Props {
  story: StoryBook
}

export function StoryReader({ story }: Props) {
  const [index, setIndex] = useState(0)

  const slides = useMemo(() => {
    return [
      {
        key: 'cover',
        title: story.title,
        text: story.summary,
        imageUrl: story.coverUrl,
        label: 'Kapak',
      },
      ...story.pages.map((page) => ({
        key: `p-${page.pageNumber}`,
        title: `Sayfa ${page.pageNumber}`,
        text: page.text,
        imageUrl: page.imageUrl,
        label: `${page.pageNumber}`,
      })),
    ]
  }, [story])

  const current = slides[index]
  const canPrev = index > 0
  const canNext = index < slides.length - 1

  return (
    <div className="story-reader">
      <div className="story-stage" key={current.key}>
        {current.imageUrl ? (
          <img
            className="story-stage__image"
            src={current.imageUrl}
            alt={current.title}
          />
        ) : (
          <div className="story-stage__fallback" aria-hidden="true" />
        )}
        <div className="story-stage__overlay">
          <h2>{current.title}</h2>
          <p>{current.text}</p>
        </div>
      </div>

      <div className="story-nav">
        <button
          type="button"
          className="btn btn-secondary"
          disabled={!canPrev}
          onClick={() => setIndex((v) => Math.max(0, v - 1))}
        >
          ← Önceki
        </button>
        <div className="page-dots" role="tablist" aria-label="Sayfalar">
          {slides.map((slide, i) => (
            <button
              key={slide.key}
              type="button"
              className={`page-dot ${i === index ? 'active' : ''}`}
              aria-label={slide.label}
              onClick={() => setIndex(i)}
            />
          ))}
        </div>
        <button
          type="button"
          className="btn btn-primary"
          disabled={!canNext}
          onClick={() => setIndex((v) => Math.min(slides.length - 1, v + 1))}
        >
          Sonraki →
        </button>
      </div>
    </div>
  )
}

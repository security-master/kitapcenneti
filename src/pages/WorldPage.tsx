import { useState } from 'react'
import type { PageId } from '../types/nav'
import { WORLD_REGIONS } from '../data/world'
import { SocialShare } from '../components/SocialShare'

interface Props {
  onNavigate: (page: PageId) => void
}

export function WorldPage({ onNavigate }: Props) {
  const [shareId, setShareId] = useState<string | null>(null)

  return (
    <div className="page">
      <header className="page-header">
        <h1>🗺️ Kitap Cenneti Dünyası</h1>
        <p>
          {WORLD_REGIONS.length} temalı bölge — haritadan bir yere dokun, maceraya atıl.
        </p>
      </header>
      <div className="world-map">
        {WORLD_REGIONS.map((region) => (
          <article key={region.id} className="world-region" style={{ background: region.color }}>
            <div className="world-region__inner">
              <span className="world-region__emoji">{region.emoji}</span>
              <h2>{region.title}</h2>
              <p>{region.blurb}</p>
              <div className="world-region__links">
                {region.links.map((link) => (
                  <button
                    key={link.label}
                    type="button"
                    className="btn btn--small"
                    onClick={() => onNavigate(link.page as PageId)}
                  >
                    {link.label}
                  </button>
                ))}
              </div>
              <button
                type="button"
                className="btn btn--ghost btn--small"
                style={{ marginTop: 10 }}
                onClick={() => setShareId((id) => (id === region.id ? null : region.id))}
              >
                {shareId === region.id ? 'Paylaşımı gizle' : 'Paylaş'}
              </button>
              {shareId === region.id && (
                <SocialShare
                  compact
                  payload={{
                    title: `${region.emoji} ${region.title}`,
                    text: region.blurb,
                    page: 'world',
                    itemId: region.id,
                    hashtags: ['KitapCenneti', 'Macera', region.title.replace(/\s+/g, '')],
                  }}
                />
              )}
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}

import { useState } from 'react'
import { BLOG_POSTS } from '../data/blog'
import { AdSlot } from '../components/AdSlot'
import { announceActivityResult } from '../components/Toast'
import { completeActivity } from '../hooks/useProgress'

export function BlogPage() {
  const [activeId, setActiveId] = useState(BLOG_POSTS[0].id)
  const post = BLOG_POSTS.find((p) => p.id === activeId) || BLOG_POSTS[0]

  return (
    <div className="page">
      <header className="page-header">
        <h1>📝 Aile Blog</h1>
        <p>
          Ebeveynler için pratik yazılar: rutin, okuma, duygu ve güvenli içerik.
          Bu bölüm özellikle anneler ve babalar içindir.
        </p>
      </header>

      <AdSlot slot="top" format="horizontal" />

      <div className="blog-layout">
        <div className="blog-list">
          {BLOG_POSTS.map((p) => (
            <button
              key={p.id}
              className={`blog-list__item ${activeId === p.id ? 'is-active' : ''}`}
              onClick={() => {
                setActiveId(p.id)
                announceActivityResult(completeActivity('blog'))
              }}
            >
              <span>{p.emoji}</span>
              <div>
                <strong>{p.title}</strong>
                <small>{p.minutes} dk · {p.tags.join(' · ')}</small>
              </div>
            </button>
          ))}
        </div>

        <article className="panel blog-article">
          <p className="blog-article__meta">{post.emoji} {post.minutes} dk okuma · {post.tags.join(' · ')}</p>
          <h2>{post.title}</h2>
          <p className="blog-article__summary">{post.summary}</p>
          <AdSlot slot="in-article" />
          {post.body.map((para) => (
            <p key={para.slice(0, 24)} className="blog-article__p">{para}</p>
          ))}
        </article>
      </div>
    </div>
  )
}

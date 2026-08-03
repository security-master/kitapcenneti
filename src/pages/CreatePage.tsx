import { useMemo, useState } from 'react'
import type { FormEvent } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { IMAGE_MODELS, STORY_MODELS } from '../data/prompts'
import { generateStory, generateStoryImages } from '../lib/api'
import { ART_STYLES, type ArtStyle, type StoryBook } from '../types'
import { StoryReader } from '../components/StoryReader'

export function CreatePage() {
  const [params] = useSearchParams()
  const navigate = useNavigate()
  const initialPrompt = params.get('prompt') || ''
  const initialTitle = params.get('title') || ''

  const [prompt, setPrompt] = useState(initialPrompt)
  const [childName, setChildName] = useState('')
  const [storyModel, setStoryModel] = useState(STORY_MODELS[0].id)
  const [imageModel, setImageModel] = useState(IMAGE_MODELS[2].id)
  const [artStyle, setArtStyle] = useState<ArtStyle>('masal-kitabi')
  const [pageCount, setPageCount] = useState(5)
  const [loading, setLoading] = useState(false)
  const [status, setStatus] = useState('')
  const [error, setError] = useState('')
  const [story, setStory] = useState<StoryBook | null>(null)

  const heading = useMemo(
    () => initialTitle || 'Kendi masalını yaz',
    [initialTitle],
  )

  async function onSubmit(e: FormEvent) {
    e.preventDefault()
    if (!prompt.trim()) {
      setError('Lütfen bir prompt yaz.')
      return
    }

    setLoading(true)
    setError('')
    setStatus('Masal yazılıyor...')
    setStory(null)

    try {
      const drafted = await generateStory({
        prompt: prompt.trim(),
        childName: childName.trim() || undefined,
        pageCount,
        artStyle,
        model: storyModel,
      })
      setStory(drafted)
      setStatus('Görseller hazırlanıyor...')

      const withImages = await generateStoryImages(drafted, {
        imageModel,
        characterNote: childName.trim() || undefined,
        onPageUpdate: (pages, coverUrl) => {
          setStory((prev) => (prev ? { ...prev, pages, coverUrl } : prev))
        },
      })
      setStory(withImages)
      setStatus('Masalın hazır!')
      sessionStorage.setItem('kitapcenneti:lastStory', JSON.stringify(withImages))
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Bir hata oluştu')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="app-shell section">
      <div className="section__head">
        <div>
          <h1 className="section__title">{heading}</h1>
          <p className="section__sub">
            Promptunu yaz, modeli seç, görselli masal kitabını oluştur.
          </p>
        </div>
      </div>

      <div className="panel" style={{ marginBottom: '1.4rem' }}>
        <form className="form-grid" onSubmit={onSubmit}>
          <label className="field">
            <span>Masal promptu</span>
            <textarea
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder="Örn: Küçük bir tilki gökyüzünden düşen yıldızı ormana geri götürmek ister..."
              required
            />
          </label>

          <div className="form-row">
            <label className="field">
              <span>Kahraman adı (isteğe bağlı)</span>
              <input
                type="text"
                value={childName}
                onChange={(e) => setChildName(e.target.value)}
                placeholder="Örn: Elif"
              />
            </label>
            <label className="field">
              <span>Sayfa sayısı</span>
              <select
                value={pageCount}
                onChange={(e) => setPageCount(Number(e.target.value))}
              >
                {[3, 4, 5, 6].map((n) => (
                  <option key={n} value={n}>
                    {n} sayfa
                  </option>
                ))}
              </select>
            </label>
          </div>

          <div className="form-row">
            <label className="field">
              <span>Hikâye modeli (ücretsiz)</span>
              <select value={storyModel} onChange={(e) => setStoryModel(e.target.value)}>
                {STORY_MODELS.map((m) => (
                  <option key={m.id} value={m.id}>
                    {m.label}
                  </option>
                ))}
              </select>
            </label>
            <label className="field">
              <span>Görsel modeli</span>
              <select value={imageModel} onChange={(e) => setImageModel(e.target.value)}>
                {IMAGE_MODELS.map((m) => (
                  <option key={m.id} value={m.id}>
                    {m.label}
                  </option>
                ))}
              </select>
            </label>
          </div>

          <label className="field">
            <span>Çizim stili</span>
            <div className="chip-row">
              {ART_STYLES.map((style) => (
                <button
                  key={style.id}
                  type="button"
                  className={`chip ${artStyle === style.id ? 'active' : ''}`}
                  onClick={() => setArtStyle(style.id)}
                >
                  {style.label}
                </button>
              ))}
            </div>
          </label>

          {error ? <div className="notice">{error}</div> : null}
          {status ? <div className="notice">{status}</div> : null}

          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
            <button type="submit" className="btn btn-primary" disabled={loading}>
              {loading ? 'Üretiliyor...' : 'Masal Kitabını Oluştur'}
            </button>
            <button
              type="button"
              className="btn btn-secondary"
              onClick={() => navigate('/kutuphane')}
            >
              Kütüphaneye dön
            </button>
          </div>
        </form>
      </div>

      {loading && !story ? (
        <div className="panel loading-block">
          <div className="spinner" />
          <p>Sihirli kalemler çalışıyor...</p>
        </div>
      ) : null}

      {story ? (
        <div className="panel">
          <StoryReader story={story} />
        </div>
      ) : null}
    </div>
  )
}

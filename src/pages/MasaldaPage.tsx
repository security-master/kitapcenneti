import { useState } from 'react'
import type { FormEvent } from 'react'
import { IMAGE_MODELS, MASAL_WORLDS, STORY_MODELS } from '../data/prompts'
import { fileToBase64, generateStory, generateStoryImages } from '../lib/api'
import { ART_STYLES, type ArtStyle, type StoryBook } from '../types'
import { StoryReader } from '../components/StoryReader'

export function MasaldaPage() {
  const [childName, setChildName] = useState('')
  const [roleWish, setRoleWish] = useState('cesur bir kaşif')
  const [worldId, setWorldId] = useState(MASAL_WORLDS[0].id)
  const [extraPrompt, setExtraPrompt] = useState('')
  const [photo, setPhoto] = useState<File | null>(null)
  const [photoPreview, setPhotoPreview] = useState('')
  const [storyModel, setStoryModel] = useState(STORY_MODELS[0].id)
  const [imageModel, setImageModel] = useState(IMAGE_MODELS[2].id)
  const [artStyle, setArtStyle] = useState<ArtStyle>('cizgi-film')
  const [loading, setLoading] = useState(false)
  const [status, setStatus] = useState('')
  const [error, setError] = useState('')
  const [story, setStory] = useState<StoryBook | null>(null)

  const world = MASAL_WORLDS.find((w) => w.id === worldId) || MASAL_WORLDS[0]

  function onPhotoChange(file: File | null) {
    setPhoto(file)
    if (photoPreview) URL.revokeObjectURL(photoPreview)
    setPhotoPreview(file ? URL.createObjectURL(file) : '')
  }

  async function onSubmit(e: FormEvent) {
    e.preventDefault()
    if (!childName.trim()) {
      setError('Masala girmek için bir isim yazmalısın.')
      return
    }

    setLoading(true)
    setError('')
    setStory(null)
    setStatus(`${childName} masala adım atıyor...`)

    try {
      let referenceImage: string | undefined
      let referenceMimeType: string | undefined
      if (photo) {
        const encoded = await fileToBase64(photo)
        referenceImage = encoded.base64
        referenceMimeType = encoded.mimeType
      }

      const prompt = [
        `${childName} adlı çocuk ${world.promptHint} bir masalın kahramanı olsun.`,
        `Rolü: ${roleWish}.`,
        extraPrompt.trim() ? `Ek istek: ${extraPrompt.trim()}` : '',
        'Hikâye sıcak, eğlenceli ve çocuk için güvenli olsun. Kahraman iyilik ve cesaret göstersin.',
      ]
        .filter(Boolean)
        .join(' ')

      const drafted = await generateStory({
        prompt,
        childName: childName.trim(),
        childDescription: photo
          ? 'Uploaded child photo should inspire the hero appearance in illustrations'
          : `${childName}, cheerful child hero`,
        worldHint: world.promptHint,
        pageCount: 5,
        artStyle,
        model: storyModel,
      })

      setStory(drafted)
      setStatus('Senin sahnelerin çiziliyor...')

      const characterNote = photo
        ? `${childName}, keep resemblance to the reference photo, stylized for a children's book`
        : `${childName}, joyful child hero`

      const withImages = await generateStoryImages(drafted, {
        imageModel: photo && imageModel === 'pollinations' ? 'gemini-2.5-flash-image' : imageModel,
        characterNote,
        referenceImage,
        referenceMimeType,
        onPageUpdate: (pages, coverUrl) => {
          setStory((prev) => (prev ? { ...prev, pages, coverUrl } : prev))
        },
      })

      setStory(withImages)
      setStatus(`${childName} artık masalın içinde!`)
      sessionStorage.setItem('kitapcenneti:lastStory', JSON.stringify(withImages))
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Bir hata oluştu')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="app-shell section">
      <div className="feature-spotlight" style={{ marginBottom: '1.5rem' }}>
        <div className="feature-spotlight__visual" role="img" aria-label="Masal dünyası" />
        <div className="feature-spotlight__copy">
          <h2>Beni Masalda Gezdir</h2>
          <p>
            İsmini yaz, dilersen fotoğrafını yükle. Bir dünya seç — masalda senin bir
            rolün olsun!
          </p>
        </div>
      </div>

      <div className="panel" style={{ marginBottom: '1.4rem' }}>
        <form className="form-grid" onSubmit={onSubmit}>
          <div className="form-row">
            <label className="field">
              <span>Adın</span>
              <input
                type="text"
                value={childName}
                onChange={(e) => setChildName(e.target.value)}
                placeholder="Örn: Mira"
                required
              />
            </label>
            <label className="field">
              <span>Masaldaki rolün</span>
              <input
                type="text"
                value={roleWish}
                onChange={(e) => setRoleWish(e.target.value)}
                placeholder="Örn: uçan bisikletli kaşif"
              />
            </label>
          </div>

          <div>
            <div style={{ fontWeight: 800, marginBottom: '0.55rem' }}>Masal dünyası</div>
            <div className="world-grid">
              {MASAL_WORLDS.map((w) => (
                <button
                  key={w.id}
                  type="button"
                  className={`world-option ${worldId === w.id ? 'selected' : ''}`}
                  style={{ background: w.gradient }}
                  onClick={() => setWorldId(w.id)}
                >
                  <h4>{w.title}</h4>
                  <p>{w.description}</p>
                </button>
              ))}
            </div>
          </div>

          <div className="form-row">
            <label className="field">
              <span>Fotoğrafın (isteğe bağlı)</span>
              <input
                type="file"
                accept="image/*"
                onChange={(e) => onPhotoChange(e.target.files?.[0] || null)}
              />
              {photoPreview ? (
                <img className="upload-preview" src={photoPreview} alt="Yüklenen fotoğraf" />
              ) : null}
            </label>
            <label className="field">
              <span>Ekstra istek</span>
              <textarea
                value={extraPrompt}
                onChange={(e) => setExtraPrompt(e.target.value)}
                placeholder="Örn: Yanımda konuşan bir kedi olsun, sonunda herkes dans etsin..."
              />
            </label>
          </div>

          <div className="form-row">
            <label className="field">
              <span>Hikâye modeli</span>
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

          <button type="submit" className="btn btn-primary" disabled={loading}>
            {loading ? 'Masala giriliyor...' : 'Beni Masala Götür!'}
          </button>
        </form>
      </div>

      {loading && !story ? (
        <div className="panel loading-block">
          <div className="spinner" />
          <p>Kapılar açılıyor, yıldızlar yanıyor...</p>
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

import { useRef } from 'react'

interface PersonalizeHeroProps {
  heroName: string
  heroImage: string | null
  onNameChange: (name: string) => void
  onImageChange: (image: string | null) => void
}

export function PersonalizeHero({ heroName, heroImage, onNameChange, onImageChange }: PersonalizeHeroProps) {
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return

    if (file.size > 5 * 1024 * 1024) {
      alert('Fotoğraf en fazla 5MB olabilir.')
      return
    }

    const reader = new FileReader()
    reader.onload = () => {
      onImageChange(reader.result as string)
    }
    reader.readAsDataURL(file)
  }

  return (
    <div className="personalize-hero">
      <h3 className="personalize-hero__title">
        <span>🦸</span> Sen Kahramansın!
      </h3>
      <p style={{ marginBottom: 16, fontWeight: 600, color: 'var(--text-light)' }}>
        İsmini yaz veya fotoğrafını yükle — hikayenin baş kahramanı sen olacaksın!
      </p>
      <div className="personalize-row">
        <div className="personalize-input">
          <label htmlFor="hero-name">🌟 Kahraman İsmi</label>
          <input
            id="hero-name"
            type="text"
            value={heroName}
            onChange={(e) => onNameChange(e.target.value)}
            placeholder="Adını yaz..."
            maxLength={30}
          />
        </div>

        <div className="photo-upload">
          <label className="photo-upload__label">📸 Fotoğrafın (isteğe bağlı)</label>
          <div
            className="photo-upload__area"
            onClick={() => fileInputRef.current?.click()}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => e.key === 'Enter' && fileInputRef.current?.click()}
          >
            {heroImage ? (
              <img src={heroImage} alt="Kahraman fotoğrafı" />
            ) : (
              <div className="photo-upload__placeholder">
                <span>📷</span>
              </div>
            )}
          </div>
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            style={{ display: 'none' }}
          />
          {heroImage && (
            <button
              onClick={(e) => {
                e.stopPropagation()
                onImageChange(null)
              }}
              style={{
                fontSize: '0.8rem',
                color: 'var(--pink)',
                background: 'none',
                fontWeight: 700,
              }}
            >
              Kaldır
            </button>
          )}
        </div>
      </div>
    </div>
  )
}

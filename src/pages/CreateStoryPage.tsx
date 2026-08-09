import { useState } from 'react'
import { CategoryGrid, scrollToCreateStep } from '../components/CategoryGrid'
import { OptionsPanel } from '../components/OptionsPanel'
import { PromptLibrary } from '../components/PromptLibrary'
import { CustomPrompt } from '../components/CustomPrompt'
import { PersonalizeHero } from '../components/PersonalizeHero'
import { LoadingAnimation } from '../components/LoadingAnimation'
import { StoryViewer } from '../components/StoryViewer'
import { SavedStories } from '../components/SavedStories'
import { useStoryGenerator } from '../hooks/useStoryGenerator'
import { useSavedStories } from '../hooks/useSavedStories'
import { getCategoryInfo } from '../data/prompts'
import type { ArtStyle, ImageProvider, StoryCategory, TextModel } from '../types'

export function CreateStoryPage() {
  const [category, setCategory] = useState<StoryCategory>('personalized')
  const [selectedPrompt, setSelectedPrompt] = useState('')
  const [customPrompt, setCustomPrompt] = useState('')
  const [heroName, setHeroName] = useState('')
  const [heroImage, setHeroImage] = useState<string | null>(null)
  const [artStyle, setArtStyle] = useState<ArtStyle>('watercolor')
  const [textModel, setTextModel] = useState<TextModel>('gpt-4o-mini')
  const [imageProvider, setImageProvider] = useState<ImageProvider>('pollinations')
  const [ageGroup, setAgeGroup] = useState<'3-5' | '6-8' | '9-12'>('6-8')
  const [pageCount, setPageCount] = useState(6)

  const { isGenerating, progress, status, story, generateStory, loadStory, resetStory } = useStoryGenerator()
  const { savedStories, saveStory, deleteStory } = useSavedStories()
  const catInfo = getCategoryInfo(category)

  const handleSelectCategory = (cat: StoryCategory) => {
    setCategory(cat)
    setSelectedPrompt('')
    // Sonraki adıma kaydır — kullanıcı "sabit kaldı" sanmasın
    scrollToCreateStep(cat === 'personalized' ? 'create-step-hero' : 'create-step-prompt')
  }

  const handleGenerate = () => {
    const prompt = customPrompt || selectedPrompt || undefined

    if (category === 'personalized' && !heroName.trim()) {
      alert('Lütfen kahraman ismini gir!')
      scrollToCreateStep('create-step-hero')
      return
    }

    if (category === 'custom' && !prompt) {
      alert('Lütfen bir hikaye fikri yaz veya seç!')
      scrollToCreateStep('create-step-prompt')
      return
    }

    generateStory({
      category,
      prompt,
      heroName: heroName.trim() || undefined,
      heroImage: heroImage || undefined,
      artStyle,
      textModel,
      imageProvider,
      pageCount,
      ageGroup,
    })
  }

  if (story) {
    return <StoryViewer story={story} onReset={resetStory} onSave={saveStory} />
  }

  return (
    <div className="page create-page">
      <header className="page-header">
        <h1>✨ AI Hikaye Kitabı</h1>
        <p>Adım adım: kategori seç → kahraman / fikir → stil → oluştur.</p>
      </header>

      <ol className="create-steps">
        <li className="is-active">1. Kategori</li>
        <li className={category ? 'is-active' : undefined}>2. Detay</li>
        <li className={selectedPrompt || customPrompt || heroName ? 'is-active' : undefined}>3. Stil</li>
        <li>4. Oluştur</li>
      </ol>

      <SavedStories stories={savedStories} onLoad={loadStory} onDelete={deleteStory} />

      <CategoryGrid selected={category} onSelect={handleSelectCategory} />

      <div id="create-step-hero" className="create-step-block">
        {category === 'personalized' ? (
          <>
            <h2 className="section__title">
              <span className="section__title-emoji">🦸</span>
              2. Kahramanını Gir
            </h2>
            <PersonalizeHero
              heroName={heroName}
              heroImage={heroImage}
              onNameChange={setHeroName}
              onImageChange={setHeroImage}
            />
          </>
        ) : (
          <div className="panel create-step-note">
            <h2 className="section__title">
              <span className="section__title-emoji">{catInfo?.emoji || '📖'}</span>
              2. {catInfo?.title || 'Hikaye'} seçildi
            </h2>
            <p>
              Bu kategoride isim zorunlu değil. İstersen yine de kahraman adı ekleyebilirsin
              veya doğrudan aşağıdaki fikirlerden birini seç.
            </p>
            <label className="create-optional-name">
              Kahraman adı (isteğe bağlı)
              <input
                type="text"
                value={heroName}
                onChange={(e) => setHeroName(e.target.value)}
                placeholder="Örn. Elif"
                maxLength={30}
              />
            </label>
          </div>
        )}
      </div>

      <div id="create-step-prompt" className="create-step-block">
        <PromptLibrary
          category={category}
          selectedPrompt={selectedPrompt}
          onSelectPrompt={(p) => {
            setSelectedPrompt(p)
            setCustomPrompt('')
            scrollToCreateStep('create-step-options')
          }}
        />
        <CustomPrompt
          value={customPrompt}
          onChange={(v) => {
            setCustomPrompt(v)
            if (v) setSelectedPrompt('')
          }}
        />
      </div>

      <div id="create-step-options" className="create-step-block">
        <h2 className="section__title">
          <span className="section__title-emoji">⚙️</span>
          3. Stil & Ayarlar
        </h2>
        <OptionsPanel
          artStyle={artStyle}
          textModel={textModel}
          imageProvider={imageProvider}
          ageGroup={ageGroup}
          pageCount={pageCount}
          onArtStyleChange={setArtStyle}
          onTextModelChange={setTextModel}
          onImageProviderChange={setImageProvider}
          onAgeGroupChange={setAgeGroup}
          onPageCountChange={setPageCount}
        />
      </div>

      <div id="create-step-generate" className="create-step-block">
        <h2 className="section__title">
          <span className="section__title-emoji">🚀</span>
          4. Oluştur
        </h2>
        <p className="section-hint">
          Seçili kategori: <strong>{catInfo?.emoji} {catInfo?.title}</strong>
          {heroName ? ` · Kahraman: ${heroName}` : ''}
          {selectedPrompt || customPrompt ? ` · Fikir hazır` : ' · Fikir isteğe bağlı'}
        </p>
        <button className="generate-btn" onClick={handleGenerate} disabled={isGenerating}>
          <span className="generate-btn__emoji">✨</span>
          Hikayemi Oluştur!
          <span className="generate-btn__emoji">📚</span>
        </button>
      </div>

      {isGenerating && <LoadingAnimation progress={progress} status={status} />}
    </div>
  )
}

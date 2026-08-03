import { useState } from 'react'
import { BackgroundDecorations } from './components/BackgroundDecorations'
import { Header } from './components/Header'
import { CategoryGrid } from './components/CategoryGrid'
import { OptionsPanel } from './components/OptionsPanel'
import { PromptLibrary } from './components/PromptLibrary'
import { CustomPrompt } from './components/CustomPrompt'
import { PersonalizeHero } from './components/PersonalizeHero'
import { LoadingAnimation } from './components/LoadingAnimation'
import { StoryViewer } from './components/StoryViewer'
import { useStoryGenerator } from './hooks/useStoryGenerator'
import type { ArtStyle, ImageProvider, StoryCategory, TextModel } from './types'

export default function App() {
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

  const { isGenerating, progress, status, story, generateStory, resetStory } = useStoryGenerator()

  const handleGenerate = () => {
    const prompt = customPrompt || selectedPrompt || undefined

    if (category === 'personalized' && !heroName.trim()) {
      alert('Lütfen kahraman ismini gir!')
      return
    }

    if (category === 'custom' && !prompt) {
      alert('Lütfen bir hikaye fikri yaz veya seç!')
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
    return (
      <div className="app">
        <BackgroundDecorations />
        <Header />
        <StoryViewer story={story} onReset={resetStory} />
      </div>
    )
  }

  return (
    <div className="app">
      <BackgroundDecorations />
      <Header />

      <CategoryGrid
        selected={category}
        onSelect={(cat) => {
          setCategory(cat)
          setSelectedPrompt('')
        }}
      />

      {category === 'personalized' && (
        <PersonalizeHero
          heroName={heroName}
          heroImage={heroImage}
          onNameChange={setHeroName}
          onImageChange={setHeroImage}
        />
      )}

      <PromptLibrary
        category={category}
        selectedPrompt={selectedPrompt}
        onSelectPrompt={(p) => {
          setSelectedPrompt(p)
          setCustomPrompt('')
        }}
      />

      <CustomPrompt
        value={customPrompt}
        onChange={(v) => {
          setCustomPrompt(v)
          if (v) setSelectedPrompt('')
        }}
      />

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

      <button className="generate-btn" onClick={handleGenerate} disabled={isGenerating}>
        <span className="generate-btn__emoji">✨</span>
        Hikayemi Oluştur!
        <span className="generate-btn__emoji">📚</span>
      </button>

      {isGenerating && <LoadingAnimation progress={progress} status={status} />}
    </div>
  )
}

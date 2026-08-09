import { useEffect, useState } from 'react'
import { BackgroundDecorations } from './components/BackgroundDecorations'
import { Navbar } from './components/Navbar'
import { Footer } from './components/Footer'
import { HomePage } from './pages/HomePage'
import { CreateStoryPage } from './pages/CreateStoryPage'
import { AudioStoriesPage } from './pages/AudioStoriesPage'
import { ColoringPagesPage } from './pages/ColoringPagesPage'
import { HeroesPage } from './pages/HeroesPage'
import { ActivitiesPage } from './pages/ActivitiesPage'
import { RhymesPage } from './pages/RhymesPage'
import { ParentsPage } from './pages/ParentsPage'
import { CertificatesPage } from './pages/CertificatesPage'
import type { PageId } from './types/nav'

function readHash(): PageId {
  const hash = window.location.hash.replace('#', '') as PageId
  const valid: PageId[] = [
    'home', 'create', 'audio', 'coloring', 'heroes', 'activities', 'rhymes', 'parents', 'certificates',
  ]
  return valid.includes(hash) ? hash : 'home'
}

export default function App() {
  const [page, setPage] = useState<PageId>(readHash)

  useEffect(() => {
    const onHash = () => setPage(readHash())
    window.addEventListener('hashchange', onHash)
    return () => window.removeEventListener('hashchange', onHash)
  }, [])

  const navigate = (next: PageId) => {
    window.location.hash = next === 'home' ? '' : next
    setPage(next)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="app">
      <BackgroundDecorations />
      <Navbar current={page} onNavigate={navigate} />
      <main className="main">
        {page === 'home' && <HomePage onNavigate={navigate} />}
        {page === 'create' && <CreateStoryPage />}
        {page === 'audio' && <AudioStoriesPage />}
        {page === 'coloring' && <ColoringPagesPage />}
        {page === 'heroes' && <HeroesPage onNavigate={navigate} />}
        {page === 'activities' && <ActivitiesPage />}
        {page === 'rhymes' && <RhymesPage />}
        {page === 'parents' && <ParentsPage />}
        {page === 'certificates' && <CertificatesPage />}
      </main>
      <Footer />
    </div>
  )
}

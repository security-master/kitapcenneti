import { useEffect, useState } from 'react'
import { BackgroundDecorations } from './components/BackgroundDecorations'
import { Navbar } from './components/Navbar'
import { Footer } from './components/Footer'
import { CookieBanner } from './components/CookieBanner'
import { HomePage } from './pages/HomePage'
import { CreateStoryPage } from './pages/CreateStoryPage'
import { AudioStoriesPage } from './pages/AudioStoriesPage'
import { ColoringPagesPage } from './pages/ColoringPagesPage'
import { HeroesPage } from './pages/HeroesPage'
import { ActivitiesPage } from './pages/ActivitiesPage'
import { RhymesPage } from './pages/RhymesPage'
import { ParentsPage } from './pages/ParentsPage'
import { CertificatesPage } from './pages/CertificatesPage'
import { QuestsPage } from './pages/QuestsPage'
import { BlogPage } from './pages/BlogPage'
import { StemPage } from './pages/StemPage'
import { FeelingsPage } from './pages/FeelingsPage'
import { PrintablesPage } from './pages/PrintablesPage'
import { AboutPage, ContactPage, PrivacyPage, TermsPage } from './pages/LegalPages'
import { ALL_PAGES, type PageId } from './types/nav'
import { AdSlot } from './components/AdSlot'

function readHash(): PageId {
  const hash = window.location.hash.replace('#', '') as PageId
  return ALL_PAGES.includes(hash) ? hash : 'home'
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

  const showAdRail = ['blog', 'parents', 'about', 'home', 'quests'].includes(page)

  return (
    <div className="app">
      <BackgroundDecorations />
      <Navbar current={page} onNavigate={navigate} />
      <main className="main">
        {page === 'home' && <HomePage onNavigate={navigate} />}
        {page === 'quests' && <QuestsPage onNavigate={navigate} />}
        {page === 'create' && <CreateStoryPage />}
        {page === 'audio' && <AudioStoriesPage />}
        {page === 'coloring' && <ColoringPagesPage />}
        {page === 'heroes' && <HeroesPage onNavigate={navigate} />}
        {page === 'activities' && <ActivitiesPage />}
        {page === 'rhymes' && <RhymesPage />}
        {page === 'stem' && <StemPage />}
        {page === 'feelings' && <FeelingsPage />}
        {page === 'blog' && <BlogPage />}
        {page === 'printables' && <PrintablesPage onNavigate={navigate} />}
        {page === 'certificates' && <CertificatesPage />}
        {page === 'parents' && <ParentsPage />}
        {page === 'about' && <AboutPage />}
        {page === 'privacy' && <PrivacyPage />}
        {page === 'terms' && <TermsPage />}
        {page === 'contact' && <ContactPage />}
        {showAdRail && <AdSlot slot="bottom" className="ad-slot--footer-rail" />}
      </main>
      <Footer onNavigate={navigate} />
      <CookieBanner />
    </div>
  )
}

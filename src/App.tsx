import { useEffect, useState } from 'react'
import { BackgroundDecorations } from './components/BackgroundDecorations'
import { PortalShell } from './components/PortalShell'
import { Footer } from './components/Footer'
import { CookieBanner } from './components/CookieBanner'
import { PortalHomePage } from './pages/PortalHomePage'
import { CreateStoryPage } from './pages/CreateStoryPage'
import { AudioStoriesPage } from './pages/AudioStoriesPage'
import { ColoringPagesPage } from './pages/ColoringPagesPage'
import { HeroesPage } from './pages/HeroesPage'
import { ActivitiesPage } from './pages/ActivitiesPage'
import { FunPage } from './pages/FunPage'
import { MascotBuddy } from './components/MascotBuddy'
import { RhymesPage } from './pages/RhymesPage'
import { ParentsPage } from './pages/ParentsPage'
import { CertificatesPage } from './pages/CertificatesPage'
import { QuestsPage } from './pages/QuestsPage'
import { BlogPage } from './pages/BlogPage'
import { StemPage } from './pages/StemPage'
import { FeelingsPage } from './pages/FeelingsPage'
import { PrintablesPage } from './pages/PrintablesPage'
import { LibraryPage } from './pages/LibraryPage'
import { PathsPage } from './pages/PathsPage'
import { JournalPage } from './pages/JournalPage'
import { CalendarPage } from './pages/CalendarPage'
import { TeachersPage } from './pages/TeachersPage'
import { ProfilePage } from './pages/ProfilePage'
import { DiscoverPage } from './pages/DiscoverPage'
import { WorldPage } from './pages/WorldPage'
import { ShopPage } from './pages/ShopPage'
import { SearchPage } from './pages/SearchPage'
import { AboutPage, ContactPage, PrivacyPage, TermsPage } from './pages/LegalPages'
import { ALL_PAGES, type PageId } from './types/nav'
import { AdSlot } from './components/AdSlot'
import { ToastHost } from './components/Toast'
import { parseContentHash } from './utils/share'

function readHash(): PageId {
  const { page } = parseContentHash(window.location.hash)
  if (!page || page === 'home') return 'portal'
  return ALL_PAGES.includes(page as PageId) ? (page as PageId) : 'portal'
}

export default function App() {
  const [page, setPage] = useState<PageId>(readHash)

  useEffect(() => {
    const onHash = () => setPage(readHash())
    window.addEventListener('hashchange', onHash)
    return () => window.removeEventListener('hashchange', onHash)
  }, [])

  const navigate = (next: PageId, itemId?: string) => {
    const target = next === 'home' ? 'portal' : next
    window.location.hash = itemId
      ? `${target}/${encodeURIComponent(itemId)}`
      : target === 'portal'
        ? 'portal'
        : target
    setPage(target)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const showAdRail = ['blog', 'parents', 'about', 'portal', 'quests', 'teachers', 'paths'].includes(page)

  return (
    <div className="app app--portal">
      <BackgroundDecorations />
      <PortalShell current={page} onNavigate={navigate}>
        <main className="main main--portal">
          {(page === 'portal' || page === 'home') && <PortalHomePage onNavigate={navigate} />}
          {page === 'quests' && <QuestsPage onNavigate={navigate} />}
          {page === 'create' && <CreateStoryPage />}
          {page === 'audio' && <AudioStoriesPage />}
          {page === 'coloring' && <ColoringPagesPage />}
          {page === 'heroes' && <HeroesPage onNavigate={navigate} />}
          {page === 'activities' && <ActivitiesPage />}
          {page === 'fun' && <FunPage onNavigate={navigate} />}
          {page === 'rhymes' && <RhymesPage />}
          {page === 'stem' && <StemPage />}
          {page === 'feelings' && <FeelingsPage />}
          {page === 'blog' && <BlogPage />}
          {page === 'printables' && <PrintablesPage onNavigate={navigate} />}
          {page === 'certificates' && <CertificatesPage />}
          {page === 'parents' && <ParentsPage />}
          {page === 'library' && <LibraryPage onNavigate={navigate} />}
          {page === 'paths' && <PathsPage onNavigate={navigate} />}
          {page === 'journal' && <JournalPage />}
          {page === 'calendar' && <CalendarPage onNavigate={navigate} />}
          {page === 'teachers' && <TeachersPage />}
          {page === 'profile' && <ProfilePage onNavigate={navigate} />}
          {page === 'discover' && <DiscoverPage onNavigate={navigate} />}
          {page === 'world' && <WorldPage onNavigate={navigate} />}
          {page === 'shop' && <ShopPage onNavigate={navigate} />}
          {page === 'search' && <SearchPage onNavigate={navigate} />}
          {page === 'about' && <AboutPage />}
          {page === 'privacy' && <PrivacyPage />}
          {page === 'terms' && <TermsPage />}
          {page === 'contact' && <ContactPage />}
          {showAdRail && <AdSlot slot="bottom" className="ad-slot--footer-rail" />}
        </main>
      </PortalShell>
      <Footer onNavigate={navigate} />
      <CookieBanner />
      <ToastHost />
      <MascotBuddy onNavigate={navigate} />
    </div>
  )
}

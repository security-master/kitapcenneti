import type { PageId } from '../types/nav'
import { PRINTABLES } from '../data/printables'
import { AdSlot } from '../components/AdSlot'

interface PrintablesPageProps {
  onNavigate: (page: PageId) => void
}

export function PrintablesPage({ onNavigate }: PrintablesPageProps) {
  return (
    <div className="page">
      <header className="page-header">
        <h1>🖨️ Çıktılar & Çalışma Kağıtları</h1>
        <p>Yazdırılabilir içeriklere tek yerden ulaş: boyama, sertifika, STEM, duygu kartları.</p>
      </header>

      <div className="printables-grid">
        {PRINTABLES.map((p) => (
          <button key={p.id} className="panel printable-card" onClick={() => onNavigate(p.link)}>
            <span>{p.emoji}</span>
            <h3>{p.title}</h3>
            <p>{p.description}</p>
            <small>{p.category} · {p.age}</small>
          </button>
        ))}
      </div>

      <AdSlot slot="bottom" />
    </div>
  )
}

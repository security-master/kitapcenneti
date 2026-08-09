import { useMemo, useState } from 'react'
import { COLORING_CATEGORIES, COLORING_PAGES, getColoringSvg } from '../data/coloringPages'
import { downloadSvgAsPdf } from '../utils/pdf'

export function ColoringPagesPage() {
  const [category, setCategory] = useState<(typeof COLORING_CATEGORIES)[number]>('Tümü')
  const [selected, setSelected] = useState(COLORING_PAGES[0].id)
  const [busy, setBusy] = useState(false)

  const filtered = useMemo(
    () => (category === 'Tümü' ? COLORING_PAGES : COLORING_PAGES.filter((p) => p.category === category)),
    [category],
  )

  const page = COLORING_PAGES.find((p) => p.id === selected) || filtered[0] || COLORING_PAGES[0]
  const svg = getColoringSvg(page.id)

  const handleDownload = async () => {
    setBusy(true)
    try {
      await downloadSvgAsPdf(svg, `boyama-${page.id}`, page.title)
    } catch {
      alert('PDF oluşturulamadı. Tekrar dene.')
    } finally {
      setBusy(false)
    }
  }

  const handlePrint = () => {
    const win = window.open('', '_blank', 'noopener,noreferrer')
    if (!win) return
    win.document.write(`<!doctype html><html><head><meta charset="utf-8"/><title>${page.title}</title>
      <style>body{margin:0;display:flex;flex-direction:column;align-items:center;font-family:Nunito,sans-serif}
      h1{margin:16px} svg{width:90vw;max-width:640px}</style></head>
      <body><h1>${page.title}</h1>${svg}<script>window.onload=()=>window.print()</script></body></html>`)
    win.document.close()
  }

  return (
    <div className="page">
      <header className="page-header">
        <h1>🖍️ Boyama Sayfaları</h1>
        <p>{COLORING_PAGES.length} telifsiz sayfa · kategoriye göre filtrele, PDF indir veya yazdır.</p>
      </header>

      <div className="coloring-cats">
        {COLORING_CATEGORIES.map((cat) => (
          <button
            key={cat}
            className={`stem-chip ${category === cat ? 'is-active' : ''}`}
            onClick={() => {
              setCategory(cat)
              const first = cat === 'Tümü' ? COLORING_PAGES[0] : COLORING_PAGES.find((p) => p.category === cat)
              if (first) setSelected(first.id)
            }}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="coloring-layout">
        <div className="coloring-grid">
          {filtered.map((item) => (
            <button
              key={item.id}
              className={`coloring-card ${selected === item.id ? 'is-active' : ''}`}
              onClick={() => setSelected(item.id)}
            >
              <span>{item.emoji}</span>
              <strong>{item.title}</strong>
              <small>{item.category} · {item.age}</small>
            </button>
          ))}
        </div>

        <div className="panel coloring-preview">
          <h2>{page.title}</h2>
          <p>{page.description}</p>
          <div className="coloring-preview__svg" dangerouslySetInnerHTML={{ __html: svg }} />
          <div className="btn-row">
            <button className="btn btn--primary" onClick={handleDownload} disabled={busy}>
              {busy ? 'Hazırlanıyor...' : '⬇️ PDF İndir'}
            </button>
            <button className="btn btn--ghost" onClick={handlePrint}>🖨️ Yazdır</button>
          </div>
        </div>
      </div>
    </div>
  )
}

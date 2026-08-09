import { useState } from 'react'
import { COLORING_PAGES, getColoringSvg } from '../data/coloringPages'
import { downloadSvgAsPdf } from '../utils/pdf'

export function ColoringPagesPage() {
  const [selected, setSelected] = useState(COLORING_PAGES[0].id)
  const [busy, setBusy] = useState(false)
  const page = COLORING_PAGES.find((p) => p.id === selected) || COLORING_PAGES[0]
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
    win.document.write(`<!doctype html><html><head><title>${page.title}</title>
      <style>body{margin:0;display:flex;flex-direction:column;align-items:center;font-family:sans-serif}
      h1{margin:16px} svg{width:90vw;max-width:600px}</style></head>
      <body><h1>${page.title}</h1>${svg}<script>window.onload=()=>window.print()</script></body></html>`)
    win.document.close()
  }

  return (
    <div className="page">
      <header className="page-header">
        <h1>🖍️ Boyama Sayfaları</h1>
        <p>Telifsiz PDF boyama sayfaları. Yazdır, boya, buzdolabına as!</p>
      </header>

      <div className="coloring-layout">
        <div className="coloring-grid">
          {COLORING_PAGES.map((item) => (
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
          <div
            className="coloring-preview__svg"
            dangerouslySetInnerHTML={{ __html: svg }}
          />
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

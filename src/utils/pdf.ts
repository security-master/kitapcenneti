import { jsPDF } from 'jspdf'

export async function downloadSvgAsPdf(svgMarkup: string, filename: string, title: string) {
  const svgBlob = new Blob([svgMarkup], { type: 'image/svg+xml;charset=utf-8' })
  const url = URL.createObjectURL(svgBlob)

  const img = new Image()
  img.src = url

  await new Promise<void>((resolve, reject) => {
    img.onload = () => resolve()
    img.onerror = () => reject(new Error('SVG yüklenemedi'))
  })

  const canvas = document.createElement('canvas')
  canvas.width = 800
  canvas.height = 800
  const ctx = canvas.getContext('2d')
  if (!ctx) throw new Error('Canvas desteklenmiyor')
  ctx.fillStyle = '#ffffff'
  ctx.fillRect(0, 0, canvas.width, canvas.height)
  ctx.drawImage(img, 0, 0, 800, 800)
  URL.revokeObjectURL(url)

  const pdf = new jsPDF({ orientation: 'portrait', unit: 'mm', format: 'a4' })
  pdf.setFontSize(16)
  pdf.text(title, 105, 18, { align: 'center' })
  pdf.setFontSize(10)
  pdf.setTextColor(120)
  pdf.text('Kitap Cenneti — Telifsiz boyama sayfası · Yazdır & boya', 105, 26, { align: 'center' })
  const imgData = canvas.toDataURL('image/png')
  pdf.addImage(imgData, 'PNG', 25, 35, 160, 160)
  pdf.setTextColor(80)
  pdf.setFontSize(9)
  pdf.text('Evde eğitim ve eğlence için serbestçe kullanılabilir.', 105, 210, { align: 'center' })
  pdf.save(`${filename}.pdf`)
}

export function downloadCertificatePdf(childName: string, achievement: string) {
  const pdf = new jsPDF({ orientation: 'landscape', unit: 'mm', format: 'a4' })
  const w = pdf.internal.pageSize.getWidth()
  const h = pdf.internal.pageSize.getHeight()

  pdf.setDrawColor(255, 107, 157)
  pdf.setLineWidth(2)
  pdf.rect(10, 10, w - 20, h - 20)
  pdf.setLineWidth(0.5)
  pdf.setDrawColor(166, 108, 255)
  pdf.rect(14, 14, w - 28, h - 28)

  pdf.setFontSize(28)
  pdf.setTextColor(255, 107, 157)
  pdf.text('BAŞARI SERTİFİKASI', w / 2, 40, { align: 'center' })

  pdf.setFontSize(14)
  pdf.setTextColor(45, 52, 54)
  pdf.text('Kitap Cenneti gururla sunar', w / 2, 55, { align: 'center' })

  pdf.setFontSize(22)
  pdf.setTextColor(102, 126, 234)
  pdf.text(childName || 'Küçük Kahraman', w / 2, 85, { align: 'center' })

  pdf.setFontSize(14)
  pdf.setTextColor(45, 52, 54)
  pdf.text('aşağıdaki başarıyı kazandı:', w / 2, 100, { align: 'center' })

  pdf.setFontSize(16)
  pdf.setTextColor(166, 108, 255)
  const lines = pdf.splitTextToSize(achievement, w - 60)
  pdf.text(lines, w / 2, 118, { align: 'center' })

  pdf.setFontSize(11)
  pdf.setTextColor(100)
  const date = new Date().toLocaleDateString('tr-TR')
  pdf.text(`Tarih: ${date}`, w / 2, h - 30, { align: 'center' })
  pdf.text('📚 Okumaya, hayal etmeye ve paylaşmaya devam!', w / 2, h - 20, { align: 'center' })

  pdf.save(`sertifika-${(childName || 'kahraman').replace(/\s+/g, '_')}.pdf`)
}

export function printHtml(title: string, bodyHtml: string) {
  const win = window.open('', '_blank', 'noopener,noreferrer,width=800,height=900')
  if (!win) {
    alert('Açılır pencere engellendi. Lütfen tarayıcıda izin ver.')
    return
  }
  win.document.write(`<!doctype html><html><head><title>${title}</title>
    <style>
      body{font-family:Georgia,serif;padding:40px;color:#222}
      h1{text-align:center}
      .meta{text-align:center;color:#666;margin-bottom:24px}
      @media print{body{padding:0}}
    </style></head><body>
    <h1>${title}</h1>
    <div class="meta">Kitap Cenneti</div>
    ${bodyHtml}
    <script>window.onload=()=>{window.print()}</script>
    </body></html>`)
  win.document.close()
}

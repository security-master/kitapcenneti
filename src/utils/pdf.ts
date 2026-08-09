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
  canvas.width = 1000
  canvas.height = 1100
  const ctx = canvas.getContext('2d')
  if (!ctx) throw new Error('Canvas desteklenmiyor')
  ctx.fillStyle = '#ffffff'
  ctx.fillRect(0, 0, canvas.width, canvas.height)
  ctx.fillStyle = '#2d3436'
  ctx.font = '700 36px Nunito, Fredoka, Arial, sans-serif'
  ctx.textAlign = 'center'
  ctx.fillText(title, 500, 50)
  ctx.fillStyle = '#888'
  ctx.font = '600 20px Nunito, Arial, sans-serif'
  ctx.fillText('Kitap Cenneti — Telifsiz boyama sayfası', 500, 85)
  ctx.drawImage(img, 100, 110, 800, 800)
  ctx.fillStyle = '#666'
  ctx.font = '500 18px Nunito, Arial, sans-serif'
  ctx.fillText('Evde eğitim ve eğlence için serbestçe kullanılabilir.', 500, 960)
  URL.revokeObjectURL(url)

  const pdf = new jsPDF({ orientation: 'portrait', unit: 'mm', format: 'a4' })
  pdf.addImage(canvas.toDataURL('image/png'), 'PNG', 10, 10, 190, 209)
  pdf.save(`${filename}.pdf`)
}

/** Türkçe karakterler için canvas üzerinden çizim (jsPDF yerleşik fontları TR desteklemez) */
export function downloadCertificatePdf(childName: string, achievement: string) {
  const width = 1600
  const height = 1131
  const canvas = document.createElement('canvas')
  canvas.width = width
  canvas.height = height
  const ctx = canvas.getContext('2d')
  if (!ctx) {
    alert('Sertifika oluşturulamadı.')
    return
  }

  // background
  const grad = ctx.createLinearGradient(0, 0, width, height)
  grad.addColorStop(0, '#fff7fb')
  grad.addColorStop(1, '#f3f0ff')
  ctx.fillStyle = grad
  ctx.fillRect(0, 0, width, height)

  // borders
  ctx.strokeStyle = '#ff6b9d'
  ctx.lineWidth = 14
  ctx.strokeRect(40, 40, width - 80, height - 80)
  ctx.strokeStyle = '#a66cff'
  ctx.lineWidth = 4
  ctx.strokeRect(60, 60, width - 120, height - 120)

  ctx.textAlign = 'center'
  ctx.fillStyle = '#ff6b9d'
  ctx.font = '800 72px Fredoka, Nunito, Arial, sans-serif'
  ctx.fillText('BAŞARI SERTİFİKASI', width / 2, 220)

  ctx.fillStyle = '#2d3436'
  ctx.font = '600 36px Nunito, Arial, sans-serif'
  ctx.fillText('Kitap Cenneti gururla sunar', width / 2, 300)

  ctx.fillStyle = '#667eea'
  ctx.font = '800 64px Fredoka, Nunito, Arial, sans-serif'
  ctx.fillText(childName || 'Küçük Kahraman', width / 2, 430)

  ctx.fillStyle = '#2d3436'
  ctx.font = '600 34px Nunito, Arial, sans-serif'
  ctx.fillText('aşağıdaki başarıyı kazandı:', width / 2, 520)

  ctx.fillStyle = '#a66cff'
  ctx.font = '700 40px Nunito, Arial, sans-serif'
  wrapText(ctx, achievement, width / 2, 620, width - 280, 52)

  ctx.fillStyle = '#636e72'
  ctx.font = '600 28px Nunito, Arial, sans-serif'
  const date = new Date().toLocaleDateString('tr-TR')
  ctx.fillText(`Tarih: ${date}`, width / 2, 820)
  ctx.fillText('Okumaya, hayal etmeye ve paylaşmaya devam!', width / 2, 880)
  ctx.font = '700 26px Nunito, Arial, sans-serif'
  ctx.fillStyle = '#ff6b9d'
  ctx.fillText('📚 Kitap Cenneti', width / 2, 960)

  const pdf = new jsPDF({ orientation: 'landscape', unit: 'mm', format: 'a4' })
  const w = pdf.internal.pageSize.getWidth()
  const h = pdf.internal.pageSize.getHeight()
  pdf.addImage(canvas.toDataURL('image/png'), 'PNG', 0, 0, w, h)
  pdf.save(`sertifika-${(childName || 'kahraman').replace(/\s+/g, '_')}.pdf`)
}

function wrapText(
  ctx: CanvasRenderingContext2D,
  text: string,
  x: number,
  y: number,
  maxWidth: number,
  lineHeight: number,
) {
  const words = text.split(' ')
  let line = ''
  let yy = y
  for (const word of words) {
    const test = line ? `${line} ${word}` : word
    if (ctx.measureText(test).width > maxWidth && line) {
      ctx.fillText(line, x, yy)
      line = word
      yy += lineHeight
    } else {
      line = test
    }
  }
  if (line) ctx.fillText(line, x, yy)
}

export function printHtml(title: string, bodyHtml: string) {
  const win = window.open('', '_blank', 'noopener,noreferrer,width=800,height=900')
  if (!win) {
    alert('Açılır pencere engellendi. Lütfen tarayıcıda izin ver.')
    return
  }
  win.document.write(`<!doctype html><html><head><meta charset="utf-8"/><title>${title}</title>
    <style>
      body{font-family:Nunito,Georgia,serif;padding:40px;color:#222}
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

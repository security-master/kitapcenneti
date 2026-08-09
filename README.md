# Kitap Cenneti 📚

Çocuklar ve aileler için kapsamlı içerik platformu.

## Canlı yayın

### GitHub Pages (önerilen — ücretsiz)
- URL: https://security-master.github.io/kitapcenneti/
- Her `main` push’ında Actions otomatik deploy eder
- Build: `BASE_PATH=/kitapcenneti/`

### Cloudflare Pages (Functions ile görsel API)
1. [Cloudflare Dashboard](https://dash.cloudflare.com) → Workers & Pages → Create
2. GitHub `kitapcenneti` reposunu bağla
3. Build command: `npm run build:cf`
4. Output: `dist`
5. (İsteğe bağlı) Environment variable: `OPENAI_API_KEY` — AI hikaye için

Functions: `functions/api/generate-image.ts` ve `generate-story.ts`

## Bölümler

- ✨ AI Hikaye · 🎧 Sesli Masallar · 🖍️ Boyama PDF
- 🦸 Telifsiz kahramanlar · 🎮 Oyunlar · 🎵 Tekerlemeler
- 🏆 Sertifika · 👨‍👩‍👧 Aile Köşesi

## Geliştirme

```bash
npm install
npm run dev
npm run build:gh   # GitHub Pages
npm run build:cf   # Cloudflare Pages
```

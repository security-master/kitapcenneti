# Kitap Cenneti

Çocuklar için görselli masal kitabı üretici.

## Özellikler

- **Prompt kütüphanesi** — hazır masal fikirleri
- **Kendi promptun** — serbest metinle masal üret
- **Beni Masalda Gezdir** — isim + isteğe bağlı fotoğrafla kahraman ol
- **Çoklu ücretsiz model** — Gemini, GPT mini, Claude Haiku (Netlify AI Gateway) + Pollinations görsel

## Teknoloji

- React + Vite + TypeScript
- Netlify Functions
- Netlify AI Gateway (OpenAI / Gemini SDK)
- Netlify Blobs (üretilen görseller)
- Pollinations.ai (ücretsiz görsel yedek)

## Geliştirme

```bash
npm install
npm run dev
```

## Deploy

```bash
npm run build
npx netlify deploy --prod
```

Netlify sitesinde **AI Gateway** özelliğini açın. İlk production deploy sonrası gateway aktif olur.

## Sayfalar

| Yol | Açıklama |
|---|---|
| `/` | Ana sayfa |
| `/kutuphane` | Prompt kütüphanesi |
| `/olustur` | Özel prompt ile masal |
| `/beni-masalda` | Kişiselleştirilmiş masal |

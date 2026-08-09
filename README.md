# Kitap Cenneti 📚

Çocuklar ve aileler için kapsamlı içerik platformu.

## Bölümler

- ✨ **AI Hikaye Kitabı** — isim/fotoğraf ile kişiselleştirilmiş resimli masal
- 🎧 **Sesli Masallar** — tarayıcı TTS ile Türkçe dinleme + yazdırma
- 🖍️ **Boyama Sayfaları** — telifsiz SVG/PDF indirme ve yazdırma
- 🦸 **Özgün Kahramanlar** — telifsiz karakterler (Nova, Tiko, Luna…)
- 🎮 **Eğitici Oyunlar** — hafıza kartları + mini quiz
- 🎵 **Şarkı & Tekerleme** — sesli okuma
- 🏆 **Başarı Sertifikası** — PDF ödül belgesi
- 👨‍👩‍👧 **Aile Köşesi** — yaş rehberi, ekran süresi, güvenlik

## Teknoloji

- React + TypeScript + Vite
- Netlify Functions (hikaye + görsel)
- Pollinations AI (ücretsiz görsel)
- jsPDF (boyama & sertifika)
- Web Speech API (sesli okuma)

## Geliştirme

```bash
npm install
npm run dev
npm run netlify:dev
```

## Deploy

`netlify.toml` hazır. GitHub `main` branch’ini Netlify’e bağlayın veya:

```bash
npx netlify deploy --prod
```

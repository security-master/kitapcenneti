# Kitap Cenneti 📚✨

Çocuklar için sihirli **görsel hikaye kitabı** oluşturucu uygulama. Hayal gücünü kullanarak renkli, illüstrasyonlu masallar yarat!

## Özellikler

- 🎨 **9 Kategori** — Büyülü Maceralar, Hayvan Dostları, Uzay, Deniz Altı, Peri Masalları, Dinozorlar, Süper Kahramanlar ve daha fazlası
- 🦸 **Beni Masalda Gezdir** — İsmini yaz veya fotoğrafını yükle, hikayenin kahramanı sen ol!
- 💡 **Hazır Prompt Kütüphanesi** — Her kategori için örnek hikaye fikirleri
- ✏️ **Özel Prompt** — Kendi hikaye fikrini yaz
- 🖼️ **7 Çizim Stili** — Sulu boya, çizgi film, Pixar 3D, anime, klasik masal, kil animasyon, pastel
- 🤖 **Çoklu AI Modeli** — GPT-4o Mini, GPT-4o, Claude Haiku
- 🆓 **Ücretsiz Görsel API** — Pollinations AI (varsayılan) + Netlify Gemini Gateway
- 👶 **Yaş Grupları** — 3-5, 6-8, 9-12 yaş için uyarlanmış içerik
- 📖 **Sayfa Sayısı** — 4, 6 veya 8 sayfalık hikayeler

## Teknolojiler

- **Frontend:** React + TypeScript + Vite + Framer Motion
- **Backend:** Netlify Functions
- **AI:** Netlify AI Gateway (OpenAI, Anthropic, Gemini)
- **Görsel:** Pollinations AI (ücretsiz) + Gemini Imagen
- **Deploy:** Netlify

## Kurulum

```bash
npm install
npm run dev
```

## Netlify'e Deploy

1. Bu repoyu GitHub'a push edin
2. [Netlify](https://app.netlify.com) üzerinden repoyu bağlayın
3. Build ayarları otomatik algılanır (`netlify.toml`)
4. Netlify AI Gateway otomatik olarak aktif olur

```bash
# Manuel deploy
npx netlify deploy --prod
```

## Geliştirme

```bash
# Frontend dev server
npm run dev

# Netlify Functions ile local dev
npx netlify dev
```

## Lisans

MIT

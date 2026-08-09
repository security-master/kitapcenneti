/**
 * Appends high-volume Turkish kids/family content to data modules.
 * Idempotent-ish: skips ids already present.
 */
import fs from 'node:fs'
import path from 'node:path'

const root = path.resolve('src/data')

function extractIds(src) {
  return new Set([...src.matchAll(/id:\s*'([^']+)'/g)].map((m) => m[1]))
}

function insertBeforeClosing(src, arrayName, chunk) {
  // Find `export const ARRAY = [` ... last `]` before next export or EOF related to that array — append before final `]\n` of file section
  const marker = `export const ${arrayName}`
  const start = src.indexOf(marker)
  if (start < 0) throw new Error(`Missing ${arrayName}`)
  // find matching closing of the array: last `]\n` or `]\n\n` after start before next export const at same level — use last `]\n` in file for single-array files, else careful
  const after = src.slice(start)
  const closeRel = after.lastIndexOf('\n]')
  if (closeRel < 0) throw new Error(`No close for ${arrayName}`)
  const abs = start + closeRel
  return src.slice(0, abs) + ',\n' + chunk + src.slice(abs)
}

function ensureChunk(file, arrayName, items, render) {
  let src = fs.readFileSync(path.join(root, file), 'utf8')
  const ids = extractIds(src)
  const fresh = items.filter((it) => !ids.has(it.id))
  if (!fresh.length) {
    console.log(file, arrayName, 'no new')
    return
  }
  const chunk = fresh.map(render).join(',\n')
  src = insertBeforeClosing(src, arrayName, chunk)
  fs.writeFileSync(path.join(root, file), src)
  console.log(file, arrayName, '+', fresh.length)
}

// --- generators ---
const themes = ['Uyku', 'Dostluk', 'Doğa', 'Uzay', 'Okul', 'Duygu', 'Macera', 'Hayvan', 'Deniz', 'Mevsim', 'Cesaret', 'Paylaşım']
const ages = ['3-5', '4-7', '5-8', '6-9', '7-10']
const emojis = ['⭐', '🦊', '🌙', '🌊', '🚀', '🌿', '🎈', '🐻', '🦋', '🌈', '🐢', '🦄', '🐠', '🌻', '🏰', '🧠', '💛', '🎵']

const audioItems = []
for (let i = 1; i <= 70; i++) {
  const theme = themes[i % themes.length]
  const emoji = emojis[i % emojis.length]
  const age = ages[i % ages.length]
  audioItems.push({
    id: `masal-portal-${i}`,
    title: `${theme} Masalı ${i}`,
    emoji,
    age,
    duration: `${3 + (i % 4)} dk`,
    theme,
    summary: `${theme} temalı kısa bir masal — dinle, hisset, paylaş.`,
    text: `Bir varmış bir yokmuş, ${theme.toLowerCase()} dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş ve gökyüzü biraz daha parlak görünmüş.
Sen de derin bir nefes al… bu masalın sıcaklığını yanında tut.`,
  })
}

ensureChunk('audioStories.ts', 'AUDIO_STORIES', audioItems, (s) => `  {
    id: '${s.id}',
    title: '${s.title.replace(/'/g, "\\'")}',
    emoji: '${s.emoji}',
    age: '${s.age}',
    duration: '${s.duration}',
    theme: '${s.theme}',
    summary: '${s.summary.replace(/'/g, "\\'")}',
    text: \`${s.text}\`,
  }`)

const blogTags = [['Rutin'], ['Okuma'], ['Duygu'], ['Dijital'], ['Okul'], ['Oyun'], ['Uyku'], ['STEM']]
const blogItems = []
for (let i = 1; i <= 45; i++) {
  const tags = blogTags[i % blogTags.length]
  blogItems.push({
    id: `blog-portal-${i}`,
    title: `Aile rehberi ${i}: ${tags[0]} için pratik adımlar`,
    emoji: emojis[i % emojis.length],
    minutes: 4 + (i % 5),
    tags,
    summary: `${tags[0]} konusunda ebeveynler için kısa, uygulanabilir bir rehber.`,
    body: [
      `${tags[0]} alanında mükemmel olmak zorunda değilsiniz; küçük ve tutarlı adımlar yeter.`,
      'Çocuğunuzla birlikte karar vermek, kuralları daha kalıcı hale getirir.',
      'Kitap Cenneti’ndeki masal, oyun ve STEM içerikleri bu rutine eşlik edebilir.',
      'Haftada bir “ne işe yaradı?” konuşması yapmak ilerlemeyi görünür kılar.',
      'Unutmayın: sakin bir ebeveyn, çocuğun sinir sistemine de sakinlik bulaştırır.',
    ],
  })
}

ensureChunk('blog.ts', 'BLOG_POSTS', blogItems, (b) => `  {
    id: '${b.id}',
    title: '${b.title.replace(/'/g, "\\'")}',
    emoji: '${b.emoji}',
    minutes: ${b.minutes},
    tags: ${JSON.stringify(b.tags)},
    summary: '${b.summary.replace(/'/g, "\\'")}',
    body: ${JSON.stringify(b.body)},
  }`)

const stemItems = []
for (let i = 1; i <= 35; i++) {
  stemItems.push({
    id: `stem-portal-${i}`,
    title: `Mini deney ${i}: Merak istasyonu`,
    emoji: ['🔬', '⚗️', '🧪', '🌡️', '🧲'][i % 5],
    age: `${4 + (i % 5)}+`,
    minutes: 8 + (i % 10),
    materials: ['Su', 'Kâğıt', 'Kalem', 'Yetişkin yardımı'],
    steps: [
      'Malzemeleri masaya diz.',
      'Bir tahmin yaz: Ne olacak?',
      'Deneyi dikkatle uygula.',
      'Sonucu gözlemle ve bir cümleyle anlat.',
    ],
    why: 'Gözlem + tahmin + deney, bilimsel düşünmenin temelidir.',
  })
}

ensureChunk('stem.ts', 'STEM_CARDS', stemItems, (s) => `  {
    id: '${s.id}',
    title: '${s.title}',
    emoji: '${s.emoji}',
    age: '${s.age}',
    minutes: ${s.minutes},
    materials: ${JSON.stringify(s.materials)},
    steps: ${JSON.stringify(s.steps)},
    why: '${s.why}',
  }`)

const heroNames = [
  'Defne Işık', 'Alp Rüzgâr', 'Ece Yıldız', 'Kaan Dalga', 'Elif Tohum', 'Mert Pusula',
  'Ada Bulut', 'Deniz Kıvılcım', 'Lara Orman', 'Emir Nehir', 'Su Fener', 'Can Gökyüzü',
  'Nina Taş', 'Baran Umut', 'Zeynep Melodi', 'Ozan Kıyı', 'Melis Çiçek', 'Yusuf Pusula',
  'İpek Gökkuşağı', 'Berk Ay', 'Selin Kum', 'Arda Yaprak',
]
const heroItems = heroNames.map((name, i) => ({
  id: `hero-portal-${i + 1}`,
  name,
  emoji: emojis[i % emojis.length],
  color: `linear-gradient(135deg, hsl(${(i * 37) % 360} 70% 55%), hsl(${(i * 37 + 40) % 360} 65% 45%))`,
  power: ['Işık izi', 'Nazik rüzgâr', 'Cesaret fısıltısı', 'Doğa dili', 'Merak pusulası'][i % 5],
  age: `${4 + (i % 6)}+`,
  motto: 'Birlikte daha güçlüyüz!',
  bio: `${name}, Kitap Cenneti’ne özgü telifsiz bir kahramandır. Yardımseverlik ve merak onun süper gücüdür.`,
  adventure: `Bir gün küçük bir sorun büyümüş; ${name} dostlarıyla konuşarak çözüm bulmuş ve herkes güvende kalmış.`,
  tip: 'Bu kahramanı birlikte çizin veya AI hikayeye ekleyin.',
}))

ensureChunk('heroes.ts', 'HEROES', heroItems, (h) => `  {
    id: '${h.id}',
    name: '${h.name}',
    emoji: '${h.emoji}',
    color: '${h.color}',
    power: '${h.power}',
    age: '${h.age}',
    motto: '${h.motto}',
    bio: '${h.bio.replace(/'/g, "\\'")}',
    adventure: '${h.adventure.replace(/'/g, "\\'")}',
    tip: '${h.tip}',
  }`)

const rhymeItems = []
for (let i = 1; i <= 30; i++) {
  rhymeItems.push({
    id: `rhyme-portal-${i}`,
    title: `Neşeli Tekerleme ${i}`,
    emoji: ['🎵', '🎶', '🎤', '🥁'][i % 4],
    lyrics: `El çırp el çiz, ${i} kez sayalım,\nGülümse biraz, birlikte oynayalım.\nYavaşça nefes al, sonra söyle bakalım,\nBugün ne öğrendik, bir cümle kuralım.`,
  })
}

ensureChunk('rhymes.ts', 'RHYMES', rhymeItems, (r) => `  {
    id: '${r.id}',
    title: '${r.title}',
    emoji: '${r.emoji}',
    lyrics: \`${r.lyrics}\`,
  }`)

const teacherItems = []
for (let i = 1; i <= 25; i++) {
  const subject = ['Dil', 'STEM', 'Duygu', 'Sanat', 'Hareket', 'Okuma'][i % 6]
  teacherItems.push({
    id: `teach-portal-${i}`,
    title: `Sınıf etkinliği ${i}: ${subject} atölyesi`,
    emoji: emojis[i % emojis.length],
    summary: `${subject} becerisini güçlendiren 15–20 dakikalık hazır etkinlik.`,
    age: `${5 + (i % 4)}-${8 + (i % 4)}`,
    duration: `${12 + (i % 8)} dk`,
    tags: [subject.toLowerCase(), 'sınıf', 'hazır'],
    materials: ['Tahta', 'Kartlar', 'Kalem', 'Zamanlayıcı'],
    steps: [
      'Amacı tek cümleyle söyle.',
      'Örnek göster, sonra çiftlere bırak.',
      '2–3 öğrenci paylaşım yapsın.',
      'Kapanışta bir yıldız ödevi ver.',
    ],
    subject,
  })
}

ensureChunk('teachers.ts', 'TEACHER_RESOURCES', teacherItems, (t) => `  {
    id: '${t.id}',
    title: '${t.title}',
    emoji: '${t.emoji}',
    summary: '${t.summary}',
    age: '${t.age}',
    duration: '${t.duration}',
    tags: ${JSON.stringify(t.tags)},
    materials: ${JSON.stringify(t.materials)},
    steps: ${JSON.stringify(t.steps)},
    subject: '${t.subject}',
  }`)

const collectionItems = []
for (let i = 1; i <= 20; i++) {
  collectionItems.push({
    id: `col-portal-${i}`,
    title: `Küratör demeti ${i}`,
    emoji: emojis[i % emojis.length],
    description: `Hazır seçki ${i}: masal + oyun + duygu karışımı.`,
    tags: [themes[i % themes.length].toLowerCase(), 'koleksiyon'],
    items: [
      { label: 'Masal seç', page: 'audio', emoji: '🎧' },
      { label: 'Kısa oyun', page: 'activities', emoji: '🎮' },
      { label: 'Duygu check-in', page: 'feelings', emoji: '💛' },
      { label: 'Boyama', page: 'coloring', emoji: '🖍️' },
    ],
  })
}

ensureChunk('collections.ts', 'COLLECTIONS', collectionItems, (c) => `  {
    id: '${c.id}',
    title: '${c.title}',
    emoji: '${c.emoji}',
    description: '${c.description}',
    tags: ${JSON.stringify(c.tags)},
    items: ${JSON.stringify(c.items)},
  }`)

const pathAges = ['3-5', '6-8', '9-12']
const pathItems = []
for (let i = 1; i <= 12; i++) {
  const age = pathAges[i % 3]
  pathItems.push({
    id: `path-portal-${i}`,
    title: `${age} Yol Programı ${i}`,
    emoji: emojis[i % emojis.length],
    age,
    summary: `${age} yaş için ${4 + (i % 3)} haftalık dengeli öğrenme yolu.`,
    tags: ['program', age, 'aile'],
    weeks: 3 + (i % 4),
    steps: [
      { title: 'Masal dinle', page: 'audio', minutes: 5, tip: 'Birlikte dinleyin.' },
      { title: 'Kısa oyun', page: 'activities', minutes: 8, tip: 'Kazanmak değil denemek.' },
      { title: 'Duygu seç', page: 'feelings', minutes: 3, tip: 'Kelimeyi büyütün.' },
      { title: 'STEM kartı', page: 'stem', minutes: 10, tip: 'Tahmin yazın.' },
      { title: 'Boyama', page: 'coloring', minutes: 12, tip: '3 renk yeterli.' },
      { title: 'Görev yıldızı', page: 'quests', minutes: 5, tip: 'Kutlayın.' },
    ],
  })
}

ensureChunk('paths.ts', 'LEARNING_PATHS', pathItems, (p) => `  {
    id: '${p.id}',
    title: '${p.title}',
    emoji: '${p.emoji}',
    age: '${p.age}',
    summary: '${p.summary}',
    tags: ${JSON.stringify(p.tags)},
    weeks: ${p.weeks},
    steps: ${JSON.stringify(p.steps)},
  }`)

const worldItems = []
for (let i = 1; i <= 12; i++) {
  worldItems.push({
    id: `world-portal-${i}`,
    title: `Bölge ${i}: ${themes[i % themes.length]} Diyarı`,
    emoji: emojis[i % emojis.length],
    blurb: `${themes[i % themes.length]} temalı keşif bölgesi — dokun ve maceraya atıl.`,
    color: `linear-gradient(135deg, hsl(${(i * 49) % 360} 55% 40%), hsl(${(i * 49 + 60) % 360} 60% 55%))`,
    tags: [themes[i % themes.length].toLowerCase(), 'harita'],
    links: [
      { label: 'Masallar', page: 'audio' },
      { label: 'Oyunlar', page: 'activities' },
      { label: 'STEM', page: 'stem' },
    ],
  })
}

ensureChunk('world.ts', 'WORLD_REGIONS', worldItems, (w) => `  {
    id: '${w.id}',
    title: '${w.title}',
    emoji: '${w.emoji}',
    blurb: '${w.blurb}',
    color: '${w.color}',
    tags: ${JSON.stringify(w.tags)},
    links: ${JSON.stringify(w.links)},
  }`)

const shopItems = []
for (let i = 1; i <= 24; i++) {
  shopItems.push({
    id: `shop-portal-${i}`,
    title: `Ücretsiz paket ${i}`,
    emoji: '🎁',
    description: `İndirilebilir içerik demeti ${i} — üyelik yok.`,
    age: ages[i % ages.length],
    tags: ['ücretsiz', themes[i % themes.length].toLowerCase()],
    includes: ['3 içerik önerisi', '1 yazdırma fikri', 'Aile ipucu', 'Görev etiketi'],
    page: ['audio', 'coloring', 'stem', 'printables', 'fun'][i % 5],
  })
}

ensureChunk('shop.ts', 'SHOP_PACKS', shopItems, (s) => `  {
    id: '${s.id}',
    title: '${s.title}',
    emoji: '${s.emoji}',
    description: '${s.description}',
    age: '${s.age}',
    tags: ${JSON.stringify(s.tags)},
    includes: ${JSON.stringify(s.includes)},
    page: '${s.page}',
  }`)

const colorCats = ['Hayvanlar', 'Kahramanlar', 'Masal', 'Uzay', 'Deniz', 'Doğa', 'Taşıtlar', 'Bilim', 'Mevsim']
const colorItems = []
for (let i = 1; i <= 40; i++) {
  colorItems.push({
    id: `color-portal-${i}`,
    title: `Boyama ${i}`,
    emoji: emojis[i % emojis.length],
    age: `${3 + (i % 4)}+`,
    category: colorCats[i % colorCats.length],
    description: `Portal boyama sayfası ${i} — telifsiz çizgi.`,
  })
}

ensureChunk('coloringPages.ts', 'COLORING_PAGES', colorItems, (c) => `  { id: '${c.id}', title: '${c.title}', emoji: '${c.emoji}', age: '${c.age}', category: '${c.category}', description: '${c.description}' }`)

// Quiz append
{
  const file = 'activities.ts'
  let src = fs.readFileSync(path.join(root, file), 'utf8')
  const existingQ = (src.match(/question:/g) || []).length
  const need = Math.max(0, 80 - existingQ)
  if (need) {
    const qs = []
    for (let i = 1; i <= need; i++) {
      qs.push(`  {
    question: 'Portal sorusu ${existingQ + i}: ${i} + ${i} kaç eder?',
    options: ['${i}', '${i + 1}', '${i * 2}', '${i + 2}'],
    answer: 2,
  }`)
    }
    src = insertBeforeClosing(src, 'QUIZ_QUESTIONS', qs.join(',\n'))
    fs.writeFileSync(path.join(root, file), src)
    console.log(file, 'QUIZ +', need)
  }
}

// Quests — append to QUEST_POOL (const not export)
{
  const file = path.join(root, 'quests.ts')
  let src = fs.readFileSync(file, 'utf8')
  const ids = extractIds(src)
  const pages = ['audio', 'library', 'world', 'discover', 'shop', 'paths', 'journal', 'profile', 'teachers', 'calendar', 'stem', 'fun', 'create', 'coloring', 'heroes', 'rhymes', 'feelings', 'activities', 'blog', 'printables']
  const items = []
  for (let i = 1; i <= 40; i++) {
    const id = `quest-portal-${i}`
    if (ids.has(id)) continue
    const link = pages[i % pages.length]
    items.push(`  { id: '${id}', title: 'Portal görevi ${i}', emoji: '${emojis[i % emojis.length]}', stars: ${1 + (i % 3)}, minutes: ${3 + (i % 10)}, area: 'Portal', link: '${link}', hint: 'İlgili bölüme git ve bir içerik dene.' }`)
  }
  if (items.length) {
    const marker = 'const QUEST_POOL'
    const start = src.indexOf(marker)
    const after = src.slice(start)
    const closeRel = after.indexOf('\n]')
    const abs = start + closeRel
    src = src.slice(0, abs) + ',\n' + items.join(',\n') + src.slice(abs)
    fs.writeFileSync(file, src)
    console.log('quests.ts QUEST_POOL +', items.length)
  }
}

console.log('done')

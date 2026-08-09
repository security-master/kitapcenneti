/**
 * Mass content expansion — appends large batches while skipping existing ids.
 */
import fs from 'node:fs'
import path from 'node:path'

const root = path.resolve('src/data')
const themes = ['Uyku', 'Dostluk', 'Doğa', 'Uzay', 'Okul', 'Duygu', 'Macera', 'Hayvan', 'Deniz', 'Mevsim', 'Cesaret', 'Paylaşım', 'Müzik', 'Spor', 'Sanat']
const ages = ['3-5', '4-7', '5-8', '6-9', '7-10', '8-12']
const emojis = ['⭐', '🦊', '🌙', '🌊', '🚀', '🌿', '🎈', '🐻', '🦋', '🌈', '🐢', '🦄', '🐠', '🌻', '🏰', '🧠', '💛', '🎵', '🎨', '🔬']

function ids(src) {
  return new Set([...src.matchAll(/id:\s*'([^']+)'/g)].map((m) => m[1]))
}

function appendArray(file, arrayName, chunk) {
  const p = path.join(root, file)
  let src = fs.readFileSync(p, 'utf8')
  const marker = arrayName.startsWith('const ') ? arrayName : `export const ${arrayName}`
  const start = src.indexOf(marker)
  if (start < 0) throw new Error(marker)
  const after = src.slice(start)
  const closeRel = after.lastIndexOf('\n]')
  const abs = start + closeRel
  src = src.slice(0, abs) + ',\n' + chunk + src.slice(abs)
  fs.writeFileSync(p, src)
}

// AUDIO +400
{
  const file = 'audioStories.ts'
  const src = fs.readFileSync(path.join(root, file), 'utf8')
  const have = ids(src)
  const items = []
  for (let i = 1; i <= 400; i++) {
    const id = `mega-masal-${i}`
    if (have.has(id)) continue
    const theme = themes[i % themes.length]
    const emoji = emojis[i % emojis.length]
    items.push(`  {
    id: '${id}',
    title: '${theme} Yolculuğu ${i}',
    emoji: '${emoji}',
    age: '${ages[i % ages.length]}',
    duration: '${3 + (i % 5)} dk',
    theme: '${theme}',
    summary: '${theme} temalı mega portal masalı #${i}.',
    text: \`Bir varmış bir yokmuş, ${theme.toLowerCase()} dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş. Sen de derin bir nefes al…\`,
  }`)
  }
  if (items.length) {
    appendArray(file, 'AUDIO_STORIES', items.join(',\n'))
    console.log('audio +', items.length)
  }
}

// BLOG +200
{
  const file = 'blog.ts'
  const src = fs.readFileSync(path.join(root, file), 'utf8')
  const have = ids(src)
  const tagsPool = [['Rutin'], ['Okuma'], ['Duygu'], ['Dijital'], ['Okul'], ['Oyun'], ['Uyku'], ['STEM'], ['Spor'], ['Sanat']]
  const items = []
  for (let i = 1; i <= 200; i++) {
    const id = `mega-blog-${i}`
    if (have.has(id)) continue
    const tags = tagsPool[i % tagsPool.length]
    items.push(`  {
    id: '${id}',
    title: 'Aile ipucu ${i}: ${tags[0]} pratikleri',
    emoji: '${emojis[i % emojis.length]}',
    minutes: ${4 + (i % 6)},
    tags: ${JSON.stringify(tags)},
    summary: '${tags[0]} için kısa, uygulanabilir ebeveyn rehberi #${i}.',
    body: ${JSON.stringify([
      `${tags[0]} konusunda küçük adımlar büyük fark yaratır.`,
      'Çocuğunuzla birlikte kural koymak motivasyonu artırır.',
      'Kitap Cenneti içerikleri bu rutine eşlik edebilir.',
      'Haftalık mini değerlendirme ilerlemeyi görünür kılar.',
      'Sakin ebeveyn = sakin çocuk sinir sistemi.',
    ])},
  }`)
  }
  if (items.length) {
    appendArray(file, 'BLOG_POSTS', items.join(',\n'))
    console.log('blog +', items.length)
  }
}

// STEM +150
{
  const file = 'stem.ts'
  const src = fs.readFileSync(path.join(root, file), 'utf8')
  const have = ids(src)
  const items = []
  for (let i = 1; i <= 150; i++) {
    const id = `mega-stem-${i}`
    if (have.has(id)) continue
    items.push(`  {
    id: '${id}',
    title: 'Mega deney ${i}',
    emoji: '${['🔬', '⚗️', '🧪', '🧲', '🌡️'][i % 5]}',
    age: '${4 + (i % 6)}+',
    minutes: ${8 + (i % 12)},
    materials: ['Su', 'Kâğıt', 'Kalem', 'Yetişkin'],
    steps: ['Tahmin yaz', 'Dene', 'Gözlemle', 'Anlat'],
    why: 'Bilimsel düşünme: tahmin → deney → sonuç.',
  }`)
  }
  if (items.length) {
    appendArray(file, 'STEM_CARDS', items.join(',\n'))
    console.log('stem +', items.length)
  }
}

// COLORING +200
{
  const file = 'coloringPages.ts'
  const src = fs.readFileSync(path.join(root, file), 'utf8')
  const have = ids(src)
  const cats = ['Hayvanlar', 'Kahramanlar', 'Masal', 'Uzay', 'Deniz', 'Doğa', 'Taşıtlar', 'Bilim', 'Mevsim']
  const items = []
  for (let i = 1; i <= 200; i++) {
    const id = `mega-boyama-${i}`
    if (have.has(id)) continue
    items.push(
      `  { id: '${id}', title: 'Mega Boyama ${i}', emoji: '${emojis[i % emojis.length]}', age: '${3 + (i % 5)}+', category: '${cats[i % cats.length]}', description: 'Telifsiz portal boyaması #${i}' }`,
    )
  }
  if (items.length) {
    appendArray(file, 'COLORING_PAGES', items.join(',\n'))
    console.log('coloring +', items.length)
  }
}

// HEROES +80
{
  const file = 'heroes.ts'
  const src = fs.readFileSync(path.join(root, file), 'utf8')
  const have = ids(src)
  const items = []
  for (let i = 1; i <= 80; i++) {
    const id = `mega-hero-${i}`
    if (have.has(id)) continue
    const name = `Kahraman ${['Ada', 'Can', 'Elif', 'Mert', 'Lara', 'Ege', 'Su', 'Alp'][i % 8]} ${i}`
    items.push(`  {
    id: '${id}',
    name: '${name}',
    emoji: '${emojis[i % emojis.length]}',
    color: 'linear-gradient(135deg, hsl(${(i * 41) % 360} 70% 55%), hsl(${(i * 41 + 50) % 360} 65% 45%))',
    power: '${['Işık', 'Rüzgâr', 'Merak', 'Cesaret', 'Şefkat'][i % 5]}',
    age: '${4 + (i % 6)}+',
    motto: 'Birlikte daha güçlüyüz!',
    bio: '${name}, Kitap Cenneti özgün telifsiz kahramanıdır.',
    adventure: '${name} bir sorunu dostlarıyla çözdü ve herkes güvende kaldı.',
    tip: 'AI hikayeye ekle veya boya.',
  }`)
  }
  if (items.length) {
    appendArray(file, 'HEROES', items.join(',\n'))
    console.log('heroes +', items.length)
  }
}

// RHYMES +100
{
  const file = 'rhymes.ts'
  const src = fs.readFileSync(path.join(root, file), 'utf8')
  const have = ids(src)
  const items = []
  for (let i = 1; i <= 100; i++) {
    const id = `mega-rhyme-${i}`
    if (have.has(id)) continue
    items.push(`  {
    id: '${id}',
    title: 'Mega Tekerleme ${i}',
    emoji: '🎵',
    lyrics: \`El çırp ${i} kez, gülümse biraz,
Birlikte sayalım, sonra bir nefes.
Bugün ne öğrendik, söyle bakalım!\`,
  }`)
  }
  if (items.length) {
    appendArray(file, 'RHYMES', items.join(',\n'))
    console.log('rhymes +', items.length)
  }
}

// TEACHERS +80
{
  const file = 'teachers.ts'
  const src = fs.readFileSync(path.join(root, file), 'utf8')
  const have = ids(src)
  const subjects = ['Dil', 'STEM', 'Duygu', 'Sanat', 'Hareket', 'Okuma']
  const items = []
  for (let i = 1; i <= 80; i++) {
    const id = `mega-teach-${i}`
    if (have.has(id)) continue
    const subject = subjects[i % subjects.length]
    items.push(`  {
    id: '${id}',
    title: 'Mega sınıf ${i}: ${subject}',
    emoji: '${emojis[i % emojis.length]}',
    summary: '${subject} odaklı hazır etkinlik #${i}.',
    age: '${5 + (i % 4)}-${9 + (i % 3)}',
    duration: '${12 + (i % 10)} dk',
    tags: ['${subject.toLowerCase()}', 'sınıf'],
    materials: ['Kartlar', 'Tahta', 'Kalem'],
    steps: ['Amacı söyle', 'Örnek göster', 'Uygulat', 'Paylaş', 'Kapat'],
    subject: '${subject}',
  }`)
  }
  if (items.length) {
    appendArray(file, 'TEACHER_RESOURCES', items.join(',\n'))
    console.log('teachers +', items.length)
  }
}

// QUIZ +200
{
  const file = 'activities.ts'
  let src = fs.readFileSync(path.join(root, file), 'utf8')
  const existing = (src.match(/question:/g) || []).length
  const need = 200
  const qs = []
  for (let i = 1; i <= need; i++) {
    const a = 2 + ((existing + i) % 15)
    const b = 1 + ((existing + i) % 10)
    qs.push(`  {
    question: 'Mega quiz ${existing + i}: ${a} + ${b} = ?',
    options: ['${a + b - 1}', '${a + b}', '${a + b + 2}', '${a * b}'],
    answer: 1,
  }`)
  }
  appendArray(file, 'QUIZ_QUESTIONS', qs.join(',\n'))
  console.log('quiz +', need)
}

// QUESTS +120
{
  const file = 'quests.ts'
  let src = fs.readFileSync(path.join(root, file), 'utf8')
  const have = ids(src)
  const pages = [
    'audio', 'library', 'world', 'discover', 'shop', 'paths', 'journal', 'profile', 'teachers',
    'calendar', 'stem', 'fun', 'create', 'coloring', 'heroes', 'rhymes', 'feelings', 'activities', 'blog', 'live',
  ]
  const items = []
  for (let i = 1; i <= 120; i++) {
    const id = `mega-quest-${i}`
    if (have.has(id)) continue
    items.push(
      `  { id: '${id}', title: 'Mega görev ${i}', emoji: '${emojis[i % emojis.length]}', stars: ${1 + (i % 3)}, minutes: ${3 + (i % 12)}, area: 'Canlı', link: '${pages[i % pages.length]}', hint: 'İlgili bölüme git ve bir içerik dene.' }`,
    )
  }
  if (items.length) {
    const start = src.indexOf('const QUEST_POOL')
    const after = src.slice(start)
    const closeRel = after.indexOf('\n]')
    const abs = start + closeRel
    src = src.slice(0, abs) + ',\n' + items.join(',\n') + src.slice(abs)
    fs.writeFileSync(path.join(root, file), src)
    console.log('quests +', items.length)
  }
}

// COLLECTIONS +40, WORLD +20, PATHS +20, SHOP +40
function simpleExpand(file, arr, make, n, prefix) {
  const src = fs.readFileSync(path.join(root, file), 'utf8')
  const have = ids(src)
  const items = []
  for (let i = 1; i <= n; i++) {
    const id = `${prefix}-${i}`
    if (have.has(id)) continue
    items.push(make(i, id))
  }
  if (items.length) {
    appendArray(file, arr, items.join(',\n'))
    console.log(file, '+', items.length)
  }
}

simpleExpand(
  'collections.ts',
  'COLLECTIONS',
  (i, id) => `  {
    id: '${id}',
    title: 'Mega koleksiyon ${i}',
    emoji: '${emojis[i % emojis.length]}',
    description: 'Küratör demeti #${i}',
    tags: ['koleksiyon', '${themes[i % themes.length].toLowerCase()}'],
    items: [
      { label: 'Masal', page: 'audio', emoji: '🎧' },
      { label: 'Oyun', page: 'activities', emoji: '🎮' },
      { label: 'Canlı', page: 'live', emoji: '⚡' },
      { label: 'Boyama', page: 'coloring', emoji: '🖍️' },
    ],
  }`,
  40,
  'mega-col',
)

simpleExpand(
  'world.ts',
  'WORLD_REGIONS',
  (i, id) => `  {
    id: '${id}',
    title: 'Mega bölge ${i}: ${themes[i % themes.length]}',
    emoji: '${emojis[i % emojis.length]}',
    blurb: '${themes[i % themes.length]} diyarı — dokun ve keşfet.',
    color: 'linear-gradient(135deg, hsl(${(i * 53) % 360} 55% 40%), hsl(${(i * 53 + 70) % 360} 60% 55%))',
    tags: ['${themes[i % themes.length].toLowerCase()}', 'harita'],
    links: [
      { label: 'Canlı Arena', page: 'live' },
      { label: 'Masallar', page: 'audio' },
      { label: 'Oyunlar', page: 'activities' },
    ],
  }`,
  20,
  'mega-world',
)

simpleExpand(
  'paths.ts',
  'LEARNING_PATHS',
  (i, id) => {
    const age = ['3-5', '6-8', '9-12'][i % 3]
    return `  {
    id: '${id}',
    title: 'Mega yol ${i} (${age})',
    emoji: '${emojis[i % emojis.length]}',
    age: '${age}',
    summary: '${age} için zenginleştirilmiş öğrenme yolu #${i}.',
    tags: ['program', '${age}', 'mega'],
    weeks: ${3 + (i % 5)},
    steps: [
      { title: 'Canlı görev', page: 'live', minutes: 5, tip: 'Saatlik görevi aç.' },
      { title: 'Masal', page: 'audio', minutes: 5, tip: 'Dinle.' },
      { title: 'Oyun', page: 'activities', minutes: 8, tip: 'Kısa tur.' },
      { title: 'Duygu', page: 'feelings', minutes: 3, tip: 'Check-in.' },
      { title: 'STEM', page: 'stem', minutes: 10, tip: 'Deney.' },
      { title: 'Boyama', page: 'coloring', minutes: 12, tip: '3 renk.' },
    ],
  }`
  },
  20,
  'mega-path',
)

simpleExpand(
  'shop.ts',
  'SHOP_PACKS',
  (i, id) => `  {
    id: '${id}',
    title: 'Mega paket ${i}',
    emoji: '🎁',
    description: 'Ücretsiz içerik paketi #${i}',
    age: '${ages[i % ages.length]}',
    tags: ['ücretsiz', 'mega'],
    includes: ['Masal listesi', 'Görev', 'Boyama', 'Aile ipucu'],
    page: '${['live', 'audio', 'coloring', 'stem', 'fun'][i % 5]}',
  }`,
  40,
  'mega-shop',
)

console.log('100x expand done')

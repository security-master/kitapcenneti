import type { Config, Context } from '@netlify/functions'
import OpenAI from 'openai'
import { GoogleGenAI } from '@google/genai'

const SYSTEM_PROMPT = `Sen çocuklar için görselli masal kitabı yazan yaratıcı bir yazarsın.
Kurallar:
- Türkçe yaz (aksi belirtilmedikçe).
- 3-9 yaş için uygun, sıcak, güvenli, korkutmayan içerik.
- Şiddet, korku, üzücü son, yetişkin temalar yok.
- Her sayfa kısa olsun (2-4 cümle).
- Karakterler nazik, meraklı ve cesur olsun.
- Çıktıyı SADECE geçerli JSON olarak ver, markdown yok.

JSON şeması:
{
  "title": "string",
  "summary": "string (1-2 cümle)",
  "coverPrompt": "string (İngilizce görsel prompt, sahne anlatımı)",
  "pages": [
    {
      "pageNumber": 1,
      "text": "Türkçe sayfa metni",
      "imagePrompt": "İngilizce görsel prompt, o sayfanın sahnesi"
    }
  ]
}`

function corsHeaders() {
  return {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
  }
}

function extractJson(text: string) {
  const cleaned = text.replace(/```json|```/g, '').trim()
  const start = cleaned.indexOf('{')
  const end = cleaned.lastIndexOf('}')
  if (start === -1 || end === -1) throw new Error('JSON bulunamadı')
  return JSON.parse(cleaned.slice(start, end + 1))
}

function buildUserPrompt(body: {
  prompt: string
  childName?: string
  childDescription?: string
  worldHint?: string
  pageCount?: number
}) {
  const pages = Math.min(Math.max(body.pageCount || 5, 3), 6)
  const parts = [
    `Konu / istek: ${body.prompt}`,
    `Sayfa sayısı: ${pages}`,
    'Her sayfa için imagePrompt İngilizce olsun ve tek bir net sahne tarif etsin.',
  ]

  if (body.childName) {
    parts.push(
      `Ana karakterin adı: ${body.childName}. Hikâyede bu çocuk kahraman olarak yer alsın.`,
    )
  }
  if (body.childDescription) {
    parts.push(`Kahramanın görünümü: ${body.childDescription}`)
  }
  if (body.worldHint) {
    parts.push(`Masal dünyası: ${body.worldHint}`)
  }

  return parts.join('\n')
}

async function generateWithOpenAI(model: string, userPrompt: string) {
  const openai = new OpenAI()
  const completion = await openai.chat.completions.create({
    model,
    temperature: 0.85,
    messages: [
      { role: 'system', content: SYSTEM_PROMPT },
      { role: 'user', content: userPrompt },
    ],
    response_format: { type: 'json_object' },
  })
  const content = completion.choices[0]?.message?.content
  if (!content) throw new Error('Boş yanıt')
  return extractJson(content)
}

async function generateWithGemini(model: string, userPrompt: string) {
  const ai = new GoogleGenAI({})
  const response = await ai.models.generateContent({
    model,
    contents: `${SYSTEM_PROMPT}\n\n${userPrompt}`,
    config: {
      responseMimeType: 'application/json',
      temperature: 0.85,
    },
  })
  const text = response.text
  if (!text) throw new Error('Boş Gemini yanıtı')
  return extractJson(text)
}

function demoStory(body: {
  prompt: string
  childName?: string
  worldHint?: string
  pageCount?: number
}) {
  const name = body.childName || 'Minik Kahraman'
  const world = body.worldHint || 'renkli bir masal diyarında'
  const allPages = [
    {
      pageNumber: 1,
      text: `Bir sabah ${name} penceresinden parıldayan bir ışık gördü. Işık, "Haydi, masala!" diye fısıldıyordu.`,
      imagePrompt: `A child looking out a sunny window at sparkling magical light, cozy bedroom, children's book illustration`,
    },
    {
      pageNumber: 2,
      text: `${name} ışığı takip etti ve kendini ${world} buldu. Her yerde gülümseyen çiçekler ve şarkı söyleyen kuşlar vardı.`,
      imagePrompt: `A child entering a magical colorful fairy tale landscape with smiling flowers and singing birds`,
    },
    {
      pageNumber: 3,
      text: `Yolda yeni bir arkadaş çıktı karşılarına: sevimli bir tilki. "Kaybolmuş yıldızı bulmama yardım eder misin?" dedi.`,
      imagePrompt: `A friendly fox asking a child for help in a bright enchanted forest path`,
    },
    {
      pageNumber: 4,
      text: `${name} ve tilki birlikte aradılar. Cesaretleri ve nezaketleri sayesinde yıldızı bir ağaç kovuğunda buldular.`,
      imagePrompt: `A child and a fox discovering a glowing star inside a hollow tree, warm magical light`,
    },
    {
      pageNumber: 5,
      text: `Yıldızı gökyüzüne yolladılar. ${name} eve döndü; kalbinde yeni bir cesaret ve güzel bir sır vardı.`,
      imagePrompt: `A child waving goodbye to a rising star in the evening sky, happy and peaceful ending`,
    },
    {
      pageNumber: 6,
      text: `${name} yastığına uzandığında gökyüzünde bir yıldız göz kırptı. Yeni bir masal için hazırdı.`,
      imagePrompt: `A child in bed smiling at a twinkling star through the window, cozy bedtime children's illustration`,
    },
  ]
  const count = Math.min(Math.max(body.pageCount || 5, 3), 6)
  return {
    title: `${name} ve Sihirli Yolculuk`,
    summary: `${name}, ${world} unutulmaz bir maceraya atılır.`,
    coverPrompt: `A joyful child named ${name} standing at the gate of a magical colorful storybook world, children's illustration`,
    pages: allPages.slice(0, count),
    demo: true,
  }
}

export default async (req: Request, _context: Context) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { status: 204, headers: corsHeaders() })
  }

  if (req.method !== 'POST') {
    return Response.json(
      { error: 'Method not allowed' },
      { status: 405, headers: corsHeaders() },
    )
  }

  try {
    const body = await req.json()
    if (!body.prompt || typeof body.prompt !== 'string') {
      return Response.json(
        { error: 'prompt gerekli' },
        { status: 400, headers: corsHeaders() },
      )
    }

    const model = body.model || 'gemini-2.5-flash'
    const userPrompt = buildUserPrompt(body)
    const useGemini = model.startsWith('gemini')

    try {
      const story = useGemini
        ? await generateWithGemini(model, userPrompt)
        : await generateWithOpenAI(model, userPrompt)

      if (!story.title || !Array.isArray(story.pages)) {
        throw new Error('Geçersiz hikâye formatı')
      }

      return Response.json(
        {
          ...story,
          id: crypto.randomUUID(),
          createdAt: new Date().toISOString(),
          characterName: body.childName,
          world: body.worldHint,
          style: body.artStyle || 'masal-kitabi',
        },
        { headers: corsHeaders() },
      )
    } catch (aiError) {
      console.error('AI generation failed, using demo story:', aiError)
      const story = demoStory(body)
      return Response.json(
        {
          ...story,
          id: crypto.randomUUID(),
          createdAt: new Date().toISOString(),
          characterName: body.childName,
          world: body.worldHint,
          style: body.artStyle || 'masal-kitabi',
          fallback: true,
          fallbackReason:
            'AI Gateway henüz hazır değil veya model yanıt vermedi. Örnek masal gösteriliyor.',
        },
        { headers: corsHeaders() },
      )
    }
  } catch (error) {
    console.error(error)
    return Response.json(
      { error: error instanceof Error ? error.message : 'Sunucu hatası' },
      { status: 500, headers: corsHeaders() },
    )
  }
}

export const config: Config = {
  path: '/api/generate-story',
  method: ['POST', 'OPTIONS'],
}

import type { Handler } from '@netlify/functions'
import OpenAI from 'openai'

const CATEGORY_LABELS: Record<string, string> = {
  adventure: 'Büyülü Macera',
  animals: 'Hayvan Dostları',
  space: 'Uzay Keşfi',
  underwater: 'Deniz Altı',
  fairy: 'Peri Masalı',
  dinosaurs: 'Dinozor Dünyası',
  superhero: 'Süper Kahraman',
  personalized: 'Kişiselleştirilmiş Masal',
  custom: 'Özel Hikaye',
}

const ALLOWED_MODELS = new Set(['gpt-4o-mini', 'gpt-4o', 'gpt-4.1-mini'])

function clampStr(v: unknown, max: number): string {
  if (typeof v !== 'string') return ''
  return v.trim().slice(0, max)
}

function clampInt(v: unknown, min: number, max: number, fallback: number): number {
  const n = typeof v === 'number' ? v : Number(v)
  if (!Number.isFinite(n)) return fallback
  return Math.min(max, Math.max(min, Math.floor(n)))
}

export const handler: Handler = async (event) => {
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 204,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
      },
    }
  }

  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: JSON.stringify({ error: 'Method not allowed' }) }
  }

  try {
    if ((event.body || '').length > 32_000) {
      return { statusCode: 413, body: JSON.stringify({ error: 'Payload too large' }) }
    }

    const body = JSON.parse(event.body || '{}') as Record<string, unknown>
    const category = clampStr(body.category, 40)
    const prompt = clampStr(body.prompt, 500)
    const heroName = clampStr(body.heroName, 40)
    const artStyle = clampStr(body.artStyle, 40) || 'watercolor'
    const textModel = clampStr(body.textModel, 40)
    const model = ALLOWED_MODELS.has(textModel) ? textModel : 'gpt-4o-mini'
    const ageGroup = clampStr(body.ageGroup, 16) || '6-8'
    const pageCount = clampInt(body.pageCount, 4, 8, 6)

    const categoryLabel = CATEGORY_LABELS[category] || 'Masal'
    const heroContext = heroName
      ? `Kahramanın adı "${heroName}" olmalı ve hikayenin merkezinde yer almalı.`
      : ''

    const systemPrompt = `Sen çocuklar için Türkçe görsel hikaye kitabı yazan bir masalcısın.
Hedef yaş grubu: ${ageGroup} yaş.
Kategori: ${categoryLabel}.
${heroContext}
${prompt ? `Hikaye konusu: ${prompt}` : ''}

Kurallar:
- Her sayfa kısa, akıcı Türkçe
- Her sayfa 2-3 cümle
- Şiddet, korku veya uygunsuz içerik yok
- Her sayfa için İngilizce imagePrompt

JSON: {"title":"...","pages":[{"pageNumber":1,"text":"...","imagePrompt":"..."}]}
Tam ${pageCount} sayfa.`

    const openai = new OpenAI()

    const completion = await openai.chat.completions.create({
      model,
      messages: [
        { role: 'system', content: systemPrompt },
        {
          role: 'user',
          content: `Lütfen ${pageCount} sayfalık bir çocuk hikayesi oluştur. Çizim stili: ${artStyle}.`,
        },
      ],
      response_format: { type: 'json_object' },
      temperature: 0.8,
    })

    const content = completion.choices[0]?.message?.content
    if (!content || content.length > 100_000) {
      throw new Error('No content generated')
    }

    const story = JSON.parse(content) as { title?: string; pages?: unknown[] }
    const title = clampStr(story.title, 120) || 'Masal'
    const pages = Array.isArray(story.pages) ? story.pages.slice(0, pageCount) : []

    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'X-Content-Type-Options': 'nosniff',
      },
      body: JSON.stringify({
        title,
        pages,
        heroName: heroName || undefined,
        category: category || undefined,
        artStyle,
      }),
    }
  } catch (error) {
    console.error('Story generation error:', error)
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Story generation failed' }),
    }
  }
}

interface Env {
  OPENAI_API_KEY?: string
}

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
const ALLOWED_AGES = new Set(['3-5', '4-6', '5-7', '6-8', '7-9', '8-10', '9-12'])

const cors = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
  'Content-Type': 'application/json',
  'X-Content-Type-Options': 'nosniff',
}

function clampStr(v: unknown, max: number): string {
  if (typeof v !== 'string') return ''
  return v.trim().slice(0, max)
}

function clampInt(v: unknown, min: number, max: number, fallback: number): number {
  const n = typeof v === 'number' ? v : Number(v)
  if (!Number.isFinite(n)) return fallback
  return Math.min(max, Math.max(min, Math.floor(n)))
}

export const onRequestOptions = async () =>
  new Response(null, { status: 204, headers: cors })

export const onRequestPost = async (context: { request: Request; env: Env }) => {
  try {
    // Basic body size guard (~32KB)
    const raw = await context.request.text()
    if (raw.length > 32_000) {
      return new Response(JSON.stringify({ error: 'Payload too large' }), { status: 413, headers: cors })
    }

    let body: Record<string, unknown>
    try {
      body = JSON.parse(raw) as Record<string, unknown>
    } catch {
      return new Response(JSON.stringify({ error: 'Invalid JSON' }), { status: 400, headers: cors })
    }

    const apiKey = context.env.OPENAI_API_KEY
    if (!apiKey) {
      return new Response(JSON.stringify({ error: 'No API key — use client fallback' }), {
        status: 501,
        headers: cors,
      })
    }

    const category = clampStr(body.category, 40)
    const prompt = clampStr(body.prompt, 500)
    const heroName = clampStr(body.heroName, 40)
    const artStyle = clampStr(body.artStyle, 40) || 'watercolor'
    const textModel = clampStr(body.textModel, 40)
    const model = ALLOWED_MODELS.has(textModel) ? textModel : 'gpt-4o-mini'
    const ageGroupRaw = clampStr(body.ageGroup, 16)
    const ageGroup = ALLOWED_AGES.has(ageGroupRaw) ? ageGroupRaw : '6-8'
    const pageCount = clampInt(body.pageCount, 4, 8, 6)

    const categoryLabel = CATEGORY_LABELS[category] || 'Masal'
    const heroContext = heroName
      ? `Kahramanın adı "${heroName}" olmalı ve hikayenin merkezinde yer almalı.`
      : ''

    const systemPrompt = `Sen çocuklar için Türkçe görsel hikaye kitabı yazan bir masalcısın.
Hedef yaş: ${ageGroup}. Kategori: ${categoryLabel}.
${heroContext}
${prompt ? `Konu: ${prompt}` : ''}
İçerik güvenli, şiddet/nefret/uygunsuz tema yok. Her sayfa 2-3 kısa cümle.
JSON: {"title":"...","pages":[{"pageNumber":1,"text":"...","imagePrompt":"English scene"}]}
Tam ${pageCount} sayfa.`

    const completion = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model,
        temperature: 0.8,
        response_format: { type: 'json_object' },
        messages: [
          { role: 'system', content: systemPrompt },
          { role: 'user', content: `${pageCount} sayfalık çocuk hikayesi yaz. Stil: ${artStyle}` },
        ],
      }),
    })

    if (!completion.ok) {
      return new Response(JSON.stringify({ error: 'OpenAI error' }), { status: 502, headers: cors })
    }

    const data = (await completion.json()) as { choices?: { message?: { content?: string } }[] }
    const content = data.choices?.[0]?.message?.content
    if (!content || content.length > 100_000) {
      return new Response(JSON.stringify({ error: 'Empty or oversized response' }), {
        status: 502,
        headers: cors,
      })
    }

    let story: Record<string, unknown>
    try {
      story = JSON.parse(content) as Record<string, unknown>
    } catch {
      return new Response(JSON.stringify({ error: 'Invalid model JSON' }), { status: 502, headers: cors })
    }

    // Do not blindly spread untrusted keys — whitelist
    const title = clampStr(story.title, 120) || 'Masal'
    const pages = Array.isArray(story.pages) ? story.pages.slice(0, pageCount) : []

    return new Response(
      JSON.stringify({
        title,
        pages,
        heroName: heroName || undefined,
        category: category || undefined,
        artStyle,
      }),
      { status: 200, headers: cors },
    )
  } catch (error) {
    console.error(error)
    return new Response(JSON.stringify({ error: 'Story generation failed' }), {
      status: 500,
      headers: cors,
    })
  }
}

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

const cors = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
  'Content-Type': 'application/json',
}

export const onRequestOptions = async () =>
  new Response(null, { status: 204, headers: cors })

export const onRequestPost = async (context: { request: Request; env: Env }) => {
  try {
    const body = await context.request.json() as {
      category?: string
      prompt?: string
      heroName?: string
      artStyle?: string
      textModel?: string
      pageCount?: number
      ageGroup?: string
    }

    const apiKey = context.env.OPENAI_API_KEY
    if (!apiKey) {
      return new Response(JSON.stringify({ error: 'No API key — use client fallback' }), {
        status: 501,
        headers: cors,
      })
    }

    const categoryLabel = CATEGORY_LABELS[body.category || ''] || 'Masal'
    const pageCount = body.pageCount || 6
    const heroContext = body.heroName
      ? `Kahramanın adı "${body.heroName}" olmalı ve hikayenin merkezinde yer almalı.`
      : ''

    const systemPrompt = `Sen çocuklar için Türkçe görsel hikaye kitabı yazan bir masalcısın.
Hedef yaş: ${body.ageGroup || '6-8'}. Kategori: ${categoryLabel}.
${heroContext}
${body.prompt ? `Konu: ${body.prompt}` : ''}
Her sayfa 2-3 kısa cümle. JSON: {"title":"...","pages":[{"pageNumber":1,"text":"...","imagePrompt":"English scene"}]}
Tam ${pageCount} sayfa.`

    const completion = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: body.textModel || 'gpt-4o-mini',
        temperature: 0.8,
        response_format: { type: 'json_object' },
        messages: [
          { role: 'system', content: systemPrompt },
          { role: 'user', content: `${pageCount} sayfalık çocuk hikayesi yaz. Stil: ${body.artStyle || 'watercolor'}` },
        ],
      }),
    })

    if (!completion.ok) {
      return new Response(JSON.stringify({ error: 'OpenAI error' }), { status: 502, headers: cors })
    }

    const data = await completion.json() as { choices?: { message?: { content?: string } }[] }
    const content = data.choices?.[0]?.message?.content
    if (!content) {
      return new Response(JSON.stringify({ error: 'Empty response' }), { status: 502, headers: cors })
    }

    const story = JSON.parse(content)
    return new Response(
      JSON.stringify({
        ...story,
        heroName: body.heroName,
        category: body.category,
        artStyle: body.artStyle,
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

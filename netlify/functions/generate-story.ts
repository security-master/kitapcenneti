import type { Handler } from '@netlify/functions'
import OpenAI from 'openai'

interface StoryRequest {
  category: string
  prompt?: string
  heroName?: string
  heroImage?: string
  artStyle: string
  textModel: string
  pageCount: number
  ageGroup: string
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

export const handler: Handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: JSON.stringify({ error: 'Method not allowed' }) }
  }

  try {
    const body: StoryRequest = JSON.parse(event.body || '{}')
    const {
      category,
      prompt,
      heroName,
      artStyle,
      textModel,
      pageCount = 6,
      ageGroup = '6-8',
    } = body

    const categoryLabel = CATEGORY_LABELS[category] || 'Masal'
    const heroContext = heroName
      ? `Kahramanın adı "${heroName}" olmalı ve hikayenin merkezinde yer almalı. ${heroName} cesur, meraklı ve sevimli bir çocuk karakter.`
      : ''

    const systemPrompt = `Sen çocuklar için Türkçe görsel hikaye kitabı yazan bir masalcısın.
Hedef yaş grubu: ${ageGroup} yaş.
Kategori: ${categoryLabel}.
${heroContext}
${prompt ? `Hikaye konusu: ${prompt}` : ''}

Kurallar:
- Her sayfa kısa, akıcı ve çocukların anlayabileceği Türkçe olmalı
- Her sayfa 2-3 cümle olmalı
- Pozitif, eğitici ve eğlenceli bir ton kullan
- Şiddet, korku veya olumsuz içerik olmamalı
- Her sayfa için ayrı bir görsel prompt (İngilizce) yaz

JSON formatında yanıt ver:
{
  "title": "Hikaye başlığı",
  "pages": [
    {
      "pageNumber": 1,
      "text": "Türkçe hikaye metni",
      "imagePrompt": "English illustration prompt for this page scene"
    }
  ]
}

Tam olarak ${pageCount} sayfa oluştur.`

    const openai = new OpenAI()

    const completion = await openai.chat.completions.create({
      model: textModel || 'gpt-4o-mini',
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
    if (!content) {
      throw new Error('No content generated')
    }

    const story = JSON.parse(content)

    return {
      statusCode: 200,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        ...story,
        heroName,
        category,
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

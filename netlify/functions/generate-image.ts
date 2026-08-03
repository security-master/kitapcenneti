import type { Config, Context } from '@netlify/functions'
import { GoogleGenAI } from '@google/genai'
import { getStore } from '@netlify/blobs'
import { buildImagePrompt } from './_shared/styles'

function corsHeaders() {
  return {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
  }
}

function pollinationsUrl(prompt: string) {
  const encoded = encodeURIComponent(prompt.slice(0, 400))
  const seed = Math.floor(Math.random() * 1_000_000)
  return `https://image.pollinations.ai/prompt/${encoded}?width=768&height=768&nologo=true&enhance=true&safe=true&seed=${seed}`
}

async function generateWithGemini(
  model: string,
  prompt: string,
  referenceImage?: string,
  referenceMimeType?: string,
) {
  const ai = new GoogleGenAI({})
  const contents: Array<
    | { text: string }
    | { inlineData: { mimeType: string; data: string } }
  > = [{ text: prompt }]

  if (referenceImage && referenceMimeType) {
    contents.push({
      inlineData: {
        mimeType: referenceMimeType,
        data: referenceImage,
      },
    })
    contents[0] = {
      text: `${prompt}\nUse the attached photo as visual reference for the main child's appearance, but restyle as a wholesome children's storybook illustration. Keep the scene magical and child-safe.`,
    }
  }

  const response = await ai.models.generateContent({
    model,
    contents,
  })

  const parts = response.candidates?.[0]?.content?.parts || []
  const imagePart = parts.find((p) => p.inlineData?.data)
  if (!imagePart?.inlineData?.data) {
    throw new Error('Görsel üretilemedi')
  }

  return {
    base64: imagePart.inlineData.data,
    mimeType: imagePart.inlineData.mimeType || 'image/png',
  }
}

async function storeImage(base64: string, mimeType: string) {
  try {
    const store = getStore({ name: 'story-images', consistency: 'strong' })
    const id = crypto.randomUUID()
    const key = `img/${id}`
    const buffer = Buffer.from(base64, 'base64')
    await store.set(key, buffer, {
      metadata: { contentType: mimeType },
    })
    return {
      id,
      dataUrl: `data:${mimeType};base64,${base64}`,
      blobKey: key,
    }
  } catch {
    return {
      id: crypto.randomUUID(),
      dataUrl: `data:${mimeType};base64,${base64}`,
    }
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

    const model = body.model || 'pollinations'
    const fullPrompt = buildImagePrompt(
      body.prompt,
      body.artStyle,
      body.characterNote,
    )

    if (model === 'pollinations') {
      return Response.json(
        {
          url: pollinationsUrl(fullPrompt),
          provider: 'pollinations',
          prompt: fullPrompt,
        },
        { headers: corsHeaders() },
      )
    }

    try {
      const image = await generateWithGemini(
        model,
        fullPrompt,
        body.referenceImage,
        body.referenceMimeType,
      )
      const stored = await storeImage(image.base64, image.mimeType)
      return Response.json(
        {
          url: stored.dataUrl,
          provider: 'gemini',
          prompt: fullPrompt,
          blobKey: stored.blobKey,
        },
        { headers: corsHeaders() },
      )
    } catch (geminiError) {
      console.error('Gemini image failed, falling back to Pollinations:', geminiError)
      return Response.json(
        {
          url: pollinationsUrl(fullPrompt),
          provider: 'pollinations',
          prompt: fullPrompt,
          fallback: true,
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
  path: '/api/generate-image',
  method: ['POST', 'OPTIONS'],
}

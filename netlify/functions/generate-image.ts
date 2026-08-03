import type { Handler } from '@netlify/functions'

const CORS_HEADERS = {
  'Content-Type': 'application/json',
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'Content-Type',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
}

function buildPollinationsUrl(prompt: string, seed: number): string {
  const shortPrompt = prompt.slice(0, 150)
  const encoded = encodeURIComponent(shortPrompt)
  return `https://image.pollinations.ai/prompt/${encoded}?width=768&height=576&nologo=true&seed=${seed}&model=flux`
}

async function fetchImage(url: string, retries = 3): Promise<{ base64: string; contentType: string } | null> {
  for (let attempt = 0; attempt < retries; attempt++) {
    try {
      const res = await fetch(url, {
        headers: { 'User-Agent': 'KitapCenneti/1.0' },
      })
      if (res.ok) {
        const buffer = await res.arrayBuffer()
        const contentType = res.headers.get('content-type') || 'image/jpeg'
        const base64 = Buffer.from(buffer).toString('base64')
        return { base64, contentType }
      }
    } catch {
      // retry
    }
    await new Promise((r) => setTimeout(r, 2000 * (attempt + 1)))
  }
  return null
}

export const handler: Handler = async (event) => {
  if (event.httpMethod === 'OPTIONS') {
    return { statusCode: 204, headers: CORS_HEADERS, body: '' }
  }

  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, headers: CORS_HEADERS, body: JSON.stringify({ error: 'Method not allowed' }) }
  }

  try {
    const { prompt, seed = 42 } = JSON.parse(event.body || '{}')

    if (!prompt) {
      return { statusCode: 400, headers: CORS_HEADERS, body: JSON.stringify({ error: 'Prompt required' }) }
    }

    const url = buildPollinationsUrl(prompt, seed)
    const result = await fetchImage(url)

    if (!result) {
      return { statusCode: 502, headers: CORS_HEADERS, body: JSON.stringify({ error: 'Image generation failed' }) }
    }

    const imageUrl = `data:${result.contentType};base64,${result.base64}`

    return {
      statusCode: 200,
      headers: CORS_HEADERS,
      body: JSON.stringify({ imageUrl }),
    }
  } catch (error) {
    console.error('Image generation error:', error)
    return {
      statusCode: 500,
      headers: CORS_HEADERS,
      body: JSON.stringify({ error: 'Image generation failed' }),
    }
  }
}

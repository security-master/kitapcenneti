import type { Handler } from '@netlify/functions'

const CORS_HEADERS = {
  'Content-Type': 'application/json',
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'Content-Type',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
}

function buildPollinationsUrl(prompt: string, seed: number): string {
  const shortPrompt = prompt.slice(0, 180)
  const encoded = encodeURIComponent(shortPrompt)
  return (
    `https://image.pollinations.ai/prompt/${encoded}` +
    `?width=1024&height=768&nologo=true&safe=true&seed=${seed}&model=flux`
  )
}

async function fetchImage(url: string, retries = 3): Promise<{ base64: string; contentType: string } | null> {
  for (let attempt = 0; attempt < retries; attempt++) {
    try {
      const res = await fetch(url, {
        headers: { 'User-Agent': 'KitapCenneti/1.0', Accept: 'image/*' },
      })
      if (res.ok) {
        const buffer = await res.arrayBuffer()
        const contentType = res.headers.get('content-type') || ''
        if (contentType.startsWith('image/') && buffer.byteLength >= 8000) {
          const base64 = Buffer.from(buffer).toString('base64')
          return { base64, contentType }
        }
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

    // Retry with alternate seeds if a payload looks invalid
    for (let attempt = 0; attempt < 3; attempt++) {
      const url = buildPollinationsUrl(prompt, seed + attempt * 17)
      const result = await fetchImage(url, 1)
      if (result) {
        const imageUrl = `data:${result.contentType};base64,${result.base64}`
        return {
          statusCode: 200,
          headers: CORS_HEADERS,
          body: JSON.stringify({ imageUrl }),
        }
      }
    }

    return { statusCode: 502, headers: CORS_HEADERS, body: JSON.stringify({ error: 'Image generation failed' }) }
  } catch (error) {
    console.error('Image generation error:', error)
    return {
      statusCode: 500,
      headers: CORS_HEADERS,
      body: JSON.stringify({ error: 'Image generation failed' }),
    }
  }
}

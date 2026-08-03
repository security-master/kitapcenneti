import type { Handler } from '@netlify/functions'

export const handler: Handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: JSON.stringify({ error: 'Method not allowed' }) }
  }

  try {
    const { prompt, seed } = JSON.parse(event.body || '{}')

    if (!prompt) {
      return { statusCode: 400, body: JSON.stringify({ error: 'Prompt required' }) }
    }

    const encoded = encodeURIComponent(prompt)
    const seedParam = seed !== undefined ? `&seed=${seed}` : ''
    const imageUrl = `https://image.pollinations.ai/prompt/${encoded}?width=1024&height=768&nologo=true${seedParam}`

    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify({ imageUrl }),
    }
  } catch (error) {
    console.error('Image generation error:', error)
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Image generation failed' }),
    }
  }
}

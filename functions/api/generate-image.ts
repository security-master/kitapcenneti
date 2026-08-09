const cors = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
  'Content-Type': 'application/json',
}

function buildPollinationsUrl(prompt: string, seed: number): string {
  const shortPrompt = prompt.slice(0, 150)
  const encoded = encodeURIComponent(shortPrompt)
  return `https://image.pollinations.ai/prompt/${encoded}?width=768&height=576&nologo=true&seed=${seed}&model=flux`
}

export const onRequestOptions = async () =>
  new Response(null, { status: 204, headers: cors })

export const onRequestPost = async (context: { request: Request }) => {
  try {
    const { prompt, seed = 42 } = await context.request.json() as {
      prompt?: string
      seed?: number
    }

    if (!prompt) {
      return new Response(JSON.stringify({ error: 'Prompt required' }), {
        status: 400,
        headers: cors,
      })
    }

    const url = buildPollinationsUrl(prompt, seed)
    let lastError = 'unknown'

    for (let attempt = 0; attempt < 3; attempt++) {
      try {
        const res = await fetch(url, {
          headers: { 'User-Agent': 'KitapCenneti/1.0' },
        })
        if (res.ok) {
          const buffer = await res.arrayBuffer()
          const contentType = res.headers.get('content-type') || 'image/jpeg'
          const bytes = new Uint8Array(buffer)
          let binary = ''
          for (let i = 0; i < bytes.length; i++) binary += String.fromCharCode(bytes[i])
          const base64 = btoa(binary)
          return new Response(
            JSON.stringify({ imageUrl: `data:${contentType};base64,${base64}` }),
            { status: 200, headers: cors },
          )
        }
        lastError = `HTTP ${res.status}`
      } catch (e) {
        lastError = String(e)
      }
      await new Promise((r) => setTimeout(r, 1500 * (attempt + 1)))
    }

    return new Response(JSON.stringify({ error: `Image failed: ${lastError}` }), {
      status: 502,
      headers: cors,
    })
  } catch (error) {
    console.error(error)
    return new Response(JSON.stringify({ error: 'Image generation failed' }), {
      status: 500,
      headers: cors,
    })
  }
}

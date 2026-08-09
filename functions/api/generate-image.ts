const cors = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
  'Content-Type': 'application/json',
  'X-Content-Type-Options': 'nosniff',
}

const MAX_PROMPT = 500
const MAX_IMAGE_BYTES = 8_000_000

function buildPollinationsUrl(prompt: string, seed: number): string {
  const shortPrompt = prompt.slice(0, 180)
  const encoded = encodeURIComponent(shortPrompt)
  return (
    `https://image.pollinations.ai/prompt/${encoded}` +
    `?width=1024&height=768&nologo=true&safe=true&seed=${seed}&model=flux`
  )
}

export const onRequestOptions = async () =>
  new Response(null, { status: 204, headers: cors })

export const onRequestPost = async (context: { request: Request }) => {
  try {
    const raw = await context.request.text()
    if (raw.length > 16_000) {
      return new Response(JSON.stringify({ error: 'Payload too large' }), { status: 413, headers: cors })
    }

    let parsed: { prompt?: unknown; seed?: unknown }
    try {
      parsed = JSON.parse(raw) as { prompt?: unknown; seed?: unknown }
    } catch {
      return new Response(JSON.stringify({ error: 'Invalid JSON' }), { status: 400, headers: cors })
    }

    const prompt = typeof parsed.prompt === 'string' ? parsed.prompt.trim().slice(0, MAX_PROMPT) : ''
    const seed =
      typeof parsed.seed === 'number' && Number.isFinite(parsed.seed)
        ? Math.floor(Math.abs(parsed.seed)) % 1_000_000_000
        : 42

    if (!prompt) {
      return new Response(JSON.stringify({ error: 'Prompt required' }), {
        status: 400,
        headers: cors,
      })
    }

    let lastError = 'unknown'

    for (let attempt = 0; attempt < 3; attempt++) {
      try {
        const url = buildPollinationsUrl(prompt, seed + attempt * 17)
        const res = await fetch(url, {
          headers: { 'User-Agent': 'KitapCenneti/1.0', Accept: 'image/*' },
        })
        if (res.ok) {
          const buffer = await res.arrayBuffer()
          const contentType = res.headers.get('content-type') || ''
          if (!contentType.startsWith('image/') || buffer.byteLength < 8000) {
            lastError = `invalid payload (${contentType}, ${buffer.byteLength}b)`
          } else if (buffer.byteLength > MAX_IMAGE_BYTES) {
            lastError = 'image too large'
          } else {
            const bytes = new Uint8Array(buffer)
            let binary = ''
            for (let i = 0; i < bytes.length; i++) binary += String.fromCharCode(bytes[i])
            const base64 = btoa(binary)
            return new Response(
              JSON.stringify({ imageUrl: `data:${contentType};base64,${base64}` }),
              { status: 200, headers: cors },
            )
          }
        } else {
          lastError = `HTTP ${res.status}`
        }
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

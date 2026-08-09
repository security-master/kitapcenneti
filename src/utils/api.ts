/** Hosting-agnostic API helpers (Cloudflare Pages, Netlify, GitHub Pages). */

function withBase(path: string): string {
  const base = import.meta.env.BASE_URL || '/'
  const normalized = path.startsWith('/') ? path.slice(1) : path
  return `${base}${normalized}`.replace(/([^:]\/)\/+/g, '$1')
}

async function postJson(url: string, body: unknown): Promise<Response | null> {
  try {
    return await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    })
  } catch {
    return null
  }
}

/** Tries Cloudflare `/api/*` then Netlify `/.netlify/functions/*`. */
export async function callApi<T>(
  name: 'generate-story' | 'generate-image',
  body: unknown,
): Promise<T | null> {
  const candidates = [
    withBase(`api/${name}`),
    `/.netlify/functions/${name}`,
    withBase(`.netlify/functions/${name}`),
  ]

  for (const url of candidates) {
    const res = await postJson(url, body)
    if (res?.ok) {
      try {
        return (await res.json()) as T
      } catch {
        // try next
      }
    }
  }
  return null
}

export function buildDirectPollinationsUrl(prompt: string, seed: number): string {
  const short = prompt.slice(0, 120)
  const encoded = encodeURIComponent(short)
  return `https://image.pollinations.ai/prompt/${encoded}?width=768&height=576&nologo=true&seed=${seed}&model=flux`
}

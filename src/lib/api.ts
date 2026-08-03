import type { ArtStyle, GenerateStoryRequest, StoryBook, StoryPage } from '../types'

async function postJson<T>(url: string, body: unknown): Promise<T> {
  const res = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  })
  const data = await res.json()
  if (!res.ok) {
    throw new Error(data.error || 'İstek başarısız')
  }
  return data as T
}

export async function generateStory(request: GenerateStoryRequest): Promise<StoryBook> {
  const data = await postJson<StoryBook & { fallback?: boolean; fallbackReason?: string }>(
    '/api/generate-story',
    request,
  )

  const pages: StoryPage[] = (data.pages || []).map((p) => ({
    ...p,
    imageStatus: 'pending',
  }))

  return {
    id: data.id,
    title: data.title,
    summary: data.summary,
    coverPrompt: data.coverPrompt,
    pages,
    characterName: data.characterName,
    world: data.world,
    createdAt: data.createdAt,
    style: (data.style as ArtStyle) || request.artStyle || 'masal-kitabi',
  }
}

export async function generateImage(opts: {
  prompt: string
  artStyle?: ArtStyle
  model?: string
  characterNote?: string
  referenceImage?: string
  referenceMimeType?: string
}): Promise<string> {
  const data = await postJson<{ url: string }>('/api/generate-image', opts)
  return data.url
}

export async function generateStoryImages(
  story: StoryBook,
  opts: {
    imageModel?: string
    characterNote?: string
    referenceImage?: string
    referenceMimeType?: string
    onPageUpdate?: (pages: StoryPage[], coverUrl?: string) => void
  } = {},
): Promise<StoryBook> {
  const pages = [...story.pages]
  let coverUrl = story.coverUrl

  // Cover first
  try {
    coverUrl = await generateImage({
      prompt: story.coverPrompt,
      artStyle: story.style,
      model: opts.imageModel,
      characterNote: opts.characterNote,
      referenceImage: opts.referenceImage,
      referenceMimeType: opts.referenceMimeType,
    })
    opts.onPageUpdate?.(pages, coverUrl)
  } catch {
    // keep going
  }

  for (let i = 0; i < pages.length; i++) {
    pages[i] = { ...pages[i], imageStatus: 'loading' }
    opts.onPageUpdate?.(pages, coverUrl)
    try {
      const url = await generateImage({
        prompt: pages[i].imagePrompt,
        artStyle: story.style,
        model: opts.imageModel,
        characterNote: opts.characterNote,
        referenceImage: opts.referenceImage,
        referenceMimeType: opts.referenceMimeType,
      })
      pages[i] = { ...pages[i], imageUrl: url, imageStatus: 'ready' }
    } catch {
      pages[i] = { ...pages[i], imageStatus: 'error' }
    }
    opts.onPageUpdate?.(pages, coverUrl)
  }

  return { ...story, pages, coverUrl }
}

export function fileToBase64(file: File): Promise<{ base64: string; mimeType: string }> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.onload = () => {
      const result = String(reader.result || '')
      const base64 = result.split(',')[1] || ''
      resolve({ base64, mimeType: file.type || 'image/png' })
    }
    reader.onerror = () => reject(new Error('Dosya okunamadı'))
    reader.readAsDataURL(file)
  })
}

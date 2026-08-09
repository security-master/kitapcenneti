import { useState, useCallback, useRef, useEffect } from 'react'

export function useSpeech() {
  const [speaking, setSpeaking] = useState(false)
  const [paused, setPaused] = useState(false)
  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null)

  useEffect(() => {
    return () => {
      window.speechSynthesis?.cancel()
    }
  }, [])

  const speak = useCallback((text: string, rate = 0.9) => {
    if (!window.speechSynthesis) {
      alert('Tarayıcın sesli okumayı desteklemiyor. Chrome veya Edge dene.')
      return
    }
    window.speechSynthesis.cancel()
    const u = new SpeechSynthesisUtterance(text)
    u.lang = 'tr-TR'
    u.rate = rate
    u.pitch = 1.05
    const voices = window.speechSynthesis.getVoices()
    const tr = voices.find((v) => v.lang.startsWith('tr'))
    if (tr) u.voice = tr
    u.onend = () => {
      setSpeaking(false)
      setPaused(false)
    }
    u.onerror = () => {
      setSpeaking(false)
      setPaused(false)
    }
    utteranceRef.current = u
    setSpeaking(true)
    setPaused(false)
    window.speechSynthesis.speak(u)
  }, [])

  const stop = useCallback(() => {
    window.speechSynthesis?.cancel()
    setSpeaking(false)
    setPaused(false)
  }, [])

  const togglePause = useCallback(() => {
    if (!window.speechSynthesis) return
    if (window.speechSynthesis.paused) {
      window.speechSynthesis.resume()
      setPaused(false)
    } else if (window.speechSynthesis.speaking) {
      window.speechSynthesis.pause()
      setPaused(true)
    }
  }, [])

  return { speaking, paused, speak, stop, togglePause }
}

import { useEffect, useState } from 'react'

const COLORS = ['#ff6b6b', '#feca57', '#1dd1a1', '#54a0ff', '#ff9ff3', '#ff9f43', '#5f27cd']

interface Piece {
  id: number
  left: number
  delay: number
  color: string
  rot: number
  size: number
}

export function ConfettiBurst({ active, onDone }: { active: boolean; onDone?: () => void }) {
  const [pieces, setPieces] = useState<Piece[]>([])

  useEffect(() => {
    if (!active) return
    const next = Array.from({ length: 36 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 0.35,
      color: COLORS[i % COLORS.length],
      rot: Math.random() * 360,
      size: 8 + Math.random() * 10,
    }))
    setPieces(next)
    const t = window.setTimeout(() => {
      setPieces([])
      onDone?.()
    }, 1800)
    return () => window.clearTimeout(t)
  }, [active, onDone])

  if (!pieces.length) return null

  return (
    <div className="confetti-layer" aria-hidden="true">
      {pieces.map((p) => (
        <span
          key={p.id}
          className="confetti-piece"
          style={{
            left: `${p.left}%`,
            background: p.color,
            width: p.size,
            height: p.size * 0.6,
            animationDelay: `${p.delay}s`,
            ['--rot' as string]: `${p.rot}deg`,
          }}
        />
      ))}
    </div>
  )
}

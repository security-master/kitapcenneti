import { useEffect, useMemo, useRef, useState } from 'react'
import { MEMORY_EMOJIS, QUIZ_QUESTIONS } from '../data/activities'
import { announceActivityResult } from '../components/Toast'
import { completeActivity } from '../hooks/useProgress'

type Mode = 'menu' | 'memory' | 'quiz'

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

export function ActivitiesPage() {
  const [mode, setMode] = useState<Mode>('menu')

  return (
    <div className="page">
      <header className="page-header">
        <h1>🎮 Eğitici Oyunlar</h1>
        <p>Hafıza kartları ve mini bilgi yarışmasıyla eğlenerek öğren.</p>
      </header>

      {mode === 'menu' && (
        <div className="activity-menu">
          <button className="panel activity-tile" onClick={() => setMode('memory')}>
            <span>🧠</span>
            <h2>Hafıza Kartları</h2>
            <p>Eşleri bul, beynini çalıştır!</p>
          </button>
          <button className="panel activity-tile" onClick={() => setMode('quiz')}>
            <span>❓</span>
            <h2>Mini Quiz</h2>
            <p>Genel kültür soruları — ailece yarışın.</p>
          </button>
        </div>
      )}

      {mode === 'memory' && <MemoryGame onBack={() => setMode('menu')} />}
      {mode === 'quiz' && <QuizGame onBack={() => setMode('menu')} />}
    </div>
  )
}

function MemoryGame({ onBack }: { onBack: () => void }) {
  const cards = useMemo(
    () =>
      shuffle(
        MEMORY_EMOJIS.flatMap((emoji, i) => [
          { id: `${i}-a`, emoji, key: i },
          { id: `${i}-b`, emoji, key: i },
        ]),
      ),
    [],
  )
  const [flipped, setFlipped] = useState<string[]>([])
  const [matched, setMatched] = useState<number[]>([])
  const [lock, setLock] = useState(false)

  const onFlip = (id: string, key: number) => {
    if (lock || flipped.includes(id) || matched.includes(key)) return
    const next = [...flipped, id]
    setFlipped(next)
    if (next.length === 2) {
      setLock(true)
      const [a, b] = next
      const ca = cards.find((c) => c.id === a)!
      const cb = cards.find((c) => c.id === b)!
      setTimeout(() => {
        if (ca.key === cb.key) setMatched((m) => [...m, ca.key])
        setFlipped([])
        setLock(false)
      }, 700)
    }
  }

  const won = matched.length === MEMORY_EMOJIS.length
  const awarded = useRef(false)

  useEffect(() => {
    if (won && !awarded.current) {
      awarded.current = true
      announceActivityResult(completeActivity('memory'))
    }
  }, [won])

  return (
    <div className="panel">
      <div className="btn-row" style={{ marginBottom: 16 }}>
        <button className="btn btn--ghost" onClick={onBack}>← Menü</button>
        <strong>{matched.length}/{MEMORY_EMOJIS.length} çift</strong>
      </div>
      {won && <p className="win-banner">🎉 Harika! Tüm çiftleri buldun! Görev yıldızın işlendi.</p>}
      <div className="memory-grid">
        {cards.map((card) => {
          const open = flipped.includes(card.id) || matched.includes(card.key)
          return (
            <button
              key={card.id}
              className={`memory-card ${open ? 'is-open' : ''}`}
              onClick={() => onFlip(card.id, card.key)}
            >
              {open ? card.emoji : '?'}
            </button>
          )
        })}
      </div>
    </div>
  )
}

function QuizGame({ onBack }: { onBack: () => void }) {
  const questions = useMemo(() => shuffle(QUIZ_QUESTIONS).slice(0, 5), [])
  const [index, setIndex] = useState(0)
  const [score, setScore] = useState(0)
  const [done, setDone] = useState(false)
  const [selected, setSelected] = useState<number | null>(null)
  const awarded = useRef(false)
  const q = questions[index]

  useEffect(() => {
    if (done && !awarded.current) {
      awarded.current = true
      announceActivityResult(completeActivity('quiz'))
    }
  }, [done])

  const choose = (i: number) => {
    if (selected !== null) return
    setSelected(i)
    if (i === q.answer) setScore((s) => s + 1)
    setTimeout(() => {
      if (index + 1 >= questions.length) setDone(true)
      else {
        setIndex((n) => n + 1)
        setSelected(null)
      }
    }, 800)
  }

  return (
    <div className="panel">
      <div className="btn-row" style={{ marginBottom: 16 }}>
        <button className="btn btn--ghost" onClick={onBack}>← Menü</button>
        <strong>Skor: {score}</strong>
      </div>
      {done ? (
        <div className="win-banner">
          🏆 Quiz bitti! {score}/{questions.length} doğru.
          <div className="btn-row" style={{ marginTop: 12, justifyContent: 'center' }}>
            <button className="btn btn--primary" onClick={onBack}>Tekrar oyna</button>
          </div>
        </div>
      ) : (
        <>
          <p className="quiz-progress">Soru {index + 1}/{questions.length}</p>
          <h2 className="quiz-q">{q.question}</h2>
          <div className="quiz-options">
            {q.options.map((opt, i) => {
              let cls = 'quiz-option'
              if (selected !== null) {
                if (i === q.answer) cls += ' is-correct'
                else if (i === selected) cls += ' is-wrong'
              }
              return (
                <button key={opt} className={cls} onClick={() => choose(i)}>
                  {opt}
                </button>
              )
            })}
          </div>
        </>
      )}
    </div>
  )
}

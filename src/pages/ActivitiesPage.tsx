import { useEffect, useMemo, useRef, useState } from 'react'
import { MEMORY_EMOJIS, QUIZ_QUESTIONS } from '../data/activities'
import { SPEED_EMOJIS, WORD_BANK } from '../data/extraGames'
import { announceActivityResult } from '../components/Toast'
import { completeActivity } from '../hooks/useProgress'
import { ConfettiBurst } from '../components/ConfettiBurst'

type Mode = 'menu' | 'memory' | 'quiz' | 'scramble' | 'speed'

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
        <h1>🎮 Oyun Salonu</h1>
        <p>Hafıza, quiz, kelime karıştırma ve hızlı yakalama — sıkılmaya fırsat yok!</p>
      </header>

      {mode === 'menu' && (
        <div className="activity-menu activity-menu--rich">
          <button className="panel activity-tile" onClick={() => setMode('memory')}>
            <span>🧠</span>
            <h2>Hafıza Kartları</h2>
            <p>Eşleri bul, beynini çalıştır!</p>
          </button>
          <button className="panel activity-tile" onClick={() => setMode('quiz')}>
            <span>❓</span>
            <h2>Mini Quiz</h2>
            <p>Genel kültür — ailece yarışın.</p>
          </button>
          <button className="panel activity-tile" onClick={() => setMode('scramble')}>
            <span>🔤</span>
            <h2>Kelime Karıştır</h2>
            <p>Harfleri doğru sıraya diz.</p>
          </button>
          <button className="panel activity-tile" onClick={() => setMode('speed')}>
            <span>⚡</span>
            <h2>Hızlı Yakalama</h2>
            <p>Doğru emojilere tıkla, skor kır!</p>
          </button>
        </div>
      )}

      {mode === 'memory' && <MemoryGame onBack={() => setMode('menu')} />}
      {mode === 'quiz' && <QuizGame onBack={() => setMode('menu')} />}
      {mode === 'scramble' && <ScrambleGame onBack={() => setMode('menu')} />}
      {mode === 'speed' && <SpeedGame onBack={() => setMode('menu')} />}
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
  const awarded = useRef(false)
  const won = matched.length === MEMORY_EMOJIS.length

  useEffect(() => {
    if (won && !awarded.current) {
      awarded.current = true
      announceActivityResult(completeActivity('memory'))
    }
  }, [won])

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

  return (
    <div className="panel">
      <div className="btn-row" style={{ marginBottom: 16 }}>
        <button className="btn btn--ghost" onClick={onBack}>← Menü</button>
        <strong>{matched.length}/{MEMORY_EMOJIS.length} çift</strong>
      </div>
      {won && <p className="win-banner">🎉 Harika! Tüm çiftleri buldun!</p>}
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

function ScrambleGame({ onBack }: { onBack: () => void }) {
  const [round, setRound] = useState(0)
  const item = WORD_BANK[round % WORD_BANK.length]
  const [letters, setLetters] = useState(() => shuffle(item.word.split('')))
  const [picked, setPicked] = useState<string[]>([])
  const [won, setWon] = useState(false)
  const [confetti, setConfetti] = useState(false)
  const pool = letters.map((ch, i) => ({ ch, i }))

  const resetWord = (r: number) => {
    const next = WORD_BANK[r % WORD_BANK.length]
    setLetters(shuffle(next.word.split('')))
    setPicked([])
    setWon(false)
  }

  const pick = (ch: string, i: number) => {
    if (won || !letters[i]) return
    const nextLetters = [...letters]
    nextLetters[i] = ''
    const nextPicked = [...picked, ch]
    setLetters(nextLetters)
    setPicked(nextPicked)
    if (nextPicked.join('') === item.word) {
      setWon(true)
      setConfetti(true)
      announceActivityResult(completeActivity('scramble'))
    }
  }

  return (
    <div className="panel">
      <ConfettiBurst active={confetti} onDone={() => setConfetti(false)} />
      <div className="btn-row" style={{ marginBottom: 16 }}>
        <button className="btn btn--ghost" onClick={onBack}>← Menü</button>
        <strong>Kelime {round + 1}</strong>
      </div>
      <p className="section-hint">{item.hint}</p>
      <div className="scramble-answer">
        {item.word.split('').map((_, i) => (
          <span key={i} className="scramble-slot">{picked[i] || ''}</span>
        ))}
      </div>
      <div className="scramble-pool">
        {pool.map(({ ch, i }) => (
          <button
            key={`${ch}-${i}`}
            type="button"
            className="scramble-letter"
            disabled={!ch}
            onClick={() => pick(ch, i)}
          >
            {ch || '·'}
          </button>
        ))}
      </div>
      <div className="btn-row" style={{ marginTop: 16 }}>
        <button
          type="button"
          className="btn btn--ghost"
          onClick={() => {
            setLetters(shuffle(item.word.split('')))
            setPicked([])
            setWon(false)
          }}
        >
          Karıştır / Sıfırla
        </button>
        {won && (
          <button
            type="button"
            className="btn btn--primary"
            onClick={() => {
              const next = round + 1
              setRound(next)
              resetWord(next)
            }}
          >
            Sonraki kelime →
          </button>
        )}
      </div>
      {won && <p className="win-banner">🎉 Doğru! {item.word}</p>}
    </div>
  )
}

function SpeedGame({ onBack }: { onBack: () => void }) {
  const target = useMemo(() => SPEED_EMOJIS[Math.floor(Math.random() * SPEED_EMOJIS.length)], [])
  const [timeLeft, setTimeLeft] = useState(20)
  const [score, setScore] = useState(0)
  const [items, setItems] = useState(() => spawn(target))
  const [done, setDone] = useState(false)
  const awarded = useRef(false)

  useEffect(() => {
    if (done) return
    const t = window.setInterval(() => {
      setTimeLeft((s) => {
        if (s <= 1) {
          setDone(true)
          return 0
        }
        return s - 1
      })
    }, 1000)
    return () => window.clearInterval(t)
  }, [done])

  useEffect(() => {
    if (done && !awarded.current) {
      awarded.current = true
      announceActivityResult(completeActivity('speed'))
    }
  }, [done])

  useEffect(() => {
    if (done) return
    const t = window.setInterval(() => setItems(spawn(target)), 900)
    return () => window.clearInterval(t)
  }, [done, target])

  return (
    <div className="panel">
      <div className="btn-row" style={{ marginBottom: 16 }}>
        <button className="btn btn--ghost" onClick={onBack}>← Menü</button>
        <strong>Hedef: {target} · Skor {score} · {timeLeft}s</strong>
      </div>
      {done ? (
        <div className="win-banner">
          ⚡ Süre bitti! Skorun: {score}
          <div className="btn-row" style={{ justifyContent: 'center', marginTop: 12 }}>
            <button className="btn btn--primary" onClick={onBack}>Menüye dön</button>
          </div>
        </div>
      ) : (
        <div className="speed-arena">
          <p className="section-hint">Sadece {target} olanlara tıkla!</p>
          <div className="speed-grid">
            {items.map((it) => (
              <button
                key={it.id}
                type="button"
                className="speed-cell"
                onClick={() => {
                  if (it.emoji === target) {
                    setScore((s) => s + 1)
                    setItems((prev) => prev.filter((p) => p.id !== it.id))
                  } else {
                    setScore((s) => Math.max(0, s - 1))
                  }
                }}
              >
                {it.emoji}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

function spawn(target: string) {
  return Array.from({ length: 12 }, (_, i) => ({
    id: `${Date.now()}-${i}-${Math.random()}`,
    emoji: Math.random() > 0.55 ? target : SPEED_EMOJIS[Math.floor(Math.random() * SPEED_EMOJIS.length)],
  }))
}

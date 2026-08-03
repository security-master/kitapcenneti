const DECORATIONS = ['⭐', '🌙', '☁️', '🦋', '🌸', '🎈', '✨', '🌈', '🍭', '🎪']

export function BackgroundDecorations() {
  return (
    <div className="bg-decorations" aria-hidden="true">
      {DECORATIONS.map((emoji, i) => (
        <span
          key={i}
          className="bg-decoration"
          style={{
            left: `${(i * 11 + 5) % 95}%`,
            top: `${(i * 17 + 3) % 90}%`,
            animationDelay: `${i * 0.7}s`,
            fontSize: `${1.5 + (i % 3) * 0.5}rem`,
          }}
        >
          {emoji}
        </span>
      ))}
    </div>
  )
}

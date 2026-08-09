const DECORATIONS = ['✦', '·', '○', '✧', '◦', '✧', '·', '○', '✦', '✧', '◦', '·']

export function BackgroundDecorations() {
  return (
    <div className="bg-decorations" aria-hidden="true">
      <div className="bg-blob bg-blob--one" />
      <div className="bg-blob bg-blob--two" />
      <div className="bg-blob bg-blob--three" />
      {DECORATIONS.map((emoji, i) => (
        <span
          key={i}
          className="bg-decoration"
          style={{
            left: `${(i * 9 + 4) % 96}%`,
            top: `${(i * 13 + 6) % 92}%`,
            animationDelay: `${i * 0.55}s`,
            fontSize: `${1.35 + (i % 4) * 0.35}rem`,
          }}
        >
          {emoji}
        </span>
      ))}
    </div>
  )
}

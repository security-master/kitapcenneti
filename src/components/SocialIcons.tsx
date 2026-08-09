/** Original geometric brand marks — not trademark logo reproductions */

interface IconProps {
  color: string
  mark: string
  size?: number
  className?: string
}

export function SocialMarkIcon({ color, mark, size = 40, className }: IconProps) {
  const fontSize = mark.length > 2 ? size * 0.28 : mark.length > 1 ? size * 0.34 : size * 0.42
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 40 40"
      role="img"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id={`sg-${color.replace('#', '')}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor={color} stopOpacity="1" />
          <stop offset="100%" stopColor={color} stopOpacity="0.82" />
        </linearGradient>
      </defs>
      <rect
        x="1"
        y="1"
        width="38"
        height="38"
        rx="12"
        fill={`url(#sg-${color.replace('#', '')})`}
      />
      <path
        d="M8 12h24M8 20h16M8 28h20"
        stroke="rgba(255,255,255,0.12)"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <circle cx="30" cy="10" r="3" fill="rgba(255,255,255,0.18)" />
      <text
        x="20"
        y="24"
        textAnchor="middle"
        fill="#fff"
        fontFamily="Nunito, system-ui, sans-serif"
        fontWeight="800"
        fontSize={fontSize}
      >
        {mark}
      </text>
    </svg>
  )
}

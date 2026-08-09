import { CALM_SCRIPTS, FEELINGS } from '../data/feelings'
import { useSpeech } from '../hooks/useSpeech'
import { VoicePicker } from '../components/VoicePicker'
import { announceActivityResult } from '../components/Toast'
import { completeActivity } from '../hooks/useProgress'
import { SocialShare } from '../components/SocialShare'
import { useContentItemId } from '../hooks/useContentItemId'

export function FeelingsPage() {
  const [selectedId, setSelectedId] = useContentItemId('feelings', FEELINGS[0].id)
  const feeling = FEELINGS.find((f) => f.id === selectedId)
  const { speaking, speak, stop, profile, setProfile } = useSpeech()
  const script = CALM_SCRIPTS[new Date().getDate() % CALM_SCRIPTS.length]

  return (
    <div className="page">
      <header className="page-header">
        <h1>💛 Duygu Köşesi</h1>
        <p>
          {FEELINGS.length} duygu kartı — bugün nasıl hissediyorsun? Seç, dinle, birlikte sakinleş.
        </p>
      </header>

      <VoicePicker profile={profile} onChange={setProfile} />

      <div className="feelings-grid">
        {FEELINGS.map((f) => (
          <button
            key={f.id}
            className={`feeling-card ${selectedId === f.id ? 'is-active' : ''}`}
            style={{ background: f.color }}
            onClick={() => {
              setSelectedId(f.id)
              announceActivityResult(completeActivity('feel'))
            }}
          >
            <span>{f.emoji}</span>
            <strong>{f.label}</strong>
          </button>
        ))}
      </div>

      {feeling && (
        <div className="panel">
          <h2>{feeling.emoji} {feeling.label}</h2>
          <p>{feeling.tip}</p>
          <p><strong>Küçük aktivite:</strong> {feeling.activity}</p>
          <div className="btn-row">
            <button
              className="btn btn--primary"
              onClick={() => (speaking ? stop() : speak(`${feeling.label}. ${feeling.tip} ${feeling.activity}`))}
            >
              {speaking ? '⏹ Durdur' : '🎧 Sesli dinle'}
            </button>
          </div>
          <SocialShare
            payload={{
              title: `${feeling.emoji} ${feeling.label}`,
              text: `${feeling.tip} Aktivite: ${feeling.activity}`,
              page: 'feelings',
              itemId: feeling.id,
              hashtags: ['KitapCenneti', 'Duygu', 'Aile'],
            }}
          />
        </div>
      )}

      <div className="panel" style={{ marginTop: 16 }}>
        <h3>🌬️ Sakinleşme scripti</h3>
        <p>{script}</p>
        <button className="btn btn--ghost" onClick={() => speak(script, 0.8)}>Dinle</button>
      </div>
    </div>
  )
}

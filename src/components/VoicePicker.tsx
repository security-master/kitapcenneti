import { VOICE_OPTIONS, type VoiceProfile } from '../hooks/useSpeech'

interface VoicePickerProps {
  profile: VoiceProfile
  onChange: (profile: VoiceProfile) => void
}

export function VoicePicker({ profile, onChange }: VoicePickerProps) {
  return (
    <div className="voice-picker" role="group" aria-label="Anlatıcı sesi">
      <p className="voice-picker__label">🎙️ Anlatıcı sesi</p>
      <div className="voice-picker__options">
        {VOICE_OPTIONS.map((opt) => (
          <button
            key={opt.id}
            type="button"
            className={`voice-chip ${profile === opt.id ? 'is-active' : ''}`}
            onClick={() => onChange(opt.id)}
            title={opt.desc}
          >
            <span>{opt.emoji}</span>
            <strong>{opt.label}</strong>
          </button>
        ))}
      </div>
      <p className="voice-picker__hint">
        Çocuk sesi ince perde ile üretilir. Gerçek sesler tarayıcıya göre değişir (Chrome önerilir).
      </p>
    </div>
  )
}

import { VOICE_OPTIONS, type VoiceProfile } from '../hooks/useSpeech'
import { hasPremiumVoice } from '../utils/premium'
import { showToast } from './Toast'

interface VoicePickerProps {
  profile: VoiceProfile
  onChange: (profile: VoiceProfile) => void
}

export function VoicePicker({ profile, onChange }: VoicePickerProps) {
  const premium = hasPremiumVoice()

  return (
    <div className="voice-picker" role="group" aria-label="Anlatıcı sesi">
      <p className="voice-picker__label">🎙️ Anlatıcı sesi</p>
      <div className="voice-picker__options">
        {VOICE_OPTIONS.map((opt) => (
          <button
            key={opt.id}
            type="button"
            className={`voice-chip ${profile === opt.id ? 'is-active' : ''}`}
            onClick={() => {
              if (opt.premium && !premium) {
                showToast('Premium ses için Market’ten “Masal Ustası” paketini aç')
                return
              }
              onChange(opt.id)
            }}
            title={opt.desc}
          >
            <span>{opt.emoji}</span>
            <strong>
              {opt.label}
              {opt.premium ? (premium ? ' ✓' : ' 🔒') : ''}
            </strong>
          </button>
        ))}
      </div>
      <p className="voice-picker__hint">
        Çocuk sesi ince perde ile üretilir. Premium “Masal ustası” daha yavaş ve yumuşak okur.
      </p>
    </div>
  )
}

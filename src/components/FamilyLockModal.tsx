import { useState } from 'react'

interface Props {
  open: boolean
  onClose: () => void
  onUnlock: () => void
  checkPin: (pin: string) => boolean
}

export function FamilyLockModal({ open, onClose, onUnlock, checkPin }: Props) {
  const [pin, setPin] = useState('')
  const [err, setErr] = useState('')

  if (!open) return null

  return (
    <div className="family-lock" role="dialog" aria-modal="true" aria-label="Aile kilidi">
      <div className="family-lock__card panel">
        <h2>🔐 Aile kilidi</h2>
        <p>Aile moduna geçmek için 4 haneli PIN gir.</p>
        <input
          type="password"
          inputMode="numeric"
          maxLength={4}
          value={pin}
          onChange={(e) => {
            setPin(e.target.value.replace(/\D/g, '').slice(0, 4))
            setErr('')
          }}
          placeholder="••••"
          autoFocus
        />
        {err && <p className="family-lock__err">{err}</p>}
        <div className="btn-row">
          <button
            type="button"
            className="btn btn--primary"
            onClick={() => {
              if (checkPin(pin)) {
                setPin('')
                onUnlock()
              } else setErr('PIN hatalı')
            }}
          >
            Aç
          </button>
          <button
            type="button"
            className="btn btn--ghost"
            onClick={() => {
              setPin('')
              setErr('')
              onClose()
            }}
          >
            Vazgeç
          </button>
        </div>
      </div>
    </div>
  )
}

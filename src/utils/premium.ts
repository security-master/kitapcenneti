const PREMIUM_KEY = 'kitapcenneti-premium-voice'

/** Local "premium" unlock — no payment; family shop gift / unlock code */
export function hasPremiumVoice(): boolean {
  return localStorage.getItem(PREMIUM_KEY) === '1'
}

export function unlockPremiumVoice() {
  localStorage.setItem(PREMIUM_KEY, '1')
  window.dispatchEvent(new CustomEvent('kitapcenneti-portal'))
}

export const PREMIUM_UNLOCK_CODE = 'CENNETI2026'

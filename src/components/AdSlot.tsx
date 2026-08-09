import { ADS_ENABLED, ADSENSE_CLIENT, type AdSlotId } from '../config/ads'

interface AdSlotProps {
  slot?: AdSlotId
  format?: 'auto' | 'horizontal' | 'rectangle'
  className?: string
}

/**
 * Google AdSense yer tutucu.
 * Onay gelince VITE_ADSENSE_CLIENT=ca-pub-XXXX ekleyin.
 * Çocuk odaklı sayfalarda dikkatli kullanın; ebeveyn/blog içeriğinde tercih edin.
 */
export function AdSlot({ slot = 'in-article', format = 'auto', className = '' }: AdSlotProps) {
  if (!ADS_ENABLED) {
    return (
      <aside className={`ad-slot ad-slot--placeholder ${className}`} aria-label="Reklam alanı">
        <span>📢 Reklam alanı</span>
        <small>AdSense onayından sonra burada gösterilir · {slot}</small>
      </aside>
    )
  }

  return (
    <aside className={`ad-slot ${className}`} aria-label="Reklam">
      <ins
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client={ADSENSE_CLIENT}
        data-ad-slot={slot}
        data-ad-format={format}
        data-full-width-responsive="true"
      />
    </aside>
  )
}

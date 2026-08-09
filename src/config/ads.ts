/** AdSense yayıncı kimliği — onaydan sonra .env veya index.html'e eklenir */
export const ADSENSE_CLIENT = import.meta.env.VITE_ADSENSE_CLIENT as string | undefined
export const ADS_ENABLED = Boolean(ADSENSE_CLIENT && ADSENSE_CLIENT.startsWith('ca-pub-'))

export type AdSlotId = 'top' | 'in-article' | 'sidebar' | 'bottom'

import { useEffect, useState } from 'react'
import { showToast } from './Toast'

const KEY = 'kitapcenneti-reminders'

interface ReminderPrefs {
  enabled: boolean
  hour: number
  mystery: boolean
}

const DEFAULT: ReminderPrefs = { enabled: false, hour: 18, mystery: true }

function readPrefs(): ReminderPrefs {
  try {
    return { ...DEFAULT, ...JSON.parse(localStorage.getItem(KEY) || '{}') }
  } catch {
    return DEFAULT
  }
}

export function ReminderPanel() {
  const [prefs, setPrefs] = useState<ReminderPrefs>(DEFAULT)
  const [perm, setPerm] = useState<NotificationPermission>('default')

  useEffect(() => {
    setPrefs(readPrefs())
    if ('Notification' in window) setPerm(Notification.permission)
  }, [])

  const save = (next: ReminderPrefs) => {
    setPrefs(next)
    localStorage.setItem(KEY, JSON.stringify(next))
  }

  const enable = async () => {
    if (!('Notification' in window)) {
      showToast('Bu tarayıcı bildirim desteklemiyor')
      return
    }
    const p = await Notification.requestPermission()
    setPerm(p)
    if (p !== 'granted') {
      showToast('Bildirim izni verilmedi')
      return
    }
    save({ ...prefs, enabled: true })
    scheduleTick()
    showToast('Hatırlatmalar açıldı')
    new Notification('Kitap Cenneti', {
      body: 'Harika! Saatlik görev ve gizemli kutu için hatırlatacağız.',
      icon: `${import.meta.env.BASE_URL}pwa-icon.svg`,
    })
  }

  return (
    <div className="panel reminder-panel">
      <h3>🔔 Geri dönüş hatırlatması</h3>
      <p>Yerel bildirim — sunucu yok. İzin verirsen günlük saat ve gizemli kutu için uyarırız.</p>
      <label>
        Saat
        <input
          type="number"
          min={8}
          max={21}
          value={prefs.hour}
          onChange={(e) => save({ ...prefs, hour: Number(e.target.value) || 18 })}
        />
      </label>
      <label className="reminder-panel__check">
        <input
          type="checkbox"
          checked={prefs.mystery}
          onChange={(e) => save({ ...prefs, mystery: e.target.checked })}
        />
        Gizemli kutu hatırlat
      </label>
      <div className="btn-row">
        {!prefs.enabled || perm !== 'granted' ? (
          <button type="button" className="btn btn--primary" onClick={() => void enable()}>
            Bildirimleri aç
          </button>
        ) : (
          <button type="button" className="btn btn--ghost" onClick={() => save({ ...prefs, enabled: false })}>
            Kapat
          </button>
        )}
        <button
          type="button"
          className="btn btn--ghost"
          onClick={() => {
            if (perm === 'granted') {
              new Notification('Kitap Cenneti', { body: 'Test: Canlı Arena seni bekliyor! ⚡' })
            } else showToast('Önce bildirim izni ver')
          }}
        >
          Test bildirimi
        </button>
      </div>
      <small>Durum: {perm} · {prefs.enabled ? 'açık' : 'kapalı'}</small>
    </div>
  )
}

/** Call once from App — checks hourly if a local notification should fire */
export function scheduleTick() {
  const tick = () => {
    const prefs = readPrefs()
    if (!prefs.enabled || !('Notification' in window) || Notification.permission !== 'granted') return
    const now = new Date()
    const stampKey = `kitapcenneti-reminded-${now.getFullYear()}-${now.getMonth()}-${now.getDate()}-${now.getHours()}`
    if (sessionStorage.getItem(stampKey)) return
    if (now.getHours() === prefs.hour && now.getMinutes() < 15) {
      new Notification('Kitap Cenneti', {
        body: 'Günlük mola zamanı — masal veya görev için 10 dk ayır 📚',
        tag: 'daily',
      })
      sessionStorage.setItem(stampKey, '1')
    }
    if (prefs.mystery) {
      try {
        const mystery = JSON.parse(localStorage.getItem('kitapcenneti-mystery') || '{"last":0}') as {
          last: number
        }
        if (Date.now() - mystery.last >= 3 * 60 * 60 * 1000) {
          const mKey = `kitapcenneti-mystery-ping-${Math.floor(Date.now() / 10800000)}`
          if (!sessionStorage.getItem(mKey)) {
            new Notification('Kitap Cenneti', {
              body: 'Gizemli kutu hazır! 🎁 Canlı Arena’ya uğra.',
              tag: 'mystery',
            })
            sessionStorage.setItem(mKey, '1')
          }
        }
      } catch {
        /* ignore */
      }
    }
  }
  tick()
  window.setInterval(tick, 60_000)
}

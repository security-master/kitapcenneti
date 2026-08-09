export interface Hero {
  id: string
  name: string
  emoji: string
  color: string
  power: string
  age: string
  motto: string
  bio: string
  adventure: string
  tip: string
}

export const HEROES: Hero[] = [
  {
    id: 'yildiz-kiz',
    name: 'Yıldız Kız Nova',
    emoji: '🌟',
    color: 'linear-gradient(135deg, #667eea, #764ba2)',
    power: 'Işık izi bırakma & gece yol gösterme',
    age: '5+',
    motto: 'Karanlıkta da yol bulunur!',
    bio: 'Nova, yıldız tozundan doğmuş tamamen özgün bir kahraman. Telifsizdir; istediğin gibi çiz, yaz, oyna.',
    adventure: 'Bir gece şehrin lambaları sönünce Nova gökyüzünden ışık köprüleri kurdu ve herkes güvenle eve döndü.',
    tip: 'Kendi Yıldız Kız çizimini yapıp boyama sayfasına dönüştürebilirsin.',
  },
  {
    id: 'tiko',
    name: 'Zırhlı Tiko',
    emoji: '🐢',
    color: 'linear-gradient(135deg, #11998e, #38ef7d)',
    power: 'Sabır kalkanı & doğa koruma',
    age: '3+',
    motto: 'Yavaş ama vazgeçmez!',
    bio: 'Tiko ormanları koruyan sevimli bir kahraman. Kabuğu geri dönüştürülmüş yapraklardan yapılmıştır.',
    adventure: 'Kirli dereyi temizleyen Tiko, balıklara yeniden ev verdi ve ormana bayram yaptırdı.',
    tip: 'Sabır oyunu: 10 adım yavaş yürü, her adımda bir iyilik düşün.',
  },
  {
    id: 'simsek-ruzgar',
    name: 'Şimşek Rüzgar',
    emoji: '⚡',
    color: 'linear-gradient(135deg, #f12711, #f5af19)',
    power: 'Hızlı yardım & spor cesareti',
    age: '6+',
    motto: 'İyilik en hızlı koşudur!',
    bio: 'Rüzgar, sporu seven özgün bir kahraman. Gücünü arkadaşlarına yardım etmek için kullanır.',
    adventure: 'Okul bahçesinde düşen topu yakalayıp küçük kardeşine geri verdi, sonra herkesi oyuna davet etti.',
    tip: 'Her gün 5 dakika hareket et — Rüzgar gibi enerjik ol!',
  },
  {
    id: 'luna-deniz',
    name: 'Luna Deniz',
    emoji: '🧜',
    color: 'linear-gradient(135deg, #2193b0, #6dd5ed)',
    power: 'Su temizliği & hayvan dili',
    age: '4+',
    motto: 'Mavi gezegeni birlikte koruyalım!',
    bio: 'Luna denizleri koruyan özgün bir karakter. Plastik yerine çözüm üretir.',
    adventure: 'Kıyıya vuran ağları toplayıp geri dönüşüm atölyesine götürdü; yunuslar şarkı söyledi.',
    tip: 'Plastik şişe yerine matara kullan — Luna seninle gurur duyar.',
  },
  {
    id: 'mira-renk',
    name: 'Mira Renk',
    emoji: '🎨',
    color: 'linear-gradient(135deg, #FF6B9D, #C44DFF)',
    power: 'Hayal gücü fırçası',
    age: '3+',
    motto: 'Hayal et, boya, gerçeğe dönüştür!',
    bio: 'Mira, sanatla dünyayı güzelleştiren telifsiz bir kahraman. Fırçası sihirli değil; cesareti sihirli.',
    adventure: 'Grileşen parkı renklerle doldurdu; çocuklar yeniden gülmeye başladı.',
    tip: 'Bugün bir resmi tamamla ve birine hediye et.',
  },
  {
    id: 'kuzey-pati',
    name: 'Kuzey Pati',
    emoji: '🐧',
    color: 'linear-gradient(135deg, #74ebd5, #ACB6E5)',
    power: 'Keşif haritası & takım ruhu',
    age: '5+',
    motto: 'Merak, en iyi pusuladır!',
    bio: 'Pati kutuplardan gelen özgün bir kaşif. Haritaları çizerek arkadaşlarını yönlendirir.',
    adventure: 'Kaybolan fok yavrusunu ışıklarla buldu ve onu ailesine kavuşturdu.',
    tip: 'Bir oda haritası çiz — kendi keşif görevini başlat.',
  },
]

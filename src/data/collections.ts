export interface CollectionItem {
  label: string
  page: string
  emoji: string
}

export interface Collection {
  id: string
  title: string
  emoji: string
  description: string
  tags: string[]
  items: CollectionItem[]
}

export const COLLECTIONS: Collection[] = [
  {
    id: 'uyku-zamani',
    title: 'Uyku Zamanı Sepeti',
    emoji: '🌙',
    description: 'Akşam rutini için sakin masallar, yumuşak tekerlemeler ve duygu check-in.',
    tags: ['uyku', 'rutin', 'sakin'],
    items: [
      { label: 'Uyuyan Yıldız masalı', page: 'audio', emoji: '⭐' },
      { label: 'Ay Bahçesi', page: 'audio', emoji: '🌙' },
      { label: 'Ninni tekerlemeleri', page: 'rhymes', emoji: '🎵' },
      { label: 'Yatış öncesi duygu', page: 'feelings', emoji: '💛' },
      { label: 'Sakin boyama', page: 'coloring', emoji: '🖍️' },
    ],
  },
  {
    id: 'yagmurlu-gun',
    title: 'Yağmurlu Gün Kutusu',
    emoji: '☔',
    description: 'Evde kalınan günler için sanat, bilim ve oyun dolu seçki.',
    tags: ['iç mekan', 'yağmur', 'eğlence'],
    items: [
      { label: 'STEM yağmur bulutu', page: 'stem', emoji: '☁️' },
      { label: 'Eğlence çarkı', page: 'fun', emoji: '🎡' },
      { label: 'Hafıza oyunu', page: 'activities', emoji: '🧠' },
      { label: 'Büyük boyama', page: 'coloring', emoji: '🎨' },
      { label: 'AI yağmur hikâyesi', page: 'create', emoji: '✨' },
      { label: 'Çıktı etkinlikleri', page: 'printables', emoji: '🖨️' },
    ],
  },
  {
    id: 'okul-oncesi-baslangic',
    title: 'Okul Öncesi Başlangıç',
    emoji: '🎒',
    description: '3–5 yaş için ilk rutin: masal, tekerleme, duygu ve kısa görevler.',
    tags: ['okul öncesi', 'başlangıç', '3-5'],
    items: [
      { label: 'Kısa sesli masallar', page: 'audio', emoji: '🎧' },
      { label: 'Tekerleme korosu', page: 'rhymes', emoji: '🎶' },
      { label: 'Duygu köşesi', page: 'feelings', emoji: '😊' },
      { label: 'Kolay boyamalar', page: 'coloring', emoji: '🖍️' },
      { label: 'Günlük mini görev', page: 'quests', emoji: '⭐' },
    ],
  },
  {
    id: 'ilkokul-enerji',
    title: 'İlkokul Enerji Paketi',
    emoji: '⚡',
    description: '6–8 yaş için okuma, oyun ve STEM karışımı hareketli seçki.',
    tags: ['ilkokul', '6-8', 'öğrenme'],
    items: [
      { label: 'Kahraman hikâyeleri', page: 'heroes', emoji: '🦸' },
      { label: 'Oyun salonu', page: 'activities', emoji: '🎮' },
      { label: 'Bilim kartları', page: 'stem', emoji: '🔬' },
      { label: 'Görev panosu', page: 'quests', emoji: '📋' },
      { label: 'Çalışma kağıtları', page: 'printables', emoji: '📄' },
    ],
  },
  {
    id: 'bilim-cumasi',
    title: 'Bilim Cuması',
    emoji: '🧪',
    description: 'Haftada bir gün deney, gözlem ve keşif hikâyesi.',
    tags: ['stem', 'cuma', 'merak'],
    items: [
      { label: 'STEM laboratuvarı', page: 'stem', emoji: '🔬' },
      { label: 'Keşif masalları', page: 'audio', emoji: '🚀' },
      { label: 'Mini bilim quiz', page: 'activities', emoji: '❓' },
      { label: 'Gözlem boyaması', page: 'coloring', emoji: '🌈' },
      { label: 'Deney notu çıktısı', page: 'printables', emoji: '📝' },
    ],
  },
  {
    id: 'sanat-pazartesi',
    title: 'Sanat Pazartesi',
    emoji: '🖼️',
    description: 'Haftaya renk ve yaratıcılıkla başlamak için sanat odaklı koleksiyon.',
    tags: ['sanat', 'boyama', 'yaratıcılık'],
    items: [
      { label: 'Boyama galerisi', page: 'coloring', emoji: '🎨' },
      { label: 'Doodle bahçesi', page: 'fun', emoji: '✏️' },
      { label: 'Resimli masal yap', page: 'create', emoji: '📖' },
      { label: 'Sanat görevi', page: 'quests', emoji: '⭐' },
      { label: 'Yazdır-boya seti', page: 'printables', emoji: '🖨️' },
    ],
  },
  {
    id: 'cesaret-kitabi',
    title: 'Cesaret Kitabı',
    emoji: '🦁',
    description: 'Korkuyu konuşmak, denemek ve nazik güç keşfetmek için hikâyeler.',
    tags: ['cesaret', 'özgüven', 'hikaye'],
    items: [
      { label: 'Cesur kaplumbağa', page: 'audio', emoji: '🐢' },
      { label: 'Özgün kahramanlar', page: 'heroes', emoji: '🦸' },
      { label: 'Duygu adımları', page: 'feelings', emoji: '💛' },
      { label: 'Cesaret hikâyesi yaz', page: 'create', emoji: '✨' },
      { label: 'Günün görevi', page: 'quests', emoji: '🏅' },
    ],
  },
  {
    id: 'dostluk-gunu',
    title: 'Dostluk Günü',
    emoji: '💞',
    description: 'Paylaşmak, birlikte oynamak ve arkadaşlık üzerine sıcak içerikler.',
    tags: ['dostluk', 'paylaşım', 'sosyal'],
    items: [
      { label: 'Ormanın dostları', page: 'audio', emoji: '🐻' },
      { label: 'Paylaşım tekerlemeleri', page: 'rhymes', emoji: '🎵' },
      { label: 'İkili oyunlar', page: 'activities', emoji: '🎲' },
      { label: 'Dostluk boyaması', page: 'coloring', emoji: '🖍️' },
      { label: 'Birlikte görev', page: 'quests', emoji: '🤝' },
    ],
  },
  {
    id: 'dogayi-sev',
    title: 'Doğayı Sev',
    emoji: '🌿',
    description: 'Deniz, orman, bitki ve gökyüzü temalı keşif paketi.',
    tags: ['doğa', 'çevre', 'keşif'],
    items: [
      { label: 'Deniz koruyucusu', page: 'audio', emoji: '🌊' },
      { label: 'Fasulye günlüğü', page: 'stem', emoji: '🌱' },
      { label: 'Doğa boyamaları', page: 'coloring', emoji: '🍃' },
      { label: 'Doğa kahramanı', page: 'heroes', emoji: '🦋' },
      { label: 'Keşif hikâyesi', page: 'create', emoji: '🗺️' },
    ],
  },
  {
    id: 'ebeveyn-rehberi',
    title: 'Ebeveyn Rehber Rafı',
    emoji: '☕',
    description: 'Rutin, ekran, duygu ve okul geçişi için aile blog seçkisi + pratik araçlar.',
    tags: ['ebeveyn', 'rehber', 'aile'],
    items: [
      { label: 'Aile blog yazıları', page: 'blog', emoji: '📝' },
      { label: 'Duygu köşesi', page: 'feelings', emoji: '💛' },
      { label: 'Günlük görev fikri', page: 'quests', emoji: '⭐' },
      { label: 'Yazdırılabilir planlar', page: 'printables', emoji: '🖨️' },
      { label: 'Sesli okuma masalları', page: 'audio', emoji: '🎧' },
    ],
  },
  {
    id: 'hizli-15',
    title: '15 Dakikalık Mucize',
    emoji: '⏱️',
    description: 'Yoğun günler için kısa, doyurucu ve tamamlanabilir aktiviteler.',
    tags: ['hızlı', 'kısa', 'pratik'],
    items: [
      { label: '3 dk duygu', page: 'feelings', emoji: '💛' },
      { label: '5 dk tekerleme', page: 'rhymes', emoji: '🎵' },
      { label: '5 dk masal', page: 'audio', emoji: '🎧' },
      { label: 'Mini görev', page: 'quests', emoji: '⭐' },
      { label: 'Hızlı oyun', page: 'activities', emoji: '🎮' },
    ],
  },
  {
    id: 'yaratici-yazarlar',
    title: 'Yaratıcı Yazarlar Kulübü',
    emoji: '🖋️',
    description: 'Hikâye kurma, kahraman geliştirme ve hayal gücü egzersizleri.',
    tags: ['yazma', 'hikaye', 'yaratıcılık'],
    items: [
      { label: 'AI hikaye kitabı', page: 'create', emoji: '✨' },
      { label: 'Kahraman galerisi', page: 'heroes', emoji: '🦸' },
      { label: 'İlham masalları', page: 'audio', emoji: '📚' },
      { label: 'Kelime oyunları', page: 'activities', emoji: '🔤' },
      { label: 'Yazma çıktıları', page: 'printables', emoji: '📄' },
    ],
  },
  {
    id: 'duygu-okuryazarligi',
    title: 'Duygu Okuryazarlığı',
    emoji: '💬',
    description: 'Hisleri adlandırmak, sakinleşmek ve empati kurmak için adım adım seçki.',
    tags: ['duygu', 'empati', 'iletişim'],
    items: [
      { label: 'Duygu kartları', page: 'feelings', emoji: '💛' },
      { label: 'Yumuşak masallar', page: 'audio', emoji: '🌙' },
      { label: 'Nazik kahramanlar', page: 'heroes', emoji: '🫶' },
      { label: 'Aile iletişim blogu', page: 'blog', emoji: '📰' },
      { label: 'Sakin boyama', page: 'coloring', emoji: '🎨' },
    ],
  },
  {
    id: 'hafta-sonu-festivali',
    title: 'Hafta Sonu Festivali',
    emoji: '🎉',
    description: 'Cumartesi-pazar için eğlence, sanat, bilim ve aile zamanı menüsü.',
    tags: ['hafta sonu', 'aile', 'festival'],
    items: [
      { label: 'Eğlence bahçesi', page: 'fun', emoji: '🎡' },
      { label: 'STEM deneyi', page: 'stem', emoji: '🧪' },
      { label: 'Uzun boyama', page: 'coloring', emoji: '🖼️' },
      { label: 'Aile masalı', page: 'audio', emoji: '👪' },
      { label: 'Görev avı', page: 'quests', emoji: '🗺️' },
      { label: 'Hikaye yarat', page: 'create', emoji: '✨' },
    ],
  },
  {
    id: 'okula-donus',
    title: 'Okula Dönüş Sepeti',
    emoji: '📘',
    description: 'Yumuşak geçiş: rutin, ödev alışkanlığı, duygu ve kısa öğrenme molaları.',
    tags: ['okul', 'rutin', 'hazırlık'],
    items: [
      { label: 'Okula dönüş blogu', page: 'blog', emoji: '🎒' },
      { label: 'Ödev destek görevleri', page: 'quests', emoji: '✏️' },
      { label: 'Çalışma kağıtları', page: 'printables', emoji: '🖨️' },
      { label: 'Odak oyunları', page: 'activities', emoji: '🧠' },
      { label: 'Motivasyon kahramanı', page: 'heroes', emoji: '🦸' },
      { label: 'Akşam sakin masal', page: 'audio', emoji: '🌙' },
    ],
  },
]

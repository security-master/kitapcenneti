export interface ColoringPage {
  id: string
  title: string
  emoji: string
  age: string
  category: string
  description: string
}

export const COLORING_CATEGORIES = [
  'Tümü',
  'Hayvanlar',
  'Kahramanlar',
  'Masal',
  'Uzay',
  'Deniz',
  'Doğa',
  'Taşıtlar',
  'Bilim',
  'Mevsim',
] as const

export const COLORING_PAGES: ColoringPage[] = [
  { id: 'unicorn', title: 'Mutlu Unicorn', emoji: '🦄', age: '3+', category: 'Hayvanlar', description: 'Gökkuşağı yeleli sevimli unicorn' },
  { id: 'cat', title: 'Oyuncu Kedi', emoji: '🐱', age: '3+', category: 'Hayvanlar', description: 'Yumakla oynayan kedi' },
  { id: 'puppy', title: 'Minik Köpek', emoji: '🐶', age: '3+', category: 'Hayvanlar', description: 'Kulakları sarkık sevimli köpek' },
  { id: 'owl', title: 'Bilge Baykuş', emoji: '🦉', age: '4+', category: 'Hayvanlar', description: 'Dalda oturan baykuş' },
  { id: 'elephant', title: 'Fil Yavrusu', emoji: '🐘', age: '3+', category: 'Hayvanlar', description: 'Çiçek tutan minik fil' },
  { id: 'turtle', title: 'Cesur Kaplumbağa', emoji: '🐢', age: '3+', category: 'Kahramanlar', description: 'Tiko karakterinin boyama sayfası' },
  { id: 'star-hero', title: 'Yıldız Kız Nova', emoji: '🌟', age: '5+', category: 'Kahramanlar', description: 'Nova\'nın özgün silueti' },
  { id: 'luna', title: 'Luna Deniz', emoji: '🧜', age: '4+', category: 'Kahramanlar', description: 'Deniz koruyucusu Luna' },
  { id: 'rocket', title: 'Uzay Roketi', emoji: '🚀', age: '4+', category: 'Uzay', description: 'Yıldızların arasında uçan roket' },
  { id: 'planet', title: 'Renkli Gezegen', emoji: '🪐', age: '5+', category: 'Uzay', description: 'Halkalı gezegen ve yıldızlar' },
  { id: 'astronaut', title: 'Küçük Astronot', emoji: '👨‍🚀', age: '5+', category: 'Uzay', description: 'Ay\'da yürüyen astronot' },
  { id: 'castle', title: 'Sihirli Kale', emoji: '🏰', age: '5+', category: 'Masal', description: 'Bulutların üstündeki kale' },
  { id: 'dragon', title: 'İyi Ejderha', emoji: '🐉', age: '5+', category: 'Masal', description: 'Baloncuk üreten ejderha' },
  { id: 'fairy', title: 'Çiçek Peri', emoji: '🧚', age: '4+', category: 'Masal', description: 'Kanatlı peri ve çiçekler' },
  { id: 'fish', title: 'Mercan Balığı', emoji: '🐠', age: '3+', category: 'Deniz', description: 'Renkli deniz altı dünyası' },
  { id: 'octopus', title: 'Gülen Ahtapot', emoji: '🐙', age: '3+', category: 'Deniz', description: 'Sekiz kollu neşeli ahtapot' },
  { id: 'submarine', title: 'Sarı Denizaltı', emoji: '🚢', age: '5+', category: 'Deniz', description: 'Pencereli mini denizaltı' },
  { id: 'treehouse', title: 'Ağaç Ev', emoji: '🌳', age: '4+', category: 'Doğa', description: 'Ormandaki eğlenceli ağaç ev' },
  { id: 'butterfly', title: 'Kelebek Bahçesi', emoji: '🦋', age: '3+', category: 'Doğa', description: 'Çiçekler ve kelebekler' },
  { id: 'rainbow', title: 'Gökkuşağı Köprüsü', emoji: '🌈', age: '3+', category: 'Doğa', description: 'İki bulutu birleştiren gökkuşağı' },
  { id: 'flower', title: 'Çiçek Buketi', emoji: '🌸', age: '3+', category: 'Doğa', description: 'Vazoda renkli çiçekler' },
  { id: 'dino', title: 'Sevimli Dinozor', emoji: '🦕', age: '4+', category: 'Hayvanlar', description: 'Gülümseyen uzun boyunlu dino' },
  { id: 'robot', title: 'Dost Robot', emoji: '🤖', age: '6+', category: 'Bilim', description: 'Gülen yardımcı robot' },
  { id: 'car', title: 'Neşeli Araba', emoji: '🚗', age: '3+', category: 'Taşıtlar', description: 'Gülen yüzlü araba' },
  { id: 'train', title: 'Oyuncak Tren', emoji: '🚂', age: '3+', category: 'Taşıtlar', description: 'Vagonlarıyla tren' },
  { id: 'hotair', title: 'Uçan Balon', emoji: '🎈', age: '4+', category: 'Taşıtlar', description: 'Gökyüzünde sıcak hava balonu' },
  { id: 'snowman', title: 'Kardan Adam', emoji: '⛄', age: '3+', category: 'Mevsim', description: 'Atkılı kardan adam' },
  { id: 'sunflower', title: 'Ayçiçeği', emoji: '🌻', age: '3+', category: 'Mevsim', description: 'Büyük ayçiçeği ve arı' },
  { id: 'icecream', title: 'Dondurma Külahı', emoji: '🍦', age: '3+', category: 'Mevsim', description: 'Üç toplu dondurma' },
  { id: 'birthday', title: 'Doğum Günü Pastası', emoji: '🎂', age: '4+', category: 'Masal', description: 'Mumlu pasta ve hediyeler' },
  { id: 'lion', title: 'Sevimli Aslan', emoji: '🦁', age: '4+', category: 'Hayvanlar', description: 'Yeleli gülümseyen aslan' },
  { id: 'rabbit', title: 'Zıplayan Tavşan', emoji: '🐰', age: '3+', category: 'Hayvanlar', description: 'Havuç tutan sevimli tavşan' },
  { id: 'fox', title: 'Orman Tilki', emoji: '🦊', age: '4+', category: 'Hayvanlar', description: 'Kuyruklu meraklı tilki' },
  { id: 'penguin', title: 'Kutup Pengueni', emoji: '🐧', age: '4+', category: 'Hayvanlar', description: 'Buz üstünde yürüyen penguen' },
  { id: 'whale', title: 'Mavi Balina', emoji: '🐋', age: '5+', category: 'Deniz', description: 'Okyanusta yüzen dev balina' },
  { id: 'crab', title: 'Kırmızı Yengeç', emoji: '🦀', age: '3+', category: 'Deniz', description: 'Kumsalda yürüyen yengeç' },
  { id: 'starfish', title: 'Deniz Yıldızı', emoji: '⭐', age: '3+', category: 'Deniz', description: 'Beş kollu deniz yıldızı' },
  { id: 'mira', title: 'Mira Renk', emoji: '🎨', age: '5+', category: 'Kahramanlar', description: 'Sanat kahramanı Mira\'nın silueti' },
  { id: 'ruzgar', title: 'Şimşek Rüzgar', emoji: '⚡', age: '6+', category: 'Kahramanlar', description: 'Hızlı yardım kahramanı Rüzgar' },
  { id: 'kuzey', title: 'Kuzey Pati', emoji: '🐧', age: '5+', category: 'Kahramanlar', description: 'Kaşif penguen Pati' },
  { id: 'spaceship', title: 'Uzay Gemisi', emoji: '🛸', age: '5+', category: 'Uzay', description: 'Yıldızlara doğru uçan gemi' },
  { id: 'moon', title: 'Ay Yüzeyi', emoji: '🌙', age: '4+', category: 'Uzay', description: 'Kraterli ay manzarası' },
  { id: 'comet', title: 'Kuyruklu Yıldız', emoji: '☄️', age: '6+', category: 'Uzay', description: 'Parlak kuyruklu yıldız' },
  { id: 'wizard', title: 'Sihirbaz Şapka', emoji: '🧙', age: '5+', category: 'Masal', description: 'Sihirli şapka ve asa' },
  { id: 'princess', title: 'Prenses Taç', emoji: '👸', age: '4+', category: 'Masal', description: 'Taçlı prenses silueti' },
  { id: 'knight', title: 'Cesur Şövalye', emoji: '⚔️', age: '6+', category: 'Masal', description: 'Kalkanlı şövalye' },
  { id: 'mushroom', title: 'Orman Mantarı', emoji: '🍄', age: '3+', category: 'Doğa', description: 'Ormandaki kırmızı mantar' },
  { id: 'camping', title: 'Kamp Çadırı', emoji: '⛺', age: '5+', category: 'Doğa', description: 'Ormanda kamp çadırı' },
  { id: 'bee', title: 'Çalışkan Arı', emoji: '🐝', age: '3+', category: 'Doğa', description: 'Çiçekte bal toplayan arı' },
  { id: 'tractor', title: 'Kırmızı Traktör', emoji: '🚜', age: '4+', category: 'Taşıtlar', description: 'Tarladaki traktör' },
  { id: 'helicopter', title: 'Kurtarma Helikopteri', emoji: '🚁', age: '5+', category: 'Taşıtlar', description: 'Gökyüzünde uçan helikopter' },
  { id: 'bicycle', title: 'Renkli Bisiklet', emoji: '🚲', age: '4+', category: 'Taşıtlar', description: 'Zil sesli bisiklet' },
  { id: 'microscope', title: 'Mikroskop', emoji: '🔬', age: '7+', category: 'Bilim', description: 'Küçük dünyayı inceleyen mikroskop' },
  { id: 'volcano', title: 'Volkan', emoji: '🌋', age: '6+', category: 'Bilim', description: 'Patlayan volkan ve lav' },
  { id: 'spring', title: 'İlkbahar Bahçesi', emoji: '🌷', age: '3+', category: 'Mevsim', description: 'Laleler ve kelebekler' },
  { id: 'autumn', title: 'Sonbahar Yaprakları', emoji: '🍂', age: '3+', category: 'Mevsim', description: 'Dökülen renkli yapraklar' },
  { id: 'rainboots', title: 'Yağmur Botu', emoji: '🌧️', age: '3+', category: 'Mevsim', description: 'Su birikintisinde botlar' },
  { id: 'kite', title: 'Uçan Uçurtma', emoji: '🪁', age: '4+', category: 'Doğa', description: 'Rüzgârda dans eden uçurtma' },
  { id: 'picnic', title: 'Piknik Sepeti', emoji: '🧺', age: '4+', category: 'Doğa', description: 'Sepet, örtü ve elma' },
  { id: 'boyama-ek-1', title: 'Orman Ördeği', emoji: '🦆', age: '3+', category: 'Hayvanlar', description: 'Orman Ördeği boyama sayfası — özgün çizim' },
  { id: 'boyama-ek-2', title: 'Kirpi Yavrusu', emoji: '🦔', age: '4+', category: 'Doğa', description: 'Kirpi Yavrusu boyama sayfası — özgün çizim' },
  { id: 'boyama-ek-3', title: 'Flamingo', emoji: '🦩', age: '5+', category: 'Uzay', description: 'Flamingo boyama sayfası — özgün çizim' },
  { id: 'boyama-ek-4', title: 'Sincap', emoji: '🐿️', age: '6+', category: 'Deniz', description: 'Sincap boyama sayfası — özgün çizim' },
  { id: 'boyama-ek-5', title: 'Papağan', emoji: '🦜', age: '3+', category: 'Mevsim', description: 'Papağan boyama sayfası — özgün çizim' },
  { id: 'boyama-ek-6', title: 'Çiçek Bahçesi', emoji: '🌺', age: '4+', category: 'Masal', description: 'Çiçek Bahçesi boyama sayfası — özgün çizim' },
  { id: 'boyama-ek-7', title: 'Kaktüs', emoji: '🌵', age: '5+', category: 'Taşıtlar', description: 'Kaktüs boyama sayfası — özgün çizim' },
  { id: 'boyama-ek-8', title: 'Palmiye', emoji: '🌴', age: '6+', category: 'Bilim', description: 'Palmiye boyama sayfası — özgün çizim' },
  { id: 'boyama-ek-9', title: 'Satürn', emoji: '🪐', age: '3+', category: 'Kahramanlar', description: 'Satürn boyama sayfası — özgün çizim' },
  { id: 'boyama-ek-10', title: 'UFO', emoji: '🛸', age: '4+', category: 'Hayvanlar', description: 'UFO boyama sayfası — özgün çizim' },
  { id: 'boyama-ek-11', title: 'Galaksi', emoji: '🌌', age: '5+', category: 'Doğa', description: 'Galaksi boyama sayfası — özgün çizim' },
  { id: 'boyama-ek-12', title: 'Ahtapot', emoji: '🐙', age: '6+', category: 'Uzay', description: 'Ahtapot boyama sayfası — özgün çizim' },
  { id: 'boyama-ek-13', title: 'Köpekbalığı', emoji: '🦈', age: '3+', category: 'Deniz', description: 'Köpekbalığı boyama sayfası — özgün çizim' },
  { id: 'boyama-ek-14', title: 'Deniz Kabuğu', emoji: '🐚', age: '4+', category: 'Mevsim', description: 'Deniz Kabuğu boyama sayfası — özgün çizim' },
  { id: 'boyama-ek-15', title: 'Sonbahar Yaprak', emoji: '🍁', age: '5+', category: 'Masal', description: 'Sonbahar Yaprak boyama sayfası — özgün çizim' },
  { id: 'boyama-ek-16', title: 'Kış Kar Tanesi', emoji: '🌨️', age: '6+', category: 'Taşıtlar', description: 'Kış Kar Tanesi boyama sayfası — özgün çizim' },
  { id: 'boyama-ek-17', title: 'Ayçiçeği Tarlası', emoji: '🌻', age: '3+', category: 'Bilim', description: 'Ayçiçeği Tarlası boyama sayfası — özgün çizim' },
  { id: 'boyama-ek-18', title: 'Mantar Ormanı', emoji: '🍄', age: '4+', category: 'Kahramanlar', description: 'Mantar Ormanı boyama sayfası — özgün çizim' },
  { id: 'boyama-ek-19', title: 'Helikopter', emoji: '🚁', age: '5+', category: 'Hayvanlar', description: 'Helikopter boyama sayfası — özgün çizim' },
  { id: 'boyama-ek-20', title: 'Scooter', emoji: '🚲', age: '6+', category: 'Doğa', description: 'Scooter boyama sayfası — özgün çizim' },
  { id: 'boyama-ek-21', title: 'Kano', emoji: '🛶', age: '3+', category: 'Uzay', description: 'Kano boyama sayfası — özgün çizim' },
  { id: 'boyama-ek-22', title: 'Yelkenli', emoji: '⛵', age: '4+', category: 'Deniz', description: 'Yelkenli boyama sayfası — özgün çizim' },
  { id: 'boyama-ek-23', title: 'Sirk Çadırı', emoji: '🎪', age: '5+', category: 'Mevsim', description: 'Sirk Çadırı boyama sayfası — özgün çizim' },
  { id: 'boyama-ek-24', title: 'Atlıkarınca', emoji: '🎠', age: '6+', category: 'Masal', description: 'Atlıkarınca boyama sayfası — özgün çizim' },
  { id: 'boyama-ek-25', title: 'Teleskop', emoji: '🔭', age: '3+', category: 'Taşıtlar', description: 'Teleskop boyama sayfası — özgün çizim' },
  { id: 'boyama-ek-26', title: 'Deney Tüpleri', emoji: '🧪', age: '4+', category: 'Bilim', description: 'Deney Tüpleri boyama sayfası — özgün çizim' },
  { id: 'boyama-ek-27', title: 'Mini Kahraman', emoji: '🦸', age: '5+', category: 'Kahramanlar', description: 'Mini Kahraman boyama sayfası — özgün çizim' },
  { id: 'boyama-ek-28', title: 'Peri', emoji: '🧚', age: '6+', category: 'Hayvanlar', description: 'Peri boyama sayfası — özgün çizim' },
  { id: 'boyama-ek-29', title: 'Ejderha Yavrusu', emoji: '🐲', age: '3+', category: 'Doğa', description: 'Ejderha Yavrusu boyama sayfası — özgün çizim' },
  { id: 'boyama-ek-30', title: 'Kartal', emoji: '🦅', age: '4+', category: 'Uzay', description: 'Kartal boyama sayfası — özgün çizim' },
  { id: 'boyama-ek-31', title: 'Fok Balığı', emoji: '🦭', age: '5+', category: 'Deniz', description: 'Fok Balığı boyama sayfası — özgün çizim' },
  { id: 'color-portal-1', title: 'Boyama 1', emoji: '🦊', age: '4+', category: 'Kahramanlar', description: 'Portal boyama sayfası 1 — telifsiz çizgi.' },
  { id: 'color-portal-2', title: 'Boyama 2', emoji: '🌙', age: '5+', category: 'Masal', description: 'Portal boyama sayfası 2 — telifsiz çizgi.' },
  { id: 'color-portal-3', title: 'Boyama 3', emoji: '🌊', age: '6+', category: 'Uzay', description: 'Portal boyama sayfası 3 — telifsiz çizgi.' },
  { id: 'color-portal-4', title: 'Boyama 4', emoji: '🚀', age: '3+', category: 'Deniz', description: 'Portal boyama sayfası 4 — telifsiz çizgi.' },
  { id: 'color-portal-5', title: 'Boyama 5', emoji: '🌿', age: '4+', category: 'Doğa', description: 'Portal boyama sayfası 5 — telifsiz çizgi.' },
  { id: 'color-portal-6', title: 'Boyama 6', emoji: '🎈', age: '5+', category: 'Taşıtlar', description: 'Portal boyama sayfası 6 — telifsiz çizgi.' },
  { id: 'color-portal-7', title: 'Boyama 7', emoji: '🐻', age: '6+', category: 'Bilim', description: 'Portal boyama sayfası 7 — telifsiz çizgi.' },
  { id: 'color-portal-8', title: 'Boyama 8', emoji: '🦋', age: '3+', category: 'Mevsim', description: 'Portal boyama sayfası 8 — telifsiz çizgi.' },
  { id: 'color-portal-9', title: 'Boyama 9', emoji: '🌈', age: '4+', category: 'Hayvanlar', description: 'Portal boyama sayfası 9 — telifsiz çizgi.' },
  { id: 'color-portal-10', title: 'Boyama 10', emoji: '🐢', age: '5+', category: 'Kahramanlar', description: 'Portal boyama sayfası 10 — telifsiz çizgi.' },
  { id: 'color-portal-11', title: 'Boyama 11', emoji: '🦄', age: '6+', category: 'Masal', description: 'Portal boyama sayfası 11 — telifsiz çizgi.' },
  { id: 'color-portal-12', title: 'Boyama 12', emoji: '🐠', age: '3+', category: 'Uzay', description: 'Portal boyama sayfası 12 — telifsiz çizgi.' },
  { id: 'color-portal-13', title: 'Boyama 13', emoji: '🌻', age: '4+', category: 'Deniz', description: 'Portal boyama sayfası 13 — telifsiz çizgi.' },
  { id: 'color-portal-14', title: 'Boyama 14', emoji: '🏰', age: '5+', category: 'Doğa', description: 'Portal boyama sayfası 14 — telifsiz çizgi.' },
  { id: 'color-portal-15', title: 'Boyama 15', emoji: '🧠', age: '6+', category: 'Taşıtlar', description: 'Portal boyama sayfası 15 — telifsiz çizgi.' },
  { id: 'color-portal-16', title: 'Boyama 16', emoji: '💛', age: '3+', category: 'Bilim', description: 'Portal boyama sayfası 16 — telifsiz çizgi.' },
  { id: 'color-portal-17', title: 'Boyama 17', emoji: '🎵', age: '4+', category: 'Mevsim', description: 'Portal boyama sayfası 17 — telifsiz çizgi.' },
  { id: 'color-portal-18', title: 'Boyama 18', emoji: '⭐', age: '5+', category: 'Hayvanlar', description: 'Portal boyama sayfası 18 — telifsiz çizgi.' },
  { id: 'color-portal-19', title: 'Boyama 19', emoji: '🦊', age: '6+', category: 'Kahramanlar', description: 'Portal boyama sayfası 19 — telifsiz çizgi.' },
  { id: 'color-portal-20', title: 'Boyama 20', emoji: '🌙', age: '3+', category: 'Masal', description: 'Portal boyama sayfası 20 — telifsiz çizgi.' },
  { id: 'color-portal-21', title: 'Boyama 21', emoji: '🌊', age: '4+', category: 'Uzay', description: 'Portal boyama sayfası 21 — telifsiz çizgi.' },
  { id: 'color-portal-22', title: 'Boyama 22', emoji: '🚀', age: '5+', category: 'Deniz', description: 'Portal boyama sayfası 22 — telifsiz çizgi.' },
  { id: 'color-portal-23', title: 'Boyama 23', emoji: '🌿', age: '6+', category: 'Doğa', description: 'Portal boyama sayfası 23 — telifsiz çizgi.' },
  { id: 'color-portal-24', title: 'Boyama 24', emoji: '🎈', age: '3+', category: 'Taşıtlar', description: 'Portal boyama sayfası 24 — telifsiz çizgi.' },
  { id: 'color-portal-25', title: 'Boyama 25', emoji: '🐻', age: '4+', category: 'Bilim', description: 'Portal boyama sayfası 25 — telifsiz çizgi.' },
  { id: 'color-portal-26', title: 'Boyama 26', emoji: '🦋', age: '5+', category: 'Mevsim', description: 'Portal boyama sayfası 26 — telifsiz çizgi.' },
  { id: 'color-portal-27', title: 'Boyama 27', emoji: '🌈', age: '6+', category: 'Hayvanlar', description: 'Portal boyama sayfası 27 — telifsiz çizgi.' },
  { id: 'color-portal-28', title: 'Boyama 28', emoji: '🐢', age: '3+', category: 'Kahramanlar', description: 'Portal boyama sayfası 28 — telifsiz çizgi.' },
  { id: 'color-portal-29', title: 'Boyama 29', emoji: '🦄', age: '4+', category: 'Masal', description: 'Portal boyama sayfası 29 — telifsiz çizgi.' },
  { id: 'color-portal-30', title: 'Boyama 30', emoji: '🐠', age: '5+', category: 'Uzay', description: 'Portal boyama sayfası 30 — telifsiz çizgi.' },
  { id: 'color-portal-31', title: 'Boyama 31', emoji: '🌻', age: '6+', category: 'Deniz', description: 'Portal boyama sayfası 31 — telifsiz çizgi.' },
  { id: 'color-portal-32', title: 'Boyama 32', emoji: '🏰', age: '3+', category: 'Doğa', description: 'Portal boyama sayfası 32 — telifsiz çizgi.' },
  { id: 'color-portal-33', title: 'Boyama 33', emoji: '🧠', age: '4+', category: 'Taşıtlar', description: 'Portal boyama sayfası 33 — telifsiz çizgi.' },
  { id: 'color-portal-34', title: 'Boyama 34', emoji: '💛', age: '5+', category: 'Bilim', description: 'Portal boyama sayfası 34 — telifsiz çizgi.' },
  { id: 'color-portal-35', title: 'Boyama 35', emoji: '🎵', age: '6+', category: 'Mevsim', description: 'Portal boyama sayfası 35 — telifsiz çizgi.' },
  { id: 'color-portal-36', title: 'Boyama 36', emoji: '⭐', age: '3+', category: 'Hayvanlar', description: 'Portal boyama sayfası 36 — telifsiz çizgi.' },
  { id: 'color-portal-37', title: 'Boyama 37', emoji: '🦊', age: '4+', category: 'Kahramanlar', description: 'Portal boyama sayfası 37 — telifsiz çizgi.' },
  { id: 'color-portal-38', title: 'Boyama 38', emoji: '🌙', age: '5+', category: 'Masal', description: 'Portal boyama sayfası 38 — telifsiz çizgi.' },
  { id: 'color-portal-39', title: 'Boyama 39', emoji: '🌊', age: '6+', category: 'Uzay', description: 'Portal boyama sayfası 39 — telifsiz çizgi.' },
  { id: 'color-portal-40', title: 'Boyama 40', emoji: '🚀', age: '3+', category: 'Deniz', description: 'Portal boyama sayfası 40 — telifsiz çizgi.' }
]

const S = `fill="none" stroke="#1a1a1a" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"`
const S2 = `fill="none" stroke="#1a1a1a" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"`
const vb = (inner: string, footer = 'Kitap Cenneti') =>
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 420" width="400" height="420">${inner}<text x="200" y="408" text-anchor="middle" font-family="Nunito,Arial,sans-serif" font-size="14" fill="#777">${footer}</text></svg>`

export function getColoringSvg(id: string): string {
  const map: Record<string, string> = {
    unicorn: vb(`
      <ellipse cx="190" cy="270" rx="95" ry="72" ${S}/>
      <circle cx="265" cy="155" r="58" ${S}/>
      <path d="M235 115 L255 45 L278 115" ${S}/>
      <path d="M300 140 Q350 95 365 155" ${S}/>
      <path d="M300 155 Q345 130 360 175" ${S2}/>
      <circle cx="280" cy="148" r="5" fill="#1a1a1a"/>
      <path d="M255 175 Q275 190 295 175" ${S2}/>
      <ellipse cx="120" cy="245" rx="28" ry="18" ${S}/>
      <path d="M115 300 L95 360" ${S}/><path d="M165 330 L155 375" ${S}/>
      <path d="M230 330 L245 375" ${S}/><path d="M275 295 L300 355" ${S}/>
      <path d="M145 210 Q170 170 200 210" ${S2}/>
      <circle cx="70" cy="80" r="10" ${S2}/><circle cx="330" cy="70" r="7" ${S2}/>
    `, 'Mutlu Unicorn'),
    cat: vb(`
      <ellipse cx="200" cy="240" rx="85" ry="70" ${S}/>
      <circle cx="200" cy="145" r="55" ${S}/>
      <path d="M155 105 L145 55 L180 95" ${S}/>
      <path d="M245 105 L255 55 L220 95" ${S}/>
      <circle cx="180" cy="140" r="5" fill="#1a1a1a"/>
      <circle cx="220" cy="140" r="5" fill="#1a1a1a"/>
      <path d="M190 160 L200 170 L210 160" ${S2}/>
      <path d="M200 170 L200 185" ${S2}/>
      <path d="M200 175 Q170 185 155 170" ${S2}/>
      <path d="M200 175 Q230 185 245 170" ${S2}/>
      <path d="M275 230 Q340 180 350 250" ${S}/>
      <ellipse cx="145" cy="300" rx="22" ry="14" ${S}/>
      <ellipse cx="255" cy="300" rx="22" ry="14" ${S}/>
      <circle cx="300" cy="300" r="28" ${S2}/>
    `, 'Oyuncu Kedi'),
    puppy: vb(`
      <ellipse cx="200" cy="250" rx="90" ry="70" ${S}/>
      <circle cx="200" cy="150" r="60" ${S}/>
      <ellipse cx="145" cy="165" rx="28" ry="40" ${S}/>
      <ellipse cx="255" cy="165" rx="28" ry="40" ${S}/>
      <circle cx="180" cy="145" r="5" fill="#1a1a1a"/>
      <circle cx="220" cy="145" r="5" fill="#1a1a1a"/>
      <ellipse cx="200" cy="175" rx="18" ry="12" ${S2}/>
      <path d="M185 195 Q200 210 215 195" ${S2}/>
      <path d="M280 230 Q330 200 340 260" ${S}/>
      <ellipse cx="150" cy="310" rx="24" ry="16" ${S}/>
      <ellipse cx="250" cy="310" rx="24" ry="16" ${S}/>
      <circle cx="320" cy="90" r="8" ${S2}/>
    `, 'Minik Köpek'),
    owl: vb(`
      <ellipse cx="200" cy="230" rx="80" ry="95" ${S}/>
      <circle cx="170" cy="180" r="32" ${S}/>
      <circle cx="230" cy="180" r="32" ${S}/>
      <circle cx="170" cy="180" r="10" fill="#1a1a1a"/>
      <circle cx="230" cy="180" r="10" fill="#1a1a1a"/>
      <path d="M190 210 L200 230 L210 210 Z" ${S}/>
      <path d="M140 130 L160 160" ${S}/><path d="M260 130 L240 160" ${S}/>
      <path d="M150 280 Q200 310 250 280" ${S2}/>
      <rect x="175" y="320" width="18" height="30" ${S}/><rect x="207" y="320" width="18" height="30" ${S}/>
      <path d="M80 200 Q120 180 140 210" ${S2}/><path d="M320 200 Q280 180 260 210" ${S2}/>
    `, 'Bilge Baykuş'),
    elephant: vb(`
      <ellipse cx="200" cy="230" rx="100" ry="75" ${S}/>
      <circle cx="270" cy="160" r="50" ${S}/>
      <path d="M255 185 Q240 260 250 320 Q260 350 275 330" ${S}/>
      <circle cx="285" cy="150" r="5" fill="#1a1a1a"/>
      <path d="M300 120 Q320 90 340 130" ${S}/>
      <ellipse cx="140" cy="280" rx="25" ry="35" ${S}/>
      <ellipse cx="200" cy="295" rx="25" ry="35" ${S}/>
      <ellipse cx="250" cy="280" rx="22" ry="30" ${S}/>
      <path d="M110 220 Q70 200 80 250" ${S}/>
      <circle cx="90" cy="90" r="14" ${S2}/>
    `, 'Fil Yavrusu'),
    turtle: vb(`
      <ellipse cx="200" cy="220" rx="115" ry="80" ${S}/>
      <ellipse cx="200" cy="220" rx="75" ry="50" ${S}/>
      <path d="M140 185 L200 145 L260 185" ${S2}/>
      <path d="M150 220 L250 220" ${S2}/><path d="M200 160 L200 270" ${S2}/>
      <circle cx="305" cy="175" r="38" ${S}/>
      <circle cx="320" cy="165" r="4" fill="#1a1a1a"/>
      <path d="M330 180 Q350 188 345 205" ${S2}/>
      <ellipse cx="105" cy="185" rx="26" ry="18" ${S}/>
      <ellipse cx="95" cy="250" rx="26" ry="18" ${S}/>
      <ellipse cx="295" cy="260" rx="26" ry="18" ${S}/>
    `, 'Tiko'),
    'star-hero': vb(`
      <circle cx="200" cy="130" r="42" ${S}/>
      <path d="M200 30 L218 90 L280 90 L230 125 L248 185 L200 150 L152 185 L170 125 L120 90 L182 90 Z" ${S}/>
      <path d="M155 175 L140 300 L180 270 L200 330 L220 270 L260 300 L245 175 Z" ${S}/>
      <circle cx="185" cy="125" r="4" fill="#1a1a1a"/>
      <circle cx="215" cy="125" r="4" fill="#1a1a1a"/>
      <path d="M185 145 Q200 158 215 145" ${S2}/>
      <circle cx="80" cy="80" r="8" ${S2}/><circle cx="330" cy="100" r="6" ${S2}/>
    `, 'Nova'),
    luna: vb(`
      <ellipse cx="200" cy="260" rx="55" ry="90" ${S}/>
      <circle cx="200" cy="140" r="40" ${S}/>
      <path d="M160 170 Q120 220 150 280" ${S}/>
      <path d="M240 170 Q280 220 250 280" ${S}/>
      <path d="M140 200 Q90 160 70 210 Q90 250 140 230" ${S}/>
      <path d="M260 200 Q310 160 330 210 Q310 250 260 230" ${S}/>
      <circle cx="185" cy="135" r="4" fill="#1a1a1a"/>
      <circle cx="215" cy="135" r="4" fill="#1a1a1a"/>
      <path d="M185 155 Q200 165 215 155" ${S2}/>
      <path d="M60 300 Q120 280 160 320" ${S2}/><path d="M240 320 Q300 280 350 310" ${S2}/>
    `, 'Luna Deniz'),
    rocket: vb(`
      <path d="M200 40 L245 175 L200 155 L155 175 Z" ${S}/>
      <rect x="170" y="155" width="60" height="110" rx="10" ${S}/>
      <circle cx="200" cy="200" r="16" ${S}/>
      <path d="M170 265 L145 330 L170 305 Z" ${S}/>
      <path d="M230 265 L255 330 L230 305 Z" ${S}/>
      <path d="M185 265 L200 355 L215 265" ${S}/>
      <circle cx="70" cy="80" r="4" fill="#1a1a1a"/><circle cx="320" cy="110" r="4" fill="#1a1a1a"/>
      <circle cx="90" cy="160" r="3" fill="#1a1a1a"/><circle cx="310" cy="200" r="3" fill="#1a1a1a"/>
      <circle cx="60" cy="250" r="3" fill="#1a1a1a"/>
    `, 'Uzay Roketi'),
    planet: vb(`
      <circle cx="200" cy="200" r="80" ${S}/>
      <ellipse cx="200" cy="200" rx="130" ry="35" ${S}/>
      <ellipse cx="200" cy="200" rx="130" ry="35" ${S2} transform="rotate(-20 200 200)"/>
      <circle cx="170" cy="170" r="12" ${S2}/><circle cx="230" cy="210" r="18" ${S2}/>
      <circle cx="80" cy="80" r="4" fill="#1a1a1a"/><circle cx="320" cy="90" r="4" fill="#1a1a1a"/>
      <circle cx="60" cy="300" r="3" fill="#1a1a1a"/><circle cx="340" cy="280" r="5" fill="#1a1a1a"/>
    `, 'Renkli Gezegen'),
    astronaut: vb(`
      <circle cx="200" cy="120" r="45" ${S}/>
      <circle cx="200" cy="120" r="30" ${S2}/>
      <rect x="155" y="165" width="90" height="110" rx="16" ${S}/>
      <rect x="120" y="185" width="35" height="16" ${S}/><rect x="245" y="185" width="35" height="16" ${S}/>
      <rect x="165" y="275" width="28" height="45" ${S}/><rect x="207" y="275" width="28" height="45" ${S}/>
      <circle cx="200" cy="210" r="14" ${S2}/>
      <circle cx="70" cy="70" r="4" fill="#1a1a1a"/><circle cx="330" cy="100" r="3" fill="#1a1a1a"/>
      <path d="M50 320 Q200 280 350 330" ${S2}/>
    `, 'Küçük Astronot'),
    castle: vb(`
      <rect x="80" y="170" width="240" height="150" ${S}/>
      <rect x="55" y="100" width="55" height="220" ${S}/>
      <rect x="290" y="100" width="55" height="220" ${S}/>
      <path d="M55 100 L70 60 L85 100 L100 60 L110 100" ${S}/>
      <path d="M290 100 L305 60 L320 100 L335 60 L345 100" ${S}/>
      <path d="M140 170 L200 90 L260 170" ${S}/>
      <rect x="175" y="210" width="50" height="110" ${S}/>
      <rect x="100" y="210" width="30" height="40" ${S}/><rect x="270" y="210" width="30" height="40" ${S}/>
      <circle cx="200" cy="140" r="18" ${S2}/>
    `, 'Sihirli Kale'),
    dragon: vb(`
      <ellipse cx="175" cy="230" rx="100" ry="60" ${S}/>
      <circle cx="285" cy="165" r="42" ${S}/>
      <path d="M310 150 Q350 120 365 160" ${S}/>
      <circle cx="300" cy="155" r="5" fill="#1a1a1a"/>
      <path d="M90 230 Q45 190 30 235 Q50 275 90 245" ${S}/>
      <path d="M130 180 L155 120 L175 180" ${S}/><path d="M180 175 L205 110 L225 175" ${S}/>
      <ellipse cx="210" cy="280" rx="18" ry="28" ${S}/>
      <path d="M300 185 Q350 210 340 255" ${S}/>
      <circle cx="350" cy="270" r="14" ${S2}/><circle cx="365" cy="285" r="9" ${S2}/>
    `, 'İyi Ejderha'),
    fairy: vb(`
      <circle cx="200" cy="140" r="35" ${S}/>
      <ellipse cx="200" cy="240" rx="40" ry="70" ${S}/>
      <path d="M160 180 Q100 140 90 200 Q110 240 160 220" ${S}/>
      <path d="M240 180 Q300 140 310 200 Q290 240 240 220" ${S}/>
      <path d="M160 180 Q110 100 150 90 Q180 120 170 170" ${S2}/>
      <path d="M240 180 Q290 100 250 90 Q220 120 230 170" ${S2}/>
      <circle cx="188" cy="135" r="3" fill="#1a1a1a"/><circle cx="212" cy="135" r="3" fill="#1a1a1a"/>
      <path d="M188 152 Q200 162 212 152" ${S2}/>
      <circle cx="80" cy="300" r="16" ${S2}/><circle cx="320" cy="280" r="12" ${S2}/>
    `, 'Çiçek Peri'),
    fish: vb(`
      <ellipse cx="185" cy="200" rx="105" ry="58" ${S}/>
      <path d="M290 200 L355 145 L340 200 L355 255 Z" ${S}/>
      <circle cx="125" cy="185" r="9" ${S}/><circle cx="123" cy="183" r="3" fill="#1a1a1a"/>
      <path d="M150 220 Q190 250 235 220" ${S2}/>
      <path d="M175 155 Q200 125 225 155" ${S2}/>
      <circle cx="70" cy="90" r="18" ${S2}/><circle cx="100" cy="310" r="12" ${S2}/>
      <path d="M300 80 Q320 105 300 125 Q280 105 300 80" ${S2}/>
    `, 'Mercan Balığı'),
    octopus: vb(`
      <circle cx="200" cy="160" r="70" ${S}/>
      <circle cx="175" cy="150" r="8" fill="#1a1a1a"/><circle cx="225" cy="150" r="8" fill="#1a1a1a"/>
      <path d="M175 180 Q200 200 225 180" ${S2}/>
      <path d="M150 210 Q120 280 90 340" ${S}/><path d="M170 220 Q155 300 140 350" ${S}/>
      <path d="M190 225 Q185 310 180 355" ${S}/><path d="M210 225 Q215 310 220 355" ${S}/>
      <path d="M230 220 Q245 300 260 350" ${S}/><path d="M250 210 Q280 280 310 340" ${S}/>
      <circle cx="95" cy="300" r="8" ${S2}/><circle cx="305" cy="300" r="8" ${S2}/>
    `, 'Gülen Ahtapot'),
    submarine: vb(`
      <ellipse cx="200" cy="220" rx="130" ry="60" ${S}/>
      <rect x="170" y="140" width="60" height="50" rx="8" ${S}/>
      <circle cx="150" cy="220" r="22" ${S}/><circle cx="210" cy="220" r="22" ${S}/>
      <circle cx="270" cy="220" r="22" ${S}/>
      <path d="M70 220 L40 200 L40 240 Z" ${S}/>
      <rect x="195" y="110" width="12" height="30" ${S}/>
      <circle cx="80" cy="100" r="10" ${S2}/><circle cx="320" cy="90" r="6" ${S2}/>
    `, 'Sarı Denizaltı'),
    treehouse: vb(`
      <rect x="185" y="230" width="30" height="110" ${S}/>
      <ellipse cx="200" cy="180" rx="125" ry="95" ${S}/>
      <rect x="135" y="145" width="130" height="85" ${S}/>
      <path d="M135 145 L200 90 L265 145" ${S}/>
      <rect x="180" y="175" width="40" height="45" ${S}/>
      <path d="M145 230 L180 195" ${S2}/>
      <circle cx="80" cy="70" r="20" ${S2}/>
    `, 'Ağaç Ev'),
    butterfly: vb(`
      <line x1="200" y1="110" x2="200" y2="290" ${S}/>
      <ellipse cx="135" cy="155" rx="58" ry="72" ${S}/>
      <ellipse cx="265" cy="155" rx="58" ry="72" ${S}/>
      <ellipse cx="145" cy="245" rx="42" ry="52" ${S}/>
      <ellipse cx="255" cy="245" rx="42" ry="52" ${S}/>
      <circle cx="200" cy="110" r="14" ${S}/>
      <path d="M190 100 Q175 75 160 90" ${S2}/><path d="M210 100 Q225 75 240 90" ${S2}/>
      <circle cx="120" cy="155" r="12" ${S2}/><circle cx="280" cy="155" r="12" ${S2}/>
      <circle cx="80" cy="320" r="16" ${S2}/>
    `, 'Kelebek Bahçesi'),
    rainbow: vb(`
      <path d="M40 290 Q200 40 360 290" ${S}/>
      <path d="M60 290 Q200 70 340 290" ${S}/>
      <path d="M80 290 Q200 100 320 290" ${S}/>
      <path d="M100 290 Q200 130 300 290" ${S}/>
      <path d="M120 290 Q200 160 280 290" ${S}/>
      <ellipse cx="65" cy="295" rx="42" ry="26" ${S}/>
      <ellipse cx="335" cy="295" rx="42" ry="26" ${S}/>
      <circle cx="200" cy="210" r="16" ${S2}/>
    `, 'Gökkuşağı'),
    flower: vb(`
      <ellipse cx="200" cy="280" rx="35" ry="18" ${S}/>
      <line x1="200" y1="280" x2="200" y2="160" ${S}/>
      <circle cx="200" cy="140" r="22" ${S}/>
      <ellipse cx="200" cy="95" rx="20" ry="28" ${S}/>
      <ellipse cx="245" cy="120" rx="28" ry="20" ${S}/>
      <ellipse cx="245" cy="165" rx="28" ry="20" ${S}/>
      <ellipse cx="200" cy="185" rx="20" ry="28" ${S}/>
      <ellipse cx="155" cy="165" rx="28" ry="20" ${S}/>
      <ellipse cx="155" cy="120" rx="28" ry="20" ${S}/>
      <path d="M200 220 Q160 240 150 280" ${S2}/><path d="M200 240 Q240 255 255 290" ${S2}/>
    `, 'Çiçek Buketi'),
    dino: vb(`
      <path d="M75 290 Q100 155 205 175 Q285 190 305 135 Q325 110 350 135" ${S}/>
      <ellipse cx="185" cy="265" rx="95" ry="55" ${S}/>
      <circle cx="340" cy="125" r="30" ${S}/>
      <circle cx="350" cy="118" r="4" fill="#1a1a1a"/>
      <path d="M115 305 L95 360" ${S}/><path d="M160 318 L150 365" ${S}/>
      <path d="M215 318 L230 365" ${S}/><path d="M260 305 L285 355" ${S}/>
      <path d="M140 200 L155 155" ${S}/><path d="M185 190 L200 145" ${S}/><path d="M225 195 L245 150" ${S}/>
    `, 'Sevimli Dinozor'),
    robot: vb(`
      <rect x="125" y="95" width="150" height="105" rx="14" ${S}/>
      <rect x="148" y="205" width="104" height="115" rx="10" ${S}/>
      <circle cx="170" cy="140" r="14" ${S}/><circle cx="230" cy="140" r="14" ${S}/>
      <rect x="170" y="170" width="60" height="14" rx="5" ${S}/>
      <line x1="200" y1="60" x2="200" y2="95" ${S}/><circle cx="200" cy="50" r="12" ${S}/>
      <rect x="85" y="220" width="45" height="18" ${S}/><rect x="270" y="220" width="45" height="18" ${S}/>
      <rect x="158" y="320" width="28" height="40" ${S}/><rect x="214" y="320" width="28" height="40" ${S}/>
    `, 'Dost Robot'),
    car: vb(`
      <path d="M60 240 L90 180 L160 160 L260 160 L320 190 L350 240 Z" ${S}/>
      <path d="M60 240 L350 240 L340 280 L70 280 Z" ${S}/>
      <circle cx="120" cy="280" r="28" ${S}/><circle cx="290" cy="280" r="28" ${S}/>
      <circle cx="120" cy="280" r="12" ${S2}/><circle cx="290" cy="280" r="12" ${S2}/>
      <rect x="150" y="175" width="50" height="40" ${S2}/><rect x="215" y="175" width="50" height="40" ${S2}/>
      <circle cx="200" cy="230" r="10" ${S2}/>
      <path d="M180 225 Q200 245 220 225" ${S2}/>
    `, 'Neşeli Araba'),
    train: vb(`
      <rect x="40" y="180" width="100" height="90" rx="8" ${S}/>
      <rect x="150" y="200" width="90" height="70" rx="6" ${S}/>
      <rect x="250" y="200" width="90" height="70" rx="6" ${S}/>
      <rect x="60" y="140" width="50" height="40" ${S}/>
      <circle cx="75" cy="280" r="22" ${S}/><circle cx="120" cy="285" r="16" ${S}/>
      <circle cx="195" cy="285" r="16" ${S}/><circle cx="295" cy="285" r="16" ${S}/>
      <circle cx="85" cy="160" r="10" ${S2}/>
      <path d="M140 220 L150 220" ${S}/><path d="M240 220 L250 220" ${S}/>
      <circle cx="330" cy="100" r="8" ${S2}/>
    `, 'Oyuncak Tren'),
    hotair: vb(`
      <ellipse cx="200" cy="150" rx="80" ry="100" ${S}/>
      <path d="M150 100 Q200 80 250 100" ${S2}/>
      <path d="M140 150 Q200 130 260 150" ${S2}/>
      <path d="M145 200 Q200 180 255 200" ${S2}/>
      <path d="M160 230 L175 280" ${S}/><path d="M240 230 L225 280" ${S}/>
      <rect x="165" y="280" width="70" height="45" rx="6" ${S}/>
      <circle cx="80" cy="80" r="6" ${S2}/><circle cx="320" cy="120" r="5" ${S2}/>
    `, 'Uçan Balon'),
    snowman: vb(`
      <circle cx="200" cy="280" r="70" ${S}/>
      <circle cx="200" cy="175" r="50" ${S}/>
      <circle cx="200" cy="95" r="35" ${S}/>
      <circle cx="188" cy="90" r="4" fill="#1a1a1a"/><circle cx="212" cy="90" r="4" fill="#1a1a1a"/>
      <path d="M200 100 L230 110" ${S2}/>
      <circle cx="200" cy="160" r="5" fill="#1a1a1a"/><circle cx="200" cy="180" r="5" fill="#1a1a1a"/>
      <path d="M150 175 L110 150" ${S}/><path d="M250 175 L290 150" ${S}/>
      <path d="M165 120 Q200 140 235 120" ${S2}/>
    `, 'Kardan Adam'),
    sunflower: vb(`
      <circle cx="200" cy="150" r="40" ${S}/>
      <ellipse cx="200" cy="95" rx="22" ry="30" ${S}/>
      <ellipse cx="250" cy="120" rx="30" ry="22" ${S}/>
      <ellipse cx="250" cy="180" rx="30" ry="22" ${S}/>
      <ellipse cx="200" cy="205" rx="22" ry="30" ${S}/>
      <ellipse cx="150" cy="180" rx="30" ry="22" ${S}/>
      <ellipse cx="150" cy="120" rx="30" ry="22" ${S}/>
      <line x1="200" y1="190" x2="200" y2="340" ${S}/>
      <path d="M200 260 Q160 280 150 330" ${S2}/>
      <circle cx="280" cy="100" r="12" ${S2}/>
    `, 'Ayçiçeği'),
    icecream: vb(`
      <path d="M140 200 L200 360 L260 200 Z" ${S}/>
      <path d="M155 240 L245 240" ${S2}/><path d="M170 280 L230 280" ${S2}/>
      <circle cx="200" cy="160" r="45" ${S}/>
      <circle cx="165" cy="120" r="35" ${S}/>
      <circle cx="235" cy="120" r="35" ${S}/>
      <circle cx="200" cy="85" r="30" ${S}/>
      <path d="M200 55 L200 35" ${S2}/><circle cx="200" cy="30" r="6" ${S2}/>
    `, 'Dondurma'),
    birthday: vb(`
      <ellipse cx="200" cy="280" rx="110" ry="35" ${S}/>
      <path d="M90 280 L100 200 L300 200 L310 280" ${S}/>
      <path d="M110 200 L120 150 L280 150 L290 200" ${S}/>
      <rect x="150" y="110" width="12" height="40" ${S}/><rect x="194" y="100" width="12" height="50" ${S}/>
      <rect x="238" y="110" width="12" height="40" ${S}/>
      <circle cx="156" cy="100" r="8" ${S2}/><circle cx="200" cy="90" r="8" ${S2}/><circle cx="244" cy="100" r="8" ${S2}/>
      <rect x="60" y="300" width="50" height="40" rx="6" ${S}/><rect x="290" y="300" width="50" height="40" rx="6" ${S}/>
    `, 'Doğum Günü'),
    lion: vb(`
      <circle cx="200" cy="160" r="65" ${S}/>
      <path d="M130 130 Q100 80 140 70 Q170 60 200 90 Q230 60 260 70 Q300 80 270 130" ${S}/>
      <circle cx="180" cy="150" r="5" fill="#1a1a1a"/><circle cx="220" cy="150" r="5" fill="#1a1a1a"/>
      <path d="M185 175 Q200 188 215 175" ${S2}/>
      <path d="M160 190 Q140 210 130 240" ${S2}/><path d="M240 190 Q260 210 270 240" ${S2}/>
      <ellipse cx="175" cy="280" rx="22" ry="30" ${S}/><ellipse cx="225" cy="280" rx="22" ry="30" ${S}/>
      <path d="M190 240 Q200 320 210 240" ${S2}/>
    `, 'Sevimli Aslan'),
    rabbit: vb(`
      <ellipse cx="200" cy="250" rx="70" ry="55" ${S}/>
      <circle cx="200" cy="170" r="45" ${S}/>
      <ellipse cx="170" cy="95" rx="18" ry="55" ${S}/><ellipse cx="230" cy="95" rx="18" ry="55" ${S}/>
      <circle cx="185" cy="165" r="5" fill="#1a1a1a"/><circle cx="215" cy="165" r="5" fill="#1a1a1a"/>
      <circle cx="200" cy="180" r="8" ${S2}/>
      <path d="M190 195 Q200 205 210 195" ${S2}/>
      <ellipse cx="160" cy="300" rx="18" ry="28" ${S}/><ellipse cx="240" cy="300" rx="18" ry="28" ${S}/>
      <ellipse cx="280" cy="260" rx="20" ry="12" ${S2}/>
    `, 'Zıplayan Tavşan'),
    fox: vb(`
      <ellipse cx="200" cy="240" rx="80" ry="60" ${S}/>
      <circle cx="200" cy="155" r="48" ${S}/>
      <path d="M160 120 L145 70 L175 110" ${S}/><path d="M240 120 L255 70 L225 110" ${S}/>
      <circle cx="185" cy="150" r="5" fill="#1a1a1a"/><circle cx="215" cy="150" r="5" fill="#1a1a1a"/>
      <path d="M195 165 L200 178 L205 165" ${S2}/>
      <path d="M280 230 Q330 200 340 260" ${S}/>
      <ellipse cx="165" cy="295" rx="20" ry="14" ${S}/><ellipse cx="235" cy="295" rx="20" ry="14" ${S}/>
    `, 'Orman Tilki'),
    penguin: vb(`
      <ellipse cx="200" cy="250" rx="55" ry="85" ${S}/>
      <ellipse cx="200" cy="250" rx="35" ry="65" ${S2}/>
      <circle cx="200" cy="140" r="42" ${S}/>
      <circle cx="188" cy="135" r="5" fill="#1a1a1a"/><circle cx="212" cy="135" r="5" fill="#1a1a1a"/>
      <path d="M190 155 L200 168 L210 155" ${S2}/>
      <ellipse cx="165" cy="320" rx="22" ry="14" ${S}/><ellipse cx="235" cy="320" rx="22" ry="14" ${S}/>
      <ellipse cx="200" cy="175" rx="28" ry="18" ${S2}/>
    `, 'Kutup Pengueni'),
    whale: vb(`
      <ellipse cx="190" cy="210" rx="130" ry="55" ${S}/>
      <path d="M320 210 L370 160 L355 210 L370 260 Z" ${S}/>
      <path d="M120 190 Q80 150 60 200 Q80 250 120 220" ${S}/>
      <circle cx="280" cy="195" r="8" ${S}/><circle cx="278" cy="193" r="3" fill="#1a1a1a"/>
      <path d="M200 160 Q210 120 230 140" ${S2}/>
      <path d="M140 240 Q200 280 260 240" ${S2}/>
    `, 'Mavi Balina'),
    crab: vb(`
      <ellipse cx="200" cy="230" rx="75" ry="45" ${S}/>
      <circle cx="175" cy="215" r="8" fill="#1a1a1a"/><circle cx="225" cy="215" r="8" fill="#1a1a1a"/>
      <path d="M185 240 Q200 255 215 240" ${S2}/>
      <path d="M125 210 L70 180 L80 230 Z" ${S}/><path d="M275 210 L330 180 L320 230 Z" ${S}/>
      <path d="M140 250 L100 290" ${S}/><path d="M160 260 L130 310" ${S}/>
      <path d="M260 250 L300 290" ${S}/><path d="M240 260 L270 310" ${S}/>
    `, 'Kırmızı Yengeç'),
    starfish: vb(`
      <path d="M200 80 L230 160 L315 160 L250 210 L275 295 L200 245 L125 295 L150 210 L85 160 L170 160 Z" ${S}/>
      <circle cx="200" cy="185" r="18" ${S2}/>
      <circle cx="200" cy="130" r="6" ${S2}/><circle cx="250" cy="175" r="6" ${S2}/>
      <circle cx="150" cy="175" r="6" ${S2}/><circle cx="230" cy="240" r="6" ${S2}/>
      <circle cx="170" cy="240" r="6" ${S2}/>
    `, 'Deniz Yıldızı'),
    spaceship: vb(`
      <ellipse cx="200" cy="200" rx="90" ry="40" ${S}/>
      <ellipse cx="200" cy="175" rx="50" ry="35" ${S}/>
      <circle cx="200" cy="175" r="20" ${S2}/>
      <path d="M110 200 L60 230 L110 220 Z" ${S}/><path d="M290 200 L340 230 L290 220 Z" ${S}/>
      <circle cx="80" cy="100" r="4" fill="#1a1a1a"/><circle cx="320" cy="80" r="4" fill="#1a1a1a"/>
      <circle cx="150" cy="60" r="3" fill="#1a1a1a"/><circle cx="250" cy="50" r="3" fill="#1a1a1a"/>
    `, 'Uzay Gemisi'),
    moon: vb(`
      <circle cx="200" cy="200" r="90" ${S}/>
      <circle cx="170" cy="170" r="18" ${S2}/><circle cx="230" cy="190" r="12" ${S2}/>
      <circle cx="190" cy="240" r="22" ${S2}/><circle cx="240" cy="150" r="8" ${S2}/>
      <circle cx="80" cy="80" r="4" fill="#1a1a1a"/><circle cx="320" cy="100" r="3" fill="#1a1a1a"/>
      <circle cx="60" cy="300" r="3" fill="#1a1a1a"/>
    `, 'Ay Yüzeyi'),
    bee: vb(`
      <ellipse cx="200" cy="210" rx="55" ry="40" ${S}/>
      <line x1="155" y1="195" x2="245" y2="195" ${S2}/><line x1="155" y1="210" x2="245" y2="210" ${S2}/>
      <line x1="155" y1="225" x2="245" y2="225" ${S2}/>
      <circle cx="200" cy="160" r="30" ${S}/>
      <circle cx="190" cy="155" r="4" fill="#1a1a1a"/><circle cx="210" cy="155" r="4" fill="#1a1a1a"/>
      <path d="M170 145 Q150 110 130 120" ${S2}/><path d="M230 145 Q250 110 270 120" ${S2}/>
      <path d="M160 240 Q120 260 100 240" ${S2}/><path d="M240 240 Q280 260 300 240" ${S2}/>
      <circle cx="320" cy="280" r="16" ${S2}/>
    `, 'Çalışkan Arı'),
    kite: vb(`
      <path d="M200 80 L260 200 L200 320 L140 200 Z" ${S}/>
      <line x1="200" y1="80" x2="200" y2="340" ${S2}/>
      <line x1="140" y1="200" x2="260" y2="200" ${S2}/>
      <path d="M200 320 Q220 360 240 380" ${S2}/>
      <path d="M240 380 Q260 390 280 385" ${S2}/>
      <circle cx="80" cy="120" r="6" ${S2}/>
    `, 'Uçan Uçurtma'),
    volcano: vb(`
      <path d="M70 320 L130 140 L170 180 L200 100 L230 180 L270 140 L330 320 Z" ${S}/>
      <ellipse cx="200" cy="110" rx="35" ry="18" ${S2}/>
      <path d="M185 95 Q200 60 215 95" ${S2}/>
      <circle cx="195" cy="70" r="8" ${S2}/><circle cx="210" cy="55" r="6" ${S2}/>
      <path d="M100 320 Q200 300 300 320" ${S2}/>
    `, 'Volkan'),
    bicycle: vb(`
      <circle cx="130" cy="260" r="55" ${S}/><circle cx="270" cy="260" r="55" ${S}/>
      <circle cx="130" cy="260" r="12" ${S2}/><circle cx="270" cy="260" r="12" ${S2}/>
      <path d="M130 260 L200 180 L270 260" ${S}/>
      <path d="M200 180 L200 140" ${S}/><path d="M170 140 L230 140" ${S}/>
      <path d="M200 180 L240 200" ${S2}/>
      <circle cx="200" cy="130" r="8" ${S2}/>
    `, 'Renkli Bisiklet'),
    mushroom: vb(`
      <path d="M100 220 Q200 80 300 220 Z" ${S}/>
      <rect x="175" y="220" width="50" height="80" rx="8" ${S}/>
      <circle cx="150" cy="170" r="14" ${S2}/><circle cx="230" cy="155" r="18" ${S2}/>
      <circle cx="190" cy="130" r="10" ${S2}/>
      <path d="M120 300 Q200 320 280 300" ${S2}/>
    `, 'Orman Mantarı'),
    picnic: vb(`
      <path d="M80 280 L320 280" ${S}/>
      <path d="M120 280 L120 200 L280 200 L280 280" ${S}/>
      <path d="M120 200 L200 140 L280 200" ${S}/>
      <ellipse cx="200" cy="250" rx="60" ry="20" ${S2}/>
      <circle cx="160" cy="240" r="14" ${S2}/><circle cx="240" cy="245" r="12" ${S2}/>
      <rect x="185" y="160" width="30" height="40" ${S2}/>
    `, 'Piknik Sepeti'),
  }

  const generic = vb(`
    <rect x="60" y="60" width="280" height="280" rx="24" ${S}/>
    <circle cx="200" cy="170" r="50" ${S}/>
    <path d="M150 250 Q200 290 250 250" ${S2}/>
    <path d="M120 120 L140 90 L160 120" ${S2}/>
    <path d="M240 120 L260 90 L280 120" ${S2}/>
    <circle cx="185" cy="165" r="5" fill="#1a1a1a"/>
    <circle cx="215" cy="165" r="5" fill="#1a1a1a"/>
    <text x="200" y="340" text-anchor="middle" font-family="Nunito,Arial,sans-serif" font-size="18" fill="#555">Boyama Zamanı!</text>
  `, 'Kitap Cenneti')

  return map[id] || generic
}

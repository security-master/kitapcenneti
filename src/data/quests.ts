import type { PageId } from '../types/nav'

export interface Quest {
  id: string
  title: string
  emoji: string
  stars: number
  minutes: number
  area: string
  link: PageId
  hint: string
}

/** Haftanın gününe göre dönen görev havuzu */
const QUEST_POOL: Quest[] = [
  { id: 'listen', title: 'Bir sesli masal dinle', emoji: '🎧', stars: 2, minutes: 5, area: 'Okuma', link: 'audio', hint: 'Sesli Masallar’dan birini seç ve dinle.' },
  { id: 'color', title: 'Bir boyama sayfası boya', emoji: '🖍️', stars: 2, minutes: 15, area: 'Sanat', link: 'coloring', hint: 'PDF indir veya ekranda bakarak boya.' },
  { id: 'quiz', title: 'Mini quiz çöz', emoji: '❓', stars: 2, minutes: 5, area: 'Bilgi', link: 'activities', hint: 'Oyunlar → Mini Quiz.' },
  { id: 'memory', title: 'Hafıza oyununu bitir', emoji: '🧠', stars: 3, minutes: 8, area: 'Oyun', link: 'activities', hint: 'Tüm çiftleri bul.' },
  { id: 'rhyme', title: 'Bir tekerleme ezberle', emoji: '🎵', stars: 2, minutes: 5, area: 'Dil', link: 'rhymes', hint: 'Şarkılar bölümünden birini sesli oku.' },
  { id: 'hero', title: 'Bir kahraman hikayesi oku', emoji: '🦸', stars: 2, minutes: 5, area: 'Okuma', link: 'heroes', hint: 'Özgün kahramanlardan birini seç.' },
  { id: 'story', title: 'AI ile kısa hikaye yap', emoji: '✨', stars: 3, minutes: 10, area: 'Yaratıcılık', link: 'create', hint: '4 sayfalık bir masal yeterli.' },
  { id: 'stem', title: 'Bir bilim kartı dene', emoji: '🔬', stars: 2, minutes: 10, area: 'STEM', link: 'stem', hint: 'Evde güvenli mini deney.' },
  { id: 'feel', title: 'Duygu check-in yap', emoji: '💛', stars: 1, minutes: 3, area: 'Duygu', link: 'feelings', hint: 'Bugün nasıl hissettiğini seç.' },
  { id: 'print', title: 'Bir çıktı yazdır', emoji: '🖨️', stars: 2, minutes: 10, area: 'Ödev', link: 'printables', hint: 'Çalışma kağıdı veya boyama.' },
  { id: 'parent-read', title: 'Aile blogundan 1 yazı oku', emoji: '📝', stars: 1, minutes: 5, area: 'Aile', link: 'blog', hint: 'Ebeveynlerle birlikte.' },
  { id: 'cert', title: 'Bugünün sertifikasını indir', emoji: '🏆', stars: 2, minutes: 3, area: 'Ödül', link: 'certificates', hint: 'Görevleri bitince ödülünü al.' },
  { id: 'fun-spin', title: 'Eğlence çarkını çevir', emoji: '🎡', stars: 1, minutes: 5, area: 'Eğlence', link: 'fun', hint: 'Çarktan gelen kısa ödülü yap.' },
  { id: 'fun-doodle', title: '2 dakikalık doodle çiz', emoji: '✏️', stars: 1, minutes: 5, area: 'Sanat', link: 'fun', hint: 'Eğlence Bahçesi’nde serbest çiz.' },
  { id: 'listen-sleep', title: 'Uyku masalı dinle', emoji: '🌙', stars: 2, minutes: 5, area: 'Okuma', link: 'audio', hint: 'Sakin temalı bir masal seç.' },
  { id: 'listen-nature', title: 'Doğa temalı masal dinle', emoji: '🌿', stars: 2, minutes: 5, area: 'Okuma', link: 'audio', hint: 'Orman veya deniz masalı dene.' },
  { id: 'color-nature', title: 'Doğa sayfası boya', emoji: '🍃', stars: 2, minutes: 15, area: 'Sanat', link: 'coloring', hint: 'Yeşil ve mavi tonlarla oyna.' },
  { id: 'color-hero', title: 'Kahramanı renklendir', emoji: '🦸', stars: 2, minutes: 15, area: 'Sanat', link: 'coloring', hint: 'Sevdiğin kahramana renk ver.' },
  { id: 'rhyme-clap', title: 'Tekerlemeyi tempoyla söyle', emoji: '👏', stars: 2, minutes: 5, area: 'Dil', link: 'rhymes', hint: 'Ellerinle ritim tut.' },
  { id: 'hero-value', title: 'Kahramanın değerini bul', emoji: '💎', stars: 2, minutes: 6, area: 'Değerler', link: 'heroes', hint: 'Cesaret, yardım, paylaşım… hangisi?' },
  { id: 'create-4page', title: '4 sayfalık masal bitir', emoji: '📘', stars: 3, minutes: 15, area: 'Yaratıcılık', link: 'create', hint: 'Kahraman + sorun + çözüm yaz.' },
  { id: 'create-ending', title: 'Farklı bir son uydur', emoji: '🔀', stars: 2, minutes: 10, area: 'Yaratıcılık', link: 'create', hint: 'Sevdiğin masalın sonunu değiştir.' },
  { id: 'stem-observe', title: 'Deney gözlemi yaz', emoji: '🔎', stars: 2, minutes: 12, area: 'STEM', link: 'stem', hint: 'Ne sandın? Ne oldu? Neden?' },
  { id: 'stem-kitchen', title: 'Mutfak bilimi dene', emoji: '🍋', stars: 3, minutes: 15, area: 'STEM', link: 'stem', hint: 'Yetişkinle güvenli bir kart seç.' },
  { id: 'feel-breath', title: '3 nefes sakinleş', emoji: '🌬️', stars: 1, minutes: 3, area: 'Duygu', link: 'feelings', hint: 'Check-in sonrası nefes turu.' },
  { id: 'feel-name3', title: '3 duygu adı söyle', emoji: '💬', stars: 1, minutes: 4, area: 'Duygu', link: 'feelings', hint: 'Mutlu/üzgün dışında kelimeler dene.' },
  { id: 'print-plan', title: 'Haftalık plan yazdır', emoji: '📅', stars: 2, minutes: 8, area: 'Ödev', link: 'printables', hint: 'Buzdolabına asılacak bir sayfa.' },
  { id: 'quiz-hard', title: 'Zor sorulu quiz dene', emoji: '🧩', stars: 3, minutes: 8, area: 'Bilgi', link: 'activities', hint: 'Bilemediğin soruyu öğrenme say.' },
  { id: 'memory-fast', title: 'Hafızayı daha hızlı bitir', emoji: '⚡', stars: 3, minutes: 8, area: 'Oyun', link: 'activities', hint: 'Dünkinden bir tur daha az deneme.' },
  { id: 'blog-sleep', title: 'Uyku yazısını ebeveynle oku', emoji: '😴', stars: 1, minutes: 6, area: 'Aile', link: 'blog', hint: 'Akşam rutini için 1 yazı.' },
  { id: 'fun-sticker', title: 'Sticker köşesini ziyaret et', emoji: '🌟', stars: 1, minutes: 5, area: 'Eğlence', link: 'fun', hint: 'Bugünün çıkartmasını seç.' },
  { id: 'cert-share', title: 'Sertifikanı aileye göster', emoji: '🎉', stars: 2, minutes: 3, area: 'Ödül', link: 'certificates', hint: 'Alkış + buzdolabı sergisi.' },
  { id: 'lib-browse', title: 'Kütüphanede 3 içerik gez', emoji: '📚', stars: 2, minutes: 8, area: 'Keşif', link: 'library', hint: 'Filtreyle masal veya STEM seç.' },
  { id: 'lib-search', title: 'Kütüphanede bir konu ara', emoji: '🔎', stars: 1, minutes: 5, area: 'Keşif', link: 'search', hint: '“uzay” veya “uyku” yaz.' },
  { id: 'world-visit', title: 'Dünya haritasında 1 bölge aç', emoji: '🗺️', stars: 2, minutes: 6, area: 'Keşif', link: 'world', hint: 'Bir bölgeye dokunup bağlantıya git.' },
  { id: 'world-two', title: 'İki farklı bölgeyi ziyaret et', emoji: '🌍', stars: 3, minutes: 10, area: 'Keşif', link: 'world', hint: 'Orman + uzay gibi iki tema seç.' },
  { id: 'discover-one', title: 'Bir koleksiyon incele', emoji: '🧭', stars: 2, minutes: 7, area: 'Keşif', link: 'discover', hint: 'Uyku veya yağmurlu gün sepeti dene.' },
  { id: 'path-step', title: 'Öğrenme yolunda 1 adım başlat', emoji: '🛤️', stars: 3, minutes: 12, area: 'Eğitim', link: 'paths', hint: 'Yaşına uygun yolu seç.' },
  { id: 'path-browse', title: '3 öğrenme yoluna bak', emoji: '📍', stars: 1, minutes: 5, area: 'Eğitim', link: 'paths', hint: 'Hangisi seni çeker?' },
  { id: 'journal-add', title: 'Gelişim günlüğüne kayıt ekle', emoji: '📔', stars: 2, minutes: 5, area: 'Aile', link: 'journal', hint: 'Bugün ne yaptığını yaz.' },
  { id: 'calendar-plan', title: 'Haftalık plana göz at', emoji: '📅', stars: 1, minutes: 5, area: 'Plan', link: 'calendar', hint: 'Bugünün slotunu aç.' },
  { id: 'calendar-save', title: 'Haftalık planı kaydet', emoji: '✅', stars: 2, minutes: 4, area: 'Plan', link: 'calendar', hint: 'Ailece buzdolabına asılacak.' },
  { id: 'teacher-print', title: 'Öğretmen etkinliği yazdır', emoji: '👩‍🏫', stars: 2, minutes: 10, area: 'Sınıf', link: 'teachers', hint: 'Sabah çemberi veya STEM kartı.' },
  { id: 'shop-open', title: 'Ücretsiz bir paket aç', emoji: '🎁', stars: 2, minutes: 6, area: 'Paket', link: 'shop', hint: 'İlgili bölüme ışınlan.' },
  { id: 'profile-set', title: 'Profilini güncelle', emoji: '🧒', stars: 1, minutes: 5, area: 'Profil', link: 'profile', hint: 'İsim, avatar veya yaş grubu.' },
  { id: 'portal-dash', title: 'Portal ana paneli ziyaret et', emoji: '🏛️', stars: 1, minutes: 3, area: 'Portal', link: 'portal', hint: 'Bugünün kartlarına bak.' },
  { id: 'parents-tip', title: 'Aile köşesinden 1 ipucu oku', emoji: '🏡', stars: 1, minutes: 5, area: 'Aile', link: 'parents', hint: 'Ebeveynle birlikte.' },
  { id: 'scramble', title: 'Kelime karıştırma oyna', emoji: '🔤', stars: 2, minutes: 6, area: 'Oyun', link: 'activities', hint: 'Harfleri doğru sıraya koy.' },
  { id: 'speed-catch', title: 'Hızlı yakalama oyna', emoji: '🎯', stars: 2, minutes: 5, area: 'Oyun', link: 'activities', hint: 'Doğru emojileri yakala.' },
  { id: 'riddle', title: 'Bir bilmece çöz', emoji: '🧩', stars: 1, minutes: 4, area: 'Eğlence', link: 'fun', hint: 'Eğlence Bahçesi bilmeceleri.' },
  { id: 'joke', title: 'Bir fıkra oku ve anlat', emoji: '😄', stars: 1, minutes: 3, area: 'Eğlence', link: 'fun', hint: 'Aileye anlatınca yıldızını hak et.' },
  { id: 'lib-audio', title: 'Kütüphaneden bir masal seç', emoji: '📖', stars: 2, minutes: 6, area: 'Keşif', link: 'library', hint: 'Masal filtresini aç.' },
  { id: 'discover-sleep', title: 'Uyku koleksiyonunu aç', emoji: '🌙', stars: 2, minutes: 6, area: 'Keşif', link: 'discover', hint: 'Akşam rutini sepeti.' },
  { id: 'shop-stem', title: 'STEM paketini ücretsiz aç', emoji: '🧪', stars: 2, minutes: 7, area: 'Paket', link: 'shop', hint: 'Ev laboratuvarı paketi.' },
  { id: 'journal-feel', title: 'Günlüğe bir duygu yaz', emoji: '💛', stars: 1, minutes: 4, area: 'Aile', link: 'journal', hint: 'Bugün nasıl hissettin?' },
  { id: 'teacher-circle', title: 'Sabah çemberi planını incele', emoji: '🌅', stars: 2, minutes: 8, area: 'Sınıf', link: 'teachers', hint: 'Yazdırıp sınıfta dene.' },
  { id: 'path-week', title: 'Yolundaki haftalık adımlara bak', emoji: '🗓️', stars: 2, minutes: 8, area: 'Eğitim', link: 'paths', hint: 'Bu haftanın 2 adımını seç.' },
  { id: 'world-art', title: 'Sanat bölgesini ziyaret et', emoji: '🎨', stars: 2, minutes: 6, area: 'Keşif', link: 'world', hint: 'Gökkuşağı Köyü veya benzeri.' },
  { id: 'profile-goal', title: 'Haftalık hedefini yaz', emoji: '🎯', stars: 1, minutes: 4, area: 'Profil', link: 'profile', hint: 'Örn. her gün 1 masal.' },
  { id: 'search-stem', title: 'Aramada “STEM” yaz', emoji: '🔍', stars: 1, minutes: 3, area: 'Keşif', link: 'search', hint: 'Sonuçlardan birine tıkla.' },
  { id: 'calendar-today', title: 'Bugünün plan slotunu aç', emoji: '📌', stars: 1, minutes: 3, area: 'Plan', link: 'calendar', hint: 'İlk bağlantıya git.' },
  { id: 'print-feel', title: 'Duygu kartı paketini yazdır', emoji: '🖨️', stars: 2, minutes: 8, area: 'Ödev', link: 'printables', hint: 'Feelings PDF.' },
  { id: 'hero-two', title: 'İki kahraman hikâyesi oku', emoji: '🦸', stars: 3, minutes: 10, area: 'Okuma', link: 'heroes', hint: 'Değerlerini karşılaştır.' },
  { id: 'masal-dinle-gen-1', title: 'Sesli masal dinle', emoji: '🎧', stars: 2, minutes: 5, area: 'Okuma', link: 'audio', hint: 'Sakin veya macera temalı bir masal seç.' },
  { id: 'boyama-yap-gen-2', title: 'Boyama sayfası aç', emoji: '🖍️', stars: 2, minutes: 12, area: 'Sanat', link: 'coloring', hint: 'Sevdiğin kategoriden bir sayfa seç.' },
  { id: 'quiz-coz-gen-3', title: 'Mini quiz çöz', emoji: '❓', stars: 2, minutes: 6, area: 'Bilgi', link: 'activities', hint: 'Bildiğin soruları kutla.' },
  { id: 'tekerleme-gen-4', title: 'Tekerleme oku', emoji: '🎵', stars: 2, minutes: 5, area: 'Dil', link: 'rhymes', hint: 'Sesli ve ritimli oku.' },
  { id: 'kahraman-oku-gen-5', title: 'Kahraman hikâyesi oku', emoji: '🦸', stars: 2, minutes: 6, area: 'Okuma', link: 'heroes', hint: 'Değerini bul.' },
  { id: 'hikaye-yaz-gen-6', title: 'AI hikâye oluştur', emoji: '✨', stars: 3, minutes: 12, area: 'Yaratıcılık', link: 'create', hint: '4 sayfa yeterli.' },
  { id: 'stem-dene-gen-7', title: 'STEM kartı dene', emoji: '🔬', stars: 2, minutes: 12, area: 'STEM', link: 'stem', hint: 'Yetişkin eşliğinde güvenli deney.' },
  { id: 'duygu-check-gen-8', title: 'Duygu check-in', emoji: '💛', stars: 1, minutes: 3, area: 'Duygu', link: 'feelings', hint: 'Bugünkü duygunu seç.' },
  { id: 'cikti-al-gen-9', title: 'Çıktı sayfası incele', emoji: '🖨️', stars: 2, minutes: 8, area: 'Ödev', link: 'printables', hint: 'Yazdırmak zorunlu değil.' },
  { id: 'blog-oku-gen-10', title: 'Aile blogu oku', emoji: '📝', stars: 1, minutes: 6, area: 'Aile', link: 'blog', hint: 'Ebeveynle birlikte.' },
  { id: 'kutuphane-gez-gen-11', title: 'Kütüphanede gez', emoji: '📚', stars: 2, minutes: 7, area: 'Keşif', link: 'library', hint: '3 içerik aç.' },
  { id: 'dunya-gez-gen-12', title: 'Dünya haritası gez', emoji: '🗺️', stars: 2, minutes: 7, area: 'Keşif', link: 'world', hint: 'Bir bölge seç.' },
  { id: 'yol-bak-gen-13', title: 'Öğrenme yoluna bak', emoji: '🛤️', stars: 2, minutes: 8, area: 'Eğitim', link: 'paths', hint: 'Yaşına uygun yol seç.' },
  { id: 'gunluk-yaz-gen-14', title: 'Günlüğe not ekle', emoji: '📔', stars: 2, minutes: 5, area: 'Aile', link: 'journal', hint: 'Bugün ne yaptın?' },
  { id: 'takvim-bak-gen-15', title: 'Takvime göz at', emoji: '📅', stars: 1, minutes: 4, area: 'Plan', link: 'calendar', hint: 'Bu haftanın planı.' },
  { id: 'ogretmen-bak-gen-16', title: 'Öğretmen kaynağı incele', emoji: '👩‍🏫', stars: 2, minutes: 9, area: 'Sınıf', link: 'teachers', hint: 'Sınıf veya ev için fikir.' },
  { id: 'paket-ac-gen-17', title: 'Ücretsiz paket aç', emoji: '🎁', stars: 2, minutes: 6, area: 'Paket', link: 'shop', hint: 'İlgili bölüme git.' },
  { id: 'profil-guncelle-gen-18', title: 'Profilini kontrol et', emoji: '🧒', stars: 1, minutes: 4, area: 'Profil', link: 'profile', hint: 'Avatar veya hedef.' },
  { id: 'kesfet-koleksiyon-gen-19', title: 'Koleksiyon keşfet', emoji: '🧭', stars: 2, minutes: 7, area: 'Keşif', link: 'discover', hint: 'Sepetlerden birini aç.' },
  { id: 'eglence-cark-gen-20', title: 'Eğlence çarkını çevir', emoji: '🎡', stars: 1, minutes: 5, area: 'Eğlence', link: 'fun', hint: 'Çıkan ödülü dene.' },
  { id: 'sertifika-al-gen-21', title: 'Sertifika sayfasına git', emoji: '🏆', stars: 2, minutes: 3, area: 'Ödül', link: 'certificates', hint: 'İlerlemeni gör.' },
  { id: 'aile-ipucu-gen-22', title: 'Aile köşesi ipucu', emoji: '🏡', stars: 1, minutes: 5, area: 'Aile', link: 'parents', hint: 'Bir ipucu oku.' },
  { id: 'arama-yap-gen-23', title: 'Arama yap', emoji: '🔍', stars: 1, minutes: 4, area: 'Keşif', link: 'search', hint: 'Merak ettiğin konuyu yaz.' },
  { id: 'portal-ziyaret-gen-24', title: 'Portal paneli ziyaret', emoji: '🏛️', stars: 1, minutes: 3, area: 'Portal', link: 'portal', hint: 'Bugünün kartlarına bak.' },
  { id: 'masal-dinle-gen-25', title: 'Sesli masal dinle', emoji: '🎧', stars: 2, minutes: 5, area: 'Okuma', link: 'audio', hint: 'Sakin veya macera temalı bir masal seç.' },
  { id: 'boyama-yap-gen-26', title: 'Boyama sayfası aç', emoji: '🖍️', stars: 2, minutes: 12, area: 'Sanat', link: 'coloring', hint: 'Sevdiğin kategoriden bir sayfa seç.' },
  { id: 'quiz-coz-gen-27', title: 'Mini quiz çöz', emoji: '❓', stars: 2, minutes: 6, area: 'Bilgi', link: 'activities', hint: 'Bildiğin soruları kutla.' },
  { id: 'quest-portal-1', title: 'Portal görevi 1', emoji: '🦊', stars: 2, minutes: 4, area: 'Portal', link: 'library', hint: 'İlgili bölüme git ve bir içerik dene.' },
  { id: 'quest-portal-2', title: 'Portal görevi 2', emoji: '🌙', stars: 3, minutes: 5, area: 'Portal', link: 'world', hint: 'İlgili bölüme git ve bir içerik dene.' },
  { id: 'quest-portal-3', title: 'Portal görevi 3', emoji: '🌊', stars: 1, minutes: 6, area: 'Portal', link: 'discover', hint: 'İlgili bölüme git ve bir içerik dene.' },
  { id: 'quest-portal-4', title: 'Portal görevi 4', emoji: '🚀', stars: 2, minutes: 7, area: 'Portal', link: 'shop', hint: 'İlgili bölüme git ve bir içerik dene.' },
  { id: 'quest-portal-5', title: 'Portal görevi 5', emoji: '🌿', stars: 3, minutes: 8, area: 'Portal', link: 'paths', hint: 'İlgili bölüme git ve bir içerik dene.' },
  { id: 'quest-portal-6', title: 'Portal görevi 6', emoji: '🎈', stars: 1, minutes: 9, area: 'Portal', link: 'journal', hint: 'İlgili bölüme git ve bir içerik dene.' },
  { id: 'quest-portal-7', title: 'Portal görevi 7', emoji: '🐻', stars: 2, minutes: 10, area: 'Portal', link: 'profile', hint: 'İlgili bölüme git ve bir içerik dene.' },
  { id: 'quest-portal-8', title: 'Portal görevi 8', emoji: '🦋', stars: 3, minutes: 11, area: 'Portal', link: 'teachers', hint: 'İlgili bölüme git ve bir içerik dene.' },
  { id: 'quest-portal-9', title: 'Portal görevi 9', emoji: '🌈', stars: 1, minutes: 12, area: 'Portal', link: 'calendar', hint: 'İlgili bölüme git ve bir içerik dene.' },
  { id: 'quest-portal-10', title: 'Portal görevi 10', emoji: '🐢', stars: 2, minutes: 3, area: 'Portal', link: 'stem', hint: 'İlgili bölüme git ve bir içerik dene.' },
  { id: 'quest-portal-11', title: 'Portal görevi 11', emoji: '🦄', stars: 3, minutes: 4, area: 'Portal', link: 'fun', hint: 'İlgili bölüme git ve bir içerik dene.' },
  { id: 'quest-portal-12', title: 'Portal görevi 12', emoji: '🐠', stars: 1, minutes: 5, area: 'Portal', link: 'create', hint: 'İlgili bölüme git ve bir içerik dene.' },
  { id: 'quest-portal-13', title: 'Portal görevi 13', emoji: '🌻', stars: 2, minutes: 6, area: 'Portal', link: 'coloring', hint: 'İlgili bölüme git ve bir içerik dene.' },
  { id: 'quest-portal-14', title: 'Portal görevi 14', emoji: '🏰', stars: 3, minutes: 7, area: 'Portal', link: 'heroes', hint: 'İlgili bölüme git ve bir içerik dene.' },
  { id: 'quest-portal-15', title: 'Portal görevi 15', emoji: '🧠', stars: 1, minutes: 8, area: 'Portal', link: 'rhymes', hint: 'İlgili bölüme git ve bir içerik dene.' },
  { id: 'quest-portal-16', title: 'Portal görevi 16', emoji: '💛', stars: 2, minutes: 9, area: 'Portal', link: 'feelings', hint: 'İlgili bölüme git ve bir içerik dene.' },
  { id: 'quest-portal-17', title: 'Portal görevi 17', emoji: '🎵', stars: 3, minutes: 10, area: 'Portal', link: 'activities', hint: 'İlgili bölüme git ve bir içerik dene.' },
  { id: 'quest-portal-18', title: 'Portal görevi 18', emoji: '⭐', stars: 1, minutes: 11, area: 'Portal', link: 'blog', hint: 'İlgili bölüme git ve bir içerik dene.' },
  { id: 'quest-portal-19', title: 'Portal görevi 19', emoji: '🦊', stars: 2, minutes: 12, area: 'Portal', link: 'printables', hint: 'İlgili bölüme git ve bir içerik dene.' },
  { id: 'quest-portal-20', title: 'Portal görevi 20', emoji: '🌙', stars: 3, minutes: 3, area: 'Portal', link: 'audio', hint: 'İlgili bölüme git ve bir içerik dene.' },
  { id: 'quest-portal-21', title: 'Portal görevi 21', emoji: '🌊', stars: 1, minutes: 4, area: 'Portal', link: 'library', hint: 'İlgili bölüme git ve bir içerik dene.' },
  { id: 'quest-portal-22', title: 'Portal görevi 22', emoji: '🚀', stars: 2, minutes: 5, area: 'Portal', link: 'world', hint: 'İlgili bölüme git ve bir içerik dene.' },
  { id: 'quest-portal-23', title: 'Portal görevi 23', emoji: '🌿', stars: 3, minutes: 6, area: 'Portal', link: 'discover', hint: 'İlgili bölüme git ve bir içerik dene.' },
  { id: 'quest-portal-24', title: 'Portal görevi 24', emoji: '🎈', stars: 1, minutes: 7, area: 'Portal', link: 'shop', hint: 'İlgili bölüme git ve bir içerik dene.' },
  { id: 'quest-portal-25', title: 'Portal görevi 25', emoji: '🐻', stars: 2, minutes: 8, area: 'Portal', link: 'paths', hint: 'İlgili bölüme git ve bir içerik dene.' },
  { id: 'quest-portal-26', title: 'Portal görevi 26', emoji: '🦋', stars: 3, minutes: 9, area: 'Portal', link: 'journal', hint: 'İlgili bölüme git ve bir içerik dene.' },
  { id: 'quest-portal-27', title: 'Portal görevi 27', emoji: '🌈', stars: 1, minutes: 10, area: 'Portal', link: 'profile', hint: 'İlgili bölüme git ve bir içerik dene.' },
  { id: 'quest-portal-28', title: 'Portal görevi 28', emoji: '🐢', stars: 2, minutes: 11, area: 'Portal', link: 'teachers', hint: 'İlgili bölüme git ve bir içerik dene.' },
  { id: 'quest-portal-29', title: 'Portal görevi 29', emoji: '🦄', stars: 3, minutes: 12, area: 'Portal', link: 'calendar', hint: 'İlgili bölüme git ve bir içerik dene.' },
  { id: 'quest-portal-30', title: 'Portal görevi 30', emoji: '🐠', stars: 1, minutes: 3, area: 'Portal', link: 'stem', hint: 'İlgili bölüme git ve bir içerik dene.' },
  { id: 'quest-portal-31', title: 'Portal görevi 31', emoji: '🌻', stars: 2, minutes: 4, area: 'Portal', link: 'fun', hint: 'İlgili bölüme git ve bir içerik dene.' },
  { id: 'quest-portal-32', title: 'Portal görevi 32', emoji: '🏰', stars: 3, minutes: 5, area: 'Portal', link: 'create', hint: 'İlgili bölüme git ve bir içerik dene.' },
  { id: 'quest-portal-33', title: 'Portal görevi 33', emoji: '🧠', stars: 1, minutes: 6, area: 'Portal', link: 'coloring', hint: 'İlgili bölüme git ve bir içerik dene.' },
  { id: 'quest-portal-34', title: 'Portal görevi 34', emoji: '💛', stars: 2, minutes: 7, area: 'Portal', link: 'heroes', hint: 'İlgili bölüme git ve bir içerik dene.' },
  { id: 'quest-portal-35', title: 'Portal görevi 35', emoji: '🎵', stars: 3, minutes: 8, area: 'Portal', link: 'rhymes', hint: 'İlgili bölüme git ve bir içerik dene.' },
  { id: 'quest-portal-36', title: 'Portal görevi 36', emoji: '⭐', stars: 1, minutes: 9, area: 'Portal', link: 'feelings', hint: 'İlgili bölüme git ve bir içerik dene.' },
  { id: 'quest-portal-37', title: 'Portal görevi 37', emoji: '🦊', stars: 2, minutes: 10, area: 'Portal', link: 'activities', hint: 'İlgili bölüme git ve bir içerik dene.' },
  { id: 'quest-portal-38', title: 'Portal görevi 38', emoji: '🌙', stars: 3, minutes: 11, area: 'Portal', link: 'blog', hint: 'İlgili bölüme git ve bir içerik dene.' },
  { id: 'quest-portal-39', title: 'Portal görevi 39', emoji: '🌊', stars: 1, minutes: 12, area: 'Portal', link: 'printables', hint: 'İlgili bölüme git ve bir içerik dene.' },
  { id: 'quest-portal-40', title: 'Portal görevi 40', emoji: '🚀', stars: 2, minutes: 3, area: 'Portal', link: 'audio', hint: 'İlgili bölüme git ve bir içerik dene.' }
]

export function getDailyQuests(date = new Date()): Quest[] {
  const day = Math.floor(date.getTime() / 86400000)
  const picks: Quest[] = []
  for (let i = 0; i < 5; i++) {
    picks.push(QUEST_POOL[(day + i * 3) % QUEST_POOL.length])
  }
  const seen = new Set<string>()
  return picks.filter((q) => {
    if (seen.has(q.id)) return false
    seen.add(q.id)
    return true
  }).slice(0, 5)
}

export function todayKey(date = new Date()): string {
  return date.toISOString().slice(0, 10)
}

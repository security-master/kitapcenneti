export interface QuizQuestion {
  question: string
  options: string[]
  answer: number
}

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    question: 'Güneşe en yakın gezegen hangisidir?',
    options: ['Dünya', 'Merkür', 'Mars', 'Jüpiter'],
    answer: 1,
  },
  {
    question: 'Balinalar hangi grupta yer alır?',
    options: ['Balık', 'Sürüngen', 'Memeli', 'Kuş'],
    answer: 2,
  },
  {
    question: 'Gökkuşağında yaklaşık kaç renk vardır?',
    options: ['3', '5', '7', '10'],
    answer: 2,
  },
  {
    question: 'Türkiye\'nin başkenti neresidir?',
    options: ['İstanbul', 'İzmir', 'Ankara', 'Bursa'],
    answer: 2,
  },
  {
    question: 'Bir haftada kaç gün vardır?',
    options: ['5', '6', '7', '8'],
    answer: 2,
  },
  {
    question: 'Arılar ne üretir?',
    options: ['Süt', 'Bal', 'Peynir', 'Ekmek'],
    answer: 1,
  },
  {
    question: 'Ay Dünya\'nın etrafında ne yapar?',
    options: ['Düşer', 'Uçar gider', 'Döner', 'Kaybolur'],
    answer: 2,
  },
  {
    question: 'Kitap okumak neyi geliştirir?',
    options: ['Sadece uykuyu', 'Hayal gücünü', 'Koşmayı', 'Hiçbir şeyi'],
    answer: 1,
  },
]

export const MEMORY_EMOJIS = ['🦄', '🚀', '🐢', '🌟', '🐠', '🦋', '🌈', '🏰']

export type PageId =
  | 'home'
  | 'quests'
  | 'create'
  | 'audio'
  | 'coloring'
  | 'heroes'
  | 'activities'
  | 'fun'
  | 'rhymes'
  | 'stem'
  | 'feelings'
  | 'blog'
  | 'printables'
  | 'certificates'
  | 'parents'
  | 'about'
  | 'privacy'
  | 'terms'
  | 'contact'

export interface NavItem {
  id: PageId
  label: string
  emoji: string
  short: string
}

export const ALL_PAGES: PageId[] = [
  'home', 'quests', 'create', 'audio', 'coloring', 'heroes', 'activities', 'fun',
  'rhymes', 'stem', 'feelings', 'blog', 'printables', 'certificates', 'parents',
  'about', 'privacy', 'terms', 'contact',
]

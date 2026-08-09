export type PageId =
  | 'home'
  | 'create'
  | 'audio'
  | 'coloring'
  | 'heroes'
  | 'activities'
  | 'rhymes'
  | 'parents'
  | 'certificates'

export interface NavItem {
  id: PageId
  label: string
  emoji: string
  short: string
}

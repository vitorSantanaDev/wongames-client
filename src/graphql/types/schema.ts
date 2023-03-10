import { Aligment } from 'components/Highlight/types'
import { RibbonColors, RibbonSizes } from 'components/Ribbon/types'

export enum EnumGameRating {
  Br0 = 'BR0',
  Br10 = 'BR10',
  Br12 = 'BR12',
  Br16 = 'BR16',
  Br18 = 'BR18'
}

export type GenericInfoGame = { name: string }
export type Cover = { url: string }
export type GalleryItem = {
  src: string
  label?: string
}

export interface Game {
  name: string
  slug: string
  price: number
  cover?: Cover
  developers: GenericInfoGame[]
}

export interface GameDetails extends Game {
  rating: EnumGameRating
  release_date?: string
  gallery: GalleryItem[]
  description: string
  short_description: string
  publisher: GenericInfoGame
  categories: Array<GenericInfoGame>
  platforms: Array<GenericInfoGame>
}

export type QueryGamesQueryVariables = { limit: number; start?: number }

export type QueryGamesQuery = {
  games: Game[]
}

export type QueryGameBySlugQuery = {
  games: GameDetails[]
}

export type QueryGameBySlugQueryVariables = {
  slug: string
}

export type Button = { label: string; link: string }

export type Ribbon = { text: string; size?: RibbonSizes; color?: RibbonColors }

export type Banner = {
  image: Pick<Cover, 'url'>
  title: string
  subtitle: string
  button: Button
  ribbon: Ribbon
}

export type Highlight = {
  title: string
  subtitle: string
  background: Pick<Cover, 'url'>
  floatImage?: Pick<Cover, 'url'>
  buttonLabel: string
  buttonLink: string
  alignment?: Aligment
}

export type Seciton = {
  title: string
  highlight?: Highlight
  games?: Game[]
}

export type PopularGamesQuery = Seciton
export type NewGamesQuery = Seciton
export type FreeGamesQuery = Seciton
export type UpcomingGamesQuery = Seciton

export type QueryHomeQueryVariables = { date: string }

export type QueryHomeQuery = {
  banners: Banner[]
  newGames: Game[]
  upcomingGames: Game[]
  freeGames: Game[]
  sections: {
    popularGames: PopularGamesQuery
    newGames: NewGamesQuery
    freeGames: FreeGamesQuery
    upcomingGames: UpcomingGamesQuery
  }
}

export type RecommendedSection = Pick<
  Seciton,
  Exclude<keyof Seciton, 'title'>
> & { title?: string }

export type QueryRecommendedQuery = {
  recommended: {
    section: RecommendedSection
  }
}

export type QueryUpcomingQueryVariables = { date: string }

export type QueryUpcomingQuery = {
  upcomingGames: Game[]
  showCase: { upcomingHighlight: Pick<Seciton, 'title' | 'highlight'> }
}

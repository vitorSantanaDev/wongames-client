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
  id: string
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

export type QueryGamesQueryVariables = {
  limit?: number
  start?: number
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  where?: any
  sort?: string | null
}

export interface QueryGames_gamesConnectionValues {
  id: string
}

export interface QueryGames_gamesConnection {
  values: (QueryGames_gamesConnectionValues | null)[] | null
}

export type QueryGamesQuery = {
  games: Game[]
  gamesConnection?: QueryGames_gamesConnection | null
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

export type Section = {
  title: string
  highlight?: Highlight
  games?: Game[]
}

export type PopularGamesQuery = Section
export type NewGamesQuery = Section
export type FreeGamesQuery = Section
export type UpcomingGamesQuery = Section

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
  Section,
  Exclude<keyof Section, 'title'>
> & { title?: string }

export type QueryRecommendedQuery = {
  recommended: {
    section: RecommendedSection
  }
}

export type QueryUpcomingQueryVariables = { date: string }

export type QueryUpcomingQuery = {
  upcomingGames: Game[]
  showCase: { upcomingHighlight: Pick<Section, 'title' | 'highlight'> }
}

export type QueryProfileMeQuery = {
  me: {
    username: string
    email: string
  }
}

export type QueryWishlistQueryVariables = {
  identifier: string
}

export type QueryWishlistQuery = {
  wishlists: Wishlist[]
}

//** =============** MUTATIONS TYPES **=================== **//

export type UserRegisterInput = {
  username: string
  email: string
  password: string
}

export type MutationRegisterVariables = {
  input: UserRegisterInput
}

export type MutationResgiterMutation = {
  register: {
    jwt: string
  }
}

export type Wishlist = {
  id: number | string
  user: {
    id: number | string
    username: string
  }
  games: Partial<Game>[]
}

export type CreateWishlistInput = {
  data: {
    games: string[]
  }
}

export type MutationCreateWishlistVariables = {
  input: CreateWishlistInput
}

export type WishlistMutationResponse = {
  wishlist: {
    id: string
    user: {
      id: string
      username: string
    }
    games: Game[]
  }
}

export type MutationCreateWishListMutation = {
  createWishlist: WishlistMutationResponse
}

export type UpdateWishListInput = {
  input: {
    where: {
      id: string
    }
    data: {
      games: string[]
    }
  }
}

export type MutationUpdateWishlistVariables = {
  input: UpdateWishListInput
}

export type MutationUpdateWishListMutation = Pick<
  MutationCreateWishListMutation,
  Exclude<keyof MutationCreateWishListMutation, 'createWishlist'>
> & {
  updateWishlist: WishlistMutationResponse
}

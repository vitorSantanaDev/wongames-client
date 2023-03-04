import { BannerProps } from 'components/Banner/types'
import { GameCardProps } from 'components/GameCard/types'
import { HighlightProps } from 'components/Highlight/types'

export type HomeTemplateProps = {
  banners: BannerProps[]

  newGamesTitle: string
  newGames: GameCardProps[]

  mostPopularGamesTitle: string
  mostPopularGames: GameCardProps[]
  mostPopularGamesHighlight: HighlightProps

  upcomingGamesTitle: string
  upcomingGames: GameCardProps[]
  upcomingGamesHighlight: HighlightProps

  freeGamesTitle: string
  freeGames: GameCardProps[]
  freeGamesHighlight: HighlightProps
}

import { GameCardProps } from 'components/GameCard/types'
import { HighlightProps } from 'components/Highlight/types'

export type WishlistProps = {
  recommendedHighlight: HighlightProps
  recommendedGames: GameCardProps[]
  recommendTitle?: string
}

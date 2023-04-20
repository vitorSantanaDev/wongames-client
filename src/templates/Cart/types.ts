import { CartListProps } from 'components/CartList/types'
import { GameCardProps } from 'components/GameCard/types'
import { HighlightProps } from 'components/Highlight/types'

export type CartProps = {
  recommendedTitle?: string
  recommendedHighlight: HighlightProps
  recommendedGames: GameCardProps[]
} & CartListProps

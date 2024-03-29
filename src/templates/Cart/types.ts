import { CartListProps } from 'components/CartList/types'
import { GameCardProps } from 'components/GameCard/types'
import { HighlightProps } from 'components/Highlight/types'
import { Session } from 'next-auth'

export type CartProps = {
  session: Session
  recommendedTitle?: string
  recommendedHighlight: HighlightProps
  recommendedGames: GameCardProps[]
} & CartListProps

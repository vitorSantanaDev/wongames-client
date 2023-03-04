import { GameCardProps } from 'components/GameCard/types'
import { HighlightProps } from 'components/Highlight/types'

export type ShowCaseProps = {
  title?: string
  highlight?: HighlightProps
  games?: GameCardProps[]
  color?: 'black' | 'white'
}

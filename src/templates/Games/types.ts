import { ItemProps } from 'components/ExploreSidebar/types'
import { GameCardProps } from 'components/GameCard/types'

export type GamesProps = {
  games?: GameCardProps[]
  filterItems: ItemProps[]
}

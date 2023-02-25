import { GameItemProps } from 'components/GameItem/types'

export type CartListProps = {
  total: string
  hasButton?: boolean
  items: GameItemProps[]
}

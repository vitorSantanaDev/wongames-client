import { GameItemProps, PaymentInfoProps } from 'components/GameItem/types'

export type OrderProps = {
  id: string
  paymentInfo: PaymentInfoProps
  games: GameItemProps[]
}

export type OrdersListProps = {
  items: OrderProps[]
}

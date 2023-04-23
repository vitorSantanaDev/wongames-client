import Heading from 'components/Heading'
import GameItem from 'components/GameItem'

import Empty from 'components/Empty'
import { OrdersListProps } from './types'

import * as S from './styles'

const OrdersList = ({ items }: OrdersListProps) => (
  <S.Wrapper>
    <Heading lineBottom color="black" size="small">
      My orders
    </Heading>
    {items?.length ? (
      items.map((order, index) => {
        return order.games.map((game) => (
          <GameItem
            key={`${order.id}-${index}`}
            {...game}
            paymentInfo={order.paymentInfo}
          />
        ))
      })
    ) : (
      <Empty
        title="You have no orders yet"
        description="Go back to the store and explore great games and offers"
      />
    )}
  </S.Wrapper>
)

export default OrdersList

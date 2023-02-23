import Heading from 'components/Heading'
import GameItem from 'components/GameItem'

import { OrdersListProps } from './types'

import * as S from './styles'
import Empty from 'components/Empty'

const OrdersList = ({ items }: OrdersListProps) => (
  <S.Wrapper>
    <Heading lineBottom color="black" size="small">
      My orders
    </Heading>
    {items?.length ? (
      items.map((item, index) => (
        <GameItem key={`${item.title}-${index}`} {...item} />
      ))
    ) : (
      <Empty
        title="You have no orders yet"
        description="Go back to the store and explore great games and offers"
      />
    )}
  </S.Wrapper>
)

export default OrdersList

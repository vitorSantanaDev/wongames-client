import Base from 'templates/Base'
import Empty from 'components/Empty'
import Heading from 'components/Heading'
import CartList from 'components/CartList'
import ShowCase from 'components/ShowCase'
import PaymentOptions from 'components/PaymentOptions'

import { Divider } from 'components/Divider'
import { Container } from 'components/Container'

import { CartProps } from './types'

import * as S from './styles'

const Cart = ({
  items,
  total,
  cards,
  recommendedGames,
  recommendedHighlight
}: CartProps) => {
  const handlePayment = () => ({})
  return (
    <Base>
      <Container>
        <Heading lineLeft lineColor="secondary">
          My cart
        </Heading>
        {!!items && items.length ? (
          <S.Content>
            <CartList items={items} total={total} />
            <PaymentOptions handlePayment={handlePayment} cards={cards} />
          </S.Content>
        ) : (
          <Empty
            hasLink
            title="Your cart is empty"
            description="Go back to the store and explore great games and offers"
          />
        )}
        <Divider />
      </Container>
      <ShowCase
        title="You may like these games"
        games={recommendedGames}
        highlight={recommendedHighlight}
      />
    </Base>
  )
}

export default Cart

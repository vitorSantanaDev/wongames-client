import Base from 'templates/Base'
import Heading from 'components/Heading'
import CartList from 'components/CartList'
import ShowCase from 'components/ShowCase'
import PaymentOptions from 'components/PaymentOptions'

import { Divider } from 'components/Divider'
import { Container } from 'components/Container'

import { CartProps } from './types'

import * as S from './styles'

const Cart = ({
  cards,
  recommendedGames,
  recommendedTitle,
  recommendedHighlight
}: CartProps) => {
  const handlePayment = () => ({})
  return (
    <Base>
      <Container>
        <Heading lineLeft lineColor="secondary">
          My cart
        </Heading>
        <S.Content>
          <CartList />
          <PaymentOptions handlePayment={handlePayment} cards={cards} />
        </S.Content>
        <Divider />
      </Container>
      <ShowCase
        title={recommendedTitle || 'You may like these games'}
        games={recommendedGames}
        highlight={recommendedHighlight}
      />
    </Base>
  )
}

export default Cart

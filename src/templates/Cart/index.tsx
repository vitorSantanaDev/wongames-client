import { loadStripe } from '@stripe/stripe-js'
import { Elements } from '@stripe/react-stripe-js'

import { Info } from '@styled-icons/material-outlined'

import Base from 'templates/Base'
import Heading from 'components/Heading'
import CartList from 'components/CartList'
import ShowCase from 'components/ShowCase'
import PaymentForm from 'components/PaymentForm'

import { Divider } from 'components/Divider'
import { Container } from 'components/Container'

import { CartProps } from './types'

import * as S from './styles'

const stripe = loadStripe(`${process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY}`, {
  locale: 'en'
})

const Cart = ({
  session,
  recommendedGames,
  recommendedTitle,
  recommendedHighlight
}: CartProps) => {
  return (
    <Base>
      <Container>
        <Heading lineLeft lineColor="secondary">
          My cart
        </Heading>
        <S.Content>
          <CartList />
          <Elements stripe={stripe}>
            <PaymentForm session={session} />
          </Elements>
        </S.Content>
        <S.Text>
          <Info size={18} /> Your purchase is protected by a secure connection
          from the WON platform. By purchasing from our store you agree and
          agree to our <a href="#">terms of use.</a> After making the purchase
          you are entitled to a refund within a maximum of 30 days, without any
          additional cost, as long as the download of the purchased game has not
          occurred after your purchase.
        </S.Text>
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

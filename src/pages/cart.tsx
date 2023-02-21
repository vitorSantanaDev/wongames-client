import Cart from 'templates/Cart'

import cartListMock from 'components/CartList/mock'
import highlightMock from 'components/Highlight/mock'
import gamesMock from 'components/GameCardSlider/mock'
import cardsMock from 'components/PaymentOptions/mock'

import { CartProps } from 'templates/Cart/types'

export default function CartPage(props: CartProps) {
  return <Cart {...props} />
}

export async function getServerSideProps() {
  const totalPrice = cartListMock
    .reduce(
      (acc, item) =>
        (acc += Number(item.price.replace('R$ ', '').replace(',', '.'))),
      0
    )
    .toFixed(2)
  return {
    props: {
      cards: [...cardsMock],
      total: `R$ ${totalPrice}`,
      items: [...cartListMock],
      recommendedGames: [...gamesMock],
      recommendedHighlight: { ...highlightMock }
    }
  }
}

import { ShoppingCart } from '@styled-icons/material-outlined'

import * as S from './styles'
import { useCart } from 'hooks/use-cart'

const CartIcon = () => {
  const { quantity } = useCart()
  return (
    <S.Wrapper>
      {quantity > 0 && <S.Badge aria-label="cart items">{quantity}</S.Badge>}
      <ShoppingCart aria-label="shopping cart" />
    </S.Wrapper>
  )
}
export default CartIcon

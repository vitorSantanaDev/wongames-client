import {
  AddShoppingCart,
  RemoveShoppingCart
} from '@styled-icons/material-outlined'

import Button from 'components/Button'

import { useCart } from 'hooks/use-cart'
import { CartButtonProps } from './types'

const CartButton = ({ id, hasText, size = 'small' }: CartButtonProps) => {
  const { isInCart, addToCart, removeFromCart } = useCart()
  const ButtonText = isInCart(id) ? 'Remove from cart' : 'Add to cart'

  return (
    <Button
      size={size}
      icon={
        isInCart(id) ? (
          <RemoveShoppingCart aria-label="Remove from cart" />
        ) : (
          <AddShoppingCart aria-label="Add to cart" />
        )
      }
      onClick={() => (isInCart(id) ? removeFromCart(id) : addToCart(id))}
    >
      {hasText && ButtonText}
    </Button>
  )
}

export default CartButton

import CartList from 'components/CartList'
import Dropdown from 'components/Dropdown'
import CartIcon from 'components/CartIcon'

import * as S from './styles'

const CartDropdown = () => {
  return (
    <S.Wrapper>
      <Dropdown title={<CartIcon />}>
        <CartList hasButton />
      </Dropdown>
    </S.Wrapper>
  )
}

export default CartDropdown

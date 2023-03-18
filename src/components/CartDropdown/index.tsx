import CartList from 'components/CartList'
import Dropdown from 'components/Dropdown'
import CartIcon from 'components/CartIcon'

import { CartDropdownProps } from './types'

import * as S from './styles'

const CartDropdown = ({ items, total }: CartDropdownProps) => (
  <S.Wrapper>
    <Dropdown title={<CartIcon />}>
      <CartList items={items} total={total} hasButton />
    </Dropdown>
  </S.Wrapper>
)

export default CartDropdown

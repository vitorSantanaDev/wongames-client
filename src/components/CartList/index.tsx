import GameItem from 'components/GameItem'

import { CartListProps } from './types'

import * as S from './styles'

const CartList = ({ items, total }: CartListProps) => (
  <S.Wrapper>
    {items.map((item) => (
      <GameItem key={item.title} {...item} />
    ))}
    <S.CartListFooter>
      <span>Total: </span>
      <S.Total>{total}</S.Total>
    </S.CartListFooter>
  </S.Wrapper>
)

export default CartList

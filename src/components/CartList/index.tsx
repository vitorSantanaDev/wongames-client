import Link from 'next/link'

import Button from 'components/Button'
import GameItem from 'components/GameItem'

import { CartListProps } from './types'

import * as S from './styles'

const CartList = ({ items, total, hasButton = false }: CartListProps) => (
  <S.Wrapper>
    {items.map((item) => (
      <GameItem key={item.title} {...item} />
    ))}
    <S.CartListFooter>
      {!hasButton && <span>Total: </span>}
      <S.Total>{total}</S.Total>
      {!!hasButton && (
        <Link href="/cart" passHref>
          <Button as="a">Buy it now</Button>
        </Link>
      )}
    </S.CartListFooter>
  </S.Wrapper>
)

export default CartList

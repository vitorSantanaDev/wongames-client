import Link from 'next/link'

import Button from 'components/Button'
import GameItem from 'components/GameItem'

import { CartListProps } from './types'

import * as S from './styles'
import Empty from 'components/Empty'
import { useCart } from 'hooks/use-cart'

import CartListLoader from 'components/CartListLoader'

const CartList = ({ hasButton = false }: CartListProps) => {
  const { items, total, loading } = useCart()

  if (loading) {
    return (
      <S.Loader>
        <CartListLoader />
      </S.Loader>
    )
  }

  return (
    <S.Wrapper isEmpty={!items?.length}>
      {!!items && !!items.length ? (
        <>
          <S.GamesList>
            {items.map((item) => (
              <GameItem key={item.title} {...item} />
            ))}
          </S.GamesList>
          <S.CartListFooter>
            {!hasButton && <span>Total: </span>}
            <S.Total>{total}</S.Total>
            {!!hasButton && (
              <Link href="/cart" passHref>
                <Button as="a">Buy it now</Button>
              </Link>
            )}
          </S.CartListFooter>
        </>
      ) : (
        <Empty
          hasLink
          title="Your cart is empty"
          description="Go back to the store and explore great games and offers"
        />
      )}
    </S.Wrapper>
  )
}

export default CartList

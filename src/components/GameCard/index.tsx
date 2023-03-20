import Link from 'next/link'

import { Favorite, FavoriteBorder } from '@styled-icons/material-outlined'

import formatPrice from 'utils/formatPrice'
import { GameCardProps } from './types'

import Ribbon from 'components/Ribbon'
import CartButton from 'components/CartButton'

import * as S from './styles'

const GameCard = ({
  id,
  slug,
  image,
  price,
  title,
  developer,
  onFavorite,
  favorite = false,
  promotionalPrice,
  ribbon,
  ribbonSize = 'small',
  ribbonColor = 'primary'
}: GameCardProps) => (
  <S.Wrapper>
    {!!ribbon && (
      <Ribbon size={ribbonSize} color={ribbonColor}>
        {ribbon}
      </Ribbon>
    )}
    <Link href={`/game/${slug}`} passHref>
      <S.ImageBox>
        {/* temporarily */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={image} alt={title} />
      </S.ImageBox>
    </Link>
    <S.Content>
      <Link href={`/game/${slug}`} passHref>
        <S.Info>
          <S.Title>{title}</S.Title>
          <S.Developer>{developer}</S.Developer>
        </S.Info>
      </Link>
      <S.FavButton onClick={onFavorite} role="button">
        {favorite ? (
          <Favorite aria-label="Remove from wishlist" />
        ) : (
          <FavoriteBorder aria-label="Add to wishlist" />
        )}
      </S.FavButton>
      <S.BuyBox>
        {!!promotionalPrice && (
          <S.Price isPromotional>{formatPrice(price)}</S.Price>
        )}
        <S.Price>{formatPrice(promotionalPrice || price)}</S.Price>
        <CartButton id={id} />
      </S.BuyBox>
    </S.Content>
  </S.Wrapper>
)

export default GameCard

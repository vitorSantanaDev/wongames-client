import {
  FavoriteBorder,
  AddShoppingCart
} from '@styled-icons/material-outlined'

import Ribbon from 'components/Ribbon'
import Button from 'components/Button'
import Heading from 'components/Heading'

import formatPrice from 'utils/formatPrice'
import { GameInfoProps } from './types'

import * as S from './styles'

const GameInfo = ({ price, title, description }: GameInfoProps) => (
  <S.Wrapper>
    <Heading color="black" lineBottom>
      {title}
    </Heading>
    <Ribbon color="secondary">{formatPrice(price)}</Ribbon>
    <S.Description>{description}</S.Description>
    <S.ButtonsWrapper>
      <Button icon={<AddShoppingCart />} size="large">
        Add to cart
      </Button>
      <Button icon={<FavoriteBorder />} size="large" minimal>
        Wishlist
      </Button>
    </S.ButtonsWrapper>
  </S.Wrapper>
)

export default GameInfo

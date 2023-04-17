import Ribbon from 'components/Ribbon'
import Heading from 'components/Heading'
import CartButton from 'components/CartButton'
import WishlistButton from 'components/WishlistButton'

import formatPrice from 'utils/formatPrice'
import { GameInfoProps } from './types'

import * as S from './styles'

const GameInfo = ({ id, price, title, description }: GameInfoProps) => (
  <S.Wrapper>
    <Heading color="black" lineBottom>
      {title}
    </Heading>
    <Ribbon color="secondary">{formatPrice(price)}</Ribbon>
    <S.Description>{description}</S.Description>
    <S.ButtonsWrapper>
      <CartButton hasText size="large" id={id} />
      <WishlistButton id={id} hasText size="large" />
    </S.ButtonsWrapper>
  </S.Wrapper>
)

export default GameInfo

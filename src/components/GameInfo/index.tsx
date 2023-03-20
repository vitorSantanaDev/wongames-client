import Ribbon from 'components/Ribbon'
import Heading from 'components/Heading'
import CartButton from 'components/CartButton'

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
    </S.ButtonsWrapper>
  </S.Wrapper>
)

export default GameInfo

import * as S from './styles'
import { RibbonProps } from './types'

const Ribbon = ({
  children,
  color = 'primary',
  size = 'normal'
}: RibbonProps) => (
  <S.Wrapper size={size} color={color}>
    {children}
  </S.Wrapper>
)

export default Ribbon

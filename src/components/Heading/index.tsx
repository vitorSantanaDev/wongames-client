import * as S from './styles'
import { HeadingProps } from './types'

const Heading = ({
  children,
  color = 'white',
  lineLeft = false,
  lineBottom = false
}: HeadingProps) => (
  <S.Wrapper lineBottom={lineBottom} lineLeft={lineLeft} color={color}>
    {children}
  </S.Wrapper>
)

export default Heading

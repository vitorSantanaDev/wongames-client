import * as S from './styles'
import { HeadingProps } from './types'

const Heading = ({
  children,
  color = 'white',
  size = 'medium',
  lineLeft = false,
  lineBottom = false,
  lineColor = 'primary'
}: HeadingProps) => (
  <S.Wrapper
    size={size}
    color={color}
    lineLeft={lineLeft}
    lineColor={lineColor}
    lineBottom={lineBottom}
  >
    {children}
  </S.Wrapper>
)

export default Heading

import * as S from './styles'

import { ButtonProps } from './types'

const Button = ({
  icon,
  children,
  size = 'medium',
  fullWidth = false,
  ...props
}: ButtonProps) => (
  <S.Wrapper {...props} fullWidth={fullWidth} size={size} hasIcon={!!icon}>
    {!!icon && icon}
    {!!children && <span>{children}</span>}
  </S.Wrapper>
)

export default Button

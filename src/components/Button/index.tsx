import * as S from './styles'

import { ButtonProps } from './types'

const Button = ({
  icon,
  children,
  size = 'medium',
  minimal = false,
  fullWidth = false,
  ...props
}: ButtonProps) => (
  <S.Wrapper
    size={size}
    hasIcon={!!icon}
    minimal={minimal}
    fullWidth={fullWidth}
    {...props}
  >
    {!!icon && icon}
    {!!children && <span>{children}</span>}
  </S.Wrapper>
)

export default Button

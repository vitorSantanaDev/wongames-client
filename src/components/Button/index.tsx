import React from 'react'
import * as S from './styles'

import { ButtonProps } from './types'

const Button: React.ForwardRefRenderFunction<S.WrapperProps, ButtonProps> = (
  {
    icon,
    children,
    size = 'medium',
    minimal = false,
    fullWidth = false,
    ...props
  },
  ref
) => {
  return (
    <S.Wrapper
      size={size}
      hasIcon={!!icon}
      minimal={minimal}
      fullWidth={fullWidth}
      ref={ref}
      {...props}
    >
      {!!icon && icon}
      {!!children && <span>{children}</span>}
    </S.Wrapper>
  )
}
export default React.forwardRef(Button)

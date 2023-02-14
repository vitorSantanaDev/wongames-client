import styled, { css } from 'styled-components'

import { lighten } from 'polished'

export const ForgotPassword = styled.a`
  ${({ theme }) => css`
    display: block;
    text-align: right;
    text-decoration: none;
    color: ${theme.colors.black};
    font-size: ${theme.font.sizes.small};

    &:hover {
      color: ${lighten(0.2, theme.colors.black)};
    }
  `}
`

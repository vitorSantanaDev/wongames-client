import styled, { css } from 'styled-components'

import * as ButtonStyles from 'components/Button/styles'
import * as TextFieldStyles from 'components/TextField/styles'

import { darken } from 'polished'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    ${TextFieldStyles.Wrapper} {
      margin: ${theme.spacings.xxsmall} 0;
    }

    ${ButtonStyles.Wrapper} {
      margin: ${theme.spacings.medium} auto ${theme.spacings.xsmall};
    }
  `}
`

export const FormExtraLink = styled.div`
  ${({ theme }) => css`
    text-align: center;
    color: ${theme.colors.black};
    font-size: ${theme.font.sizes.small};

    a {
      text-decoration: none;
      color: ${theme.colors.secondary};
      transition: color, border, ${theme.transition.fast};
      border-bottom: 0.1rem solid ${theme.colors.secondary};

      &:hover {
        color: ${darken(0.1, theme.colors.secondary)};
        border-bottom: 0.1rem solid ${darken(0.1, theme.colors.secondary)};
      }
    }
  `}
`

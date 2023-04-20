import { tint } from 'polished'
import styled, { css } from 'styled-components'

import * as ButtonStyles from 'components/Button/styles'

export const Wrapper = styled.div``

export const Body = styled.div`
  ${({ theme }) => css`
    padding: ${theme.spacings.small};
    background-color: ${theme.colors.white};
  `}
`

export const Footer = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;

    font-weight: ${theme.font.bold};
    color: ${theme.colors.black};
    padding: ${theme.spacings.small};
    background-color: ${tint(0.2, theme.colors.lightGray)};

    ${ButtonStyles.Wrapper} {
      outline: 0;
      padding-left: ${theme.spacings.xxsmall};
      padding-right: ${theme.spacings.xxsmall};
    }
  `}
`

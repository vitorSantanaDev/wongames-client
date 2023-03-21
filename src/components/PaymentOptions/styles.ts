import { tint } from 'polished'
import styled, { css, DefaultTheme } from 'styled-components'

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

export const CardsList = styled.div`
  display: flex;
  flex-direction: column;
`

export const ItemStyles = (theme: DefaultTheme) => css`
  height: 5rem;
  cursor: pointer;
  border-radius: 0.2rem;
  color: ${theme.colors.black};
  padding: 0 ${theme.spacings.xxsmall};
  background-color: ${theme.colors.lightGray};

  display: flex;
  align-items: center;
`

export const CardItem = styled.label`
  ${({ theme }) => css`
    ${ItemStyles(theme)}
    justify-content: space-between;

    &:not(:last-child) {
      margin-bottom: ${theme.spacings.xxsmall};
    }
  `}
`

export const CardInfo = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;

    img {
      margin-right: ${theme.spacings.xxsmall};
    }
  `}
`

export const AddCard = styled.div`
  ${({ theme }) => css`
    ${ItemStyles(theme)}

    svg {
      width: 2.4rem;
      margin-right: ${theme.spacings.xxsmall};
      margin-left: ${theme.spacings.xsmall};
    }
  `}
`

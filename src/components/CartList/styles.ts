import { tint } from 'polished'
import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-self: start;
    flex-direction: column;
    background-color: ${theme.colors.white};
  `}
`

export const CartListFooter = styled.div`
  ${({ theme }) => css`
    padding: 2rem;
    display: flex;
    justify-content: space-between;

    color: ${theme.colors.black};
    font-weight: ${theme.font.bold};
    font-size: ${theme.font.sizes.small};
    background-color: ${tint(0.2, theme.colors.lightGray)};

    ${media.greaterThan('medium')`
      padding: ${theme.spacings.small};
      font-size: ${theme.font.sizes.medium};
    `}
  `}
`

export const Total = styled.span`
  ${({ theme }) => css`
    color: ${theme.colors.primary};
  `}
`

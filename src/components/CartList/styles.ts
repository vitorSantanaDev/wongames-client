import { tint } from 'polished'
import styled, { css } from 'styled-components'
import media from 'styled-media-query'

import * as EmptyStyles from 'components/Empty/styles'
import { LoadingWrapper } from 'components/LoadingWrapper'

type WrapperProps = {
  isEmpty: boolean
}

export const Wrapper = styled.div<WrapperProps>`
  ${({ theme, isEmpty }) => css`
    display: flex;
    align-self: start;
    flex-direction: column;
    background-color: ${theme.colors.white};

    ${isEmpty &&
    css`
      ${EmptyStyles.Wrapper} {
        padding-bottom: ${theme.spacings.medium};
      }

      ${EmptyStyles.Image} {
        max-width: 20rem;
      }

      ${EmptyStyles.Title} {
        font-size: ${theme.font.sizes.large};
      }

      ${EmptyStyles.Description} {
        color: ${theme.colors.black};
        font-size: ${theme.font.sizes.medium};
      }
    `}
  `}
`

export const CartListFooter = styled.div`
  ${({ theme }) => css`
    padding: 2rem;
    display: flex;
    align-items: center;
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

export const Loader = styled(LoadingWrapper)`
  ${({ theme }) => css`
    background: ${theme.colors.white};
    height: 40rem;
    min-width: 56rem;
    svg {
      height: 10rem;
      width: 10rem;
    }
  `}
`

export const GamesList = styled.div`
  max-height: 40rem;
  overflow-y: auto;
`

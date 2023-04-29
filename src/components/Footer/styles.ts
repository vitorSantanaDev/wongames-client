import styled, { css } from 'styled-components'
import * as HeadingStyles from 'components/Heading/styles'
import media from 'styled-media-query'
import { darken } from 'polished'

export const Wrapper = styled.footer`
  ${() => css`
    ${HeadingStyles.Wrapper} {
      text-transform: uppercase;
    }
  `}
`

export const Content = styled.div`
  ${({ theme }) => css`
    display: grid;
    gap: ${theme.grid.gutter};
    grid-template-columns: repeat(2, 1fr);
    margin-top: ${theme.spacings.medium};

    ${media.greaterThan('medium')`
      grid-template-columns: repeat(4, 1fr);
    `}
  `}
`

export const Column = styled.div`
  ${({ theme }) => css`
    a,
    span {
      display: block;
      text-decoration: none;
      color: ${darken(0.2, theme.colors.gray)};
      font-size: ${theme.font.sizes.medium};
      margin-bottom: ${theme.spacings.xxsmall};
    }
    a:hover {
      text-decoration: underline;
    }
  `}
`

export const Copyright = styled.div`
  ${({ theme }) => css`
    text-align: center;
    color: ${theme.colors.gray};
    margin-top: ${theme.spacings.large};
    font-size: ${theme.font.sizes.xsmall};
    margin-bottom: ${theme.spacings.medium};
  `}
`

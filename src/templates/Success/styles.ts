import styled, { css } from 'styled-components'

import * as HeadingStyles from 'components/Heading/styles'

import media from 'styled-media-query'

export const Wrapper = styled.main`
  ${({ theme }) => css`
    padding: ${theme.spacings.xxlarge} 0 calc(${theme.spacings.xxlarge} * 3);
    ${HeadingStyles.Wrapper} {
      text-align: center;
      margin-bottom: ${theme.spacings.medium};
    }
  `}
`

export const CheckMark = styled.div`
  ${({ theme }) => css`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: ${theme.spacings.medium};

    svg {
      color: ${theme.colors.white};
      background: ${theme.colors.primary};
      border-radius: 50%;
      padding: 1rem;
      width: 7rem;

      border: 6px solid ${theme.colors.primaryDarken};
      margin: 0 ${theme.spacings.small};

      ${media.greaterThan('medium')`
      margin: 0 ${theme.spacings.medium};
      `}
    }
  `}
`

export const Line = styled.div`
  ${({ theme }) => css`
    min-height: 1px;
    width: 32rem;
    max-width: 32rem;
    background-color: ${theme.colors.primary};
  `}
`

export const Text = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-size: ${theme.font.sizes.medium};
    text-align: center;
    max-width: 60rem;
    margin: auto;
    a {
      color: ${theme.colors.primary};
      text-decoration: none;
    }
  `}
`

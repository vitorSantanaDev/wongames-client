import styled, { css } from 'styled-components'

import * as HeadingStyles from 'components/Heading/styles'
import * as LogoStyles from 'components/Logo/styles'
import media from 'styled-media-query'

export const Wrapper = styled.main`
  display: grid;
  height: 100vh;
  grid-template-columns: 1fr;

  ${media.greaterThan('medium')`
    grid-template-columns: 1fr 1fr;
  `}
`

export const BannerBlock = styled.div`
  ${({ theme }) => css`
    position: relative;
    background-size: cover;
    background-position: center center;
    background-image: url('/img/auth-bg.png');
    color: ${theme.colors.white};

    padding: ${theme.spacings.xxlarge} ${theme.spacings.xxlarge}
      ${theme.spacings.large};

    ${media.lessThan('medium')`
        display: none;
    `}

    &::after {
      content: '';
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      background-color: ${theme.colors.black};
      opacity: 0.85;
    }
  `}
`

export const BannerContent = styled.div`
  ${({ theme }) => css`
    display: grid;
    position: relative;
    z-index: ${theme.layers.base};

    height: 100%;
    grid-template-columns: 1fr;
    justify-content: space-between;
  `}
`

export const BannerSubtitle = styled.h3`
  ${({ theme }) => css`
    max-width: 60rem;
    font-weight: ${theme.font.light};
    font-size: ${theme.font.sizes.xxlarge};
    margin-top: ${theme.spacings.xxsmall};

    strong {
      color: ${theme.colors.primary};
    }
  `}
`

export const BannerFooter = styled.p`
  ${({ theme }) => css`
    align-self: end;
    text-align: center;
    justify-self: center;
    font-size: ${theme.font.sizes.xsmall};
  `}
`

export const Content = styled.div`
  ${({ theme }) => css`
    display: grid;
    align-items: center;
    justify-content: center;
    background-color: ${theme.colors.white};
  `}
`

export const ContentWrapper = styled.div`
  ${({ theme }) => css`
    width: 30rem;

    ${media.greaterThan('medium')`
      width: 36rem;
    `}

    ${HeadingStyles.Wrapper} {
      margin-bottom: ${theme.spacings.medium};
    }

    ${LogoStyles.Wrapper} {
      margin: 0 auto ${theme.spacings.xxlarge};
    }
  `}
`

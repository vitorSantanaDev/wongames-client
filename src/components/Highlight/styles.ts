import styled, { css } from 'styled-components'
import media from 'styled-media-query'
import { HighlightProps } from './types'

type WrapperProps = Pick<HighlightProps, 'backgroundImage' | 'alignment'>

const wrapperModifiers = {
  right: () => css`
    grid-template-columns: 1.3fr 2fr;
    grid-template-areas: 'floatImage content';
    ${Content} {
      text-align: right;
    }
  `,
  left: () => css`
    grid-template-columns: 2fr 1.3fr;
    grid-template-areas: 'content floatImage';
    ${Content} {
      text-align: left;
    }

    ${FloatImage} {
      justify-self: end;
    }
  `
}

export const Wrapper = styled.section<WrapperProps>`
  ${({ backgroundImage, alignment }) => css`
    position: relative;
    height: 23rem;
    background-size: cover;
    background-position: center center;
    background-image: url(${backgroundImage});

    display: grid;
    ${wrapperModifiers[alignment!]()}

    &::after {
      content: '';
      width: 100%;
      height: 100%;
      position: absolute;
      background-color: rgba(0, 0, 0, 0.6);
    }

    ${media.greaterThan('medium')`
      height: 32rem;
    `}
  `}
`

export const FloatImage = styled.img`
  ${({ theme }) => css`
    max-width: 100%;
    max-height: 23rem;
    align-self: end;
    z-index: ${theme.layers.base};

    grid-area: floatImage;

    ${media.greaterThan('medium')`
      max-height: 32rem;
    `}
  `}
`

export const Content = styled.div`
  ${({ theme }) => css`
    padding: ${theme.spacings.xsmall};
    text-align: right;
    z-index: ${theme.layers.base};

    grid-area: content;

    ${media.greaterThan('medium')`
      align-self: end;
      padding: ${theme.spacings.large};
    `}
  `}
`

export const Title = styled.h2`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-weight: ${theme.font.bold};
    font-size: ${theme.font.sizes.large};

    ${media.greaterThan('medium')`
      font-size: ${theme.font.sizes.xxlarge};
    `}
  `}
`

export const Subtitle = styled.h3`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-weight: ${theme.font.light};
    font-size: ${theme.font.sizes.small};
    margin-bottom: ${theme.spacings.medium};

    ${media.greaterThan('medium')`
      font-size: ${theme.font.sizes.large};
    `}
  `}
`

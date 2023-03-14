import { rgba } from 'polished'
import styled, { css, DefaultTheme } from 'styled-components'
import media from 'styled-media-query'

import * as RadioStyles from 'components/Radio/styles'
import * as HeadingStyles from 'components/Heading/styles'
import * as CheckboxStyles from 'components/Checkbox/styles'

export const Overlay = styled.div`
  ${({ theme }) => css`
    opacity: 0;
    position: absolute;
    transition: opacity ${theme.transition.default};
  `}
`

export const IconWrapper = styled.div`
  cursor: pointer;
  width: 2.4rem;
  height: 2.4rem;

  ${media.greaterThan('medium')`
    display: none;
  `}
`

export const Items = styled.div`
  ${({ theme }) => css`
    & > div:not(:last-of-type) {
      margin-bottom: ${theme.spacings.xsmall};
    }

    & + div {
      margin-top: ${theme.spacings.small};
      padding-top: ${theme.spacings.xsmall};
      border-top: 0.1rem solid ${rgba(theme.colors.gray, 0.2)};
    }
  `}
`

export const Content = styled.div`
  ${({ theme }) => css`
    flex: 1;
    overflow-y: auto;
    margin-top: 5.6rem;
    margin-bottom: 2rem;
    padding: 0 ${theme.spacings.small};
    transition: transform ${theme.transition.default};

    ${media.greaterThan('medium')`
      overflow-y: initial;
      padding: 0;
      margin-top: 0;
      margin-bottom: 0;
    `}
  `}
`

export const Footer = styled.div`
  ${({ theme }) => css`
    padding: ${theme.spacings.small};
    box-shadow: 0 -0.2rem 0.4rem ${rgba(theme.colors.black, 0.2)};

    ${media.greaterThan('medium')`
      display: none;
    `}
  `}
`

const wrapperModifiers = {
  open: (theme: DefaultTheme) => css`
    top: 0;
    left: 0;
    position: fixed;

    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    z-index: ${theme.layers.modal};

    ${Overlay} {
      top: 0;
      left: 0;
      opacity: 1;
      width: 100%;
      height: 100vh;
      position: fixed;
      z-index: ${theme.layers.modal};
      background-color: ${theme.colors.white};
    }

    ${Content} {
      overflow-y: scroll;
      transform: translateY(0);
      margin-top: ${theme.spacings.medium};
    }

    ${Content}, ${Footer}, ${IconWrapper} {
      z-index: ${theme.layers.modal};
    }

    ${HeadingStyles.Wrapper} {
      color: ${theme.colors.black};
      font-weight: ${theme.font.normal};
      font-size: ${theme.font.sizes.xlarge};
    }

    ${RadioStyles.Label},
    ${CheckboxStyles.Label} {
      color: ${theme.colors.black};
    }

    ${IconWrapper} {
      color: ${theme.colors.black};

      > svg {
        width: 30px;
        top: 0.8rem;
        right: 0.8rem;
        position: absolute;
        &:first-child {
          display: none;
        }
      }
    }
  `,

  close: (theme: DefaultTheme) => css`
    ${IconWrapper} {
      color: ${theme.colors.white};

      > svg:last-child {
        display: none;
      }
    }

    ${Content} {
      height: 0;
      transform: translateY(3rem);
    }

    ${Content}, ${Footer} {
      left: 0;
      visibility: hidden;
      position: absolute;
    }
  `
}

export type WrapperProps = { isOpen: boolean }

export const Wrapper = styled.div<WrapperProps>`
  ${({ theme, isOpen }) => css`
    ${media.lessThan('medium')`
      ${!!isOpen && wrapperModifiers.open(theme)}
      ${!isOpen && wrapperModifiers.close(theme)}
    `}
  `}
`

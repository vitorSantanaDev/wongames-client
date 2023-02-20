import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    padding: ${theme.spacings.small};
    border-bottom: 0.1rem solid ${theme.colors.lightGray};

    ${media.greaterThan('medium')`
      display: flex;
    `}
  `}
`

export const GameContent = styled.div`
  ${() => css`
    display: flex;
  `}
`

export const ImageBox = styled.div`
  ${({ theme }) => css`
    flex-shrink: 0;
    margin-right: 1.2rem;
    width: 9.6rem;
    height: 5.6rem;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    ${media.greaterThan('medium')`
      width: 15rem;
      height: 7rem;
      margin-right: ${theme.spacings.xsmall};
    `}
  `}
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`

export const Title = styled.h3`
  ${({ theme }) => css`
    color: ${theme.colors.black};
    font-weight: ${theme.font.bold};
    font-size: ${theme.font.sizes.small};
    line-height: ${theme.font.sizes.small};
    margin-bottom: ${theme.spacings.xxsmall};

    ${media.greaterThan('medium')`
      font-size: 2rem;
      line-height: 2rem;
    `}
  `}
`

export const Price = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-weight: ${theme.font.bold};
    padding: 0.2rem ${theme.spacings.xxsmall};
    font-size: ${theme.font.sizes.small};
    border-radius: ${theme.border.radius};
    background-color: ${theme.colors.secondary};
  `}
`

export const DownloadLink = styled.a`
  ${({ theme }) => css`
    color: ${theme.colors.primary};
    margin-left: ${theme.spacings.xxsmall};
  `}
`

export const PaymentContent = styled.div`
  ${({ theme }) => css`
    min-width: 28rem;

    color: ${theme.colors.gray};
    font-size: ${theme.font.sizes.small};

    display: flex;
    flex-direction: column;

    margin-top: ${theme.spacings.xsmall};

    ${media.greaterThan('medium')`
      flex: 1;
      margin-top: 0;
      flex-direction: column-reverse;
      justify-content: space-between;
      align-items: flex-end;
    `}
  `}
`

export const CardInfo = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;

    img {
      margin-left: ${theme.spacings.xxsmall};
    }

    ${media.lessThan('medium')`
      margin-top: ${theme.spacings.xsmall};
    `}
  `}
`

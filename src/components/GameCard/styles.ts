import styled, { css, DefaultTheme } from 'styled-components'

export const Wrapper = styled.article`
  ${({ theme }) => css`
    position: relative;
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    background-color: ${theme.colors.white};
  `}
`

export const ImageBox = styled.a`
  width: 100%;
  height: 14rem;
  text-decoration: none;
  background: #f6f7f8;
  background-image: linear-gradient(
    to right,
    #f6f7f8 0%,
    #edeef1 20%,
    #f6f7f8 40%,
    #f6f7f8 100%
  );
  background-size: 80rem 14rem;
  animation: placeholderShimer 1s linear infinite forwards;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @keyframes placeholderShimer {
    0% {
      background-position: -40rem 0;
    }
    100% {
      background-position: 40rem 0;
    }
  }
`

export const Info = styled.a`
  max-width: calc(100% - 2.5rem);
  text-decoration: none;
`

export const Title = styled.h3`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.medium};
    line-height: ${theme.font.sizes.medium};
    font-weight: ${theme.font.bold};
    color: ${theme.colors.black};
  `}
`

export const Developer = styled.h4`
  ${({ theme }) => css`
    color: ${theme.colors.gray};
    font-weight: ${theme.font.bold};
    font-size: ${theme.font.sizes.small};
  `}
`

export const FavButton = styled.div`
  ${({ theme }) => css`
    right: -1rem;
    top: -0.5rem;
    cursor: pointer;
    position: absolute;
    color: ${theme.colors.primary};

    svg {
      width: 2.5rem;
    }
  `}
`

export const BuyBox = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin-top: ${theme.spacings.xxsmall};
  `}
`

type PriceProps = {
  isPromotional?: boolean
}

const priceModifiers = {
  default: (theme: DefaultTheme) => css`
    color: ${theme.colors.white};
    padding: 0 ${theme.spacings.xxsmall};
    border-radius: ${theme.border.radius};
    background-color: ${theme.colors.secondary};
    margin: calc(${theme.spacings.xxsmall} / 2);
  `,
  promotional: (theme: DefaultTheme) => css`
    color: ${theme.colors.gray};
    text-decoration: line-through;
    margin-right: ${theme.spacings.xsmall};
  `
}

export const Price = styled.div<PriceProps>`
  ${({ theme, isPromotional }) => css`
    height: 3rem;
    align-items: center;
    display: inline-flex;
    font-weight: ${theme.font.bold};
    ${!isPromotional && priceModifiers.default(theme)}
    ${isPromotional && priceModifiers.promotional(theme)}
  `}
`

export const Content = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: relative;
    height: 100%;
    margin: ${theme.spacings.xsmall};
  `}
`

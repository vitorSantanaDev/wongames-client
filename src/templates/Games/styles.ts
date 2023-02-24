import { Container } from 'components/Container'
import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Main = styled(Container)`
  ${({ theme }) => css`
    ${media.greaterThan('medium')`
      display: grid;
      gap: ${theme.grid.gutter};
      grid-template-columns: 26rem 1fr;
  `}
  `}
`

export const ShowMore = styled.div`
  ${({ theme }) => css`
    cursor: pointer;
    font-weight: bold;
    text-align: center;
    text-transform: uppercase;
    padding: ${theme.spacings.medium};
    color: ${theme.colors.white};

    > svg {
      color: ${theme.colors.primary};
    }
  `}
`

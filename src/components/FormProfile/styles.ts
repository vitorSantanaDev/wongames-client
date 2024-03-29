import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.main``

export const Form = styled.form`
  ${({ theme }) => css`
    max-width: 100%;
    display: grid;
    gap: ${theme.spacings.xsmall};

    > button {
      margin-top: ${theme.spacings.xxlarge};
    }

    ${media.greaterThan('medium')`
      gap: ${theme.spacings.medium};
      grid-template-columns: 1fr 1fr;

      > button {
        grid-column: 2;
        justify-self: end;
        margin-top: 0;
      }
    `}
  `}
`

export const ButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;

  ${media.greaterThan('medium')`
      grid-column: 2;
  `}
`

import styled, { css } from 'styled-components'

export const Card = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;

    color: ${theme.colors.black};
    background-color: ${theme.colors.lightGray};
    padding: 1.3rem ${theme.spacings.xsmall};

    &:not(:last-child) {
      margin-bottom: ${theme.spacings.xsmall};
    }

    > span {
      margin-left: ${theme.spacings.xxsmall};
    }
  `}
`

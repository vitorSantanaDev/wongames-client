import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    width: 2.4rem;
    height: 2.4rem;
    color: ${theme.colors.white};
    position: relative;
  `}
`

export const Badge = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${theme.colors.white};
    background-color: ${theme.colors.secondary};

    font-size: 1rem;
    border-radius: 50%;
    width: 1.6rem;
    height: 1.6rem;
    position: absolute;
    top: -0.4rem;
    right: -0.4rem;
  `}
`

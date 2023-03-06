import styled, { css, keyframes } from 'styled-components'

const animation = keyframes`
  to {
      -webkit-transform: rotate(360deg);
   }
`

export const SpinnerContainer = styled.div`
  ${({ theme }) => css`
    display: inline-block;
    width: 50px;
    height: 50px;
    border: 3px solid ${theme.colors.gray};
    border-radius: 50%;
    border-top-color: ${theme.colors.primary};
    animation: ${animation} 1s ease-in-out infinite;
    -webkit-animation: ${animation} 1s ease-in-out infinite;
  `}
`

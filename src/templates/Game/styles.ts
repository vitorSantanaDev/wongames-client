import { Container } from 'components/Container'
import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.main`
  margin-top: 20rem;

  ${media.greaterThan('medium')`
      margin-top: 45rem;
  `}
`

export const Cover = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  height: 39.5rem;
  opacity: 0.4;

  img {
    object-fit: cover;
    object-position: top center;
  }

  ${media.greaterThan('medium')`
    height: 70rem;
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0 85%);
  `}
`

export const Section = styled(Container).attrs({ as: 'section' })`
  ${({ theme }) => css`
    margin-bottom: ${theme.spacings.xlarge};

    ${media.greaterThan('medium')`
      margin-bottom: calc(${theme.spacings.xlarge} * 2);
    `}
  `}
`

export const SectionGameInfo = styled(Section)``

export const SectionGallery = styled(Section)``

export const SectionDescription = styled(Section)`
  ${({ theme }) => css`
    .description__copyrights {
      font-size: ${theme.font.sizes.xsmall};
      margin-top: ${theme.spacings.medium};
      color: ${theme.colors.gray};
    }
  `}
`

export const SectionGameDetails = styled(Section)``

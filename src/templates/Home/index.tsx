import Base from 'templates/Base'
import ShowCase from 'components/ShowCase'
import BannerSlider from 'components/BannerSlider'
import { Container } from 'components/Container'

import { HomeTemplateProps } from './types'

import * as S from './styles'

const Home = ({
  banners,
  newGames,
  freeGames,
  upcomingGames,
  newGamesTitle,
  freeGamesTitle,
  mostPopularGames,
  upcomingGamesTitle,
  freeGamesHighlight,
  mostPopularGamesTitle,
  upcomingGamesHighlight,
  mostPopularGamesHighlight
}: HomeTemplateProps) => {
  return (
    <Base>
      <Container>
        <S.SectionBanner>
          <BannerSlider items={banners} />
        </S.SectionBanner>
      </Container>
      <S.SectionNews>
        <ShowCase color="black" title={newGamesTitle} games={newGames} />
      </S.SectionNews>
      <ShowCase
        title={mostPopularGamesTitle}
        games={mostPopularGames}
        highlight={mostPopularGamesHighlight}
      />
      <ShowCase
        title={upcomingGamesTitle}
        games={upcomingGames}
        highlight={upcomingGamesHighlight}
      />
      <ShowCase
        title={freeGamesTitle}
        highlight={freeGamesHighlight}
        games={freeGames}
      />
    </Base>
  )
}
export default Home

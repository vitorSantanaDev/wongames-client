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
  freeHighlight,
  upcommingGames,
  mostPopularGames,
  upcommingHighlight,
  mostPopularHighlight
}: HomeTemplateProps) => {
  return (
    <Base>
      <Container>
        <S.SectionBanner>
          <BannerSlider items={banners} />
        </S.SectionBanner>
      </Container>
      <S.SectionNews>
        <ShowCase color="black" title="News" games={newGames} />
      </S.SectionNews>
      <ShowCase
        title="Most Popular"
        games={mostPopularGames}
        highlight={mostPopularHighlight}
      />

      <ShowCase
        title="Upcomming"
        games={upcommingGames}
        highlight={upcommingHighlight}
      />

      <ShowCase
        title="Free Games"
        highlight={freeHighlight}
        games={freeGames}
      />
    </Base>
  )
}
export default Home

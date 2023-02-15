import Menu from 'components/Menu'
import Footer from 'components/Footer'
import BannerSlider from 'components/BannerSlider'

import { Container } from 'components/Container'

import { HomeTemplateProps } from './types'

import * as S from './styles'
import ShowCase from 'components/ShowCase'

const Home = ({
  banners,
  newGames,
  freeGames,
  freeHighlight,
  upcommingGames,
  mostPopularGames,
  upcommingHighlight,
  upcommingMoreGames,
  mostPopularHighlight
}: HomeTemplateProps) => {
  return (
    <S.Wrapper>
      <Container>
        <Menu />
        <S.SectionBanner>
          <BannerSlider items={banners} />
        </S.SectionBanner>
      </Container>
      <S.SectionNews>
        <ShowCase title="News" games={newGames} />
      </S.SectionNews>
      <ShowCase
        title="Most Popular"
        games={mostPopularGames}
        highlight={mostPopularHighlight}
      />
      <S.SectionUpcomming>
        <ShowCase title="Upcomming" games={upcommingGames} />
        <ShowCase highlight={upcommingHighlight} games={upcommingMoreGames} />
      </S.SectionUpcomming>
      <ShowCase
        title="Free Games"
        highlight={freeHighlight}
        games={freeGames}
      />
      <S.SectionFooter>
        <Container>
          <Footer />
        </Container>
      </S.SectionFooter>
    </S.Wrapper>
  )
}
export default Home

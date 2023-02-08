import Menu from 'components/Menu'
import Footer from 'components/Footer'
import Heading from 'components/Heading'
import Highlight from 'components/Highlight'
import BannerSlider from 'components/BannerSlider'
import GameCardSlider from 'components/GameCardSlider'

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
        <Container>
          <Heading lineLeft lineColor="secondary">
            News
          </Heading>

          <GameCardSlider items={newGames} color="black" />
        </Container>
      </S.SectionNews>

      <Container>
        <S.SectionMostPopular>
          <Heading lineLeft lineColor="secondary">
            Most Popular
          </Heading>
          <Highlight {...mostPopularHighlight} />
          <GameCardSlider color="white" items={mostPopularGames} />
        </S.SectionMostPopular>

        <S.SectionUpcomming>
          <Heading lineLeft lineColor="secondary">
            Upcomming
          </Heading>
          <GameCardSlider items={upcommingGames} />
          <Highlight {...upcommingHighlight} />
          <GameCardSlider color="white" items={upcommingMoreGames} />
        </S.SectionUpcomming>

        <S.SectionFreeGames>
          <Heading lineLeft lineColor="secondary">
            Free games
          </Heading>
          <Highlight {...freeHighlight} />
          <GameCardSlider color="white" items={freeGames} />
        </S.SectionFreeGames>
      </Container>

      <S.SectionFooter>
        <Container>
          <Footer />
        </Container>
      </S.SectionFooter>
    </S.Wrapper>
  )
}
export default Home

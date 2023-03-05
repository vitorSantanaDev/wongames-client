import Base from 'templates/Base'

import Gallery from 'components/Gallery'
import ShowCase from 'components/ShowCase'
import GameInfo from 'components/GameInfo'
import MediaMatch from 'components/MediaMatch'
import TextContent from 'components/TextContent'
import GameDetails from 'components/GameDetails'

import { Divider } from 'components/Divider'

import { GameProps } from './types'

import * as S from './styles'

const Game = ({
  cover,
  details,
  gallery,
  gameInfo,
  description,
  upcomingTitle,
  upcommingGames,
  recommendedGames,
  recommendedTitle,
  upcommingHighlight
}: GameProps) => (
  <Base>
    <S.Cover role="img" aria-label="cover" src={cover} />
    <S.Wrapper>
      <S.SectionGameInfo>
        <GameInfo {...gameInfo} />
      </S.SectionGameInfo>
      {!!gallery?.length && (
        <MediaMatch greaterThan="medium">
          <S.SectionGallery>
            <Gallery items={gallery} />
          </S.SectionGallery>
        </MediaMatch>
      )}
      <S.SectionDescription>
        <TextContent title="Description" content={description} />
      </S.SectionDescription>

      <S.SectionGameDetails>
        <GameDetails {...details} />
        <Divider />
      </S.SectionGameDetails>

      <ShowCase
        title={upcomingTitle || 'Upcoming'}
        games={upcommingGames}
        highlight={upcommingHighlight}
      />

      <ShowCase
        title={recommendedTitle || 'You may like these games'}
        games={recommendedGames}
      />
    </S.Wrapper>
  </Base>
)

export default Game

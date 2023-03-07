import { KeyboardArrowDown } from '@styled-icons/material-outlined'
import { useQueryGames } from 'graphql/queries/games'
import { gamesMapper } from 'utils/mappers'

import Base from 'templates/Base'
import { Grid } from 'components/Grid'
import Loading from 'components/Loading'
import GameCard from 'components/GameCard'
import ExploreSidebar from 'components/ExploreSidebar'
import { LoadingWrapper } from 'components/LoadingWrapper'

import { GamesProps } from './types'

import * as S from './styles'

const Games = ({ filterItems }: GamesProps) => {
  const { data, loading, fetchMore } = useQueryGames({
    variables: { limit: 15 }
  })

  const handleFilter = () => {
    return
  }

  const handleShowMore = () => {
    fetchMore({ variables: { limit: 15, start: data?.games.length } })
  }

  const gamesData = gamesMapper(!!data && data.games.length ? data.games : [])

  return (
    <Base>
      <S.Main>
        <ExploreSidebar onFilter={handleFilter} items={filterItems} />
        {loading ? (
          <LoadingWrapper id="loading">
            <Loading />
          </LoadingWrapper>
        ) : (
          <section>
            <Grid>
              {gamesData.length
                ? gamesData.map((game) => (
                    <GameCard key={game.slug} {...game} />
                  ))
                : null}
            </Grid>
            <S.ShowMore role="button" onClick={handleShowMore}>
              <p>Show More</p>
              <KeyboardArrowDown size={35} />
            </S.ShowMore>
          </section>
        )}
      </S.Main>
    </Base>
  )
}

export default Games

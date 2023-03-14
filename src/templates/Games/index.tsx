import { useRouter } from 'next/router'
import { ParsedUrlQueryInput } from 'querystring'
import { KeyboardArrowDown } from '@styled-icons/material-outlined'
import { useQueryGames } from 'graphql/queries/games'
import { gamesMapper } from 'utils/mappers'

import Base from 'templates/Base'
import Empty from 'components/Empty'
import { Grid } from 'components/Grid'
import GameCard from 'components/GameCard'
import ExploreSidebar from 'components/ExploreSidebar'

import { parseQueryStringToFilter, parseQueryStringToWhere } from 'utils/filter'
import { GamesProps } from './types'

import * as S from './styles'
import { LoadingWrapper } from 'components/LoadingWrapper'
import Loading from 'components/Loading'

const Games = ({ filterItems }: GamesProps) => {
  const { push, query } = useRouter()

  const { data, loading, fetchMore } = useQueryGames({
    notifyOnNetworkStatusChange: true,
    variables: {
      limit: 15,
      sort: query.sort as string | null,
      where: parseQueryStringToWhere({ queryString: query, filterItems })
    }
  })

  if (!data) {
    return (
      <LoadingWrapper>
        <Loading />
      </LoadingWrapper>
    )
  }

  const { games, gamesConnection } = data

  const hasMoreGames = games.length < (gamesConnection?.values?.length || 0)

  const handleFilter = (items: ParsedUrlQueryInput) => {
    push({ pathname: '/games', query: items })
    return
  }

  const handleShowMore = () => {
    fetchMore({ variables: { limit: 15, start: games.length } })
  }

  const gamesData = gamesMapper(games || [])

  return (
    <Base>
      <S.Main>
        <ExploreSidebar
          initialValues={parseQueryStringToFilter({
            queryString: query,
            filterItems
          })}
          onFilter={handleFilter}
          items={filterItems}
        />
        <section>
          {gamesData.length ? (
            <>
              <Grid>
                {gamesData.map((game) => (
                  <GameCard key={game.slug} {...game} />
                ))}
              </Grid>
              {hasMoreGames && (
                <S.ShowMore>
                  {loading ? (
                    <S.ShowMoreLoading
                      src="/img/dots.svg"
                      alt="Loading more games"
                    />
                  ) : (
                    <S.ShowMoreButton role="button" onClick={handleShowMore}>
                      <p>Show More</p>
                      <KeyboardArrowDown size={35} />
                    </S.ShowMoreButton>
                  )}
                </S.ShowMore>
              )}
            </>
          ) : (
            <Empty
              hasLink
              title=":("
              description="We didn't find any games with this filter."
            />
          )}
        </section>
      </S.Main>
    </Base>
  )
}

export default Games

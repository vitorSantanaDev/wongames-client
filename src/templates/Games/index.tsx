import { KeyboardArrowDown } from '@styled-icons/material-outlined'

import Base from 'templates/Base'
import { Grid } from 'components/Grid'
import GameCard from 'components/GameCard'
import ExploreSidebar from 'components/ExploreSidebar'

import { GamesProps } from './types'

import * as S from './styles'

const Games = ({ games, filterItems }: GamesProps) => {
  const handleFilter = () => {
    return
  }

  const handleShowMore = () => {
    return
  }

  return (
    <Base>
      <S.Main>
        <ExploreSidebar onFilter={handleFilter} items={filterItems} />
        <section>
          <Grid>
            {!!games && games.length
              ? games.map((game) => <GameCard key={game.title} {...game} />)
              : null}
          </Grid>
          <S.ShowMore role="button" onClick={handleShowMore}>
            <p>Show More</p>
            <KeyboardArrowDown size={35} />
          </S.ShowMore>
        </section>
      </S.Main>
    </Base>
  )
}

export default Games

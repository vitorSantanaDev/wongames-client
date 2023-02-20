import Base from 'templates/Base'
import Heading from 'components/Heading'
import ShowCase from 'components/ShowCase'
import GameCard from 'components/GameCard'

import { Grid } from 'components/Grid'
import { Divider } from 'components/Divider'
import { Container } from 'components/Container'

import { WishlistProps } from './types'
import Empty from 'components/Empty'

const Wishlist = ({
  games,
  recommendedGames,
  recommendedHighlight
}: WishlistProps) => {
  return (
    <Base>
      <Container>
        <Heading lineLeft lineColor="secondary">
          Wishlist
        </Heading>
        {!!games && games.length ? (
          <Grid>
            {games.map((game, index) => (
              <GameCard key={`wishlist-${game.title}-${index}`} {...game} />
            ))}
          </Grid>
        ) : (
          <Empty
            hasLink
            title="Your wishlist is empty"
            description="Games added to your wishlist will appear here"
          />
        )}
        <Divider />
      </Container>
      <ShowCase
        games={recommendedGames}
        title="You may like these games"
        highlight={recommendedHighlight}
      />
    </Base>
  )
}

export default Wishlist

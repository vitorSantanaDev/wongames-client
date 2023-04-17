import Base from 'templates/Base'
import Heading from 'components/Heading'
import ShowCase from 'components/ShowCase'
import GameCard from 'components/GameCard'

import { Grid } from 'components/Grid'
import { Divider } from 'components/Divider'
import { Container } from 'components/Container'

import { WishlistProps } from './types'
import Empty from 'components/Empty'
import { useWishlist } from 'hooks/use-wishlist'
import Loading from 'components/Loading'
import { LoadingWrapper } from 'components/LoadingWrapper'

const Wishlist = ({
  recommendedGames,
  recommendedHighlight,
  recommendTitle
}: WishlistProps) => {
  const { items, loading } = useWishlist()
  return (
    <Base>
      <Container>
        <Heading lineLeft lineColor="secondary">
          Wishlist
        </Heading>
        {loading ? (
          <LoadingWrapper>
            <Loading />
          </LoadingWrapper>
        ) : items.length >= 1 ? (
          <Grid>
            {items.map((game, index) => (
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
        title={recommendTitle || 'You may like these games'}
        games={recommendedGames}
        highlight={recommendedHighlight}
      />
    </Base>
  )
}

export default Wishlist

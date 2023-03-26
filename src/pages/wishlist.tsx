import { initializeApollo } from 'utils/apollo'
import { QueryRecommendedQuery } from 'graphql/types/schema'
import { QUERY_RECOMMENDED } from 'graphql/queries/recommended'

import Wishlist from 'templates/Wishlist'

import gamesMock from 'components/GameCardSlider/mock'

import { WishlistProps } from 'templates/Wishlist/types'
import { gamesMapper, highlightMapper } from 'utils/mappers'
import protectedRoutes from 'utils/protected-routes'
import { GetServerSidePropsContext } from 'next'

export default function WishlistPage(props: WishlistProps) {
  return <Wishlist {...props} />
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session = await protectedRoutes(context)

  const apolloClient = initializeApollo()

  const { data } = await apolloClient.query<QueryRecommendedQuery>({
    query: QUERY_RECOMMENDED
  })

  return {
    props: {
      session,
      games: [...gamesMock],
      recommendTitle: data.recommended.section.title,
      recommendedGames: gamesMapper(data.recommended.section.games!),
      recommendedHighlight: highlightMapper(data.recommended.section.highlight!)
    }
  }
}

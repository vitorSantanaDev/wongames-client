import { initializeApollo } from 'utils/apollo'
import {
  QueryRecommendedQuery,
  QueryWishlistQuery,
  QueryWishlistQueryVariables
} from 'graphql/types/schema'
import { QUERY_RECOMMENDED } from 'graphql/queries/recommended'

import Wishlist from 'templates/Wishlist'

import { WishlistProps } from 'templates/Wishlist/types'
import { gamesMapper, highlightMapper } from 'utils/mappers'
import protectedRoutes from 'utils/protected-routes'
import { GetServerSidePropsContext } from 'next'
import { QUERY_WISHLIST } from 'graphql/queries/wishlist'

export default function WishlistPage(props: WishlistProps) {
  return <Wishlist {...props} />
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session = await protectedRoutes(context)

  const apolloClient = initializeApollo(null, session)

  if (!session) return { props: {} }

  await apolloClient.query<QueryWishlistQuery, QueryWishlistQueryVariables>({
    query: QUERY_WISHLIST,
    variables: { identifier: session.user?.email as string }
  })

  const { data } = await apolloClient.query<QueryRecommendedQuery>({
    query: QUERY_RECOMMENDED
  })

  return {
    props: {
      session,
      recommendTitle: data.recommended.section.title,
      initialApolloState: apolloClient.cache.extract(),
      recommendedGames: gamesMapper(data.recommended.section.games!),
      recommendedHighlight: highlightMapper(data.recommended.section.highlight!)
    }
  }
}

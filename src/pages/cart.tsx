import { GetServerSidePropsContext } from 'next'
import Cart from 'templates/Cart'

import { CartProps } from 'templates/Cart/types'

import { initializeApollo } from 'utils/apollo'
import { QueryRecommendedQuery } from 'graphql/types/schema'
import { gamesMapper, highlightMapper } from 'utils/mappers'
import { QUERY_RECOMMENDED } from 'graphql/queries/recommended'
import protectedRoutes from 'utils/protected-routes'

export default function CartPage(props: CartProps) {
  return <Cart {...props} />
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session = await protectedRoutes(context)

  const apolloClient = initializeApollo(null, session)

  const { data } = await apolloClient.query<QueryRecommendedQuery>({
    query: QUERY_RECOMMENDED
  })

  return {
    props: {
      session,
      recommendedTitle: data.recommended.section.title,
      recommendedGames: gamesMapper(data.recommended.section.games!),
      recommendedHighlight: highlightMapper(data.recommended.section.highlight!)
    }
  }
}

import { initializeApollo } from 'utils/apollo'

import filterItemsMock from 'components/ExploreSidebar/mock'

import { GamesProps } from 'templates/Games/types'

import Games from 'templates/Games'

import { QUERY_GAMES } from 'graphql/queries/games'

import { QueryGamesQuery, QueryGamesQueryVariables } from 'graphql/types/schema'

export default function GamesPage(props: GamesProps) {
  return <Games {...props} />
}

export async function getStaticProps() {
  const apolloClient = initializeApollo()

  await apolloClient.query<QueryGamesQuery, QueryGamesQueryVariables>({
    query: QUERY_GAMES,
    variables: { limit: 15 }
  })

  return {
    props: {
      revalidate: 60,
      filterItems: [...filterItemsMock],
      initialApolloState: apolloClient.cache.extract()
    }
  }
}

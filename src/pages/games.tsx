import { initializeApollo } from 'utils/apollo'

import filterItemsMock from 'components/ExploreSidebar/mock'

import { GamesProps } from 'templates/Games/types'

import Games from 'templates/Games'

import { QUERY_GAMES } from 'graphql/queries/games'

import {
  QueryGamesQuery,
  QueryGamesQueryVariables
} from 'graphql/generated/schema'
import { GameCardProps } from 'components/GameCard/types'

export default function GamesPage(props: GamesProps) {
  return <Games {...props} />
}

export async function getStaticProps() {
  const apolloClient = initializeApollo()

  const { data } = await apolloClient.query<
    QueryGamesQuery,
    QueryGamesQueryVariables
  >({
    query: QUERY_GAMES,
    variables: { limit: 9 }
  })

  const gamesData: GameCardProps[] = data.games.map((game) => {
    return {
      slug: game.slug,
      title: game.name,
      price: game.price,
      image: `http://localhost:1337${game.cover!.url}`,
      developer: game.developers[0].name
    }
  })

  return {
    props: {
      revalidate: 60,
      games: [...gamesData],
      filterItems: [...filterItemsMock]
    }
  }
}

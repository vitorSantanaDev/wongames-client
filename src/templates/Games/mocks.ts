import { QUERY_GAMES } from 'graphql/queries/games'
import { QueryGamesQueryVariables } from 'graphql/types/schema'

export const queryMock = (variables: QueryGamesQueryVariables) => ({
  request: {
    query: QUERY_GAMES,
    variables: { ...variables }
  }
})

export const gamesMock = {
  ...queryMock({ limit: 15 }),
  result: {
    data: {
      games: [
        {
          name: 'Sample Game',
          slug: 'sample-game',
          price: 518.39,
          developers: [{ name: 'sample developer' }],
          cover: {
            url: 'sample-game.jpg'
          },
          __typename: 'Game'
        }
      ]
    }
  }
}

export const fetchMoreMock = {
  ...queryMock({ limit: 15, start: 1 }),
  result: {
    data: {
      games: [
        {
          name: 'Fetch More Game',
          slug: 'fetch-more',
          price: 518.39,
          developers: [{ name: 'sample developer' }],
          cover: {
            url: 'sample-game.jpg'
          },
          __typename: 'Game'
        }
      ]
    }
  }
}

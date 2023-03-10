import { gql, QueryHookOptions, useQuery } from '@apollo/client'
import { GameFragment } from 'graphql/fragments/game'
import { QueryGamesQuery, QueryGamesQueryVariables } from 'graphql/types/schema'

export const QUERY_GAMES = gql`
  query QueryGames($limit: Int!, $start: Int) {
    games(limit: $limit, start: $start) {
      ...GameFragment
    }
  }
  ${GameFragment}
`

export const QUERY_GAME_BY_SLUG = gql`
  query QueryGameBySlug($slug: String!) {
    games(where: { slug: $slug }) {
      name
      short_description
      description
      price
      rating
      release_date
      gallery {
        src: url
        label: alternativeText
      }
      cover {
        url
      }
      developers {
        name
      }
      publisher {
        name
      }
      categories {
        name
      }
      platforms {
        name
      }
    }
  }
`
export const useQueryGames = (
  options?: QueryHookOptions<QueryGamesQuery, QueryGamesQueryVariables>
) => {
  return useQuery<QueryGamesQuery, QueryGamesQueryVariables>(
    QUERY_GAMES,
    options
  )
}

import { gql } from '@apollo/client'

export const QUERY_GAMES = gql`
  query QueryGames($limit: Int!) {
    games(limit: $limit) {
      id
      name
      slug
      cover {
        url
      }
      developers {
        name
      }
      price
    }
  }
`

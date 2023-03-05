import { gql } from '@apollo/client'
import { GameFragment } from 'graphql/fragments/game'
import { HighlightFragment } from 'graphql/fragments/highlight'

export const QUERY_UPCOMING = gql`
  query QueryUpcoming($date: Date!) {
    upcomingGames: games(
      where: { release_date_gte: $date }
      sort: "release_date:asc"
      limit: 8
    ) {
      ...GameFragment
    }

    showCase: home {
      upcomingHighlight: upcomingGames {
        title
        highlight {
          ...HighlightFragment
        }
      }
    }
  }
  ${GameFragment}
  ${HighlightFragment}
`

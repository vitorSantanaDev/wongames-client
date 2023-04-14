import { QueryHookOptions, gql, useQuery } from '@apollo/client'
import { GameFragment } from 'graphql/fragments/game'
import {
  QueryWishlistQuery,
  QueryWishlistQueryVariables
} from 'graphql/types/schema'

export const QUERY_WISHLIST = gql`
  query QueryWishlist($identifier: String!) {
    wishlists(where: { user: { email: $identifier } }) {
      id
      games {
        ...GameFragment
      }
    }
  }
  ${GameFragment}
`

export function useQueryWishlist(
  options?: QueryHookOptions<QueryWishlistQuery, QueryWishlistQueryVariables>
) {
  return useQuery<QueryWishlistQuery, QueryWishlistQueryVariables>(
    QUERY_WISHLIST,
    options
  )
}

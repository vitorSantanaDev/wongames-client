import Success from 'templates/Success'

import { initializeApollo } from 'utils/apollo'
import { gamesMapper, highlightMapper } from 'utils/mappers'
import { QueryRecommendedQuery } from 'graphql/types/schema'
import { QUERY_RECOMMENDED } from 'graphql/queries/recommended'
import { SuccessProps } from 'templates/Success/types'

export default function SuccessPage(props: SuccessProps) {
  return <Success {...props} />
}

export async function getServerSideProps() {
  const apolloClient = initializeApollo()

  const { data } = await apolloClient.query<QueryRecommendedQuery>({
    query: QUERY_RECOMMENDED
  })

  return {
    revalidate: 60 * 60,
    props: {
      recommendedTitle: data.recommended.section.title,
      recommendedGames: gamesMapper(data.recommended.section.games!),
      recommendedHighlight: highlightMapper(data.recommended.section.highlight!)
    }
  }
}

import Cart from 'templates/Cart'

import cartListMock from 'components/CartList/mock'
import cardsMock from 'components/PaymentOptions/mock'

import { CartProps } from 'templates/Cart/types'

import { initializeApollo } from 'utils/apollo'
import { QueryRecommendedQuery } from 'graphql/types/schema'
import { gamesMapper, highlightMapper } from 'utils/mappers'
import { QUERY_RECOMMENDED } from 'graphql/queries/recommended'

export default function CartPage(props: CartProps) {
  return <Cart {...props} />
}

export async function getServerSideProps() {
  const totalPrice = cartListMock
    .reduce(
      (acc, item) =>
        (acc += Number(item.price.replace('R$ ', '').replace(',', '.'))),
      0
    )
    .toFixed(2)

  const apolloClient = initializeApollo()

  const { data } = await apolloClient.query<QueryRecommendedQuery>({
    query: QUERY_RECOMMENDED
  })

  return {
    props: {
      cards: [...cardsMock],
      total: `R$ ${totalPrice}`,
      items: [...cartListMock],
      recommendedTitle: data.recommended.section.title,
      recommendedGames: gamesMapper(data.recommended.section.games!),
      recommendedHighlight: highlightMapper(data.recommended.section.highlight!)
    }
  }
}

import { GetServerSidePropsContext } from 'next'

import Profile from 'templates/Profile'

import OrdersList from 'components/OrdersList'

import { OrdersListProps } from 'components/OrdersList/types'

import protectedRoutes from 'utils/protected-routes'
import { initializeApollo } from 'utils/apollo'
import {
  QueryOrdersQuery,
  QueryOrdersQueryVariables
} from 'graphql/types/schema'

import { QUERY_ORDERS } from 'graphql/queries/orders'
import { ordersMapper } from 'utils/mappers'

export default function Orders(props: OrdersListProps) {
  return (
    <Profile>
      <OrdersList {...props} />
    </Profile>
  )
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session = await protectedRoutes(context)
  const apolloClient = initializeApollo(null, session)

  const { data } = await apolloClient.query<
    QueryOrdersQuery,
    QueryOrdersQueryVariables
  >({ query: QUERY_ORDERS, variables: { identifier: session?.id as string } })

  return {
    props: {
      session,
      items: ordersMapper(data.orders)
    }
  }
}

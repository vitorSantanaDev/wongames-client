import { GetServerSidePropsContext } from 'next'

import Profile from 'templates/Profile'

import OrdersList from 'components/OrdersList'

import { OrdersListProps } from 'components/OrdersList/types'

import ordersMock from 'components/OrdersList/mock'
import protectedRoutes from 'utils/protected-routes'

export default function Orders(props: OrdersListProps) {
  return (
    <Profile>
      <OrdersList {...props} />
    </Profile>
  )
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session = await protectedRoutes(context)
  return {
    props: {
      session,
      items: [...ordersMock]
    }
  }
}

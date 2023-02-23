import Profile from 'templates/Profile'

import OrdersList from 'components/OrdersList'

import { OrdersListProps } from 'components/OrdersList/types'

import ordersMock from 'components/OrdersList/mock'

export default function Orders(props: OrdersListProps) {
  return (
    <Profile>
      <OrdersList {...props} />
    </Profile>
  )
}

export async function getServerSideProps() {
  return {
    props: {
      items: [...ordersMock]
    }
  }
}

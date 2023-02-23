import { Story, Meta } from '@storybook/react'

import OrdersList from '.'

import { OrdersListProps } from './types'

import ordersMock from './mock'

export default {
  title: 'Profile/OrdersList',
  component: OrdersList,
  args: { items: [...ordersMock] }
} as Meta

export const Default: Story<OrdersListProps> = (args) => (
  <div style={{ maxWidth: 850, margin: 'auto' }}>
    <OrdersList {...args} />
  </div>
)

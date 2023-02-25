import { Story, Meta } from '@storybook/react'
import CartList from '.'
import gameItemsMock from './mock'

import { CartListProps } from './types'

export default {
  title: 'CartList',
  component: CartList,
  args: {
    items: [...gameItemsMock],
    total: 'R$ 605,00'
  },
  parameters: {
    backgrounds: {
      default: 'won-dark'
    }
  }
} as Meta

export const Default: Story<CartListProps> = (args) => (
  <div style={{ maxWidth: '80rem', margin: '0 auto' }}>
    <CartList {...args} />
  </div>
)

export const WithButton: Story<CartListProps> = (args) => (
  <div style={{ maxWidth: '80rem', margin: '0 auto' }}>
    <CartList {...args} />
  </div>
)

WithButton.args = { hasButton: true }

export const Empty: Story = () => (
  <div style={{ maxWidth: '80rem', margin: '0 auto' }}>
    <CartList />
  </div>
)

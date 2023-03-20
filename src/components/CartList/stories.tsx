import { Story, Meta } from '@storybook/react'
import CartList from '.'
import gameItemsMock from './mock'

export default {
  title: 'CartList',
  component: CartList,
  parameters: {
    backgrounds: {
      default: 'won-dark'
    }
  }
} as Meta

export const Default: Story = (args) => (
  <div style={{ maxWidth: '80rem', margin: '0 auto' }}>
    <CartList {...args} />
  </div>
)

Default.args = {
  total: '$440.00',
  cartContextValue: { items: gameItemsMock }
}

export const WithButton: Story = (args) => (
  <div style={{ maxWidth: '80rem', margin: '0 auto' }}>
    <CartList {...args} />
  </div>
)

WithButton.args = {
  hasButton: true,
  total: '$440.00',
  cartContextValue: { items: gameItemsMock }
}

export const Empty: Story = () => (
  <div style={{ maxWidth: '80rem', margin: '0 auto' }}>
    <CartList />
  </div>
)

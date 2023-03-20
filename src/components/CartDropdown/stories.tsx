import { Story, Meta } from '@storybook/react'
import CartDropdown from '.'

import itemsMock from 'components/CartList/mock'

export default {
  title: 'CartDropdown',
  component: CartDropdown,
  parameters: { backgrounds: { default: 'won-dark' } }
} as Meta

export const Default: Story = (args) => (
  <div style={{ maxWidth: '98%', display: 'flex', justifyContent: 'center' }}>
    <CartDropdown {...args} />
  </div>
)

Default.args = {
  cartContextValue: {
    items: [...itemsMock],
    quantity: itemsMock.length,
    total: '$440.00'
  }
}

export const Empty: Story = () => (
  <div style={{ maxWidth: '98%', display: 'flex', justifyContent: 'center' }}>
    <CartDropdown />
  </div>
)

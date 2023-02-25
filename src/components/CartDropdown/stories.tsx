import { Story, Meta } from '@storybook/react'
import CartDropdown from '.'
import { CartDropdownProps } from './types'

import itemsMock from 'components/CartList/mock'

export default {
  title: 'CartDropdown',
  component: CartDropdown,
  parameters: { backgrounds: { default: 'won-dark' } },
  args: { items: [...itemsMock], total: 'R$ 605,00' }
} as Meta

export const Default: Story<CartDropdownProps> = (args) => (
  <div style={{ maxWidth: '98%', display: 'flex', justifyContent: 'center' }}>
    <CartDropdown {...args} />
  </div>
)

export const Empty: Story = () => (
  <div style={{ maxWidth: '98%', display: 'flex', justifyContent: 'center' }}>
    <CartDropdown />
  </div>
)

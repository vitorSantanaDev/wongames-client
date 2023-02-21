import { Story, Meta } from '@storybook/react'
import PaymentOptions from '.'
import { PaymentOptionsProps } from './types'

import cardsMock from './mock'

export default {
  title: 'PaymentOptions',
  component: PaymentOptions,
  args: {
    cards: [...cardsMock]
  },
  argTypes: {
    handlePayment: {
      action: 'buy now clicked'
    }
  },
  parameters: {
    backgrounds: {
      default: 'won-dark'
    }
  }
} as Meta

export const Default: Story<PaymentOptionsProps> = (args) => (
  <div style={{ maxWidth: '39.9rem' }}>
    <PaymentOptions {...args} />
  </div>
)

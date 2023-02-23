import { Story, Meta } from '@storybook/react'
import CardsList from '.'

import cardsMock from 'components/PaymentOptions/mock'
import { CardsListProps } from './types'

export default {
  title: 'Profile/CardsList',
  component: CardsList,
  args: {
    cards: [...cardsMock]
  }
} as Meta

export const Default: Story<CardsListProps> = (args) => (
  <div style={{ maxWidth: 850, margin: 'auto' }}>
    <CardsList {...args} />
  </div>
)

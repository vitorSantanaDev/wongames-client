import { Story, Meta } from '@storybook/react'
import GameItem from '.'
import { GameItemProps } from './types'

export default {
  title: 'GameItem',
  component: GameItem,
  args: {
    image:
      'https://images.hdqwalls.com/download/cyberpunk-biker-gang-4k-cf-1360x768.jpg',
    price: 'R$ 215,00',
    title: 'Red Dead Redemption 2'
  }
} as Meta

export const Default: Story<GameItemProps> = (args) => <GameItem {...args} />

export const WithPayment: Story<GameItemProps> = (args) => (
  <GameItem {...args} />
)

WithPayment.args = {
  downloadLink: 'http://link',
  paymentInfo: {
    flag: 'mastercard',
    image: '/img/Master.png',
    number: '**** **** **** 4326',
    purchasedDate: 'Purchased made on 07/20/2023'
  }
}

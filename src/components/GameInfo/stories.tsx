import { Story, Meta } from '@storybook/react'
import GameInfo from '.'
import { GameInfoProps } from './types'

import mockGame from './mock'
import { CartContextData } from 'hooks/use-cart/types'

export default {
  title: 'GameInfo',
  component: GameInfo,
  args: { ...mockGame },
  parameters: {
    backgrounds: {
      default: 'won-dark'
    }
  }
} as Meta

export const Default: Story<GameInfoProps> = (args) => (
  <div style={{ maxWidth: '144rem', padding: '1.5rem', margin: 'auto' }}>
    <GameInfo {...args} />
  </div>
)

export const IsInCart: Story<GameInfoProps & CartContextData> = (args) => (
  <div style={{ maxWidth: '144rem', padding: '1.5rem', margin: 'auto' }}>
    <GameInfo {...args} />
  </div>
)

IsInCart.args = {
  isInCart: () => true
}

import { Story, Meta } from '@storybook/react'
import GameDetails from '.'
import { GameDetailsProps } from './types'

import gameDetilsMock from './mock'

export default {
  title: 'Game/GameDetails',
  component: GameDetails,
  args: { ...gameDetilsMock },
  argTypes: {
    releaseDate: {
      control: 'date'
    },
    platforms: {
      control: {
        type: 'inline-check',
        options: ['windows', 'mac', 'linux']
      }
    },
    genres: {
      control: {
        type: 'inline-check',
        options: ['Role-playing', 'Narrative']
      }
    }
  },
  parameters: {
    backgrounds: {
      default: 'won-dark'
    }
  }
} as Meta

export const Default: Story<GameDetailsProps> = (args) => (
  <div style={{ maxWidth: '130rem', margin: '0 auto' }}>
    <GameDetails {...args} />
  </div>
)

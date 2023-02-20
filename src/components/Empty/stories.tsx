import { Story, Meta } from '@storybook/react'
import Empty from '.'
import { EmptyProps } from './types'

export default {
  title: 'Empty',
  component: Empty,
  parameters: {
    backgrounds: {
      default: 'won-dark'
    }
  }
} as Meta

export const Default: Story<EmptyProps> = (args) => <Empty {...args} />

Default.args = {
  hasLink: true,
  title: 'Your wishlist is empty',
  description: 'Game added to your wishlist will appear here'
}

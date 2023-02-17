import { Story, Meta } from '@storybook/react'
import TextContent from '.'
import { TextContentProps } from './types'

import textContentMock from './mock'

export default {
  title: 'TextContent',
  component: TextContent,
  args: { ...textContentMock },
  parameters: {
    backgrounds: {
      default: 'won-dark'
    }
  }
} as Meta

export const Default: Story<TextContentProps> = (args) => (
  <TextContent {...args} />
)

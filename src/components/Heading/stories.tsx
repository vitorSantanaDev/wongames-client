import { Story, Meta } from '@storybook/react'
import Heading from '.'
import { HeadingProps } from './types'

export default {
  title: 'Heading',
  component: Heading,
  argsTypes: {
    children: {
      type: 'string'
    }
  }
} as Meta

export const Default: Story<HeadingProps> = (args) => <Heading {...args} />

Default.args = {
  children: 'Most Populars'
}

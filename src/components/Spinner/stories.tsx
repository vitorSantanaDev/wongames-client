import { Story, Meta } from '@storybook/react/types-6-0'
import Spinner from '.'
import { SpinnerProps } from './types'

export default {
  title: 'Spinner',
  component: Spinner
} as Meta

export const Default: Story<SpinnerProps> = (args) => <Spinner {...args} />

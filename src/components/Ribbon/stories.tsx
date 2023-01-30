import { Story, Meta } from '@storybook/react'
import Ribbon from '.'
import { RibbonProps } from './types'

export default {
  title: 'Ribbon',
  component: Ribbon,
  args: {
    children: 'Best Seller'
  },
  argTypes: {
    children: { type: 'string' }
  }
} as Meta

export const Default: Story<RibbonProps> = (args) => {
  return (
    <div
      style={{
        width: '40rem',
        height: '25rem',
        position: 'relative',
        backgroundColor: '#44ea'
      }}
    >
      <Ribbon {...args} />
    </div>
  )
}

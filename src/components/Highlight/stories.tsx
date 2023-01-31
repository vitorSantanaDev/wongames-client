import { Story, Meta } from '@storybook/react'
import Highlight from '.'
import { HighlightProps } from './types'

export default {
  title: 'Highlight',
  component: Highlight,
  args: {
    buttonLink: '/rdl2',
    buttonLabel: 'Buy now',
    title: "Read Dead it's back",
    backgroundImage: '/img/red-dead-img.png',
    subtitle: "Come see John's new adventures"
  }
} as Meta

export const Default: Story<HighlightProps> = (args) => (
  <div style={{ maxWidth: '104rem' }}>
    <Highlight {...args} />
  </div>
)

export const WithFloatImage: Story<HighlightProps> = (args) => (
  <div style={{ maxWidth: '104rem' }}>
    <Highlight {...args} />
  </div>
)

WithFloatImage.args = {
  floatImage: '/img/red-dead-float.png'
}

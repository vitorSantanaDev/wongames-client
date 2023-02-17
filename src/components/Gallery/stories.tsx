import { Story, Meta } from '@storybook/react'
import Gallery from '.'
import { GalleryProps } from './types'

import imagesMock from './mock'

export default {
  title: 'Gallery',
  component: Gallery,
  args: { items: imagesMock },
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'won-dark'
    }
  }
} as Meta

export const Default: Story<GalleryProps> = (args) => (
  <div style={{ maxWidth: '130rem', margin: '0 auto' }}>
    <Gallery {...args} />
  </div>
)

import { Story, Meta } from '@storybook/react'
import Footer from '.'

export default {
  title: 'Footer',
  component: Footer
} as Meta

export const Default: Story = () => (
  <section style={{ maxWidth: '130rem', margin: '0 auto' }}>
    <Footer />
  </section>
)

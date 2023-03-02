import { Story, Meta } from '@storybook/react'
import ExploreSidebar from '.'

import itemsMock from './mock'
import { ExploreSidebarProps } from './types'

export default {
  title: 'ExploreSidebar',
  component: ExploreSidebar,
  args: { items: [...itemsMock] },
  parameters: { backgrounds: { default: 'won-dark' } }
} as Meta

export const Default: Story<ExploreSidebarProps> = (args) => (
  <div style={{ padding: 16, maxWidth: 320 }}>
    <ExploreSidebar {...args} />
  </div>
)

export const WithInitialValues: Story<ExploreSidebarProps> = (args) => (
  <div style={{ padding: 16, maxWidth: 320 }}>
    <ExploreSidebar
      {...args}
      initialValues={{ windows: true, sort_by: 'low-to-high' }}
    />
  </div>
)
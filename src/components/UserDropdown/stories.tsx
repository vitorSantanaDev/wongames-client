import { Story, Meta } from '@storybook/react'
import UserDropdown from '.'
import { UserDropdownProps } from './types'

export default {
  title: 'UserDropdown',
  component: UserDropdown,
  args: { username: 'Vitor' },
  parameters: {
    backgrounds: { default: 'won-dark' }
  }
} as Meta

export const Default: Story<UserDropdownProps> = (args) => (
  <div style={{ maxWidth: '98%', display: 'flex', justifyContent: 'center' }}>
    <UserDropdown {...args} />
  </div>
)

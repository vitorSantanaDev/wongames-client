import { Story, Meta } from '@storybook/react/types-6-0'
import { Email } from '@styled-icons/material-outlined'
import TextField from '.'
import { TextFieldProps } from './types'

export default {
  title: 'TextField',
  component: TextField,
  args: {
    id: 'Email',
    initialValue: '',
    label: 'E-mail',
    labelFor: 'Email',
    placeholder: 'john.cage@gmail.com'
  },
  argTypes: {
    icon: { type: 'string' },
    onInput: { action: 'changed' }
  }
} as Meta

export const Default: Story<TextFieldProps> = (args) => (
  <div style={{ maxWidth: 300, padding: 15 }}>
    <TextField {...args} />
  </div>
)

export const WithIcon: Story<TextFieldProps> = (args) => (
  <div style={{ maxWidth: 300, padding: 15 }}>
    <TextField {...args} />
  </div>
)

WithIcon.args = {
  icon: <Email />
}

export const WithError: Story<TextFieldProps> = (args) => (
  <div style={{ maxWidth: 300, padding: 15 }}>
    <TextField {...args} />
  </div>
)

WithError.args = {
  error: 'Ops..This is a Error message'
}

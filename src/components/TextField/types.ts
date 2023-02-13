import { InputHTMLAttributes } from 'react'

export type TextFieldProps = {
  onInput?: (value: string) => void
  error?: string
  label?: string
  labelFor?: string
  disabled?: boolean
  initialValue?: string
  icon?: React.ReactNode
  iconPosition?: 'left' | 'right'
} & InputHTMLAttributes<HTMLInputElement>

import { InputHTMLAttributes } from 'react'

export type TextFieldProps = {
  onInputChange?: (value: string) => void
  error?: string
  label?: string
  disabled?: boolean
  initialValue?: string
  icon?: React.ReactNode
  iconPosition?: 'left' | 'right'
} & InputHTMLAttributes<HTMLInputElement>

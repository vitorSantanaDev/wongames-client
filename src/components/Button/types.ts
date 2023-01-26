import { AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react'

type ButtonTypes =
  | AnchorHTMLAttributes<HTMLAnchorElement>
  | ButtonHTMLAttributes<HTMLButtonElement>

export type ButtonProps = {
  icon?: React.ReactNode
  fullWidth?: boolean
  size?: 'small' | 'medium' | 'large'
  as?: React.ElementType
} & ButtonTypes

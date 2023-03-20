import { ButtonProps } from 'components/Button/types'

export type CartButtonProps = {
  id: string
  hasText?: boolean
} & Pick<ButtonProps, 'size'>

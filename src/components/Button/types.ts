export type ButtonProps = {
  icon?: React.ReactNode
  fullWidth?: boolean
  children?: React.ReactNode
  size?: 'small' | 'medium' | 'large'
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
}

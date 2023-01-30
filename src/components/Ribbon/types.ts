export type RibbonColors = 'primary' | 'secondary'
export type RibbonSizes = 'normal' | 'small'

export type RibbonProps = {
  size?: RibbonSizes
  color?: RibbonColors
  children: React.ReactNode
}

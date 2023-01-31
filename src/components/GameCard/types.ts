import { RibbonColors, RibbonSizes } from 'components/Ribbon/types'

export type GameCardProps = {
  title: string
  developer: string
  image: string
  price: string
  promotionalPrice?: string
  favorite?: boolean
  onFavorite?: () => void
  ribbon?: React.ReactNode
  ribbonSize?: RibbonSizes
  ribbonColor?: RibbonColors
}

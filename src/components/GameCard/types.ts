import { RibbonColors, RibbonSizes } from 'components/Ribbon/types'

export type GameCardProps = {
  slug: string
  title: string
  developer: string
  image: string
  price: number
  promotionalPrice?: number
  favorite?: boolean
  onFavorite?: () => void
  ribbon?: React.ReactNode
  ribbonSize?: RibbonSizes
  ribbonColor?: RibbonColors
}

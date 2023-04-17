import { RibbonColors, RibbonSizes } from 'components/Ribbon/types'

export type GameCardProps = {
  id: string
  slug: string
  title: string
  developer: string
  image: string
  price: number
  promotionalPrice?: number
  ribbon?: React.ReactNode
  ribbonSize?: RibbonSizes
  ribbonColor?: RibbonColors
}

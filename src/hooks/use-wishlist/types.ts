import { GameCardProps } from 'components/GameCard/types'
import { ReactNode } from 'react'

export type WishlistContextData = {
  items: GameCardProps[]
  isInWishlist: (id: string) => boolean
  addToWishlist: (id: string) => void
  removeFromWishlist: (id: string) => void
  loading: boolean
}

export type WishlistProviderProps = {
  children: ReactNode
}

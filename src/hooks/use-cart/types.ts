export type CartItem = {
  id: string
  img: string
  price: string
  title: string
}

export type CartContextData = {
  items: CartItem[]
  quantity: number
  total: string
  loading: boolean
  isInCart: (id: string) => boolean
  addToCart: (id: string) => void
  removeFromCart: (id: string) => void
  clearCart: () => void
}

export type CartProviderProps = { children: React.ReactNode }

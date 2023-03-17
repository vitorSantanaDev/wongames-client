import { createContext, useContext, useEffect, useState } from 'react'
import { cartItemsMapper } from 'utils/mappers'
import { getStorageItem, setStorageItem } from 'utils/localStorage'
import { useQueryGames } from 'graphql/queries/games'
import { CartContextData, CartProviderProps } from './types'
import formatPrice from 'utils/formatPrice'

const CART_KEY = 'cartItems'

const CartContextDefaultValues: CartContextData = {
  items: [],
  quantity: 0,
  total: '$0.00',
  loading: false,
  isInCart: () => false,
  addToCart: () => null,
  clearCart: () => null,
  removeFromCart: () => null
}

export const CartContext = createContext<CartContextData>(
  CartContextDefaultValues
)

const CartProvider = ({ children }: CartProviderProps) => {
  const [cartItems, setCartItems] = useState<string[]>([])

  useEffect(() => {
    const data = getStorageItem(CART_KEY)
    if (data) setCartItems(data)
  }, [])

  const { data, loading } = useQueryGames({
    skip: !cartItems.length,
    variables: { where: { id: cartItems } }
  })

  const totalPriceGenerate = formatPrice(
    data?.games.reduce((acc, value) => (acc += value.price), 0) || 0
  )

  const isInCart = (id: string) => cartItems.includes(id)

  const addToCart = (id: string) => {
    let newCartItems: string[] = []
    setCartItems((prevState) => {
      newCartItems = [...prevState, id]
      return newCartItems
    })
    setStorageItem(CART_KEY, newCartItems)
  }

  const removeFromCart = (id: string) => {
    let newCartItems: string[] = []
    setCartItems((prevState) => {
      newCartItems = prevState.filter((item) => item !== id)
      return newCartItems
    })
    setStorageItem(CART_KEY, newCartItems)
  }

  const clearCart = () => {
    setCartItems([])
    setStorageItem(CART_KEY, [])
  }

  return (
    <CartContext.Provider
      value={{
        loading,
        isInCart,
        addToCart,
        clearCart,
        removeFromCart,
        total: totalPriceGenerate,
        quantity: cartItems.length,
        items: cartItemsMapper(!data ? [] : data.games)
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

const useCart = () => useContext(CartContext)

export { CartProvider, useCart }

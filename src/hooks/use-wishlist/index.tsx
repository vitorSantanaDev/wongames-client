import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import { WishlistContextData, WishlistProviderProps } from './types'
import { useQueryWishlist } from 'graphql/queries/wishlist'
import { useSession } from 'next-auth/client'
import { gamesMapper } from 'utils/mappers'
import { Game } from 'graphql/types/schema'
import { useMutation } from '@apollo/client'
import {
  MUTATION_CREATE_WISHLIST,
  MUTATION_UPDATE_WISHLIST
} from 'graphql/mutations/wishlist'

export const WishlistContextDefaultValues: WishlistContextData = {
  items: [],
  isInWishlist: () => false,
  addToWishlist: () => null,
  removeFromWishlist: () => null,
  loading: false
}

export const WishlistContext = createContext<WishlistContextData>(
  WishlistContextDefaultValues
)

const WishListProvider = ({ children }: WishlistProviderProps) => {
  const [session] = useSession()
  const [wishlistItems, setWishlistItems] = useState<Game[]>([])
  const [wishlistID, setWishlistID] = useState<string | null>()

  const [createWishlist, { loading: loadingCreate }] = useMutation(
    MUTATION_CREATE_WISHLIST,
    {
      context: { session },
      onCompleted: (data) => {
        setWishlistItems(data?.createWishlist?.wishlist?.games || [])
        setWishlistID(data?.createWishlist?.wishlist?.id)
      }
    }
  )

  const [updateWishlistList, { loading: loadingUpdate }] = useMutation(
    MUTATION_UPDATE_WISHLIST,
    {
      context: { session },
      onCompleted: (data) => {
        setWishlistItems(data?.updateWishlist?.wishlist?.games || [])
      }
    }
  )

  const { data, loading: loadingQuery } = useQueryWishlist({
    skip: !session?.user?.email,
    context: { session },
    variables: { identifier: session?.user?.email || '' }
  })

  useEffect(() => {
    if (data?.wishlists.length) {
      setWishlistItems(data?.wishlists[0].games as Game[])
      setWishlistID(String(data?.wishlists[0]?.id || ''))
    } else {
      setWishlistItems([])
    }
  }, [data])

  const wishlistIds = useMemo(
    () => wishlistItems.map((item) => item.id),
    [wishlistItems]
  )

  const isInWishlist = (id: string) => {
    return !!wishlistItems.find((game) => game.id === id)
  }

  const addToWishlist = (id: string) => {
    if (!wishlistID) {
      return createWishlist({
        variables: { input: { data: { games: [...wishlistIds, id] } } }
      })
    }
    return updateWishlistList({
      variables: {
        input: {
          where: { id: wishlistID },
          data: { games: [...wishlistIds, id] }
        }
      }
    })
  }

  const removeFromWishlist = (id: string) => {
    return updateWishlistList({
      variables: {
        input: {
          where: { id: wishlistID },
          data: { games: wishlistIds.filter((item) => item !== id) }
        }
      }
    })
  }

  return (
    <WishlistContext.Provider
      value={{
        isInWishlist,
        addToWishlist,
        removeFromWishlist,
        items: gamesMapper(wishlistItems),
        loading: loadingQuery || loadingCreate || loadingUpdate
      }}
    >
      {children}
    </WishlistContext.Provider>
  )
}

const useWishlist = () => useContext(WishlistContext)

export { WishListProvider, useWishlist }

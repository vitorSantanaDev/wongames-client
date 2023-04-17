import { useSession } from 'next-auth/client'
import { Favorite, FavoriteBorder } from '@styled-icons/material-outlined'

import Button from 'components/Button'
import { WishlistButtonProps } from './types'
import { useWishlist } from 'hooks/use-wishlist'
import { useState } from 'react'
import Spinner from 'components/Spinner'

const WishlistButton = ({
  id,
  hasText,
  size = 'small'
}: WishlistButtonProps) => {
  const [session] = useSession()
  const [loading, setLoading] = useState(false)
  const { isInWishlist, addToWishlist, removeFromWishlist } = useWishlist()

  const ButtonText = isInWishlist(id)
    ? 'Remove from wishlist'
    : 'Add to wishlist'

  const handleClick = async () => {
    setLoading(true)
    isInWishlist(id) ? await removeFromWishlist(id) : await addToWishlist(id)
    setLoading(false)
  }

  if (!session) return null

  return (
    <Button
      onClick={handleClick}
      icon={
        loading ? (
          <Spinner />
        ) : isInWishlist(id) ? (
          <Favorite aria-label={ButtonText} />
        ) : (
          <FavoriteBorder aria-label={ButtonText} />
        )
      }
      minimal
      size={size}
    >
      {hasText && ButtonText}
    </Button>
  )
}

export default WishlistButton

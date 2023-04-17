import { useSession } from 'next-auth/client'
import { Favorite, FavoriteBorder } from '@styled-icons/material-outlined'

import Button from 'components/Button'
import { WishlistButtonProps } from './types'
import { useWishlist } from 'hooks/use-wishlist'

const WishlistButton = ({
  id,
  hasText,
  size = 'small'
}: WishlistButtonProps) => {
  const [session] = useSession()
  const { isInWishlist, addToWishlist, removeFromWishlist } = useWishlist()

  const ButtonText = isInWishlist(id)
    ? 'Remove from wishlist'
    : 'Add to wishlist'

  const handleClick = () => {
    isInWishlist(id) ? removeFromWishlist(id) : addToWishlist(id)
  }

  if (!session) return null

  return (
    <Button
      onClick={handleClick}
      icon={
        isInWishlist(id) ? (
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

import Wishlist from 'templates/Wishlist'

import gamesMock from 'components/GameCardSlider/mock'
import highlightMock from 'components/Highlight/mock'

import { WishlistProps } from 'templates/Wishlist/types'

export default function WishlistPage(props: WishlistProps) {
  return <Wishlist {...props} />
}

export async function getStaticProps() {
  return {
    props: {
      games: [...gamesMock],
      recommendedGames: [...gamesMock],
      recommendedHighlight: { ...highlightMock }
    }
  }
}

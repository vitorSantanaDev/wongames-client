import 'session.mock'
import 'match-media-mock'

import { WishlistProps } from './types'

import gamesMock from 'components/GameCardSlider/mock'
import highlightMock from 'components/Highlight/mock'

import Wishlist from '.'
import { render, screen } from 'utils/test-utils'
import { WishlistContextDefaultValues } from 'hooks/use-wishlist'

const props: WishlistProps = {
  recommendedGames: gamesMock,
  recommendedHighlight: highlightMock
}

jest.mock('templates/Base', () => {
  return {
    __esModule: true,
    default: function Mock({ children }: { children: React.ReactNode }) {
      return <div data-testid="Mock Base">{children}</div>
    }
  }
})

jest.mock('components/ShowCase', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="Mock ShowCase" />
    }
  }
})

describe('<Wishlist />', () => {
  it('should render correctly', () => {
    const wishlistProviderProps = {
      ...WishlistContextDefaultValues,
      items: [gamesMock[0]]
    }
    render(<Wishlist {...props} />, { wishlistProviderProps })

    const game = screen.getByText(/Population Zero/i)
    expect(game).toBeInTheDocument()

    const heading = screen.getByRole('heading', { name: /wishlist/i })
    expect(heading).toBeInTheDocument()

    const showCaseComponent = screen.getByTestId('Mock ShowCase')
    expect(showCaseComponent).toBeInTheDocument()
  })

  it('should empty when there are no games', () => {
    const wishlistProviderProps = {
      ...WishlistContextDefaultValues,
      items: []
    }
    render(<Wishlist {...props} />, { wishlistProviderProps })

    const game = screen.queryByText(/Population Zero/i)
    expect(game).not.toBeInTheDocument()

    const emptyHeading = screen.getByRole('heading', {
      name: /your wishlist is empty/i
    })

    expect(emptyHeading).toBeInTheDocument()
  })
})

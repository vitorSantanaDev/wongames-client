import 'match-media-mock'

import { WishlistProps } from './types'

import gamesMock from 'components/GameCardSlider/mock'
import highlightMock from 'components/Highlight/mock'

import Wishlist from '.'
import { render, screen } from 'utils/test-utils'

const props: WishlistProps = {
  games: gamesMock,
  recommendedGames: gamesMock,
  recommendedHighlight: highlightMock
}

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
    render(<Wishlist {...props} />)

    const games = screen.getAllByText(/Population Zero/i)
    expect(games).toHaveLength(5)

    const heading = screen.getByRole('heading', { name: /wishlist/i })
    expect(heading).toBeInTheDocument()

    const showCaseComponent = screen.getByTestId('Mock ShowCase')
    expect(showCaseComponent).toBeInTheDocument()
  })

  it('should empty when there are no games', () => {
    render(<Wishlist {...props} games={[]} />)

    const games = screen.queryAllByAltText(/Population Zero/i)
    expect(games).toHaveLength(0)

    const emptyHeading = screen.getByRole('heading', {
      name: /your wishlist is empty/i
    })

    expect(emptyHeading).toBeInTheDocument()
  })
})

import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import GameInfo from '.'
import { GameInfoProps } from './types'

const props: GameInfoProps = {
  title: 'My game title',
  price: 215.88,
  description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
}

describe('<GameInfo />', () => {
  it('should render game informations', () => {
    const { container } = renderWithTheme(<GameInfo {...props} />)

    const heading = screen.getByRole('heading', { name: /My game title/i })
    expect(heading).toBeInTheDocument()

    const description = screen.getByText(
      /Lorem ipsum dolor sit amet consectetur adipisicing elit./i
    )
    expect(description).toBeInTheDocument()

    const price = screen.getByText(/\$215.88/i)
    expect(price).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render buttons', () => {
    renderWithTheme(<GameInfo {...props} />)

    const buttonAddToCart = screen.getByRole('button', { name: /add to cart/i })
    expect(buttonAddToCart).toBeInTheDocument()

    const buttonWishlist = screen.getByRole('button', { name: /wishlist/i })
    expect(buttonWishlist).toBeInTheDocument()
  })
})

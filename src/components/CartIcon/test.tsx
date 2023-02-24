import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import CartIcon from '.'

describe('<CartIcon />', () => {
  it('should render without badge', () => {
    const { container } = renderWithTheme(<CartIcon />)

    const cartIcon = screen.getByLabelText(/shopping cart/i)
    expect(cartIcon).toBeInTheDocument()

    const badge = screen.queryByLabelText(/cart items/)
    expect(badge).not.toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render with badge', () => {
    renderWithTheme(<CartIcon quantity={246} />)

    const cartIcon = screen.getByLabelText(/shopping cart/i)
    expect(cartIcon).toBeInTheDocument()

    const badge = screen.getByLabelText(/cart items/)
    expect(badge).toBeInTheDocument()

    const quantityValue = screen.getByText(246)
    expect(quantityValue).toBeInTheDocument()
  })

  it('should render with badge only if has positive number', () => {
    renderWithTheme(<CartIcon quantity={-1} />)

    const cartIcon = screen.getByLabelText(/shopping cart/i)
    expect(cartIcon).toBeInTheDocument()

    const badge = screen.queryByLabelText(/cart items/)
    expect(badge).not.toBeInTheDocument()

    const quantityValue = screen.queryByText(-1)
    expect(quantityValue).not.toBeInTheDocument()
  })
})

import { render, screen } from 'utils/test-utils'
import CartIcon from '.'

describe('<CartIcon />', () => {
  it('should render without badge', () => {
    const { container } = render(<CartIcon />)

    const cartIcon = screen.getByLabelText(/shopping cart/i)
    expect(cartIcon).toBeInTheDocument()

    const badge = screen.queryByLabelText(/cart items/)
    expect(badge).not.toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render with badge', () => {
    render(<CartIcon quantity={246} />)

    const cartIcon = screen.getByLabelText(/shopping cart/i)
    expect(cartIcon).toBeInTheDocument()

    const badge = screen.getByLabelText(/cart items/)
    expect(badge).toBeInTheDocument()

    const quantityValue = screen.getByText(246)
    expect(quantityValue).toBeInTheDocument()
  })

  it('should render with badge only if has positive number', () => {
    render(<CartIcon quantity={-1} />)

    const cartIcon = screen.getByLabelText(/shopping cart/i)
    expect(cartIcon).toBeInTheDocument()

    const badge = screen.queryByLabelText(/cart items/)
    expect(badge).not.toBeInTheDocument()

    const quantityValue = screen.queryByText(-1)
    expect(quantityValue).not.toBeInTheDocument()
  })
})

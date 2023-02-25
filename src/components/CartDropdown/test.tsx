import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import CartDropdown from '.'

import itemsMock from 'components/CartList/mock'

const props = { items: itemsMock, total: 'R$ 605,00' }

describe('<CartDropdown />', () => {
  it('should render the <CartIcon /> and its badge', () => {
    const { container } = renderWithTheme(<CartDropdown {...props} />)

    const shoppingCartIcon = screen.getByLabelText(/shopping cart/i)
    expect(shoppingCartIcon).toBeInTheDocument()

    const shoppingCartIconBadge = screen.getByText(itemsMock.length)
    expect(shoppingCartIconBadge).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render dropdown content with cart items and total', () => {
    renderWithTheme(<CartDropdown {...props} />)

    const price = screen.getByText(props.total)
    expect(price).toBeInTheDocument()

    const item = screen.getByText(props.items[0].title)
    expect(item).toBeInTheDocument()
  })
})

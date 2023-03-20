import CartDropdown from '.'
import { render, screen } from 'utils/test-utils'

import itemsMock from 'components/CartList/mock'
import { CartContextDefaultValues } from 'hooks/use-cart'

describe('<CartDropdown />', () => {
  beforeEach(() => {
    const cartProviderProps = {
      ...CartContextDefaultValues,
      quantity: itemsMock.length,
      total: '$440.00',
      items: itemsMock
    }
    render(<CartDropdown />, { cartProviderProps })
  })
  it('should render the <CartIcon /> and its badge', () => {
    const shoppingCartIcon = screen.getByLabelText(/shopping cart/i)
    expect(shoppingCartIcon).toBeInTheDocument()
  })

  it('should render dropdown content with cart items and total', () => {
    render(<CartDropdown />)

    const price = screen.getByText('$440.00')
    expect(price).toBeInTheDocument()

    const item = screen.getByText(itemsMock[0].title)
    expect(item).toBeInTheDocument()
  })
})

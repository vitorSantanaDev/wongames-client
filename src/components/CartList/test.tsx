import { render, screen } from 'utils/test-utils'
import { CartContextDefaultValues } from 'hooks/use-cart'
import gameItemsMock from './mock'

import CartList from '.'

describe('<CartList />', () => {
  it('should render the heading', () => {
    const cartProviderProps = {
      ...CartContextDefaultValues,
      items: gameItemsMock,
      total: '$330.00'
    }
    const { container } = render(<CartList />, { cartProviderProps })

    const headings = screen.getAllByRole('heading')
    expect(headings).toHaveLength(2)

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render the button', () => {
    const cartProviderProps = {
      ...CartContextDefaultValues,
      items: gameItemsMock
    }

    render(<CartList hasButton />, { cartProviderProps })

    const button = screen.getByText(/buy it now/i)
    expect(button).toBeInTheDocument()
  })

  it('should render loading', () => {
    const cartProviderProps = {
      ...CartContextDefaultValues,
      items: gameItemsMock,
      loading: true
    }

    render(<CartList hasButton />, { cartProviderProps })

    const loading = screen.getByText(/loading/i)
    expect(loading).toBeInTheDocument()
  })

  it('should render Empty if there are no items', () => {
    render(<CartList />)
    const emptyDescription = screen.getByText(/your cart is empty/i)
    expect(emptyDescription).toBeInTheDocument()

    const totalLabel = screen.queryByText(/total/i)
    expect(totalLabel).not.toBeInTheDocument()
  })
})

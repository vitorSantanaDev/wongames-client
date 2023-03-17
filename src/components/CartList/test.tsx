import { render, screen } from 'utils/test-utils'
import gameItemsMock from './mock'

import CartList from '.'

describe('<CartList />', () => {
  it('should render the heading', () => {
    const totalPriceValue = gameItemsMock.reduce(
      (acc, item) =>
        (acc += Number(item.price.replace('R$ ', '').replace(',', '.'))),
      0
    )
    const { container } = render(
      <CartList items={[...gameItemsMock]} total={`R$ ${totalPriceValue}`} />
    )

    const headings = screen.getAllByRole('heading')
    expect(headings).toHaveLength(2)

    const totalPrice = screen.getByText(`R$ ${totalPriceValue}`)
    expect(totalPrice).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render the button', () => {
    const totalPriceValue = gameItemsMock.reduce(
      (acc, item) =>
        (acc += Number(item.price.replace('R$ ', '').replace(',', '.'))),
      0
    )
    render(
      <CartList
        items={[...gameItemsMock]}
        total={`R$ ${totalPriceValue}`}
        hasButton
      />
    )

    const button = screen.getByText(/buy it now/i)
    expect(button).toBeInTheDocument()
  })

  it('should render Empty if there are no items', () => {
    render(<CartList />)
    const emptyDescription = screen.getByText(/your cart is empty/i)
    expect(emptyDescription).toBeInTheDocument()

    const totalLabel = screen.queryByText(/total/i)
    expect(totalLabel).not.toBeInTheDocument()
  })
})

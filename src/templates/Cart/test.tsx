import cartListMock from 'components/CartList/mock'
import highlightMock from 'components/Highlight/mock'
import gamesMock from 'components/GameCardSlider/mock'
import cardsMock from 'components/PaymentOptions/mock'

import { CartProps } from './types'

import Cart from '.'
import { render, screen } from 'utils/test-utils'

const totalPrice = cartListMock
  .reduce(
    (acc, item) =>
      (acc += Number(item.price.replace('R$ ', '').replace(',', '.'))),
    0
  )
  .toFixed(2)

const props: CartProps = {
  cards: [...cardsMock],
  total: `R$ ${totalPrice}`,
  items: [...cartListMock],
  recommendedGames: [...gamesMock],
  recommendedHighlight: { ...highlightMock }
}

jest.mock('templates/Base', () => {
  return {
    __esModule: true,
    default: function Mock({ children }: { children: React.ReactNode }) {
      return <div data-testid="Mock Base">{children}</div>
    }
  }
})

jest.mock('components/CartList', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="Mock CartList" />
    }
  }
})

jest.mock('components/PaymentOptions', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="Mock PaymentOptions" />
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

jest.mock('components/Empty', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="Mock Empty" />
    }
  }
})

describe('<Cart />', () => {
  it('should render the sections', () => {
    render(<Cart {...props} />)

    const heading = screen.getByRole('heading', { name: /my cart/i })
    expect(heading).toBeInTheDocument()

    const baseTemplate = screen.getByTestId('Mock Base')
    expect(baseTemplate).toBeInTheDocument()

    const cartListComponent = screen.getByTestId('Mock CartList')
    expect(cartListComponent).toBeInTheDocument()

    const paymentOptionsComponent = screen.getByTestId('Mock PaymentOptions')
    expect(paymentOptionsComponent).toBeInTheDocument()

    const showCaseComponent = screen.getByTestId('Mock ShowCase')
    expect(showCaseComponent).toBeInTheDocument()

    const emptyComponent = screen.queryByTestId('Mock Empty')
    expect(emptyComponent).not.toBeInTheDocument()
  })

  it('should render empty section if there are no items', () => {
    render(<Cart {...props} items={[]} />)
    const emptyComponent = screen.getByTestId('Mock Empty')
    expect(emptyComponent).toBeInTheDocument()
  })
})

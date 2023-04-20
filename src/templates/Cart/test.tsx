import { render, screen } from 'utils/test-utils'

import highlightMock from 'components/Highlight/mock'
import gamesMock from 'components/GameCardSlider/mock'

import { CartProps } from './types'

import Cart from '.'

const props: CartProps = {
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

jest.mock('components/PaymentForm', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="Mock PaymentForm" />
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

    const paymentFormComponent = screen.getByTestId('Mock PaymentForm')
    expect(paymentFormComponent).toBeInTheDocument()

    const showCaseComponent = screen.getByTestId('Mock ShowCase')
    expect(showCaseComponent).toBeInTheDocument()

    const emptyComponent = screen.queryByTestId('Mock Empty')
    expect(emptyComponent).not.toBeInTheDocument()
  })
})

import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import OrdersList from '.'

import ordersMock from './mock'

jest.mock('components/Empty', () => ({
  __esModule: true,
  default: function Mock() {
    return <div data-testid="Mock Empty" />
  }
}))

jest.mock('components/GameItem', () => ({
  __esModule: true,
  default: function Mock({ children }: { children: React.ReactNode }) {
    return <div data-testid="Mock GameItem">{children}</div>
  }
}))

describe('<OrdersList />', () => {
  it('should render the game items', () => {
    const { container } = renderWithTheme(
      <OrdersList items={[...ordersMock]} />
    )

    const heading = screen.getByRole('heading', { name: /my orders/i })
    expect(heading).toBeInTheDocument()

    const gameItems = screen.getAllByTestId('Mock GameItem')
    expect(gameItems).toHaveLength(2)

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render empty state', () => {
    renderWithTheme(<OrdersList items={[]} />)

    const gameItems = screen.queryAllByTestId('Mock GameItem')
    expect(gameItems).toHaveLength(0)

    const emptyComponent = screen.getByTestId('Mock Empty')
    expect(emptyComponent).toBeInTheDocument()
  })
})

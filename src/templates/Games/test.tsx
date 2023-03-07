import apolloCache from 'utils/apolloCache'
import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { renderWithTheme } from 'utils/tests/helpers'
import { MockedProvider } from '@apollo/client/testing'

import filterItemsMock from 'components/ExploreSidebar/mock'
import { fetchMoreMock, gamesMock, queryMock } from './mocks'

import Games from '.'

jest.mock('templates/Base', () => ({
  __esModule: true,
  default: function Mock({ children }: { children: React.ReactNode }) {
    return <div data-testid="Mock Base">{children}</div>
  }
}))

jest.mock('components/ExploreSidebar', () => ({
  __esModule: true,
  default: function Mock({ children }: { children: React.ReactNode }) {
    return <div data-testid="Mock ExploreSidebar">{children}</div>
  }
}))

describe('<Games />', () => {
  it('should render loading when starting template', () => {
    renderWithTheme(
      <MockedProvider
        mocks={[
          {
            ...queryMock({ limit: 15 })
          }
        ]}
        addTypename={false}
      >
        <Games filterItems={filterItemsMock} />
      </MockedProvider>
    )

    const loading = document.getElementById('loading')

    expect(loading).toBeInTheDocument()
  })

  it('should render sections', async () => {
    renderWithTheme(
      <MockedProvider mocks={[gamesMock]} addTypename={false}>
        <Games filterItems={filterItemsMock} />
      </MockedProvider>
    )

    /**
     * @description it starts without data, shows loading!
     **/
    const loading = document.getElementById('loading')
    expect(loading).toBeInTheDocument()

    /**
     * @description we wait until we have data to get elements
     **/
    const exploreSideBarComponent = await screen.findByTestId(
      'Mock ExploreSidebar'
    )
    expect(exploreSideBarComponent).toBeInTheDocument()

    const game = await screen.findByText(/Sample Game/i)
    expect(game).toBeInTheDocument()

    const showMoreButton = await screen.findByRole('button', {
      name: /show more/i
    })
    expect(showMoreButton).toBeInTheDocument()
  })

  it('should render more games when show more is clicked', async () => {
    renderWithTheme(
      <MockedProvider mocks={[gamesMock, fetchMoreMock]} cache={apolloCache}>
        <Games filterItems={filterItemsMock} />
      </MockedProvider>
    )

    const game = await screen.findByText(/Sample Game/i)
    expect(game).toBeInTheDocument()

    const showMoreButton = await screen.findByRole('button', {
      name: /show more/i
    })

    userEvent.click(showMoreButton)

    const moreGame = await screen.findByText(/Fetch More Game/i)
    expect(moreGame).toBeInTheDocument()
  })
})

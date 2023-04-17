import 'session.mock'
import apolloCache from 'utils/apolloCache'
import userEvent from '@testing-library/user-event'
import { MockedProvider } from '@apollo/client/testing'

import filterItemsMock from 'components/ExploreSidebar/mock'
import { fetchMoreMock, gamesMock, noGamesMock } from './mocks'

import Games from '.'
import { render, screen } from 'utils/test-utils'

// eslint-disable-next-line @typescript-eslint/no-var-requires
const useRouter = jest.spyOn(require('next/router'), 'useRouter')
const push = jest.fn()

useRouter.mockImplementation(() => ({
  push,
  query: '',
  asPath: '',
  route: '/'
}))

jest.mock('templates/Base', () => ({
  __esModule: true,
  default: function Mock({ children }: { children: React.ReactNode }) {
    return <div data-testid="Mock Base">{children}</div>
  }
}))

jest.mock('next/link', () => ({
  __esModule: true,
  default: function Mock({ children }: { children: React.ReactNode }) {
    return <div>{children}</div>
  }
}))

describe('<Games />', () => {
  it('should render sections', async () => {
    render(
      <MockedProvider mocks={[gamesMock]} addTypename={false}>
        <Games filterItems={filterItemsMock} />
      </MockedProvider>
    )

    /**
     * @description we wait until we have data to get elements
     **/
    const exploreSideBarFilter = await screen.findByText(/Price/i)
    expect(exploreSideBarFilter).toBeInTheDocument()

    const game = await screen.findByText(/Sample Game/i)
    expect(game).toBeInTheDocument()

    const showMoreButton = await screen.findByRole('button', {
      name: /show more/i
    })
    expect(showMoreButton).toBeInTheDocument()
  })

  it('should render more games when show more is clicked', async () => {
    render(
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

  it('should change push router when selecting a filter', async () => {
    render(
      <MockedProvider mocks={[gamesMock, fetchMoreMock]} cache={apolloCache}>
        <Games filterItems={filterItemsMock} />
      </MockedProvider>
    )

    const windowsOption = await screen.findByRole('checkbox', {
      name: /windows/i
    })

    const linuxOption = await screen.findByRole('checkbox', {
      name: /linux/i
    })

    const lowToHighOption = await screen.findByRole('radio', {
      name: /low to high/i
    })

    userEvent.click(windowsOption)
    userEvent.click(linuxOption)
    userEvent.click(lowToHighOption)

    expect(push).toHaveBeenCalledWith({
      pathname: '/games',
      query: { platforms: ['windows', 'linux'], sort_by: 'low-to-high' }
    })
  })

  it('should render empty when no games found', async () => {
    render(
      <MockedProvider mocks={[noGamesMock]} addTypename={false}>
        <Games filterItems={filterItemsMock} />
      </MockedProvider>
    )

    expect(
      await screen.findByText(/We didn't find any games with this filter/i)
    ).toBeInTheDocument()
  })
})

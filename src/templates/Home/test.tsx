import 'match-media-mock'

import bannerMock from 'components/BannerSlider/mock'
import gamesMock from 'components/GameCardSlider/mock'
import highlightMock from 'components/Highlight/mock'

import Home from '.'
import { HomeTemplateProps } from './types'
import { render, screen } from 'utils/test-utils'

const props: HomeTemplateProps = {
  banners: bannerMock,
  newGames: [gamesMock[0]],
  mostPopularGamesHighlight: highlightMock,
  mostPopularGames: [gamesMock[0]],
  upcomingGames: [gamesMock[0]],
  upcomingGamesHighlight: highlightMock,
  freeGames: [gamesMock[0]],
  freeGamesHighlight: highlightMock,
  freeGamesTitle: 'Free Games',
  mostPopularGamesTitle: 'Most Popular Games',
  newGamesTitle: 'New Games',
  upcomingGamesTitle: 'Upcoming Games'
}

jest.mock('templates/Base', () => {
  return {
    __esModule: true,
    default: function Mock({ children }: { children: React.ReactNode }) {
      return <div data-testid="Mock Base">{children}</div>
    }
  }
})

jest.mock('components/ShowCase', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="Mock ShowCase"></div>
    }
  }
})

jest.mock('components/BannerSlider', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="Mock BannerSlider"></div>
    }
  }
})

describe('<Home />', () => {
  it('should render full Home', () => {
    render(<Home {...props} />)

    expect(screen.getByTestId('Mock BannerSlider')).toBeInTheDocument()
    expect(screen.getAllByTestId('Mock ShowCase')).toHaveLength(4)
  })
})

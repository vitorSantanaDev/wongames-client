import 'match-media-mock'

import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import bannerMock from 'components/BannerSlider/mock'
import gamesMock from 'components/GameCardSlider/mock'
import highlightMock from 'components/Highlight/mock'

import Home from '.'
import { HomeTemplateProps } from './types'

const props: HomeTemplateProps = {
  banners: bannerMock,
  newGames: [gamesMock[0]],
  mostPopularHighlight: highlightMock,
  mostPopularGames: [gamesMock[0]],
  upcommingGames: [gamesMock[0]],
  upcommingHighlight: highlightMock,
  upcommingMoreGames: [gamesMock[0]],
  freeGames: [gamesMock[0]],
  freeHighlight: highlightMock
}

describe('<Home />', () => {
  it('should render menu and footer', () => {
    renderWithTheme(<Home {...props} />)

    // menu
    expect(screen.getByLabelText(/open menu/i)).toBeInTheDocument()

    // footer
    expect(
      screen.getByRole('heading', { name: /contact/i })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: /follow us/i })
    ).toBeInTheDocument()

    expect(screen.getByRole('heading', { name: /links/i })).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: /location/i })
    ).toBeInTheDocument()

    expect(screen.getAllByRole('img', { name: /won games/i })).toHaveLength(2)
  })

  it('should render section news, most popular, upcomming and free games', () => {
    renderWithTheme(<Home {...props} />)

    expect(screen.getByRole('heading', { name: /news/i })).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: /most popular/i })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: /upcomming/i })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: /free games/i })
    ).toBeInTheDocument()
  })

  it('should render section elements', () => {
    renderWithTheme(<Home {...props} />)

    expect(screen.getAllByText(/defy death 1/i)).toHaveLength(1)
    expect(screen.getAllByText(/defy death 2/i)).toHaveLength(1)
    expect(screen.getAllByText(/defy death 3/i)).toHaveLength(1)

    expect(screen.getAllByText(/Population Zero/i)).toHaveLength(5)

    expect(screen.getAllByText(/Read Dead it's back/i)).toHaveLength(3)
  })
})

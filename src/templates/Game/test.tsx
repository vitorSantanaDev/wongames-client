import 'match-media-mock'

import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import galleryMock from 'components/Gallery/mock'
import gameInfosMock from 'components/GameInfo/mock'
import gameDetailsMock from 'components/GameDetails/mock'
import gamesMock from 'components/GameCardSlider/mock'
import highlightMock from 'components/Highlight/mock'
import textContentMock from 'components/TextContent/mock'

import { GameProps } from './types'

import Game from '.'

const props: GameProps = {
  cover: 'bg-image.jpg',
  gameInfo: gameInfosMock,
  details: gameDetailsMock,
  gallery: galleryMock,
  description: textContentMock.content,
  upcommingGames: gamesMock,
  recommendedGames: gamesMock,
  upcommingHighlight: highlightMock
}

jest.mock('components/Menu', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <section data-testid="Mock Menu" />
    }
  }
})

jest.mock('components/Gallery', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <section data-testid="Mock Gallery" />
    }
  }
})

jest.mock('components/GameDetails', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <section data-testid="Mock GameDetails" />
    }
  }
})

jest.mock('components/GameInfo', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <section data-testid="Mock GameInfo" />
    }
  }
})

jest.mock('components/ShowCase', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <section data-testid="Mock ShowCase" />
    }
  }
})

jest.mock('components/TextContent', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <section data-testid="Mock TextContent" />
    }
  }
})

describe('<Game />', () => {
  it('should render the template with components', () => {
    renderWithTheme(<Game {...props} />)

    const menuComponent = screen.getByTestId('Mock Menu')
    expect(menuComponent).toBeInTheDocument()

    const galleryComponent = screen.getByTestId('Mock Gallery')
    expect(galleryComponent).toBeInTheDocument()

    const gameDetailsComponent = screen.getByTestId('Mock GameDetails')
    expect(gameDetailsComponent).toBeInTheDocument()

    const gameInfoComponent = screen.getByTestId('Mock GameInfo')
    expect(gameInfoComponent).toBeInTheDocument()

    const showCaseComponent = screen.getAllByTestId('Mock ShowCase')
    expect(showCaseComponent).toHaveLength(2)

    const textContentComponent = screen.getByTestId('Mock TextContent')
    expect(textContentComponent).toBeInTheDocument()
  })

  it('should not render the gallery if no images', () => {
    renderWithTheme(<Game {...props} gallery={[]} />)

    const galleryComponent = screen.queryByTestId('Mock Gallery')
    expect(galleryComponent).not.toBeInTheDocument()
  })

  it('should not render the gallery on mobile', () => {
    renderWithTheme(<Game {...props} />)

    const galleryComponent = screen.getByTestId('Mock Gallery')

    expect(galleryComponent.parentElement?.parentElement).toHaveStyleRule(
      'display',
      'block',
      {
        media: '(min-width: 768px)'
      }
    )
  })

  it('should render the cover image', () => {
    renderWithTheme(<Game {...props} />)

    const cover = screen.getByRole('img', { name: /cover/i })

    expect(cover).toHaveStyle({
      'background-image': `url(${props.cover})`,
      height: '39.5rem'
    })

    expect(cover).toHaveStyleRule('height', '70rem', {
      media: '(min-width: 768px)'
    })

    expect(cover).toHaveStyleRule(
      'clip-path',
      'polygon(0 0,100% 0,100% 100%,0 85%)',
      {
        media: '(min-width: 768px)'
      }
    )
  })
})

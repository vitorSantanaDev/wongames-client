import 'match-media-mock'

import ShowCase from '.'

import { ShowCaseProps } from './types'

import highlightMock from 'components/Highlight/mock'
import gamesMock from 'components/GameCardSlider/mock'
import { render, screen } from 'utils/test-utils'

const props: ShowCaseProps = {
  title: 'most popular',
  highlight: highlightMock,
  games: gamesMock.slice(0, 1)
}

describe('<ShowCase />', () => {
  it('should render full ShowCase', () => {
    const { container } = render(<ShowCase {...props} />)

    const heading = screen.getByRole('heading', { name: /most popular/i })
    expect(heading).toBeInTheDocument()

    const highLightTitle = screen.getByRole('heading', {
      name: highlightMock.title
    })
    expect(highLightTitle).toBeInTheDocument()

    const gameTitle = screen.getByRole('heading', { name: gamesMock[0].title })
    expect(gameTitle).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should without title', () => {
    render(<ShowCase games={props.games} highlight={props.highlight} />)

    screen.getByRole('heading', {
      name: highlightMock.title
    })

    screen.getByRole('heading', { name: gamesMock[0].title })

    const heading = screen.queryByRole('heading', { name: props.title })
    expect(heading).not.toBeInTheDocument()
  })

  it('should without highlight', () => {
    render(<ShowCase games={props.games} title={props.title} />)

    screen.getByRole('heading', { name: gamesMock[0].title })
    screen.queryByRole('heading', { name: props.title })

    const highLightTitle = screen.queryByRole('heading', {
      name: highlightMock.title
    })
    expect(highLightTitle).not.toBeInTheDocument()
  })

  it('should without games', () => {
    render(<ShowCase highlight={props.highlight} title={props.title} />)

    screen.getByRole('heading', { name: props.title })
    screen.getByRole('heading', {
      name: highlightMock.title
    })

    const gameTitle = screen.queryByRole('heading', {
      name: gamesMock[0].title
    })

    expect(gameTitle).not.toBeInTheDocument()
  })
})

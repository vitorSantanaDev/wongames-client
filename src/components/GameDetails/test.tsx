import { GameDetailsProps } from './types'

import GameDetails from '.'

import gameDetailsMock from './mock'
import { render, screen } from 'utils/test-utils'

const props: GameDetailsProps = { ...gameDetailsMock }

describe('<GameDetails />', () => {
  it('should render the blocks', () => {
    render(<GameDetails {...props} />)

    const developerHeading = screen.getByRole('heading', { name: /developer/i })
    expect(developerHeading).toBeInTheDocument()

    const releaseDateHeading = screen.getByRole('heading', {
      name: /release Date/i
    })
    expect(releaseDateHeading).toBeInTheDocument()

    const platformsHeading = screen.getByRole('heading', {
      name: /platforms/i
    })
    expect(platformsHeading).toBeInTheDocument()

    const publisherHeading = screen.getByRole('heading', {
      name: /publisher/i
    })
    expect(publisherHeading).toBeInTheDocument()

    const ratingHeading = screen.getByRole('heading', {
      name: /rating/i
    })
    expect(ratingHeading).toBeInTheDocument()

    const gerensHeading = screen.getByRole('heading', {
      name: /gerens/i
    })
    expect(gerensHeading).toBeInTheDocument()
  })

  it('should render platform icons', () => {
    render(<GameDetails {...props} />)

    const windowsIcon = screen.getByRole('img', { name: /windows/i })
    expect(windowsIcon).toBeInTheDocument()

    const macIcon = screen.getByRole('img', { name: /mac/i })
    expect(macIcon).toBeInTheDocument()

    const linuIcon = screen.getByRole('img', { name: /linux/i })
    expect(linuIcon).toBeInTheDocument()
  })

  it('should render the formated date', () => {
    render(<GameDetails {...props} />)

    const dateText = screen.getByText('Nov 21, 2022')
    expect(dateText).toBeInTheDocument()
  })

  it('should render the developer', () => {
    render(<GameDetails {...props} />)

    const developer = screen.getByText(props.developer)
    expect(developer).toBeInTheDocument()
  })

  it('should render the publisher', () => {
    render(<GameDetails {...props} />)

    const publisher = screen.getByText(props.publisher)
    expect(publisher).toBeInTheDocument()
  })

  it('should render free rating when BR0', () => {
    render(<GameDetails {...props} />)

    const textFree = screen.getByText(/free/i)
    expect(textFree).toBeInTheDocument()
  })

  it('should render 18+ rating when BR18', () => {
    render(<GameDetails {...props} rating="BR18" />)

    const textBR18 = screen.getByText(/18\+/i)
    expect(textBR18).toBeInTheDocument()
  })

  it('should render a list of genres', () => {
    render(<GameDetails {...props} />)

    const gender = screen.getByText(/Role-playing/i)
    expect(gender).toBeInTheDocument()
  })
})

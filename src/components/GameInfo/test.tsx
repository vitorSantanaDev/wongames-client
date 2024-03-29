import 'session.mock'

import { render, screen } from 'utils/test-utils'
import GameInfo from '.'
import { GameInfoProps } from './types'

const props: GameInfoProps = {
  id: '1',
  title: 'My game title',
  price: 215.88,
  description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
}

describe('<GameInfo />', () => {
  it('should render game informations', () => {
    const { container } = render(<GameInfo {...props} />)

    const heading = screen.getByRole('heading', { name: /My game title/i })
    expect(heading).toBeInTheDocument()

    const description = screen.getByText(
      /Lorem ipsum dolor sit amet consectetur adipisicing elit./i
    )
    expect(description).toBeInTheDocument()

    const price = screen.getByText(/\$215.88/i)
    expect(price).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})

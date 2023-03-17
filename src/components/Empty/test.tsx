import { render, screen } from 'utils/test-utils'
import { EmptyProps } from './types'

import Empty from '.'

const props: EmptyProps = {
  hasLink: true,
  title: 'A simple title',
  description: 'A simple description'
}

describe('<Empty />', () => {
  it('should render correctly', () => {
    const { container } = render(<Empty {...props} />)

    const image = screen.getByRole('img', {
      name: /a gamer in a couch playing videogame/i
    })
    expect(image).toBeInTheDocument()

    const heading = screen.getByRole('heading', { name: props.title })
    expect(heading).toBeInTheDocument()

    const decription = screen.getByText(props.description)
    expect(decription).toBeInTheDocument()

    const link = screen.getByRole('link', { name: /go back to store/i })
    expect(link).toHaveAttribute('href', '/')

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should not render link when haslink is not passed', () => {
    render(<Empty {...props} hasLink={false} />)

    const link = screen.queryByRole('link', { name: /go back to store/i })
    expect(link).not.toBeInTheDocument()
  })
})

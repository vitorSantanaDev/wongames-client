import { render, screen } from 'utils/test-utils'
import Auth from '.'

describe('<Auth />', () => {
  it('should render all components and children', () => {
    const { container } = render(
      <Auth title="Auth title">
        <input type="text" />
      </Auth>
    )

    const logos = screen.getAllByRole('img', { name: /won games/i })
    expect(logos).toHaveLength(3)

    const bannerHeading = screen.getByRole('heading', {
      name: /All your favorite games in one place/i
    })
    expect(bannerHeading).toBeInTheDocument()

    const subtitle = screen.getByRole('heading', {
      name: /Won is the best and most complete gaming platform/i
    })
    expect(subtitle).toBeInTheDocument()

    const contentHeading = screen.getByRole('heading', {
      name: /Auth title/i
    })
    expect(contentHeading).toBeInTheDocument()

    const children = screen.getByRole('textbox')
    expect(children).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})

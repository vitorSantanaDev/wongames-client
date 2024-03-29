import { render, screen } from 'utils/test-utils'
import theme from 'styles/theme'

import Banner from '.'

const props = {
  img: 'https://source.unsplash.com/user/willianjusten/1042x580',
  title: 'Defy death',
  subtitle: '<p>Play the new <strong>CrashLands</strong> season',
  buttonLabel: 'Buy now',
  buttonLink: '/games/defy-death'
}

describe('<Banner />', () => {
  it('should render correctly', () => {
    const { container } = render(<Banner {...props} />)

    expect(
      screen.getByRole('heading', { name: /Defy death/i })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: /Play the new CrashLands season/i })
    ).toBeInTheDocument()
    expect(screen.getByRole('img', { name: /Defy death/i })).toBeInTheDocument()
    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render a Ribbon', () => {
    render(
      <Banner
        ribbon="My Ribbon"
        ribbonSize="small"
        ribbonColor="secondary"
        {...props}
      />
    )

    const ribbon = screen.getByText(/my ribbon/i)

    expect(ribbon).toBeInTheDocument()
    expect(ribbon).toHaveStyle({ 'background-color': theme.colors.secondary })
    expect(ribbon).toHaveStyle({
      height: '2.6rem',
      'font-size': theme.font.sizes.xsmall
    })
  })
})

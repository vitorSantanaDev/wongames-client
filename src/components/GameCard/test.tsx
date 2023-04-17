import 'session.mock'

import theme from 'styles/theme'
import { render, screen } from 'utils/test-utils'

import GameCard from '.'

const props = {
  id: '1',
  slug: 'population-zero',
  title: 'Population Zero',
  developer: 'Rockstar Games',
  image:
    'https://images.unsplash.com/photo-1555680202-c86f0e12f086?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
  price: 15
}

describe('<GameCard />', () => {
  it('should render correctly', () => {
    const { container } = render(<GameCard {...props} />)

    expect(
      screen.getByRole('heading', { name: /population zero/i })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: /rockstar games/i })
    ).toBeInTheDocument()

    expect(screen.getByRole('img', { name: props.title })).toBeInTheDocument()

    expect(screen.getByRole('img', { name: props.title })).toHaveAttribute(
      'src',
      props.image
    )

    expect(screen.getByRole('link', { name: props.title })).toHaveAttribute(
      'href',
      `/game/${props.slug}`
    )

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render price in label', () => {
    render(<GameCard {...props} />)

    const price = screen.getByText(`$${props.price}.00`)

    expect(price).not.toHaveStyle({ 'text-decoration': 'line-through' })
    expect(price).toHaveStyle({ 'background-color': theme.colors.secondary })
  })

  it('should render a line-through in price when promotional', () => {
    render(<GameCard promotionalPrice={14} {...props} />)

    const price = screen.getByText(`$${props.price}.00`)

    expect(price).toHaveStyle({ 'text-decoration': 'line-through' })
    expect(screen.getByText('$14.00')).not.toHaveStyle({
      'text-decoration': 'line-through'
    })
  })

  it('should render the promotional price than the regular price', () => {
    render(<GameCard promotionalPrice={14} {...props} />)

    const promotionalPriceIsLessThanPrice = props.price > 14

    expect(promotionalPriceIsLessThanPrice).toEqual(true)
  })

  it('should render a Ribbon', () => {
    render(
      <GameCard
        ribbonSize="small"
        ribbon="My Ribbon"
        ribbonColor="secondary"
        {...props}
      />
    )

    const ribbon = screen.getByText(/my ribbon/i)

    expect(ribbon).toBeInTheDocument()
    expect(ribbon).toHaveStyle({ height: '2.6rem', 'font-size': '1.2rem' })
    expect(ribbon).toHaveStyle({ 'background-color': theme.colors.secondary })
  })
})

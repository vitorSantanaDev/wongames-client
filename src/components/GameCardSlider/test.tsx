import 'match-media-mock'

import GameCardSlider from '.'
import { renderWithTheme } from 'utils/tests/helpers'

const items = [
  {
    slug: 'population-zero',
    title: 'Population Zero',
    developer: 'Rockstar Games',
    image: 'https://wallpaperaccess.com/full/625497.jpg',
    price: 'R$ 235,00',
    promotionalPrice: 'R$ 215,00'
  },
  {
    slug: 'population-zero',
    title: 'Population Zero',
    developer: 'Rockstar Games',
    image: 'https://wallpaper.dog/large/10801367.jpg',
    price: 'R$ 235,00',
    promotionalPrice: 'R$ 215,00'
  },
  {
    slug: 'population-zero',
    title: 'Population Zero',
    developer: 'Rockstar Games',
    image: 'https://images4.alphacoders.com/937/937844.png',
    price: 'R$ 235,00',
    promotionalPrice: 'R$ 215,00'
  },
  {
    slug: 'population-zero',
    title: 'Population Zero',
    developer: 'Rockstar Games',
    image: 'https://wallpaper.dog/large/10800384.jpg',
    price: 'R$ 235,00',
    promotionalPrice: 'R$ 215,00'
  }
]

describe('<GameCardSlider />', () => {
  it('should render with 4 active items', () => {
    const { container } = renderWithTheme(<GameCardSlider items={items} />)

    expect(container.querySelectorAll('.slick-active')).toHaveLength(4)

    expect(container.firstChild).toMatchSnapshot()
  })
})

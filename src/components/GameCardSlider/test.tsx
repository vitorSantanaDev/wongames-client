import 'match-media-mock'

import GameCardSlider from '.'
import { renderWithTheme } from 'utils/tests/helpers'

import itemsMock from './mock'

describe('<GameCardSlider />', () => {
  it('should render with 4 active items', () => {
    const { container } = renderWithTheme(<GameCardSlider items={itemsMock} />)

    expect(container.querySelectorAll('.slick-active')).toHaveLength(4)

    expect(container.firstChild).toMatchSnapshot()
  })
})

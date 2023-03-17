import 'match-media-mock'
import { render } from 'utils/test-utils'

import GameCardSlider from '.'

import itemsMock from './mock'

describe('<GameCardSlider />', () => {
  it('should render with 4 active items', () => {
    const { container } = render(<GameCardSlider items={itemsMock} />)

    expect(container.querySelectorAll('.slick-active')).toHaveLength(4)

    expect(container.firstChild).toMatchSnapshot()
  })
})

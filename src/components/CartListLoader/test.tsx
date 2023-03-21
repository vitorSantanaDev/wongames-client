import { render, screen } from 'utils/test-utils'
import CartListLoader from '.'

describe('<CartListLoader />', () => {
  it('Should render correctly', () => {
    render(<CartListLoader />)

    expect(screen.getByTitle(/loading/i)).toBeInTheDocument()
  })
})

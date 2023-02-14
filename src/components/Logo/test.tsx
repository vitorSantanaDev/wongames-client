import { screen } from '@testing-library/react'
import theme from 'styles/theme'
import { renderWithTheme } from 'utils/tests/helpers'

import Logo from '.'

describe('<Logo />', () => {
  it('should render a white label by default', () => {
    const { container } = renderWithTheme(<Logo />)
    expect(screen.getByLabelText(/won games/i).parentElement).toHaveStyle({
      color: theme.colors.white
    })
    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render the logo with logoId passed', () => {
    const { container } = renderWithTheme(<Logo logoId="my_logo_id" />)
    expect(container.querySelector('#a_my_logo_id')).toBeInTheDocument()
  })

  it('should render a black when color is passed', () => {
    renderWithTheme(<Logo color="black" />)
    expect(screen.getByLabelText(/won games/i).parentElement).toHaveStyle({
      color: theme.colors.black
    })
  })

  it('should render a bigger logo', () => {
    renderWithTheme(<Logo size="large" />)
    expect(screen.getByLabelText(/won games/i).parentElement).toHaveStyle({
      width: '20rem'
    })
  })

  it('should render a normal logo when size is default', () => {
    renderWithTheme(<Logo />)
    expect(screen.getByLabelText(/won games/i).parentElement).toHaveStyle({
      width: '11rem'
    })
  })

  it('should render a bigger logo without text if hideOnMobile', () => {
    renderWithTheme(<Logo hideOnMobile />)
    expect(screen.getByLabelText(/won games/i).parentElement).toHaveStyleRule(
      'width',
      '5.8rem',
      {
        media: '(max-width: 768px)'
      }
    )
  })
})

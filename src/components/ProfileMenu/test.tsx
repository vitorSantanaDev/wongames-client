import theme from 'styles/theme'
import { render, screen } from 'utils/test-utils'

import ProfileMenu from '.'

describe('<ProfileMenu />', () => {
  it('should render the menu', () => {
    const { container } = render(<ProfileMenu />)

    const myProfileLink = screen.getByRole('link', { name: /my profile/i })
    expect(myProfileLink).toBeInTheDocument()

    const myOrdersLink = screen.getByRole('link', { name: /my orders/i })
    expect(myOrdersLink).toBeInTheDocument()

    const signOutLink = screen.getByRole('button', { name: /sign out/i })
    expect(signOutLink).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render the menu with an active link defined', () => {
    render(<ProfileMenu activeLink="/profile/orders" />)

    const myOrdersLink = screen.getByRole('link', { name: /my orders/i })

    expect(myOrdersLink).toHaveStyle({
      'background-color': theme.colors.primary,
      color: theme.colors.white
    })
  })
})

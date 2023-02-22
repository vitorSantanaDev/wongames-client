import { screen } from '@testing-library/react'
import theme from 'styles/theme'
import { renderWithTheme } from 'utils/tests/helpers'

import ProfileMenu from '.'

describe('<ProfileMenu />', () => {
  it('should render the menu', () => {
    const { container } = renderWithTheme(<ProfileMenu />)

    const myProfileLink = screen.getByRole('link', { name: /my profile/i })
    expect(myProfileLink).toBeInTheDocument()

    const myCardsLink = screen.getByRole('link', { name: /my cards/i })
    expect(myCardsLink).toBeInTheDocument()

    const myOrdersLink = screen.getByRole('link', { name: /my orders/i })
    expect(myOrdersLink).toBeInTheDocument()

    const signOutLink = screen.getByRole('link', { name: /sign out/i })
    expect(signOutLink).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render the menu with an active link defined', () => {
    renderWithTheme(<ProfileMenu activeLink="/profile/cards" />)

    const myCardsLink = screen.getByRole('link', { name: /my cards/i })

    expect(myCardsLink).toHaveStyle({
      'background-color': theme.colors.primary,
      color: theme.colors.white
    })
  })
})

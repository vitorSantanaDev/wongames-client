import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { renderWithTheme } from 'utils/tests/helpers'

import UserDropdown from '.'
import { UserDropdownProps } from './types'

const props: UserDropdownProps = { username: 'Vitor' }

describe('<UserDropdown />', () => {
  it('should render the username', () => {
    const { container } = renderWithTheme(<UserDropdown {...props} />)

    const username = screen.getByText(props.username)
    expect(username).toBeInTheDocument()
    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render the menu', () => {
    renderWithTheme(<UserDropdown {...props} />)

    const username = screen.getByText(props.username)
    userEvent.click(username)

    const myProfileLink = screen.getByRole('link', { name: /my profile/i })
    expect(myProfileLink).toBeInTheDocument()

    const wishlistLink = screen.getByRole('link', { name: /wishlist/i })
    expect(wishlistLink).toBeInTheDocument()

    const signOutLink = screen.getByRole('link', { name: /sign out/i })
    expect(signOutLink).toBeInTheDocument()
  })
})

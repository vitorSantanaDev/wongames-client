import userEvent from '@testing-library/user-event'
import { render, screen } from 'utils/test-utils'

import UserDropdown from '.'
import { UserDropdownProps } from './types'

const props: UserDropdownProps = { username: 'Vitor' }

// eslint-disable-next-line @typescript-eslint/no-var-requires
const useRouter = jest.spyOn(require('next/router'), 'useRouter')
useRouter.mockImplementation(() => ({ push: jest.fn() }))

describe('<UserDropdown />', () => {
  it('should render the username', () => {
    const { container } = render(<UserDropdown {...props} />)

    const username = screen.getByText(props.username)
    expect(username).toBeInTheDocument()
    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render the menu', () => {
    render(<UserDropdown {...props} />)

    const username = screen.getByText(props.username)
    userEvent.click(username)

    const myProfileLink = screen.getByRole('link', { name: /my profile/i })
    expect(myProfileLink).toBeInTheDocument()

    const wishlistLink = screen.getByRole('link', { name: /wishlist/i })
    expect(wishlistLink).toBeInTheDocument()

    const signOutLink = screen.getByRole('button', { name: /sign out/i })
    expect(signOutLink).toBeInTheDocument()
  })
})

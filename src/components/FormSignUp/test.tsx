import { render, screen } from 'utils/test-utils'
import FormSignUp from '.'

describe('<FormSignUp />', () => {
  it('should render the form', () => {
    const { container } = render(<FormSignUp />)

    const inputName = screen.getByPlaceholderText(/name/i)
    expect(inputName).toBeInTheDocument()

    const inputEmail = screen.getByPlaceholderText(/email/i)
    expect(inputEmail).toBeInTheDocument()

    const inputPassword = screen.getByPlaceholderText('Password')
    expect(inputPassword).toBeInTheDocument()

    const inputConfirmPassword = screen.getByPlaceholderText('Confirm Password')
    expect(inputConfirmPassword).toBeInTheDocument()

    const submitButton = screen.getByRole('button', { name: /sign up now/i })
    expect(submitButton).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render text and link to sign in', () => {
    render(<FormSignUp />)

    const toSignInLink = screen.getByText(/Already have an account?/i)

    expect(toSignInLink).toBeInTheDocument()
    expect(toSignInLink.lastChild).toHaveAttribute('href', '/sign-in')
  })
})

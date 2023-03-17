import { render, screen } from 'utils/test-utils'
import FormSignIn from '.'

describe('<FormSignIn />', () => {
  it('should render the form', () => {
    const { container } = render(<FormSignIn />)

    const inputEmail = screen.getByPlaceholderText(/email/i)
    expect(inputEmail).toBeInTheDocument()

    const inputPassword = screen.getByPlaceholderText(/password/i)
    expect(inputPassword).toBeInTheDocument()

    const submitButton = screen.getByRole('button', { name: /sign in now/i })
    expect(submitButton).toBeInTheDocument()

    expect(container.parentElement).toMatchSnapshot()
  })

  it('should render the forgot password link', () => {
    render(<FormSignIn />)

    const forgotPasswordLink = screen.getByRole('link', {
      name: /Forgot your password?/i
    })

    expect(forgotPasswordLink).toBeInTheDocument()
  })

  it('should render the text and link to sign up', () => {
    render(<FormSignIn />)

    const toSignUpLink = screen.getByText(/Don't have an account?/i)

    expect(toSignUpLink).toBeInTheDocument()
    expect(toSignUpLink.lastChild).toHaveAttribute('href', '/sign-up')
  })
})

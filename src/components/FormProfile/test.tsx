import { render, screen } from 'utils/test-utils'
import FormProfile from '.'

describe('<FormProfile />', () => {
  it('should render the profile form', () => {
    const { container } = render(<FormProfile />)

    const heading = screen.getByRole('heading', { name: /my profile/i })
    expect(heading).toBeInTheDocument()

    const inputName = screen.getByRole('textbox', { name: /name/i })
    expect(inputName).toBeInTheDocument()

    const inputEmail = screen.getByRole('textbox', { name: /e-mail/i })
    expect(inputEmail).toBeInTheDocument()

    const saveButton = screen.getByRole('button', { name: /save/i })
    expect(saveButton).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})

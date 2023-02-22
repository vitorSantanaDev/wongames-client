import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import FormProfile from '.'

describe('<FormProfile />', () => {
  it('should render the profile form', () => {
    const { container } = renderWithTheme(<FormProfile />)

    const heading = screen.getByRole('heading', { name: /my profile/i })
    expect(heading).toBeInTheDocument()

    const inputName = screen.getByRole('textbox', { name: /name/i })
    expect(inputName).toBeInTheDocument()

    const inputEmail = screen.getByRole('textbox', { name: /e-mail/i })
    expect(inputEmail).toBeInTheDocument()

    const inputPassword = screen.getByPlaceholderText(/type your password/i)
    expect(inputPassword).toBeInTheDocument()

    const inputNewPassword = screen.getByPlaceholderText(/new password/i)
    expect(inputNewPassword).toBeInTheDocument()

    const saveButton = screen.getByRole('button', { name: /save/i })
    expect(saveButton).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})

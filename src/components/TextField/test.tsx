import { Email } from '@styled-icons/material-outlined'
import { screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { renderWithTheme } from 'utils/tests/helpers'

import TextField from '.'

describe('<TextField />', () => {
  it('should render with a label', () => {
    const { container } = renderWithTheme(
      <TextField label="My label" labelFor="Field" id="Field" />
    )

    expect(screen.getByLabelText(/My label/i)).toBeInTheDocument()
    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render without a label', () => {
    renderWithTheme(<TextField />)
    expect(screen.queryByLabelText(/My label/i)).not.toBeInTheDocument()
  })

  it('should render with placeholder', () => {
    renderWithTheme(<TextField placeholder="My placeholder" />)
    expect(screen.getByPlaceholderText('My placeholder')).toBeInTheDocument()
  })

  it('should render with icon', () => {
    renderWithTheme(
      <TextField label="My label" icon={<Email data-testid="icon" />} />
    )
    expect(screen.getByTestId('icon')).toBeInTheDocument()
  })

  it('should render with icon position left', () => {
    renderWithTheme(
      <TextField label="My label" icon={<Email data-testid="icon" />} />
    )
    expect(screen.getByTestId('icon').parentElement).toHaveStyle({ order: 0 })
  })

  it('should render with icon position right', () => {
    renderWithTheme(
      <TextField
        label="My label"
        iconPosition="right"
        icon={<Email data-testid="icon" />}
      />
    )
    expect(screen.getByTestId('icon').parentElement).toHaveStyle({ order: 1 })
  })

  it('should there must ne changes in the value whwn typing in the input', async () => {
    const onInput = jest.fn()
    renderWithTheme(
      <TextField
        onInput={onInput}
        label="My label"
        labelFor="Field"
        id="Field"
      />
    )

    const input = screen.getByRole('textbox')
    const newValue = 'This is my new value'

    userEvent.type(input, newValue)

    await waitFor(() => {
      expect(input).toHaveValue(newValue)
      expect(onInput).toHaveBeenCalledTimes(newValue.length)
    })

    expect(onInput).toHaveBeenCalledWith(newValue)
  })

  it('should must be no changes when disabled', async () => {
    const onInput = jest.fn()
    renderWithTheme(
      <TextField
        disabled
        onInput={onInput}
        label="My label"
        labelFor="Field"
        id="Field"
      />
    )

    const input = screen.getByRole('textbox')
    expect(input).toBeDisabled()
    const newValue = 'This is my new value'

    userEvent.type(input, newValue)

    await waitFor(() => {
      expect(input).not.toHaveValue(newValue)
    })

    expect(onInput).not.toHaveBeenCalled()
  })

  it('should be accessible by tab', () => {
    renderWithTheme(<TextField label="My label" labelFor="field" id="field" />)

    const input = screen.getByLabelText(/my label/i)
    expect(document.body).toHaveFocus()
    userEvent.tab()
    expect(input).toHaveFocus()
  })

  it('should not accessible when disabled', () => {
    renderWithTheme(
      <TextField label="My label" labelFor="field" id="field" disabled />
    )
    const input = screen.getByLabelText('My label')
    expect(document.body).toHaveFocus()
    userEvent.tab()
    expect(input).not.toHaveFocus()
  })

  it('should with a error message', () => {
    const { container } = renderWithTheme(
      <TextField
        icon={<Email data-testid="icon" />}
        label="My label"
        labelFor="field"
        error="Error message"
      />
    )

    expect(screen.getByText('Error message')).toBeInTheDocument()
    expect(container.firstChild).toMatchSnapshot()
  })
})

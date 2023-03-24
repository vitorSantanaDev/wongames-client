import { Email } from '@styled-icons/material-outlined'

import userEvent from '@testing-library/user-event'
import { render, screen, waitFor } from 'utils/test-utils'

import TextField from '.'

describe('<TextField />', () => {
  it('should render with a label', () => {
    const { container } = render(<TextField label="My label" name="Field" />)

    expect(screen.getByLabelText(/My label/i)).toBeInTheDocument()
    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render without a label', () => {
    render(<TextField />)
    expect(screen.queryByLabelText(/My label/i)).not.toBeInTheDocument()
  })

  it('should render with placeholder', () => {
    render(<TextField placeholder="My placeholder" />)
    expect(screen.getByPlaceholderText('My placeholder')).toBeInTheDocument()
  })

  it('should render with icon', () => {
    render(<TextField label="My label" icon={<Email data-testid="icon" />} />)
    expect(screen.getByTestId('icon')).toBeInTheDocument()
  })

  it('should render with icon position left', () => {
    render(<TextField label="My label" icon={<Email data-testid="icon" />} />)
    expect(screen.getByTestId('icon').parentElement).toHaveStyle({ order: 0 })
  })

  it('should render with icon position right', () => {
    render(
      <TextField
        label="My label"
        iconPosition="right"
        icon={<Email data-testid="icon" />}
      />
    )
    expect(screen.getByTestId('icon').parentElement).toHaveStyle({ order: 1 })
  })

  it('should there must ne changes in the value whwn typing in the input', async () => {
    const onInputChange = jest.fn()
    render(
      <TextField onInputChange={onInputChange} label="My label" name="Field" />
    )

    const input = screen.getByRole('textbox')
    const newValue = 'This is my new value'

    userEvent.type(input, newValue)

    await waitFor(() => {
      expect(input).toHaveValue(newValue)
      expect(onInputChange).toHaveBeenCalledTimes(newValue.length)
    })

    expect(onInputChange).toHaveBeenCalledWith(newValue)
  })

  it('should must be no changes when disabled', async () => {
    const onInputChange = jest.fn()
    render(
      <TextField
        disabled
        onInputChange={onInputChange}
        label="My label"
        name="Field"
      />
    )

    const input = screen.getByRole('textbox')
    expect(input).toBeDisabled()
    const newValue = 'This is my new value'

    userEvent.type(input, newValue)

    await waitFor(() => {
      expect(input).not.toHaveValue(newValue)
    })

    expect(onInputChange).not.toHaveBeenCalled()
  })

  it('should be accessible by tab', () => {
    render(<TextField label="My label" name="field" />)

    const input = screen.getByLabelText(/my label/i)
    expect(document.body).toHaveFocus()
    userEvent.tab()
    expect(input).toHaveFocus()
  })

  it('should not accessible when disabled', () => {
    render(<TextField label="My label" name="field" disabled />)
    const input = screen.getByLabelText('My label')
    expect(document.body).toHaveFocus()
    userEvent.tab()
    expect(input).not.toHaveFocus()
  })

  it('should with a error message', () => {
    const { container } = render(
      <TextField
        icon={<Email data-testid="icon" />}
        label="My label"
        name="field"
        error="Error message"
      />
    )

    expect(screen.getByText('Error message')).toBeInTheDocument()
    expect(container.firstChild).toMatchSnapshot()
  })
})

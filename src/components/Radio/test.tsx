import userEvent from '@testing-library/user-event'
import theme from 'styles/theme'
import { render, screen, waitFor } from 'utils/test-utils'

import Radio from '.'

describe('<Radio />', () => {
  it('should render the Radio input with label (white)', () => {
    const { container } = render(
      <Radio label="My label" labelFor="radio" value="AnyValue" />
    )

    const label = screen.getByText(/my label/i)

    expect(label).toBeInTheDocument()
    expect(label).toHaveStyle({ color: theme.colors.white })
    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render the Radio input with label black', () => {
    render(<Radio label="My label" labelColor="black" />)

    const label = screen.getByText(/my label/i)
    expect(label).toBeInTheDocument()
    expect(label).toHaveStyle({ color: theme.colors.black })
  })

  it('should render the Radio input without label', () => {
    render(<Radio />)

    const label = screen.queryByLabelText(/my label/i)
    expect(label).not.toBeInTheDocument()
  })

  it('should dispatch onCheck when label status changes', async () => {
    const onCheck = jest.fn()

    render(
      <Radio
        label="My label"
        labelFor="Radio"
        onCheck={onCheck}
        value="anyValue"
      />
    )

    expect(onCheck).not.toHaveBeenCalled()

    userEvent.click(screen.getByLabelText(/my label/i))

    await waitFor(() => {
      expect(onCheck).toHaveBeenCalledTimes(1)
    })

    expect(onCheck).toHaveBeenCalledWith('anyValue')
  })

  it('should be accessible with tab', () => {
    render(<Radio label="My label" labelFor="check" />)

    const radio = screen.getByLabelText(/my label/i)

    expect(document.body).toHaveFocus()

    userEvent.tab()

    expect(radio).toHaveFocus()
  })
})

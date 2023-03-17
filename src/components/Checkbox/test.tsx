import { render, screen, waitFor } from 'utils/test-utils'
import theme from 'styles/theme'

import userEvent from '@testing-library/user-event'

import Checkbox from '.'

describe('<Checkbox />', () => {
  it('should render checkbox with label', () => {
    const { container } = render(<Checkbox label="My label" labelFor="check" />)

    expect(screen.getByRole('checkbox')).toBeInTheDocument()
    expect(screen.getByLabelText(/my label/i)).toBeInTheDocument()
    expect(screen.getByText(/my label/i)).toHaveAttribute('for', 'check')

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render checkbox without label', () => {
    render(<Checkbox />)
    expect(screen.queryByLabelText(/my label/i)).not.toBeInTheDocument()
  })

  it('should render checkbox with black label', () => {
    render(<Checkbox labelColor="black" label="My label" labelFor="check" />)

    expect(screen.getByText(/my label/i)).toHaveStyle({
      color: theme.colors.black
    })
  })

  it('should dispatch onCheck when status changes', async () => {
    const onCheck = jest.fn()
    render(<Checkbox label="my label" onCheck={onCheck} />)

    expect(onCheck).not.toHaveBeenCalled()

    await userEvent.click(screen.getByRole('checkbox'))

    await waitFor(() => {
      expect(onCheck).toHaveBeenCalledTimes(1)
    })

    expect(onCheck).toHaveBeenCalledWith(true)
  })

  it('should dispatch onCheck when status changes', async () => {
    const onCheck = jest.fn()
    render(<Checkbox label="my label" onCheck={onCheck} isChecked />)

    await userEvent.click(screen.getByRole('checkbox'))

    await waitFor(() => {
      expect(onCheck).toHaveBeenCalledTimes(1)
    })

    expect(onCheck).toHaveBeenCalledWith(false)
  })

  it('should be accessible with tab', () => {
    render(<Checkbox label="my label" isChecked labelFor="my label" />)
    expect(document.body).toHaveFocus()

    userEvent.tab()

    expect(screen.getByLabelText(/my label/i)).toHaveFocus()
  })
})

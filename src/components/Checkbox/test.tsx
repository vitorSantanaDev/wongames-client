import theme from 'styles/theme'
import { screen, waitFor } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'
import userEvent from '@testing-library/user-event'

import Checkbox from '.'

describe('<Checkbox />', () => {
  it('should render checkbox with label', () => {
    const { container } = renderWithTheme(
      <Checkbox label="My label" labelFor="check" />
    )

    expect(screen.getByRole('checkbox')).toBeInTheDocument()
    expect(screen.getByLabelText(/my label/i)).toBeInTheDocument()
    expect(screen.getByText(/my label/i)).toHaveAttribute('for', 'check')

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render checkbox without label', () => {
    renderWithTheme(<Checkbox />)
    expect(screen.queryByLabelText(/my label/i)).not.toBeInTheDocument()
  })

  it('should render checkbox with black label', () => {
    renderWithTheme(
      <Checkbox labelColor="black" label="My label" labelFor="check" />
    )

    expect(screen.getByText(/my label/i)).toHaveStyle({
      color: theme.colors.black
    })
  })

  it('should dispatch onCheck when status changes', async () => {
    const onCheck = jest.fn()
    renderWithTheme(<Checkbox label="my label" onCheck={onCheck} />)

    expect(onCheck).not.toHaveBeenCalled()

    await userEvent.click(screen.getByRole('checkbox'))

    await waitFor(() => {
      expect(onCheck).toHaveBeenCalledTimes(1)
    })

    expect(onCheck).toHaveBeenCalledWith(true)
  })

  it('should dispatch onCheck when status changes', async () => {
    const onCheck = jest.fn()
    renderWithTheme(<Checkbox label="my label" onCheck={onCheck} isChecked />)

    await userEvent.click(screen.getByRole('checkbox'))

    await waitFor(() => {
      expect(onCheck).toHaveBeenCalledTimes(1)
    })

    expect(onCheck).toHaveBeenCalledWith(false)
  })

  it('should be accessible with tab', () => {
    renderWithTheme(<Checkbox label="my label" isChecked labelFor="my label" />)
    expect(document.body).toHaveFocus()

    userEvent.tab()

    expect(screen.getByLabelText(/my label/i)).toHaveFocus()
  })
})

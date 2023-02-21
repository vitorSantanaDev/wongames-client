import { screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { renderWithTheme } from 'utils/tests/helpers'

import PaymentOptions from '.'

import cardsMock from './mock'

describe('<PaymentOptions />', () => {
  it('should render the saved card options and the add new card button', () => {
    renderWithTheme(
      <PaymentOptions handlePayment={jest.fn} cards={cardsMock} />
    )

    expect(screen.getByLabelText(/3425/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/3445/i)).toBeInTheDocument()
    expect(
      screen.getByRole('button', { name: /add a new credit card/i })
    ).toBeInTheDocument()
  })

  it('should handle select card when clicking on the label', async () => {
    renderWithTheme(
      <PaymentOptions handlePayment={jest.fn} cards={cardsMock} />
    )

    const cardOption = screen.getByLabelText(/3425/i)

    userEvent.click(cardOption)

    await waitFor(() => {
      expect(screen.getByRole('radio', { name: /3425/i })).toBeChecked()
    })
  })

  it('should not call handlePayment when button is disabled', () => {
    const handlePayment = jest.fn()

    renderWithTheme(
      <PaymentOptions handlePayment={handlePayment} cards={cardsMock} />
    )

    const buyNowButton = screen.getByRole('button', { name: /buy now/i })

    userEvent.click(buyNowButton)

    expect(handlePayment).not.toHaveBeenCalled()
  })

  it('should call handlePayment when credit card is selected', async () => {
    const handlePayment = jest.fn()

    renderWithTheme(
      <PaymentOptions handlePayment={handlePayment} cards={cardsMock} />
    )

    const cardOption = screen.getByLabelText(/3425/i)

    userEvent.click(cardOption)

    const buyNowButton = screen.getByRole('button', { name: /buy now/i })

    userEvent.click(buyNowButton)

    await waitFor(() => {
      expect(handlePayment).toHaveBeenCalled()
    })
  })
})

import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import cardsMock from 'components/PaymentOptions/mock'

import { CardsListProps } from './types'

import CardsList from '.'

const props: CardsListProps = { cards: [...cardsMock] }

describe('<CardsList />', () => {
  it('should render the cards list', () => {
    const { container } = renderWithTheme(<CardsList {...props} />)

    const heading = screen.getByRole('heading', { name: /my cards/i })
    expect(heading).toBeInTheDocument()

    const cardFlag = screen.getByRole('img', { name: cardsMock[0].flag })
    expect(cardFlag).toHaveAttribute('src', cardsMock[0].image)

    const cardNumber = screen.getByText(/3445/)
    expect(cardNumber).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})

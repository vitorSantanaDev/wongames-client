import { GameItemProps, PaymentInfoProps } from './types'

import GameItem from '.'
import { render, screen } from 'utils/test-utils'

const props: GameItemProps = {
  image:
    'https://images.hdqwalls.com/download/cyberpunk-biker-gang-4k-cf-1360x768.jpg',
  price: 'R$ 215,00',
  title: 'Red Dead Redemption 2'
}

describe('<GameItem />', () => {
  it('should render the item', () => {
    const { container } = render(<GameItem {...props} />)

    const itemHeading = screen.getByRole('heading', {
      name: /Red Dead Redemption 2/i
    })
    expect(itemHeading).toBeInTheDocument()

    const itemPrice = screen.getByText('R$ 215,00')
    expect(itemPrice).toBeInTheDocument()

    const itemImage = screen.getByRole('img', {
      name: /Red Dead Redemption 2/i
    })
    expect(itemImage).toHaveAttribute('src', props.image)

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render the item with download link', () => {
    const downloadLink = 'https://link'
    render(<GameItem {...props} downloadLink={downloadLink} />)

    const link = screen.getByRole('link', { name: `Get ${props.title} here` })
    expect(link).toHaveAttribute('href', downloadLink)
  })

  it('should render the the payment info', () => {
    const paymentInfo: PaymentInfoProps = {
      flag: 'mastercard',
      image: '/img/Master.png',
      number: '**** **** **** 4326',
      purchasedDate: 'Purchased made on 07/20/2023'
    }
    render(<GameItem {...props} paymentInfo={paymentInfo} />)

    const flagImage = screen.getByRole('img', { name: paymentInfo.flag })
    expect(flagImage).toHaveAttribute('src', paymentInfo.image)

    const cardNumber = screen.getByText(paymentInfo.number)
    expect(cardNumber).toBeInTheDocument()

    const purchasedDate = screen.getByText(paymentInfo.purchasedDate)
    expect(purchasedDate).toBeInTheDocument()
  })
})

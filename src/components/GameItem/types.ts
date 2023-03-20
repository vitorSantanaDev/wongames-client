export type GameItemProps = {
  id: string
  img: string
  title: string
  price: string
  downloadLink?: string
  paymentInfo?: PaymentInfoProps
}

export type PaymentInfoProps = {
  flag: string
  image: string
  number: string
  purchasedDate: string
}

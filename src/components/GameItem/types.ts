export type GameItemProps = {
  image: string
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

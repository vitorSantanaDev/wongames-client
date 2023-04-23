export type GameItemProps = {
  id: string
  img: string
  title: string
  price: string
  downloadLink?: string
  paymentInfo?: PaymentInfoProps
}

export type PaymentInfoProps = {
  flag: string | null
  image: string | null
  number: string
  purchasedDate: string
}

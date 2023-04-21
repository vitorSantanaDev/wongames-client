import { PaymentIntent } from '@stripe/stripe-js'
import { CartItem } from 'hooks/use-cart/types'

type FetcherParams = { url: string; body: string; token: string }

const fetcher = async ({ url, token, body }: FetcherParams) => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}${url}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    },
    body
  })

  return await response.json()
}

type PaymentIntentParams = {
  token: string
  items: CartItem[]
}

export const createPaymentIntent = async ({
  token,
  items
}: PaymentIntentParams) => {
  return fetcher({
    url: `/orders/create-payment-intent`,
    body: JSON.stringify({ cart: items }),
    token
  })
}

type CreatePaymentParams = {
  items: CartItem[]
  paymentIntent?: PaymentIntent
  token: string
}

export const createPayment = async ({
  items,
  token,
  paymentIntent
}: CreatePaymentParams) => {
  return fetcher({
    url: `/orders`,
    body: JSON.stringify({
      cart: items,
      paymentIntentId: paymentIntent?.id,
      paymentMethod: paymentIntent?.payment_method
    }),
    token
  })
}

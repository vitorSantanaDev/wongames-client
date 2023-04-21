import { FormEvent, useEffect, useState } from 'react'

import { useCart } from 'hooks/use-cart'
import { PaymentFormProps } from './types'
import { FormLoading } from 'components/FormLayout'
import { createPaymentIntent } from 'utils/strapi/methods'

import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js'
import { StripeCardElementChangeEvent } from '@stripe/stripe-js'

import { ErrorOutline, ShoppingCart } from '@styled-icons/material-outlined'

import Button from 'components/Button'
import Heading from 'components/Heading'

import * as S from './styles'

const PaymentForm = ({ session }: PaymentFormProps) => {
  const { items } = useCart()

  const stripe = useStripe()
  const elements = useElements()

  const [disabled, setDisabled] = useState(true)
  const [clientSecret, setClientSecret] = useState('')
  const [freeGames, setFreeGames] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    ;(async () => {
      if (!items.length) return

      const data = await createPaymentIntent({
        items,
        token: session.jwt as string
      })

      if (data.freeGames) {
        setFreeGames(true)
        return
      }

      if (data.error) {
        setError(data.error)
        return
      }

      setFreeGames(false)
      setClientSecret(data.client_secret)
    })()
  }, [items, session])

  const handleChange = async (event: StripeCardElementChangeEvent) => {
    setDisabled(event.empty)
    setError(event.error ? event.error.message : '')
  }

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault()
    setIsLoading(true)

    const payload = await stripe!.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements!.getElement(CardElement)!
      }
    })

    if (payload.error) {
      setError(`Payment failed: ${payload.error.message}`)
      setIsLoading(false)
      return
    }

    setError(null)
    setIsLoading(false)

    console.log('Your buy was a successful')
  }

  return (
    <S.Wrapper>
      <form onSubmit={handleSubmit}>
        <S.Body>
          <Heading size="small" color="black" lineColor="primary" lineBottom>
            Payment
          </Heading>
          {freeGames ? (
            <S.FreeGames>Only free games, click buy and enjoy!</S.FreeGames>
          ) : (
            <CardElement
              onChange={handleChange}
              options={{
                hidePostalCode: true,
                style: { base: { fontSize: '16px' } }
              }}
            />
          )}

          {!!error && (
            <S.Error>
              <ErrorOutline size={20} />
              {error}
            </S.Error>
          )}
        </S.Body>
        <S.Footer>
          <Button as="a" fullWidth minimal>
            Continue shopping
          </Button>
          <Button
            type="submit"
            disabled={!freeGames && (disabled || !!error)}
            fullWidth
            icon={isLoading ? <FormLoading /> : <ShoppingCart />}
          >
            {!isLoading && <span>Buy now</span>}
          </Button>
        </S.Footer>
      </form>
    </S.Wrapper>
  )
}

export default PaymentForm
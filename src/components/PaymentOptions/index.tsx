import { useState } from 'react'
import { Add, ShoppingCart } from '@styled-icons/material-outlined'

import Radio from 'components/Radio'
import Button from 'components/Button'
import Heading from 'components/Heading'

import { PaymentOptionsProps } from './types'

import * as S from './styles'

const PaymentOptions = ({ cards, handlePayment }: PaymentOptionsProps) => {
  const [checked, setChecked] = useState(false)
  return (
    <S.Wrapper>
      <S.Body>
        <Heading size="small" color="black" lineColor="primary" lineBottom>
          Payment
        </Heading>

        <S.CardsList>
          {cards?.map((card) => (
            <S.CardItem key={card.number}>
              <S.CardInfo>
                {/*eslint-disable-next-line @next/next/no-img-element*/}
                <img src={card.image} alt={card.flag} />
                {card.number}
              </S.CardInfo>
              <Radio
                name="credit-card"
                id={card.number}
                value={card.number}
                onCheck={() => setChecked(true)}
              />
            </S.CardItem>
          ))}
          <S.AddCard role="button">
            <Add size={14} />
            Add a new credit card
          </S.AddCard>
        </S.CardsList>
      </S.Body>
      <S.Footer>
        <Button as="a" fullWidth minimal>
          Continue shopping
        </Button>
        <Button
          disabled={!checked}
          onClick={handlePayment}
          fullWidth
          icon={<ShoppingCart />}
        >
          Buy now
        </Button>
      </S.Footer>
    </S.Wrapper>
  )
}

export default PaymentOptions

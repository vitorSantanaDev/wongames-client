import { Fragment } from 'react'

import Heading from 'components/Heading'

import { CardsListProps } from './types'

import * as S from './styles'

const CardsList = ({ cards }: CardsListProps) => (
  <Fragment>
    <Heading lineBottom color="black" size="small">
      My cards
    </Heading>
    {!!cards &&
      cards.map((card) => (
        <S.Card key={card.number}>
          {/*eslint-disable-next-line @next/next/no-img-element*/}
          <img src={card.image} alt={card.flag} />
          <span>{card.number}</span>
        </S.Card>
      ))}
  </Fragment>
)

export default CardsList

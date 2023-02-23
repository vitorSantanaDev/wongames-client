import Profile from 'templates/Profile'
import CardsList from 'components/CardsList'

import { CardsListProps } from 'components/CardsList/types'

import cardsMock from 'components/PaymentOptions/mock'

export default function Cards(props: CardsListProps) {
  return (
    <Profile>
      <CardsList {...props} />
    </Profile>
  )
}

export async function getServerSideProps() {
  return {
    props: {
      cards: [...cardsMock]
    }
  }
}

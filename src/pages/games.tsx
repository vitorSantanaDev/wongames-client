import gamesMock from 'components/GameCardSlider/mock'
import filterItemsMock from 'components/ExploreSidebar/mock'

import { GamesProps } from 'templates/Games/types'

import Games from 'templates/Games'

export default function GamesPage(props: GamesProps) {
  return <Games {...props} />
}

export async function getServerSideProps() {
  return {
    props: {
      games: [...gamesMock],
      filterItems: [...filterItemsMock]
    }
  }
}

import { GetStaticProps } from 'next'

import { initializeApollo } from 'utils/apollo'
import { QUERY_HOME } from 'graphql/queries/home'
import { QueryHomeQuery, QueryHomeQueryVariables } from 'graphql/types/schema'
import { bannersMapper, gamesMapper, highlightMapper } from 'utils/mappers'

import Home from 'templates/Home'
import { HomeTemplateProps } from 'templates/Home/types'

export default function Index(props: HomeTemplateProps) {
  return <Home {...props} />
}

export const getStaticProps: GetStaticProps = async () => {
  const apolloClient = initializeApollo()

  const TODAY = new Date().toISOString().slice(0, 10)

  const {
    data: { banners, newGames, upcomingGames, freeGames, sections }
  } = await apolloClient.query<QueryHomeQuery, QueryHomeQueryVariables>({
    query: QUERY_HOME,
    variables: { date: TODAY }
  })

  const bannersData = bannersMapper(banners)

  const upcomingGamesHighlightData = highlightMapper(
    sections.upcomingGames.highlight!
  )
  const mostPopularGamesHighlightData = highlightMapper(
    sections.popularGames.highlight!
  )
  const freeGamesHighlightData = highlightMapper(sections.freeGames.highlight!)

  const newGamesData = gamesMapper(newGames)
  const freeGamesData = gamesMapper(freeGames)
  const upcomingGamesData = gamesMapper(upcomingGames)
  const mostPopularGamesData = gamesMapper(sections.popularGames.games!)

  const pageProps: HomeTemplateProps = {
    banners: bannersData,
    newGames: newGamesData,
    freeGames: freeGamesData,
    upcomingGames: upcomingGamesData,
    freeGamesHighlight: freeGamesHighlightData,
    mostPopularGames: mostPopularGamesData,
    newGamesTitle: sections.newGames.title,
    freeGamesTitle: sections.freeGames.title,
    upcomingGamesHighlight: upcomingGamesHighlightData,
    upcomingGamesTitle: sections.upcomingGames.title,
    mostPopularGamesTitle: sections.popularGames.title,
    mostPopularGamesHighlight: mostPopularGamesHighlightData
  }

  return {
    props: {
      revalidate: 10,
      ...pageProps
    }
  }
}

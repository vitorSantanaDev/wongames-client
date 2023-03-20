import { useRouter } from 'next/router'
import { GetStaticProps } from 'next'

import { initializeApollo } from 'utils/apollo'

import Game from 'templates/Game'
import { GameProps } from 'templates/Game/types'

import {
  QueryGamesQuery,
  QueryUpcomingQuery,
  QueryGameBySlugQuery,
  QueryRecommendedQuery,
  QueryGamesQueryVariables,
  QueryUpcomingQueryVariables,
  QueryGameBySlugQueryVariables
} from 'graphql/types/schema'
import { QUERY_GAMES, QUERY_GAME_BY_SLUG } from 'graphql/queries/games'
import { QUERY_RECOMMENDED } from 'graphql/queries/recommended'
import { gamesMapper, highlightMapper } from 'utils/mappers'
import { QUERY_UPCOMING } from 'graphql/queries/upcomming'

const apolloClient = initializeApollo()

export default function Index(props: GameProps) {
  const router = useRouter()

  if (router.isFallback) return null

  return <Game {...props} />
}

export async function getStaticPaths() {
  const { data } = await apolloClient.query<
    QueryGamesQuery,
    QueryGamesQueryVariables
  >({ query: QUERY_GAMES, variables: { limit: 9 } })

  const paths = data.games.map(({ slug }) => ({ params: { slug } }))

  return {
    paths,
    fallback: true
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { data: gameData } = await apolloClient.query<
    QueryGameBySlugQuery,
    QueryGameBySlugQueryVariables
  >({
    query: QUERY_GAME_BY_SLUG,
    variables: { slug: `${params?.slug}` },
    fetchPolicy: 'no-cache'
  })

  if (!gameData.games.length) return { notFound: true }

  const game = gameData.games[0]

  const { data: recommendedData } =
    await apolloClient.query<QueryRecommendedQuery>({
      query: QUERY_RECOMMENDED
    })

  const TODAY = new Date().toISOString().slice(0, 10)

  const {
    data: { upcomingGames, showCase }
  } = await apolloClient.query<QueryUpcomingQuery, QueryUpcomingQueryVariables>(
    {
      query: QUERY_UPCOMING,
      variables: { date: TODAY }
    }
  )

  return {
    revalidate: 60,
    props: {
      cover: `http://localhost:1337${game.cover?.url}`,
      gallery: game.gallery.map((image) => ({
        src: `http://localhost:1337${image.src}`,
        label: image.label
      })),
      gameInfo: {
        id: game.id,
        title: game.name,
        price: game.price,
        description: game.short_description
      },
      description: game.description,
      details: {
        developer: game.developers[0].name,
        releaseDate: game.release_date,
        platforms: game.platforms.map((platform) => platform.name),
        publisher: game.publisher?.name,
        rating: game.rating,
        genres: game.categories.map((category) => category.name)
      },
      recommendedTitle: recommendedData.recommended.section.title,
      upcomingTitle: showCase.upcomingHighlight.title,
      upcommingGames: gamesMapper(upcomingGames),
      upcommingHighlight: highlightMapper(
        showCase.upcomingHighlight.highlight!
      ),
      recommendedGames: gamesMapper(recommendedData.recommended.section.games!)
    }
  }
}

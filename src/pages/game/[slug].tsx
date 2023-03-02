import { useRouter } from 'next/router'
import { GetStaticProps } from 'next'

import { initializeApollo } from 'utils/apollo'

import Game from 'templates/Game'
import { GameProps } from 'templates/Game/types'

import gamesMock from 'components/GameCardSlider/mock'
import highlightMock from 'components/Highlight/mock'

import {
  QueryGamesQuery,
  QueryGameBySlugQuery,
  QueryGamesQueryVariables,
  QueryGameBySlugQueryVariables
} from 'graphql/generated/schema'
import { QUERY_GAMES, QUERY_GAME_BY_SLUG } from 'graphql/queries/games'

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
  const { data } = await apolloClient.query<
    QueryGameBySlugQuery,
    QueryGameBySlugQueryVariables
  >({ query: QUERY_GAME_BY_SLUG, variables: { slug: `${params?.slug}` } })

  if (!data.games.length) return { notFound: true }

  const game = data.games[0]

  return {
    props: {
      revalidate: 60,
      cover: `http://localhost:1337${game.cover?.src}`,
      gallery: game.gallery.map((image) => ({
        src: `http://localhost:1337${image.src}`,
        label: image.label
      })),
      gameInfo: {
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
      recommendedGames: [...gamesMock],
      upcommingHighlight: { ...highlightMock },
      upcommingGames: [...gamesMock]
    }
  }
}

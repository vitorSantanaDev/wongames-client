import {
  MUTATION_CREATE_WISHLIST,
  MUTATION_UPDATE_WISHLIST
} from 'graphql/mutations/wishlist'
import { QUERY_WISHLIST } from 'graphql/queries/wishlist'

const gameMock = (id: string) => ({
  id,
  name: `Sample Game ${id}`,
  slug: `sample-game-${id}`,
  price: 10.5,
  developers: [{ name: 'sample developer' }],
  cover: {
    url: '/sample-game.jpg'
  },
  __typename: 'Game'
})

export const wishlistMock = {
  request: {
    query: QUERY_WISHLIST,
    context: { session: { jwt: 'token' } },
    variables: { identifier: 'mock@email.com' }
  },
  result: {
    data: {
      wishlists: [
        {
          id: '1',
          games: [gameMock('1'), gameMock('2')]
        }
      ]
    }
  }
}

export const wishlistItems = [
  {
    id: '1',
    title: 'Sample Game 1',
    slug: 'sample-game-1',
    developer: 'sample developer',
    image: 'http://localhost:1337/sample-game.jpg',
    price: 10.5
  },
  {
    id: '2',
    title: 'Sample Game 2',
    slug: 'sample-game-2',
    developer: 'sample developer',
    image: 'http://localhost:1337/sample-game.jpg',
    price: 10.5
  },
  {
    id: '3',
    title: 'Sample Game 3',
    slug: 'sample-game-3',
    developer: 'sample developer',
    image: 'http://localhost:1337/sample-game.jpg',
    price: 10.5
  }
]

export const createWishlistMock = {
  request: {
    query: MUTATION_CREATE_WISHLIST,
    context: { session: { jwt: 'token' } },
    variables: { input: { data: { games: ['3'] } } }
  },
  result: {
    data: {
      createWishlist: {
        wishlist: {
          id: '1',
          user: {
            id: '1',
            username: 'vitorsantana'
          },
          games: [gameMock('3')]
        }
      }
    }
  }
}

export const updateWishlistMock = {
  request: {
    query: MUTATION_UPDATE_WISHLIST,
    context: { session: { jwt: 'token' } },
    variables: {
      input: { where: { id: '1' }, data: { games: ['1', '2', '3'] } }
    }
  },
  result: {
    data: {
      updateWishlist: {
        wishlist: {
          id: '1',
          user: {
            id: '1',
            username: 'vitorsantana'
          },
          games: [gameMock('1'), gameMock('2'), gameMock('3')]
        }
      }
    }
  }
}

export const removeWishlistMock = {
  request: {
    query: MUTATION_UPDATE_WISHLIST,
    context: { session: { jwt: 'token' } },
    variables: {
      input: { where: { id: '1' }, data: { games: ['2'] } }
    }
  },
  result: {
    data: {
      updateWishlist: {
        wishlist: {
          id: '1',
          user: {
            id: '1',
            username: 'vitorsantana'
          },
          games: [gameMock('2')]
        }
      }
    }
  }
}

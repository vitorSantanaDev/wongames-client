import { Banner, Game, Highlight, Order } from 'graphql/types/schema'
import {
  bannersMapper,
  gamesMapper,
  highlightMapper,
  cartItemsMapper,
  ordersMapper
} from '.'

describe('bannerMapper()', () => {
  it('should return the right format when mapped', () => {
    const banner: Banner = {
      image: { url: '/img/img.png' },
      title: 'Banner title',
      subtitle: 'Banner subtitle',
      button: {
        label: 'Buy now',
        link: '/button-link'
      },
      ribbon: {
        text: 'Ribbon Text',
        color: 'primary',
        size: 'small'
      }
    }

    expect(bannersMapper([banner])).toStrictEqual([
      {
        title: 'Banner title',
        img: `http://localhost:1337/img/img.png`,
        buttonLabel: 'Buy now',
        buttonLink: '/button-link',
        subtitle: 'Banner subtitle',
        ribbon: 'Ribbon Text',
        ribbonColor: 'primary',
        ribbonSize: 'small'
      }
    ])
  })
})

describe('gamesMapper()', () => {
  it('should return an empty array if there are no games', () => {
    expect(gamesMapper([])).toStrictEqual([])
  })

  it('should return the correct format when mapped', () => {
    const game: Game = {
      id: '1',
      name: 'game',
      developers: [
        {
          name: 'developer'
        }
      ],
      slug: 'game',
      cover: {
        url: '/image.jpg'
      },
      price: 10
    }

    expect(gamesMapper([game])).toStrictEqual([
      {
        id: '1',
        slug: 'game',
        title: 'game',
        developer: 'developer',
        image: `http://localhost:1337/image.jpg`,
        price: 10
      }
    ])
  })
})

describe('highlightMapper()', () => {
  it('should return mapped highlight', () => {
    const highlight: Highlight = {
      title: 'title',
      subtitle: 'subtitle',
      background: {
        url: '/image.jpg'
      },
      buttonLabel: 'button label',
      buttonLink: 'button link',
      alignment: 'right',
      floatImage: {
        url: '/image.jpg'
      }
    }

    expect(highlightMapper(highlight)).toStrictEqual({
      title: 'title',
      subtitle: 'subtitle',
      backgroundImage: 'http://localhost:1337/image.jpg',
      buttonLabel: 'button label',
      buttonLink: 'button link',
      alignment: 'right',
      floatImage: 'http://localhost:1337/image.jpg'
    })
  })
})

describe('cartItemsMapper()', () => {
  it('should return mapped game as a cart item', () => {
    const game: Game = {
      developers: [{ name: 'developer' }],
      id: '1',
      name: 'Game',
      price: 10,
      slug: 'game',
      cover: { url: '/img/img.png' }
    }

    expect(cartItemsMapper([game])).toStrictEqual([
      {
        id: '1',
        title: 'Game',
        price: '$10.00',
        img: `http://localhost:1337${game.cover?.url}`
      }
    ])
  })
})

describe('ordersMapper()', () => {
  it('should return empty array if no orders ', () => {
    expect(ordersMapper([])).toStrictEqual([])
  })

  it('should return mapped items', () => {
    const orders: Order[] = [
      {
        id: '1',
        card_brand: 'visa',
        card_last4: '4242',
        created_at: '2021-04-14T18:41:48.358Z',
        games: [
          {
            id: '1',
            name: 'game',
            developers: [
              {
                name: 'developer'
              }
            ],
            slug: 'game',
            cover: {
              url: '/image.jpg'
            },
            price: 10
          }
        ]
      }
    ]

    expect(ordersMapper(orders)).toStrictEqual([
      {
        id: '1',
        paymentInfo: {
          flag: 'visa',
          image: '/img/cards/visa.png',
          number: '**** **** **** 4242',
          purchaseDate: 'Purchase made on Apr 14, 2021'
        },
        games: [
          {
            id: '1',
            title: 'game',
            downloadLink:
              'https://wongames.com/game/download/yuYT56Tgh431LkjhNBgdf',
            img: 'http://localhost:1337/image.jpg',
            price: '$10.00'
          }
        ]
      }
    ])
  })

  it('should return free game when its free', () => {
    const orders: Order[] = [
      {
        id: '1',
        card_brand: null,
        card_last4: null,
        created_at: '2021-04-14T18:41:48.358Z',
        games: [
          {
            id: '1',
            name: 'game',
            developers: [
              {
                name: 'developer'
              }
            ],
            slug: 'game',
            cover: {
              url: '/image.jpg'
            },
            price: 0
          }
        ]
      }
    ]

    expect(ordersMapper(orders)).toStrictEqual([
      {
        id: '1',
        paymentInfo: {
          flag: null,
          image: null,
          number: 'Free Game',
          purchaseDate: 'Purchase made on Apr 14, 2021'
        },
        games: [
          {
            id: '1',
            title: 'game',
            downloadLink:
              'https://wongames.com/game/download/yuYT56Tgh431LkjhNBgdf',
            img: 'http://localhost:1337/image.jpg',
            price: '$0.00'
          }
        ]
      }
    ])
  })
})

import { Banner, Game, Highlight, Order } from 'graphql/types/schema'
import formatPrice from 'utils/formatPrice'
import { getImageUrl } from 'utils/getImageUrl'

export const bannersMapper = (banners: Banner[]) => {
  return banners.map((banner) => ({
    title: banner.title,
    img: `${getImageUrl(banner.image?.url)}`,
    buttonLabel: banner.button.label,
    buttonLink: banner.button.link,
    subtitle: banner.subtitle,
    ...(banner.ribbon && {
      ribbon: banner.ribbon?.text,
      ribbonColor: banner.ribbon!.color,
      ribbonSize: banner.ribbon!.size
    })
  }))
}

export const gamesMapper = (games: Game[]) => {
  return games.length
    ? games.map((game) => ({
        id: game.id,
        slug: game.slug,
        title: game.name,
        developer: game.developers[0]?.name,
        image: `${getImageUrl(game.cover?.url)}`,
        price: game.price
      }))
    : []
}

export const highlightMapper = (highlight: Highlight) => {
  return (
    highlight && {
      title: highlight.title,
      subtitle: highlight.subtitle,
      alignment: highlight.alignment,
      buttonLink: highlight.buttonLink,
      buttonLabel: highlight.buttonLabel,
      floatImage: `${getImageUrl(highlight.floatImage?.url)}`,
      backgroundImage: `${getImageUrl(highlight.background?.url)}`
    }
  )
}

export const cartItemsMapper = (games: Game[]) => {
  return games.map((game) => ({
    id: game.id,
    title: game.name,
    price: formatPrice(game.price),
    img: `${getImageUrl(game.cover?.url)}`
  }))
}

export const ordersMapper = (orders: Order[]) => {
  return orders.map((order) => ({
    id: order.id,
    paymentInfo: {
      flag: order.card_brand,
      image: order.card_brand ? `/img/cards/${order.card_brand}.png` : null,
      number: order.card_last4
        ? `**** **** **** ${order.card_last4}`
        : 'Free Game',
      purchaseDate: `Purchase made on ${new Intl.DateTimeFormat('en-US', {
        day: 'numeric',
        month: 'short',
        year: 'numeric'
      }).format(new Date(order.created_at))}`
    },
    games: order.games.map((game) => ({
      id: game.id,
      title: game.name,
      downloadLink: 'https://wongames.com/game/download/yuYT56Tgh431LkjhNBgdf',
      img: `${getImageUrl(game.cover?.url)}`,
      price: formatPrice(game.price)
    }))
  }))
}

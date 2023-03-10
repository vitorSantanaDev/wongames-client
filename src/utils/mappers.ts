import { Banner, Game, Highlight } from 'graphql/types/schema'

export const bannersMapper = (banners: Banner[]) => {
  return banners.map((banner) => ({
    title: banner.title,
    img: `http://localhost:1337${banner.image?.url}`,
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
        slug: game.slug,
        title: game.name,
        developer: game.developers[0]?.name,
        image: `http://localhost:1337${game.cover?.url}`,
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
      floatImage: `http://localhost:1337${highlight.floatImage?.url}`,
      backgroundImage: `http://localhost:1337${highlight.background?.url}`
    }
  )
}

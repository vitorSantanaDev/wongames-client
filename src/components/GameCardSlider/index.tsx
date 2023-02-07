import Slider from 'components/Slider'
import { ArrowBackIos as ArrowLeft } from '@styled-icons/material-outlined/ArrowBackIos'
import { ArrowForwardIos as ArrowRight } from '@styled-icons/material-outlined/ArrowForwardIos'

import GameCard from 'components/GameCard'

import { SliderSettings } from 'components/Slider/types'
import { GameCardSliderProps } from './types'

import * as S from './styles'

const GameCardSlider = ({ items, color = 'black' }: GameCardSliderProps) => {
  const settings: SliderSettings = {
    slidesToShow: 4,
    infinite: false,
    lazyLoad: 'ondemand',
    responsive: [
      {
        breakpoint: 1375,
        settings: {
          arrows: false,
          slidesToShow: 3.2
        }
      },
      {
        breakpoint: 1024,
        settings: {
          arrows: false,
          slidesToShow: 2.2
        }
      },
      {
        breakpoint: 570,
        settings: {
          arrows: false,
          slidesToShow: 1.2
        }
      },
      {
        breakpoint: 375,
        settings: {
          arrows: false,
          slidesToShow: 1.1
        }
      }
    ],
    nextArrow: <ArrowRight aria-label="next games" />,
    prevArrow: <ArrowLeft aria-label="previous games" />
  }

  return (
    <S.Wrapper color={color}>
      <Slider settings={settings}>
        {items.map((item, index) => (
          <GameCard key={`${item.title}-${index}`} {...item} />
        ))}
      </Slider>
    </S.Wrapper>
  )
}

export default GameCardSlider

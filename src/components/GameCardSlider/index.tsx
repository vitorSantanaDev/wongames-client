import Slider from 'components/Slider'
import { ArrowBackIos as ArrowLeft } from '@styled-icons/material-outlined/ArrowBackIos'
import { ArrowForwardIos as ArrowRight } from '@styled-icons/material-outlined/ArrowForwardIos'

import GameCard from 'components/GameCard'

import { SliderSettings } from 'components/Slider/types'
import { GameCardSliderProps } from './types'

import * as S from './styles'

const SlickButtonFix = ({
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  currentSlide,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  slideCount,
  children,
  ...props
}: // eslint-disable-next-line @typescript-eslint/no-explicit-any
any) => <span {...props}>{children}</span>

const GameCardSlider = ({ items, color = 'white' }: GameCardSliderProps) => {
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
    nextArrow: (
      <SlickButtonFix>
        <ArrowRight aria-label="next games" />
      </SlickButtonFix>
    ),
    prevArrow: (
      <SlickButtonFix>
        <ArrowLeft aria-label="previous games" />
      </SlickButtonFix>
    )
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

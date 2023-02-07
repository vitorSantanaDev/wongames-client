import Banner from 'components/Banner'
import Slider from 'components/Slider'

import { SliderSettings } from 'components/Slider/types'
import { BannerSliderProps } from './types'

import * as S from './styles'

const BannerSlider = ({ items }: BannerSliderProps) => {
  const settings: SliderSettings = {
    dots: true,
    arrows: false,
    vertical: true,
    verticalSwiping: true,
    infinite: false,
    responsive: [
      {
        breakpoint: 1170,
        settings: {
          vertical: false,
          verticalSwiping: false
        }
      }
    ]
  }
  return (
    <S.Wrapper>
      <Slider settings={settings}>
        {items.map((item, index) => (
          <Banner key={`${item.title}-${index}`} {...item} />
        ))}
      </Slider>
    </S.Wrapper>
  )
}

export default BannerSlider

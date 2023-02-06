import SlickSlider from 'react-slick'

import { SliderProps } from './types'

import * as S from './styles'

const Slider = ({ children, settings }: SliderProps) => (
  <S.Wrapper>
    <SlickSlider {...settings}>{children}</SlickSlider>
  </S.Wrapper>
)

export default Slider

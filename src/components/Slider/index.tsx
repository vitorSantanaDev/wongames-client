import { forwardRef } from 'react'
import SlickSlider from 'react-slick'

import { SliderProps } from './types'

import * as S from './styles'

const Slider: React.ForwardRefRenderFunction<SlickSlider, SliderProps> = (
  { children, settings },
  ref
) => (
  <S.Wrapper>
    <SlickSlider ref={ref} {...settings}>
      {children}
    </SlickSlider>
  </S.Wrapper>
)

export default forwardRef(Slider)

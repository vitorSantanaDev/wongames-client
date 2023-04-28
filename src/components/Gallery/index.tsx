import { useEffect, useRef, useState } from 'react'
import Slider from 'components/Slider'
import SlickSlider from 'react-slick'
import { Close as CloseIcon } from '@styled-icons/material-outlined'
import { ArrowBackIos as ArrowLeft } from '@styled-icons/material-outlined/ArrowBackIos'
import { ArrowForwardIos as ArrowRight } from '@styled-icons/material-outlined/ArrowForwardIos'

import { GalleryProps } from './types'
import { SliderSettings } from 'components/Slider/types'

import * as S from './styles'
import Image from 'next/image'

export const SlickButtonFix = ({
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  currentSlide,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  slideCount,
  children,
  ...props
}: // eslint-disable-next-line @typescript-eslint/no-explicit-any
any) => <span {...props}>{children}</span>

const commonSettings: SliderSettings = {
  arrows: true,
  infinite: false,
  lazyLoad: 'ondemand',
  nextArrow: (
    <SlickButtonFix>
      <ArrowRight aria-label="next images" />
    </SlickButtonFix>
  ),
  prevArrow: (
    <SlickButtonFix>
      <ArrowLeft aria-label="previous images" />
    </SlickButtonFix>
  )
}

const settings: SliderSettings = {
  ...commonSettings,
  slidesToShow: 4,
  responsive: [
    {
      breakpoint: 1375,
      settings: {
        arrows: false,
        slidesToShow: 3.2,
        draggable: true
      }
    },
    {
      breakpoint: 1024,
      settings: {
        arrows: false,
        slidesToShow: 2.2,
        draggable: true
      }
    },
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        slidesToShow: 2.2,
        draggable: true
      }
    }
  ]
}

const modalSettings: SliderSettings = {
  ...commonSettings,
  slidesToShow: 1
}

const Gallery = ({ items }: GalleryProps) => {
  const sliderRef = useRef<SlickSlider>(null)
  const [isOpenModal, setIsOpenModal] = useState(false)

  const handleOPenModal = (index: number) => {
    setIsOpenModal(true)
    sliderRef.current!.slickGoTo(index, true)
  }

  const handleCloseModal = () => {
    setIsOpenModal(false)
  }

  useEffect(() => {
    const handleKeyUp = ({ key }: KeyboardEvent) => {
      key === 'Escape' && setIsOpenModal(false)
    }
    window.addEventListener('keyup', handleKeyUp)
    return () => {
      window.removeEventListener('keyup', handleKeyUp)
    }
  }, [])

  return (
    <S.Wrapper>
      <Slider ref={sliderRef} settings={settings}>
        {items.map((item, index) => (
          <S.ItemWrapper key={`Thumb-${index}`}>
            <Image
              width={400}
              height={223}
              onClick={() => handleOPenModal(index)}
              role="button"
              src={item.src}
              alt={`Thumb - ${item.label}`}
            />
          </S.ItemWrapper>
        ))}
      </Slider>
      <S.Modal
        isOpen={isOpenModal}
        aria-label="modal"
        aria-hidden={!isOpenModal}
      >
        <S.CloseButton
          role="button"
          onClick={handleCloseModal}
          aria-label="close modal"
        >
          <CloseIcon size={40} />
        </S.CloseButton>
        <S.Content>
          <Slider ref={sliderRef} settings={modalSettings}>
            {items.map((item, index) => (
              <Image
                width={1200}
                height={460}
                src={item.src}
                key={`gallery-${index}`}
                alt={item.label}
              />
            ))}
          </Slider>
        </S.Content>
      </S.Modal>
    </S.Wrapper>
  )
}

export default Gallery

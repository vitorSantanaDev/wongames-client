import styled from 'styled-components'
import Slider from '.'
import { Story, Meta } from '@storybook/react'
import { Settings } from 'react-slick'
import { SliderProps } from './types'

export default {
  title: 'Slider',
  component: Slider
} as Meta

const settings: Settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1
}

const Slide = styled.div`
  width: 30rem;
  color: white;
  padding: 10rem 0;
  text-align: center;
  background-color: gray;
  border: 0.1rem solid red;
`

export const Horizontal: Story<SliderProps> = () => (
  <Slider settings={settings}>
    <Slide>1</Slide>
    <Slide>2</Slide>
    <Slide>3</Slide>
    <Slide>4</Slide>
    <Slide>5</Slide>
    <Slide>6</Slide>
    <Slide>7</Slide>
    <Slide>8</Slide>
    <Slide>9</Slide>
  </Slider>
)

const verticalSettings: Settings = {
  dots: true,
  speed: 500,
  infinite: false,
  vertical: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  verticalSwiping: true
}

export const Vertical: Story<SliderProps> = () => (
  <Slider settings={verticalSettings}>
    <Slide>1</Slide>
    <Slide>2</Slide>
    <Slide>3</Slide>
    <Slide>4</Slide>
    <Slide>5</Slide>
    <Slide>6</Slide>
    <Slide>7</Slide>
    <Slide>8</Slide>
    <Slide>9</Slide>
  </Slider>
)

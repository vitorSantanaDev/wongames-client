import Heading from 'components/Heading'
import Highlight from 'components/Highlight'
import GameCardSlider from 'components/GameCardSlider'

import { ShowCaseProps } from './types'

import * as S from './styles'

const ShowCase = ({
  title,
  games,
  highlight,
  color = 'white'
}: ShowCaseProps) => (
  <S.Wrapper>
    {!!title && (
      <Heading lineLeft lineColor="secondary">
        {title}
      </Heading>
    )}
    {!!highlight && <Highlight {...highlight} />}
    {!!games?.length && <GameCardSlider color={color} items={games} />}
  </S.Wrapper>
)

export default ShowCase

import Heading from 'components/Heading'

import { TextContentProps } from './types'

import * as S from './styles'

const TextContent = ({ title, content }: TextContentProps) => (
  <S.Wrapper>
    {!!title && (
      <Heading lineLeft lineColor="secondary">
        {title}
      </Heading>
    )}
    <section dangerouslySetInnerHTML={{ __html: content }} />
  </S.Wrapper>
)

export default TextContent

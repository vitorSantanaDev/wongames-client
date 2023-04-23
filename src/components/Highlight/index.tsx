import Button from 'components/Button'
import * as S from './styles'

import { HighlightProps } from './types'
import Image from 'next/image'

const Highlight = ({
  subtitle,
  title,
  buttonLink,
  buttonLabel,
  backgroundImage,
  floatImage,
  alignment = 'right'
}: HighlightProps) => (
  <S.Wrapper alignment={alignment}>
    <Image src={backgroundImage} alt={title} layout="fill" />
    {!!floatImage && (
      <S.FloatImageWrapper>
        <Image
          width={400}
          height={300}
          src={floatImage}
          alt={`Float image ${title}`}
        />
      </S.FloatImageWrapper>
    )}
    <S.Content>
      <S.Title>{title}</S.Title>
      <S.Subtitle>{subtitle}</S.Subtitle>
      <Button as="a" href={buttonLink}>
        {buttonLabel}
      </Button>
    </S.Content>
  </S.Wrapper>
)

export default Highlight

import Button from 'components/Button'
import Ribbon from 'components/Ribbon'
import * as S from './styles'

import { BannerProps } from './types'

const Banner = ({
  img,
  title,
  subtitle,
  buttonLink,
  buttonLabel,
  ribbon,
  ribbonSize = 'small',
  ribbonColor = 'primary'
}: BannerProps) => (
  <S.Wrapper>
    {!!ribbon && (
      <Ribbon size={ribbonSize} color={ribbonColor}>
        {ribbon}
      </Ribbon>
    )}
    <S.Image src={img} role="img" aria-label={title} />
    <S.Caption>
      <S.Title>{title}</S.Title>
      <S.Subtitle dangerouslySetInnerHTML={{ __html: subtitle }} />
      <Button as="a" href={buttonLink} size="large">
        {buttonLabel}
      </Button>
    </S.Caption>
  </S.Wrapper>
)

export default Banner

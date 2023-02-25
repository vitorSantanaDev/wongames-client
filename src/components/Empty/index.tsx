import { EmptyProps } from './types'

import * as S from './styles'
import Link from 'next/link'
import Button from 'components/Button'

const Empty = ({ title, description, hasLink }: EmptyProps) => (
  <S.Wrapper>
    <S.Image
      src="/img/empty-placeholder.svg"
      alt="A gamer in a couch playing videogame"
    />
    <S.Title>{title}</S.Title>
    <S.Description>{description}</S.Description>
    {hasLink && (
      <Link href="/" passHref>
        <Button as="a">Go back to store</Button>
      </Link>
    )}
  </S.Wrapper>
)

export default Empty

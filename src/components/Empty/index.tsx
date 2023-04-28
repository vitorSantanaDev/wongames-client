import { EmptyProps } from './types'
import Link from 'next/link'
import Button from 'components/Button'
import Image from 'next/image'

import * as S from './styles'

const Empty = ({ title, description, hasLink }: EmptyProps) => (
  <S.Wrapper>
    <Image
      width={380}
      height={285}
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

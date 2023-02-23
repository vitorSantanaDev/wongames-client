import { useRouter } from 'next/router'

import Base from 'templates/Base'
import Heading from 'components/Heading'
import ProfileMenu from 'components/ProfileMenu'

import { Container } from 'components/Container'

import { ProfileProps } from './types'
import { ActiveLinkOptions } from 'components/ProfileMenu/types'

import * as S from './styles'

const Profile = ({ children }: ProfileProps) => {
  const { asPath } = useRouter()
  const path = asPath as ActiveLinkOptions

  return (
    <Base>
      <Container>
        <Heading lineLeft lineColor="secondary">
          My profile
        </Heading>
        <S.Main>
          <ProfileMenu activeLink={path} />
          <S.Content>{children}</S.Content>
        </S.Main>
      </Container>
    </Base>
  )
}

export default Profile

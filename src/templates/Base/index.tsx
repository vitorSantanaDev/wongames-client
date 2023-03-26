import { useSession } from 'next-auth/react'
import { BaseProps } from './types'

import Menu from 'components/Menu'
import Footer from 'components/Footer'
import { Container } from 'components/Container'

import * as S from './styles'

const Base = ({ children }: BaseProps) => {
  const { data: session, status } = useSession()
  return (
    <S.Wrapper>
      <Container>
        <Menu username={session?.user?.name} loading={status === 'loading'} />
      </Container>
      <S.Content>{children}</S.Content>
      <S.SectionFooter>
        <Container>
          <Footer />
        </Container>
      </S.SectionFooter>
    </S.Wrapper>
  )
}

export default Base

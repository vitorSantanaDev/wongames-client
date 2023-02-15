import Logo from 'components/Logo'
import Heading from 'components/Heading'

import { AuthProps } from './types'

import * as S from './styles'

const Auth = ({ children, title }: AuthProps) => (
  <S.Wrapper>
    <S.BannerBlock>
      <S.BannerContent>
        <Logo logoId="banner" />
        <section>
          <Heading size="huge">All your favorite games in one place</Heading>
          <S.BannerSubtitle>
            <strong>WON</strong> is the best and most complete gaming platform.
          </S.BannerSubtitle>
        </section>
        <S.BannerFooter>
          Won Games 2020 © Todos os Direitos Reservados
        </S.BannerFooter>
      </S.BannerContent>
    </S.BannerBlock>

    <S.Content>
      <S.ContentWrapper>
        <Logo logoId="form" color="black" size="large" />
        <Heading color="black" lineColor="secondary" lineLeft>
          {title}
        </Heading>
        {children}
      </S.ContentWrapper>
    </S.Content>
  </S.Wrapper>
)

export default Auth

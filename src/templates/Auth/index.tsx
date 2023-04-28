import Link from 'next/link'
import Logo from 'components/Logo'
import Heading from 'components/Heading'
import Image from 'next/image'

import { AuthProps } from './types'

import * as S from './styles'

const Auth = ({ children, title }: AuthProps) => (
  <S.Wrapper>
    <S.BannerBlock>
      <Image
        src="/img/auth-bg.png"
        alt="Won Games Auth Page"
        layout="fill"
        objectFit="cover"
      />
      <S.BannerContent>
        <Link href="/">
          <a>
            <Logo logoId="banner" />
          </a>
        </Link>
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
        <Link href="/">
          <a>
            <Logo logoId="form" color="black" size="large" />
          </a>
        </Link>
        <Heading color="black" lineColor="secondary" lineLeft>
          {title}
        </Heading>
        {children}
      </S.ContentWrapper>
    </S.Content>
  </S.Wrapper>
)

export default Auth

import * as S from './styles'

import Logo from 'components/Logo'
import Heading from 'components/Heading'
import Link from 'next/link'

const Footer = () => (
  <S.Wrapper>
    <Logo color="black" />
    <S.Content>
      <S.Column>
        <Heading color="black" lineBottom lineColor="secondary" size="small">
          Contact
        </Heading>
        <a href="mailto:@vitorsantana.developer@gmail.com">example@gmail.com</a>
        <a href="#" target="_blank" rel="noopenner, noreferrer">
          9 0099-0099
        </a>
      </S.Column>

      <S.Column aria-labelledby="social-media">
        <Heading color="black" lineBottom lineColor="secondary" size="small">
          Follow us
        </Heading>
        <nav id="social-media">
          <a href="#" target="_blank" rel="noopenner, noreferrer">
            Instagram
          </a>
          <a href="#" target="_blank" rel="noopenner, noreferrer">
            Twitter
          </a>
          <a href="#" target="_blank" rel="noopenner, noreferrer">
            Youtube
          </a>
          <a href="#" target="_blank" rel="noopenner, noreferrer">
            Facebook
          </a>
        </nav>
      </S.Column>

      <S.Column aria-labelledby="resources">
        <Heading color="black" lineBottom lineColor="secondary" size="small">
          Links
        </Heading>
        <nav id="resources">
          <Link href="/">
            <a>Home</a>
          </Link>
          <Link href="/games">
            <a>Store</a>
          </Link>
          <Link href="/search">
            <a>Buscar</a>
          </Link>
        </nav>
      </S.Column>

      <S.Column aria-label="footer-contact">
        <Heading color="black" lineBottom lineColor="secondary" size="small">
          Location
        </Heading>
        <span>Rua 7 de Maio</span>
        <span>527 - 89020330</span>
        <span>Rio de Janeiro, Brasil</span>
      </S.Column>
    </S.Content>
    <S.Copyright>Won Games 2020 © Todos os Direitos Reservados</S.Copyright>
  </S.Wrapper>
)

export default Footer

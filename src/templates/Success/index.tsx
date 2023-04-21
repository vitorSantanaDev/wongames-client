import Base from 'templates/Base'
import { Container } from 'components/Container'
import { SuccessProps } from './types'
import ShowCase from 'components/ShowCase'
import Heading from 'components/Heading'

import * as S from './styles'
import { Done } from '@styled-icons/material-outlined'
import Link from 'next/link'

const Success = ({
  recommendedGames,
  recommendedTitle,
  recommendedHighlight
}: SuccessProps) => {
  return (
    <Base>
      <S.Wrapper>
        <Container>
          <Heading color="white" size="medium">
            Your purchase was successful!
          </Heading>
          <S.CheckMark>
            <S.Line />
            <Done />
            <S.Line />
          </S.CheckMark>
          <S.Text>
            Wait for your payment details by email. Your game is now available
            for download inside your{' '}
            <Link href="/profile/orders">
              <a>Orders List</a>
            </Link>
            . Enjoy!
          </S.Text>
        </Container>
      </S.Wrapper>
      <ShowCase
        title={recommendedTitle || 'You may like these games'}
        games={recommendedGames}
        highlight={recommendedHighlight}
      />
    </Base>
  )
}

export default Success

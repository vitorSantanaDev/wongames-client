import Button from 'components/Button'
import Heading from 'components/Heading'
import TextField from 'components/TextField'

import { FormProfileProps } from './types'

import * as S from './styles'
import Link from 'next/link'

const FormProfile = ({ email, username }: FormProfileProps) => (
  <S.Wrapper>
    <Heading lineBottom color="black" size="small">
      My profile
    </Heading>

    <S.Form>
      <TextField
        type="text"
        name="username"
        placeholder="Username"
        label="Username"
        initialValue={username}
      />
      <TextField
        disabled
        type="email"
        name="email"
        label="E-mail"
        placeholder="E-mail"
        initialValue={email}
      />
      <S.ButtonsContainer>
        <Link href={`/forgot-password?email=${email}`} passHref>
          <Button minimal size="medium" as="a">
            Reset Password
          </Button>
        </Link>
        <Button size="large">Save</Button>
      </S.ButtonsContainer>
    </S.Form>
  </S.Wrapper>
)

export default FormProfile

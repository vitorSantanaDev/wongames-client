import Link from 'next/link'
import { Email, Lock } from '@styled-icons/material-outlined'
import Button from 'components/Button'

import TextField from 'components/TextField'

import * as FormLayouts from 'components/FormLayout'
import * as S from './styles'

const FormSignIn = () => (
  <FormLayouts.Wrapper>
    <form>
      <TextField
        type="email"
        name="email"
        icon={<Email />}
        placeholder="Email"
      />
      <TextField
        type="password"
        name="password"
        icon={<Lock />}
        placeholder="Password"
      />
      <S.ForgotPassword href="#">Forgot your password?</S.ForgotPassword>
      <Button size="large" fullWidth>
        Sign in now
      </Button>
      <FormLayouts.FormExtraLink>
        {"Don't have an account? "} <Link href="/sign-up">Sign up</Link>
      </FormLayouts.FormExtraLink>
    </form>
  </FormLayouts.Wrapper>
)

export default FormSignIn

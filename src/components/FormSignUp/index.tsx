import Link from 'next/link'
import { AccountCircle, Email, Lock } from '@styled-icons/material-outlined'

import Button from 'components/Button'
import TextField from 'components/TextField'

import * as FormLayouts from 'components/FormLayout'

const FormSignUp = () => (
  <FormLayouts.Wrapper>
    <form>
      <TextField
        type="name"
        name="name"
        icon={<AccountCircle />}
        placeholder="Name"
      />
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
      <TextField
        type="password"
        name="password"
        icon={<Lock />}
        placeholder="Confirm Password"
      />

      <Button size="large" fullWidth>
        Sign up now
      </Button>
      <FormLayouts.FormExtraLink>
        Already have an account? <Link href="/sign-in">Sign in</Link>
      </FormLayouts.FormExtraLink>
    </form>
  </FormLayouts.Wrapper>
)

export default FormSignUp

import Link from 'next/link'
import { useState } from 'react'
import { useRouter } from 'next/router'
import { signIn } from 'next-auth/react'
import { Email, Lock } from '@styled-icons/material-outlined'

import Button from 'components/Button'
import TextField from 'components/TextField'

import * as FormLayouts from 'components/FormLayout'
import * as S from './styles'

const FormSignIn = () => {
  const [values, setValues] = useState({})
  const [loading, setLoading] = useState(false)
  const { push } = useRouter()

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()
    try {
      setLoading(true)
      const result = await signIn('credentials', {
        ...values,
        redirect: false,
        callbackUrl: '/'
      })

      if (result?.url) {
        return push(result.url)
      }
    } finally {
      setLoading(false)
    }
  }

  const handleInputChange = (field: string, value: string) => {
    setValues((prevState) => ({ ...prevState, [field]: value }))
  }

  return (
    <FormLayouts.Wrapper>
      <form onSubmit={handleSubmit}>
        <TextField
          type="email"
          name="email"
          icon={<Email />}
          placeholder="Email"
          onInputChange={(value) => handleInputChange('email', value)}
        />
        <TextField
          type="password"
          name="password"
          icon={<Lock />}
          placeholder="Password"
          onInputChange={(value) => handleInputChange('password', value)}
        />
        <S.ForgotPassword href="#">Forgot your password?</S.ForgotPassword>
        <Button disabled={loading} type="submit" size="large" fullWidth>
          {loading ? <FormLayouts.FormLoading /> : 'Sign in now'}
        </Button>
        <FormLayouts.FormExtraLink>
          {"Don't have an account? "} <Link href="/sign-up">Sign up</Link>
        </FormLayouts.FormExtraLink>
      </form>
    </FormLayouts.Wrapper>
  )
}

export default FormSignIn

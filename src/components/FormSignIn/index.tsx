import Link from 'next/link'
import { useState } from 'react'
import { useRouter } from 'next/router'
import { signIn } from 'next-auth/client'
import { Email, Lock, ErrorOutline } from '@styled-icons/material-outlined'

import Button from 'components/Button'
import TextField from 'components/TextField'

import { FieldErros, signInValidate } from 'utils/validations'

import * as FormLayouts from 'components/FormLayout'
import * as S from './styles'

const FormSignIn = () => {
  const [formError, setFormError] = useState('')
  const [fieldError, setFieldError] = useState<FieldErros>({})

  const [values, setValues] = useState({
    email: '',
    password: ''
  })

  const [loading, setLoading] = useState(false)
  const routes = useRouter()
  const { push, query } = routes

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()

    const erros = signInValidate(values)

    if (Object.keys(erros).length) {
      setFieldError(erros)
      setLoading(false)
      return
    }

    setFieldError({})

    setLoading(true)
    const result = await signIn('credentials', {
      ...values,
      redirect: false,
      callbackUrl: `${window.location.origin}${query?.callbackUrl || ''}`
    })

    if (result?.url) {
      return push(result.url)
    }

    setFormError('Email or password is invalid')
    setLoading(false)
  }

  const handleInputChange = (field: string, value: string) => {
    setValues((prevState) => ({ ...prevState, [field]: value }))
  }

  return (
    <FormLayouts.Wrapper>
      {!!formError && (
        <FormLayouts.FormError>
          <ErrorOutline /> {formError}
        </FormLayouts.FormError>
      )}
      <form onSubmit={handleSubmit}>
        <TextField
          type="email"
          name="email"
          icon={<Email />}
          placeholder="Email"
          error={fieldError?.email}
          onInputChange={(value) => handleInputChange('email', value)}
        />
        <TextField
          type="password"
          name="password"
          icon={<Lock />}
          placeholder="Password"
          error={fieldError?.password}
          onInputChange={(value) => handleInputChange('password', value)}
        />
        <Link href="/forgot-password" passHref>
          <S.ForgotPassword>Forgot your password?</S.ForgotPassword>
        </Link>
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

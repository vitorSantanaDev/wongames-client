import { useState } from 'react'
import { useRouter } from 'next/router'
import { signIn } from 'next-auth/client'
import { ErrorOutline, Lock } from '@styled-icons/material-outlined'

import Button from 'components/Button'
import TextField from 'components/TextField'

import { FieldErros, resetValidate } from 'utils/validations'

import * as FormLayouts from 'components/FormLayout'

const FormResetPassword = () => {
  const [formError, setFormError] = useState('')
  const [fieldError, setFieldError] = useState<FieldErros>({})

  const [values, setValues] = useState({
    password: '',
    confirm_password: ''
  })

  const [loading, setLoading] = useState(false)
  const { query } = useRouter()

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()

    const erros = resetValidate({
      password: values.password,
      confirm_password: values.confirm_password
    })

    if (Object.keys(erros).length) {
      setFieldError(erros)
      setLoading(false)
      return
    }

    setLoading(true)
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/auth/reset-password`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          code: query.code,
          password: values.password,
          passwordConfirmation: values.confirm_password
        })
      }
    )

    const data = await response.json()

    if (data.error) {
      setFormError(data.message[0].messages[0].message)
      setLoading(false)
    } else {
      signIn('credentials', {
        email: data.user.email,
        password: values.password,
        callbackUrl: '/'
      })
      setLoading(false)
    }
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
          type="password"
          name="password"
          icon={<Lock />}
          placeholder="Password"
          error={fieldError?.password}
          onInputChange={(value) => handleInputChange('password', value)}
        />
        <TextField
          type="password"
          name="confirm_password"
          icon={<Lock />}
          placeholder="Confirm Password"
          error={fieldError?.confirm_password}
          onInputChange={(value) =>
            handleInputChange('confirm_password', value)
          }
        />

        <Button disabled={loading} type="submit" size="large" fullWidth>
          {loading ? <FormLayouts.FormLoading /> : 'Reset password'}
        </Button>
      </form>
    </FormLayouts.Wrapper>
  )
}

export default FormResetPassword

import { Fragment, useState } from 'react'

import {
  Email,
  ErrorOutline,
  CheckCircleOutline
} from '@styled-icons/material-outlined'

import Button from 'components/Button'
import TextField from 'components/TextField'

import { FieldErros, forgotValidate } from 'utils/validations'

import * as FormLayouts from 'components/FormLayout'

const FormForgotPassword = () => {
  const [formError, setFormError] = useState('')
  const [fieldError, setFieldError] = useState<FieldErros>({})
  const [success, setSuccess] = useState(false)

  const [values, setValues] = useState({
    email: ''
  })

  const [loading, setLoading] = useState(false)

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()

    const erros = forgotValidate({ email: values.email })

    if (Object.keys(erros).length) {
      setFieldError(erros)
      setLoading(false)
      return
    }

    setFieldError({})

    setLoading(true)
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/auth/forgot-password`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values)
      }
    )

    const data = await response.json()
    setLoading(false)

    if (data.error) {
      setFormError(data.message[0].messages[0].message)
    } else {
      setSuccess(true)
    }
  }

  const handleInputChange = (field: string, value: string) => {
    setValues((prevState) => ({ ...prevState, [field]: value }))
  }

  return (
    <FormLayouts.Wrapper>
      {success ? (
        <FormLayouts.FormSuccess>
          <CheckCircleOutline />
          You just received an email
        </FormLayouts.FormSuccess>
      ) : (
        <Fragment>
          {!!formError && (
            <FormLayouts.FormError>
              <ErrorOutline /> {formError}
            </FormLayouts.FormError>
          )}
          <form onSubmit={handleSubmit}>
            <TextField
              type="text"
              name="email"
              icon={<Email />}
              placeholder="Email"
              error={fieldError?.email}
              onInputChange={(value) => handleInputChange('email', value)}
            />

            <Button disabled={loading} type="submit" size="large" fullWidth>
              {loading ? <FormLayouts.FormLoading /> : 'Send email'}
            </Button>
          </form>
        </Fragment>
      )}
    </FormLayouts.Wrapper>
  )
}

export default FormForgotPassword

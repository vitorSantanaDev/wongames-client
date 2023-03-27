import Link from 'next/link'
import { useState } from 'react'
import { signIn } from 'next-auth/client'
import { useMutation } from '@apollo/client'
import {
  UserRegisterInput,
  MutationResgiterMutation,
  MutationRegisterVariables
} from 'graphql/types/schema'
import {
  AccountCircle,
  Email,
  ErrorOutline,
  Lock
} from '@styled-icons/material-outlined'

import { MUTATION_REGISTER } from 'graphql/mutations/register'

import Button from 'components/Button'
import TextField from 'components/TextField'

import * as FormLayouts from 'components/FormLayout'
import { FieldErros, signUpValidate } from 'utils/validations'

const FormSignUp = () => {
  const [formError, setFormError] = useState('')
  const [fieldError, setFieldError] = useState<FieldErros>({})
  const [values, setValues] = useState<UserRegisterInput>({
    email: '',
    username: '',
    password: ''
  })

  const [createUser, { error, loading }] = useMutation<
    MutationResgiterMutation,
    MutationRegisterVariables
  >(MUTATION_REGISTER, {
    onError: (err) => {
      if (err.graphQLErrors.length)
        setFormError('Email or username already exists')
    },
    onCompleted: () => {
      !error &&
        signIn('credentials', {
          email: values.email,
          password: values.password,
          callbackUrl: '/'
        })
    }
  })

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()
    setFormError('')

    const errors = signUpValidate(values)

    if (Object.keys(errors).length) {
      setFieldError(errors)
      return
    }

    setFieldError({})

    createUser({
      variables: {
        input: {
          username: values.username,
          email: values.email,
          password: values.password
        }
      }
    })
  }

  const handleInputChange = (field: string, value: string) => {
    setValues((prevState) => ({ ...prevState, [field]: value }))
  }

  return (
    <FormLayouts.Wrapper>
      {!!formError && (
        <FormLayouts.FormError>
          <ErrorOutline />
          {formError}
        </FormLayouts.FormError>
      )}
      <form onSubmit={handleSubmit}>
        <TextField
          type="text"
          name="username"
          icon={<AccountCircle />}
          placeholder="Name"
          error={fieldError?.username}
          onInputChange={(value) => handleInputChange('username', value)}
        />
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
          {loading ? <FormLayouts.FormLoading /> : 'Sign up now'}
        </Button>
        <FormLayouts.FormExtraLink>
          Already have an account? <Link href="/sign-in">Sign in</Link>
        </FormLayouts.FormExtraLink>
      </form>
    </FormLayouts.Wrapper>
  )
}

export default FormSignUp

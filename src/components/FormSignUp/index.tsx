import Link from 'next/link'
import { useState } from 'react'
import { signIn } from 'next-auth/react'
import { useMutation } from '@apollo/client'
import {
  UserRegisterInput,
  MutationResgiterMutation,
  MutationRegisterVariables
} from 'graphql/types/schema'
import { AccountCircle, Email, Lock } from '@styled-icons/material-outlined'

import { MUTATION_REGISTER } from 'graphql/mutations/register'

import Button from 'components/Button'
import TextField from 'components/TextField'

import * as FormLayouts from 'components/FormLayout'

const FormSignUp = () => {
  const [values, setValues] = useState<UserRegisterInput>({
    email: '',
    username: '',
    password: ''
  })

  const [createUser, { error, loading }] = useMutation<
    MutationResgiterMutation,
    MutationRegisterVariables
  >(MUTATION_REGISTER, {
    onError: (err) => console.log(err),
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

    await createUser({
      variables: {
        input: {
          ...values
        }
      }
    })
  }

  const handleInputChange = (field: string, value: string) => {
    setValues((prevState) => ({ ...prevState, [field]: value }))
  }

  return (
    <FormLayouts.Wrapper>
      <form onSubmit={handleSubmit}>
        <TextField
          type="text"
          name="username"
          icon={<AccountCircle />}
          placeholder="Name"
          onInputChange={(value) => handleInputChange('username', value)}
        />
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
        <TextField
          type="password"
          name="confirm-password"
          icon={<Lock />}
          placeholder="Confirm Password"
          // onInputChange={(value) =>
          //   handleInputChange('confirm-password', value)
          // }
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

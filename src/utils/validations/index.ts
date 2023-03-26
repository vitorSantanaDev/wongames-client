import Joi from 'joi'
import { UserRegisterInput } from 'graphql/types/schema'

const fieldsValidations = {
  username: Joi.string().min(5).required(),
  email: Joi.string()
    .email({ tlds: { allow: false } })
    .required(),
  password: Joi.string().required(),
  confirm_password: Joi.string()
    .valid(Joi.ref('password'))
    .required()
    .messages({ 'any.only': 'confirm password does not match with password' })
}

function getFieldsErrors(objError: Joi.ValidationResult) {
  const errors: FieldErros = {}

  if (objError) {
    objError.error?.details.forEach((err) => {
      errors[err.path.join('.')] = err.message
    })
  }

  return errors
}

export function signUpValidate(values: UserRegisterInput) {
  const schema = Joi.object(fieldsValidations)

  return getFieldsErrors(schema.validate(values, { abortEarly: false }))
}

export type FieldErros = { [key: string]: string }

type SignInValues = Omit<UserRegisterInput, 'username'>

export function signInValidate(values: SignInValues) {
  const { email, password } = fieldsValidations

  const schema = Joi.object({ email, password })

  return getFieldsErrors(schema.validate(values, { abortEarly: false }))
}

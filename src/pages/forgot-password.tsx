import FormForgotPassword from 'components/FormForgotPassword'
import Auth from 'templates/Auth'

export default function ForgortPassword() {
  return (
    <Auth title="Request new password">
      <FormForgotPassword />
    </Auth>
  )
}

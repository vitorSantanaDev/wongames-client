import Button from 'components/Button'
import Heading from 'components/Heading'
import TextField from 'components/TextField'
import * as S from './styles'

const FormProfile = () => (
  <S.Wrapper>
    <Heading lineBottom color="black" size="small">
      My profile
    </Heading>

    <S.Form>
      <TextField
        name="name"
        placeholder="Name"
        label="Name"
        initialValue="Jhon Doe"
      />
      <TextField
        disabled
        type="email"
        name="email"
        label="E-mail"
        placeholder="E-mail"
        initialValue="jhondoe@gamil.com"
      />
      <TextField
        disabled
        type="password"
        name="password"
        label="Password"
        placeholder="Type Your Password"
        initialValue="jhondoe@gamil.com"
      />
      <TextField
        disabled
        type="password"
        name="new_password"
        label="New Password"
        placeholder="New Password"
        initialValue="jhondoe@gamil.com"
      />
      <Button size="large">Save</Button>
    </S.Form>
  </S.Wrapper>
)

export default FormProfile

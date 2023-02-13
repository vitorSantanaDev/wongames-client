import { useState } from 'react'
import * as S from './styles'

import { TextFieldProps } from './types'

const TextField = ({
  icon,
  label,
  error,
  onInput,
  labelFor = '',
  disabled = false,
  initialValue = '',
  iconPosition = 'left',
  ...props
}: TextFieldProps) => {
  const [value, setValue] = useState(initialValue)

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.currentTarget.value
    setValue(newValue)

    !!onInput && onInput(newValue)
  }

  return (
    <S.Wrapper disabled={disabled} error={!!error}>
      {!!label && <S.Label htmlFor={labelFor}>{label}</S.Label>}
      <S.InputWrapper>
        {!!icon && <S.Icon iconPosition={iconPosition}>{icon}</S.Icon>}
        <S.Input
          type="text"
          value={value}
          disabled={disabled}
          onChange={handleChange}
          iconPosition={iconPosition}
          {...props}
        />
      </S.InputWrapper>
      {!!error && <S.Error>{error}</S.Error>}
    </S.Wrapper>
  )
}

export default TextField

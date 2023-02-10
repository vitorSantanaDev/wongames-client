import { useState } from 'react'
import * as S from './styles'

import { CheckboxProps } from './types'

const Checkbox = ({
  label,
  value,
  onCheck,
  labelFor = '',
  isChecked = false,
  labelColor = 'white',
  ...props
}: CheckboxProps) => {
  const [checked, setChecked] = useState(!!isChecked)

  const handleChange = () => {
    const status = !checked
    setChecked(status)
    !!onCheck && onCheck(status)
  }

  return (
    <S.Wrapper>
      <S.Input
        id={labelFor}
        value={value}
        type="checkbox"
        checked={checked}
        onChange={handleChange}
        {...props}
      />
      {!!label && (
        <S.Label labelColor={labelColor} htmlFor={labelFor}>
          {label}
        </S.Label>
      )}
    </S.Wrapper>
  )
}

export default Checkbox

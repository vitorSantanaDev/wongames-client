import * as S from './styles'

import { RadioProps } from './types'

const Radio = ({
  label,
  value,
  onCheck,
  labelFor = '',
  labelColor = 'white',
  ...props
}: RadioProps) => {
  const handleChange = () => {
    !!onCheck && onCheck(value)
  }

  return (
    <S.Wrapper>
      <S.Input
        id={labelFor}
        type="radio"
        value={value}
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

export default Radio

import { useState } from 'react'
import { DropdownProps } from './types'

import * as S from './styles'

const Dropdown = ({ title, children }: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(false)

  const handleOpenDropdown = () => setIsOpen((prevState) => !prevState)

  return (
    <S.Wrapper isOpen={isOpen}>
      <S.Title onClick={handleOpenDropdown}>{title}</S.Title>
      <S.Content aria-hidden={!isOpen}>{children}</S.Content>
    </S.Wrapper>
  )
}
export default Dropdown

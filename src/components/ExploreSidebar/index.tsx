import { useEffect, useState } from 'react'
import xor from 'lodash.xor'
import { Close, FilterList } from '@styled-icons/material-outlined'

import Radio from 'components/Radio'
import Button from 'components/Button'
import Heading from 'components/Heading'
import Checkbox from 'components/Checkbox'

import { ExploreSidebarProps } from './types'

import * as S from './styles'

const ExploreSidebar = ({
  items,
  onFilter,
  initialValues = {}
}: ExploreSidebarProps) => {
  const [values, setValues] = useState(initialValues)
  const [isOpen, setIsOpen] = useState(false)

  const handleChangeRadioValues = (name: string, value: boolean | string) => {
    setValues((prevState) => ({ ...prevState, [name]: value }))
  }

  const handleChangeCheckboxValues = (name: string, value: string) => {
    const currentList = (values[name] as []) || []
    setValues((prevState) => ({
      ...prevState,
      [name]: xor(currentList, [value])
    }))
  }

  const handleOpenFiltersMenu = () => {
    setIsOpen(false)
  }

  useEffect(() => {
    onFilter(values)
    /**
     * @description This method comes from another template, so we don't have total control
     **/
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [values])

  return (
    <S.Wrapper isOpen={isOpen}>
      <S.Overlay aria-label="modal" aria-hidden={isOpen} />
      <S.IconWrapper>
        <FilterList aria-label="open filters" onClick={() => setIsOpen(true)} />
        <Close aria-label="close filters" onClick={() => setIsOpen(false)} />
      </S.IconWrapper>
      <S.Content>
        {items.map((item) => (
          <S.Items key={item.name}>
            <Heading lineBottom lineColor="secondary" size="small">
              {item.title}
            </Heading>
            {item.type === 'checkbox' &&
              item.fields.map((field) => (
                <Checkbox
                  key={field.name}
                  name={field.name}
                  label={field.label}
                  labelFor={field.name}
                  isChecked={(values[item.name] as string[])?.includes(
                    field.name
                  )}
                  onCheck={() =>
                    handleChangeCheckboxValues(item.name, field.name)
                  }
                />
              ))}

            {item.type === 'radio' &&
              item.fields.map((field) => (
                <Radio
                  key={field.name}
                  id={field.name}
                  name={item.name}
                  value={field.name}
                  label={field.label}
                  labelFor={field.name}
                  defaultChecked={
                    String(field.name) === String(values[item.name])
                  }
                  onChange={() =>
                    handleChangeRadioValues(item.name, field.name)
                  }
                />
              ))}
          </S.Items>
        ))}
      </S.Content>
      <S.Footer>
        <Button fullWidth size="medium" onClick={handleOpenFiltersMenu}>
          Filter
        </Button>
      </S.Footer>
    </S.Wrapper>
  )
}
export default ExploreSidebar

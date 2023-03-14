import { ParsedUrlQueryInput } from 'querystring'

export type ExploreSidebarProps = {
  items: ItemProps[]
  initialValues?: Values
  onFilter: (values: Values) => void
}

export type Values = ParsedUrlQueryInput

export type ItemProps = {
  title: string
  name: string
  type: string
  fields: Field[]
}

export type Field = { label: string; name: string }

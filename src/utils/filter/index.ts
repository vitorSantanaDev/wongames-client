import { ItemProps } from 'components/ExploreSidebar/types'
import { ParsedUrlQueryInput } from 'querystring'

export type ParceArgs = {
  queryString: ParsedUrlQueryInput
  filterItems: Pick<ItemProps, 'type' | 'name'>[]
}

export const parseQueryStringToWhere = ({
  queryString,
  filterItems
}: ParceArgs) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const object: any = {}

  Object.keys(queryString)
    .filter((item) => item !== 'sort')
    .forEach((key) => {
      const item = filterItems.find((item) => item.name === key)
      const isCheckbox = item?.type === 'checkbox'

      object[key] = !isCheckbox
        ? queryString[key]
        : { name_contains: queryString[key] }
    })

  return object
}

export const parseQueryStringToFilter = ({
  queryString,
  filterItems
}: ParceArgs) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const object: any = {}

  Object.keys(queryString).forEach((key) => {
    const item = filterItems.find((item) => item.name === key)
    const isCheckbox = item?.type === 'checkbox'
    const isArray = Array.isArray(queryString[key])

    object[key] = !isArray && isCheckbox ? [queryString[key]] : queryString[key]
  })

  return object
}

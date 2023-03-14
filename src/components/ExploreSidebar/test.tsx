import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { css } from 'styled-components'
import { Overlay } from './styles'

import { renderWithTheme } from 'utils/tests/helpers'

import { ExploreSidebarProps } from './types'

import ExploreSidebar from '.'

import itemsMock from './mock'

const props: ExploreSidebarProps = {
  items: [...itemsMock],
  onFilter: jest.fn
}

describe('<ExploreSidebar />', () => {
  it('should render the headings  ', () => {
    const { container } = renderWithTheme(<ExploreSidebar {...props} />)

    const priceHeading = screen.getByRole('heading', { name: /price/i })
    expect(priceHeading).toBeInTheDocument()

    const sortByHeading = screen.getByRole('heading', { name: /sort by/i })
    expect(sortByHeading).toBeInTheDocument()

    const systemHeading = screen.getByRole('heading', { name: /platforms/i })
    expect(systemHeading).toBeInTheDocument()

    const genreHeading = screen.getByRole('heading', { name: /genre/i })
    expect(genreHeading).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render inputs', () => {
    renderWithTheme(<ExploreSidebar {...props} />)

    const under50Checkbox = screen.getByRole('checkbox', {
      name: /under \$50/i
    })
    expect(under50Checkbox).toBeInTheDocument()

    const lowToHighRadio = screen.getByRole('radio', {
      name: /low to high/i
    })
    expect(lowToHighRadio).toBeInTheDocument()
  })

  it('should render the filter button', () => {
    renderWithTheme(<ExploreSidebar {...props} />)

    const filterButton = screen.getByRole('button', { name: /filter/i })
    expect(filterButton).toBeInTheDocument()
  })

  it('should check initial values are passed', () => {
    renderWithTheme(
      <ExploreSidebar
        {...props}
        initialValues={{
          platforms: ['windows'],
          sort_by: 'low-to-high'
        }}
      />
    )

    const windowsCheckbox = screen.getByRole('checkbox', {
      name: /windows/i
    })
    expect(windowsCheckbox).toBeChecked()

    const lowToHighRadio = screen.getByRole('radio', {
      name: /low to high/i
    })
    expect(lowToHighRadio).toBeChecked()
  })

  it('should filter with initial values', () => {
    const onFilter = jest.fn()
    renderWithTheme(
      <ExploreSidebar
        {...props}
        onFilter={onFilter}
        initialValues={{
          platforms: ['windows'],
          sort_by: 'low-to-high'
        }}
      />
    )

    expect(onFilter).toBeCalledWith({
      platforms: ['windows'],
      sort_by: 'low-to-high'
    })
  })

  it('should render filter with checked values', () => {
    const onFilter = jest.fn()
    renderWithTheme(<ExploreSidebar {...props} onFilter={onFilter} />)

    const filterButton = screen.getByRole('button', { name: /filter/i })
    const windowsCheckbox = screen.getByRole('checkbox', {
      name: /windows/i
    })
    const lowToHighRadio = screen.getByRole('radio', {
      name: /low to high/i
    })

    userEvent.click(windowsCheckbox)
    userEvent.click(lowToHighRadio)
    userEvent.click(filterButton)

    expect(onFilter).toHaveBeenCalledTimes(3)

    expect(onFilter).toBeCalledWith({
      platforms: ['windows'],
      sort_by: 'low-to-high'
    })
  })

  it('should altern between radio options', () => {
    const onFilter = jest.fn()
    renderWithTheme(<ExploreSidebar {...props} onFilter={onFilter} />)

    const highToLowRadio = screen.getByRole('radio', {
      name: /high to low/i
    })
    const lowToHighRadio = screen.getByRole('radio', {
      name: /low to high/i
    })

    userEvent.click(lowToHighRadio)
    userEvent.click(highToLowRadio)

    expect(onFilter).toBeCalledWith({ sort_by: 'high-to-low' })
  })

  it('should open/close sidebar when filtering on mobile ', () => {
    const { container } = renderWithTheme(<ExploreSidebar {...props} />)

    const variant = {
      media: '(max-width: 768px)',
      modifier: String(css`
        ${Overlay}
      `)
        .replace(',', '')
        .replace(',', '')
    }

    const Element = container.firstChild

    const openFiltersButton = screen.getByLabelText(/open filters/i)
    const closeFiltersButton = screen.getByLabelText(/close filters/i)

    expect(Element).not.toHaveStyleRule('opacity', '1', variant)

    userEvent.click(openFiltersButton)

    expect(Element).toHaveStyleRule('opacity', '1', variant)

    userEvent.click(closeFiltersButton)

    expect(Element).not.toHaveStyleRule('opacity', '1', variant)

    userEvent.click(openFiltersButton)

    const filtersMenuButton = screen.getByRole('button', { name: /filter/i })

    userEvent.click(filtersMenuButton)

    expect(Element).not.toHaveStyleRule('opacity', '1', variant)
  })
})

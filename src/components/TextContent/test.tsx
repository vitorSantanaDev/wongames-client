import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'
import theme from 'styles/theme'

import TextContent from '.'

import { TextContentProps } from './types'

import textContentMock from './mock'

const props: TextContentProps = { ...textContentMock }

describe('<TextContent />', () => {
  it('should render the title and content', () => {
    renderWithTheme(<TextContent {...props} />)

    const title = screen.getByRole('heading', { name: /description/i })
    expect(title).toBeInTheDocument()

    const text = screen.getByText('Lorem ipsum dolor sit.')
    expect(text).toBeInTheDocument()
  })

  it('should render without title', () => {
    renderWithTheme(<TextContent content={props.content} />)

    const title = screen.queryByRole('heading', { name: /description/i })
    expect(title).not.toBeInTheDocument()
  })

  it('should render color changes', () => {
    renderWithTheme(<TextContent {...props} />)

    const wrapper = screen.getByRole('heading', {
      name: /description/i
    }).parentElement

    expect(wrapper).toHaveStyle({ color: theme.colors.white })
    expect(wrapper).toHaveStyleRule('color', theme.colors.black, {
      media: '(min-width: 768px)'
    })
  })
})

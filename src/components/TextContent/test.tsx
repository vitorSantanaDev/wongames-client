import theme from 'styles/theme'

import TextContent from '.'

import { TextContentProps } from './types'

import textContentMock from './mock'
import { render, screen } from 'utils/test-utils'

const props: TextContentProps = { ...textContentMock }

describe('<TextContent />', () => {
  it('should render the title and content', () => {
    render(<TextContent {...props} />)

    const title = screen.getByRole('heading', { name: /description/i })
    expect(title).toBeInTheDocument()

    const text = screen.getByText('Lorem ipsum dolor sit.')
    expect(text).toBeInTheDocument()
  })

  it('should render without title', () => {
    render(<TextContent content={props.content} />)

    const title = screen.queryByRole('heading', { name: /description/i })
    expect(title).not.toBeInTheDocument()
  })

  it('should render color changes', () => {
    render(<TextContent {...props} />)

    const wrapper = screen.getByRole('heading', {
      name: /description/i
    }).parentElement

    expect(wrapper).toHaveStyle({ color: theme.colors.white })
    expect(wrapper).toHaveStyleRule('color', theme.colors.black, {
      media: '(min-width: 768px)'
    })
  })
})

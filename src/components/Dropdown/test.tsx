import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { renderWithTheme } from 'utils/tests/helpers'

import Dropdown from '.'

describe('<Dropdown />', () => {
  beforeEach(() => {
    const title = <h1 aria-label="toggle dropdown">click here</h1>
    renderWithTheme(
      <Dropdown title={title}>
        <span>content</span>
      </Dropdown>
    )
  })

  afterAll(() => {
    const title = <h1 aria-label="toggle dropdown">click here</h1>
    const { container } = renderWithTheme(
      <Dropdown title={title}>
        <span>content</span>
      </Dropdown>
    )

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render the title', () => {
    const heading = screen.getByLabelText(/toggle dropdown/)
    expect(heading).toBeInTheDocument()
  })

  it('should handle open/close dropdwon', () => {
    const heading = screen.getByLabelText(/toggle dropdown/)
    const content = screen.getByText(/content/).parentElement

    expect(content).toHaveStyle({ opacity: 0 })
    expect(content?.getAttribute('aria-hidden')).toBe('true')

    userEvent.click(heading)

    expect(content).toHaveStyle({ opacity: 1 })
    expect(content?.getAttribute('aria-hidden')).toBe('false')
  })

  it('should handle open/close dropdwon when clicking on overlay', () => {
    const heading = screen.getByLabelText(/toggle dropdown/)
    const content = screen.getByText(/content/).parentElement
    const overlay = content!.nextElementSibling

    expect(content).toHaveStyle({ opacity: 0 })
    expect(content?.getAttribute('aria-hidden')).toBe('true')

    userEvent.click(heading)

    expect(overlay).toHaveStyle({ opacity: 1 })
    expect(overlay!.getAttribute('aria-hidden')).toBe('false')

    userEvent.click(overlay!)

    expect(overlay).toHaveStyle({ opacity: 0 })
    expect(overlay!.getAttribute('aria-hidden')).toBe('true')
  })
})

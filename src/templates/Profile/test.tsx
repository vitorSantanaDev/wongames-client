import { ReactNode } from 'react'
import { render, screen } from 'utils/test-utils'

import Profile from '.'

jest.mock('next/router', () => ({
  useRouter: jest.fn(() => ({ asPath: '/profile/me' }))
}))

jest.mock('templates/Base', () => ({
  __esModule: true,
  default: function Mock({ children }: { children: ReactNode }) {
    return <div data-testid="Mock Base">{children}</div>
  }
}))

jest.mock('components/Heading', () => ({
  __esModule: true,
  default: function Mock({ children }: { children: ReactNode }) {
    return <div data-testid="Mock Heading">{children}</div>
  }
}))

jest.mock('components/ProfileMenu', () => ({
  __esModule: true,
  default: function Mock() {
    return <div data-testid="Mock ProfileMenu" />
  }
}))

describe('<Profile />', () => {
  it('should render the Profile template', () => {
    render(<Profile>Profile template</Profile>)

    const baseTemplate = screen.getByTestId('Mock Base')
    expect(baseTemplate).toBeInTheDocument()

    const headingComponent = screen.getByTestId('Mock Heading')
    expect(headingComponent).toBeInTheDocument()

    const profileMenuComponent = screen.getByTestId('Mock ProfileMenu')
    expect(profileMenuComponent).toBeInTheDocument()

    const profileTemplateChildren = screen.getByText(/profile template/i)
    expect(profileTemplateChildren).toBeInTheDocument()
  })
})

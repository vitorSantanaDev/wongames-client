import { Fragment } from 'react'
import { render, screen } from 'utils/test-utils'

import MediaMatch from '.'

describe('<MediaMatch />', () => {
  let deskTopHeading: Element
  let mobileHeading: Element

  beforeEach(() => {
    render(
      <Fragment>
        <MediaMatch greaterThan="medium">
          <h1 data-testid="desktop">Desk top</h1>
        </MediaMatch>
        <MediaMatch lessThan="medium">
          <h1 data-testid="mobile">Mobile</h1>
        </MediaMatch>
      </Fragment>
    )

    deskTopHeading = screen.getByTestId('desktop')
    mobileHeading = screen.getByTestId('mobile')
  })

  it('should be hidden if no media query is passed', () => {
    expect(deskTopHeading.parentElement).toHaveStyleRule('display', 'none')
    expect(mobileHeading.parentElement).toHaveStyleRule('display', 'none')
  })

  it('should show or hide based on the media passed', () => {
    expect(deskTopHeading.parentElement).toHaveStyleRule('display', 'block', {
      media: '(min-width: 768px)'
    })
    expect(mobileHeading.parentElement).toHaveStyleRule('display', 'block', {
      media: '(max-width: 768px)'
    })
  })
})

import { renderWithTheme } from 'utils/tests/helpers'

import theme from 'styles/theme'

import { Container } from '.'

describe('<Container />', () => {
  it('should render the heading', () => {
    const { container } = renderWithTheme(
      <Container>
        <span>Won games</span>
      </Container>
    )

    expect(container.firstChild).toHaveStyleRule(
      'max-width',
      theme.grid.container
    )

    expect(container.firstChild).toMatchInlineSnapshot(`
      .c0 {
        width: 100%;
        margin-left: auto;
        margin-right: auto;
        padding-left: calc(3.2rem / 2);
        padding-right: calc(3.2rem / 2);
        max-width: 130rem;
      }

      <div
        class="c0"
      >
        <span>
          Won games
        </span>
      </div>
    `)
  })
})

import { renderWithTheme } from 'utils/tests/helpers'

import { Grid } from '.'

describe('<Grid />', () => {
  it('should render the correctly', () => {
    const { container } = renderWithTheme(
      <Grid>
        <h1>Children 1</h1>
        <h1>Children 2</h1>
      </Grid>
    )

    expect(container.firstChild).toMatchInlineSnapshot(`
      .c0 {
        display: grid;
        grid-gap: 3.2rem;
        margin: 3.2rem 0;
        grid-template-columns: repeat(auto-fill,minmax(25rem,1fr));
      }

      <div
        class="c0"
      >
        <h1>
          Children 1
        </h1>
        <h1>
          Children 2
        </h1>
      </div>
    `)
  })
})

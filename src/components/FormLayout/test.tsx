import { renderWithTheme } from 'utils/tests/helpers'

import * as FormLayouts from '.'

describe('<FormLayout />', () => {
  it('should render the heading', () => {
    const { container } = renderWithTheme(
      <FormLayouts.Wrapper>
        <FormLayouts.FormExtraLink>
          My nice <a href="">Link</a>
        </FormLayouts.FormExtraLink>
      </FormLayouts.Wrapper>
    )

    expect(container.firstChild).toMatchInlineSnapshot(`
      .c0 {
        text-align: center;
        color: #030517;
        font-size: 1.4rem;
      }

      .c0 a {
        -webkit-text-decoration: none;
        text-decoration: none;
        color: #3CD3C1;
        -webkit-transition: color,border,0.1s ease-in-out;
        transition: color,border,0.1s ease-in-out;
        border-bottom: 0.1rem solid #3CD3C1;
      }

      .c0 a:hover {
        color: #29b3a3;
        border-bottom: 0.1rem solid #29b3a3;
      }

      <div
        class=""
      >
        <div
          class="c0"
        >
          My nice 
          <a
            href=""
          >
            Link
          </a>
        </div>
      </div>
    `)
  })
})

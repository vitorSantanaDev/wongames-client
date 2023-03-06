import { renderWithTheme } from 'utils/tests/helpers'

import Loading from '.'

describe('<Loading />', () => {
  it('should render Loading correctly', () => {
    const { container } = renderWithTheme(<Loading />)
    expect(container.firstChild).toMatchInlineSnapshot(`
      .c0 {
        display: inline-block;
        width: 50px;
        height: 50px;
        border: 3px solid #8F8F8F;
        border-radius: 50%;
        border-top-color: #F231A5;
        -webkit-animation: ixZrDe 1s ease-in-out infinite;
        animation: ixZrDe 1s ease-in-out infinite;
        -webkit-animation: ixZrDe 1s ease-in-out infinite;
      }

      <div
        class="c0"
      />
    `)
  })
})

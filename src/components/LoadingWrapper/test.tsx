import { render, screen } from 'utils/test-utils'
import { LoadingWrapper } from '.'

describe('<LoadingWrapper />', () => {
  it('should render the chidlren', () => {
    const { container } = render(
      <LoadingWrapper>
        <h1 data-testid="loading">Loading...</h1>
      </LoadingWrapper>
    )

    const loading = screen.getByTestId(/loading/i)

    expect(loading).toBeInTheDocument()

    expect(container.firstChild).toMatchInlineSnapshot(`
      .c0 {
        height: 60vh;
        width: 100%;
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-align-items: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        -webkit-box-pack: center;
        -webkit-justify-content: center;
        -ms-flex-pack: center;
        justify-content: center;
      }

      <div
        class="c0"
      >
        <h1
          data-testid="loading"
        >
          Loading...
        </h1>
      </div>
    `)
  })
})

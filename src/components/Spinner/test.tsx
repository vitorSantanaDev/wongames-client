import { render, screen } from 'utils/test-utils'
import Spinner from '.'

describe('<Spinner />', () => {
  it('Should render correctly', () => {
    const { container } = render(<Spinner />)

    expect(screen.getByTitle(/loading/i)).toBeInTheDocument()
    expect(container.firstChild).toMatchInlineSnapshot(`
      .c0 {
        stroke: #F231A5;
        padding: 0.1rem;
        margin: 0.2rem;
      }

      <svg
        class="c0"
        height="38"
        stroke="#F231A5"
        viewBox="-3 -3 42 42"
        width="38"
        xmlns="http://www.w3.org/2000/svg"
      >
        <title>
          Loading...
        </title>
        <g
          fill="none"
          fill-rule="evenodd"
        >
          <g
            stroke-width="3"
            transform="translate(1 1)"
          >
            <circle
              cx="18"
              cy="18"
              r="18"
              stroke-opacity=".2"
            />
            <path
              d="M36 18c0-9.94-8.06-18-18-18"
            >
              <animatetransform
                attributeName="transform"
                dur="1s"
                from="0 18 18"
                repeatCount="indefinite"
                to="360 18 18"
                type="rotate"
              />
            </path>
          </g>
        </g>
      </svg>
    `)
  })
})

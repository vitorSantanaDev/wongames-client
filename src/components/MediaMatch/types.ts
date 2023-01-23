import { DefaultBreakpoints } from 'styled-media-query'

export type breakpoint = keyof DefaultBreakpoints

export type MediaMatchProps = {
  greaterThan?: breakpoint
  lessThan?: breakpoint
}

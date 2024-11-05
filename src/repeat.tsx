import { Svg, Path, Line, Rect, Circle, SvgProps } from "@aarock/ui-core"
export default ({ stroke, ...props }: SvgProps) => <Svg
  // xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  strokeWidth="2"
  strokeLinecap="round"
  strokeLinejoin="round"
  { ...props }>
  <Path d="m17 2 4 4-4 4" />
  <Path d="M3 11v-1a4 4 0 0 1 4-4h14" />
  <Path d="m7 22-4-4 4-4" />
  <Path d="M21 13v1a4 4 0 0 1-4 4H3" />
</Svg>

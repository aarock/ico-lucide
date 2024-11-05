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
  <Path d="M4 10a7.31 7.31 0 0 0 10 10Z" />
  <Path d="m9 15 3-3" />
  <Path d="M17 13a6 6 0 0 0-6-6" />
  <Path d="M21 13A10 10 0 0 0 11 3" />
</Svg>

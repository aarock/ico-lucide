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
  <Path d="M10 9.5 8 12l2 2.5" />
  <Path d="m14 9.5 2 2.5-2 2.5" />
  <Path d="M7.9 20A9 9 0 1 0 4 16.1L2 22z" />
</Svg>

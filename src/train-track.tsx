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
  <Path d="M2 17 17 2" />
  <Path d="m2 14 8 8" />
  <Path d="m5 11 8 8" />
  <Path d="m8 8 8 8" />
  <Path d="m11 5 8 8" />
  <Path d="m14 2 8 8" />
  <Path d="M7 22 22 7" />
</Svg>

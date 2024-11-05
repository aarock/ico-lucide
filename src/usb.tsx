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
  <Circle cx="10" cy="7" r="1" />
  <Circle cx="4" cy="20" r="1" />
  <Path d="M4.7 19.3 19 5" />
  <Path d="m21 3-3 1 2 2Z" />
  <Path d="M9.26 7.68 5 12l2 5" />
  <Path d="m10 14 5 2 3.5-3.5" />
  <Path d="m18 12 1-1 1 1-1 1Z" />
</Svg>

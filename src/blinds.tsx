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
  <Path d="M3 3h18" />
  <Path d="M20 7H8" />
  <Path d="M20 11H8" />
  <Path d="M10 19h10" />
  <Path d="M8 15h12" />
  <Path d="M4 3v14" />
  <Circle cx="4" cy="19" r="2" />
</Svg>

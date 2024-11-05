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
  <Path d="m13 13.5 2-2.5-2-2.5" />
  <Path d="m21 21-4.3-4.3" />
  <Path d="M9 8.5 7 11l2 2.5" />
  <Circle cx="11" cy="11" r="8" />
</Svg>

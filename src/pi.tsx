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
  <Line x1="9" x2="9" y1="4" y2="20" />
  <Path d="M4 7c0-1.7 1.3-3 3-3h13" />
  <Path d="M18 20c-1.7 0-3-1.3-3-3V4" />
</Svg>

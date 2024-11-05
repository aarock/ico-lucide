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
  <Path d="m3 16 4 4 4-4" />
  <Path d="M7 20V4" />
  <Path d="M17 10V4h-2" />
  <Path d="M15 10h4" />
  <Rect x="15" y="14" width="4" height="6" ry="2" />
</Svg>

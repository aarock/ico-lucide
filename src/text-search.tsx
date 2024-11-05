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
  <Path d="M21 6H3" />
  <Path d="M10 12H3" />
  <Path d="M10 18H3" />
  <Circle cx="17" cy="15" r="3" />
  <Path d="m21 19-1.9-1.9" />
</Svg>

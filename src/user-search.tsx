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
  <Circle cx="10" cy="7" r="4" />
  <Path d="M10.3 15H7a4 4 0 0 0-4 4v2" />
  <Circle cx="17" cy="17" r="3" />
  <Path d="m21 21-1.9-1.9" />
</Svg>

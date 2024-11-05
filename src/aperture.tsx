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
  <Circle cx="12" cy="12" r="10" />
  <Path d="m14.31 8 5.74 9.94" />
  <Path d="M9.69 8h11.48" />
  <Path d="m7.38 12 5.74-9.94" />
  <Path d="M9.69 16 3.95 6.06" />
  <Path d="M14.31 16H2.83" />
  <Path d="m16.62 12-5.74 9.94" />
</Svg>

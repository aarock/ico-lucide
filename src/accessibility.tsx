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
  <Circle cx="16" cy="4" r="1" />
  <Path d="m18 19 1-7-6 1" />
  <Path d="m5 8 3-3 5.5 3-2.36 3.5" />
  <Path d="M4.24 14.5a5 5 0 0 0 6.88 6" />
  <Path d="M13.76 17.5a5 5 0 0 0-6.88-6" />
</Svg>

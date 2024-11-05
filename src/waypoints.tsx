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
  <Circle cx="12" cy="4.5" r="2.5" />
  <Path d="m10.2 6.3-3.9 3.9" />
  <Circle cx="4.5" cy="12" r="2.5" />
  <Path d="M7 12h10" />
  <Circle cx="19.5" cy="12" r="2.5" />
  <Path d="m13.8 17.7 3.9-3.9" />
  <Circle cx="12" cy="19.5" r="2.5" />
</Svg>

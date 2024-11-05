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
  <Circle cx="7" cy="7" r="5" />
  <Circle cx="17" cy="17" r="5" />
  <Path d="M12 17h10" />
  <Path d="m3.46 10.54 7.08-7.08" />
</Svg>

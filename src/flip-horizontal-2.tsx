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
  <Path d="m3 7 5 5-5 5V7" />
  <Path d="m21 7-5 5 5 5V7" />
  <Path d="M12 20v2" />
  <Path d="M12 14v2" />
  <Path d="M12 8v2" />
  <Path d="M12 2v2" />
</Svg>

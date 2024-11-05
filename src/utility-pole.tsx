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
  <Path d="M12 2v20" />
  <Path d="M2 5h20" />
  <Path d="M3 3v2" />
  <Path d="M7 3v2" />
  <Path d="M17 3v2" />
  <Path d="M21 3v2" />
  <Path d="m19 5-7 7-7-7" />
</Svg>

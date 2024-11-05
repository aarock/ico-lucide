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
  <Path d="m3 8 4-4 4 4" />
  <Path d="M7 4v16" />
  <Path d="M11 12h10" />
  <Path d="M11 16h7" />
  <Path d="M11 20h4" />
</Svg>

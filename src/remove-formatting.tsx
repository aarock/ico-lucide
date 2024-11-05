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
  <Path d="M4 7V4h16v3" />
  <Path d="M5 20h6" />
  <Path d="M13 4 8 20" />
  <Path d="m15 15 5 5" />
  <Path d="m20 15-5 5" />
</Svg>

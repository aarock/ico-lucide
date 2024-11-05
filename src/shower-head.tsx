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
  <Path d="m4 4 2.5 2.5" />
  <Path d="M13.5 6.5a4.95 4.95 0 0 0-7 7" />
  <Path d="M15 5 5 15" />
  <Path d="M14 17v.01" />
  <Path d="M10 16v.01" />
  <Path d="M13 13v.01" />
  <Path d="M16 10v.01" />
  <Path d="M11 20v.01" />
  <Path d="M17 14v.01" />
  <Path d="M20 11v.01" />
</Svg>

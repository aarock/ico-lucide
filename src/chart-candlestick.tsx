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
  <Path d="M9 5v4" />
  <Rect width="4" height="6" x="7" y="9" rx="1" />
  <Path d="M9 15v2" />
  <Path d="M17 3v2" />
  <Rect width="4" height="8" x="15" y="5" rx="1" />
  <Path d="M17 13v3" />
  <Path d="M3 3v16a2 2 0 0 0 2 2h16" />
</Svg>

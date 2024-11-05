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
  <Rect x="2" y="6" width="20" height="8" rx="1" />
  <Path d="M17 14v7" />
  <Path d="M7 14v7" />
  <Path d="M17 3v3" />
  <Path d="M7 3v3" />
  <Path d="M10 14 2.3 6.3" />
  <Path d="m14 6 7.7 7.7" />
  <Path d="m8 6 8 8" />
</Svg>

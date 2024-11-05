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
  <Rect width="18" height="18" x="3" y="3" rx="2" />
  <Path d="M7 3v18" />
  <Path d="M3 7.5h4" />
  <Path d="M3 12h18" />
  <Path d="M3 16.5h4" />
  <Path d="M17 3v18" />
  <Path d="M17 7.5h4" />
  <Path d="M17 16.5h4" />
</Svg>
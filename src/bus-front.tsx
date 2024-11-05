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
  <Path d="M4 6 2 7" />
  <Path d="M10 6h4" />
  <Path d="m22 7-2-1" />
  <Rect width="16" height="16" x="4" y="3" rx="2" />
  <Path d="M4 11h16" />
  <Path d="M8 15h.01" />
  <Path d="M16 15h.01" />
  <Path d="M6 19v2" />
  <Path d="M18 21v-2" />
</Svg>

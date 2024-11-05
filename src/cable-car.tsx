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
  <Path d="M10 3h.01" />
  <Path d="M14 2h.01" />
  <Path d="m2 9 20-5" />
  <Path d="M12 12V6.5" />
  <Rect width="16" height="10" x="4" y="12" rx="3" />
  <Path d="M9 12v5" />
  <Path d="M15 12v5" />
  <Path d="M4 17h16" />
</Svg>

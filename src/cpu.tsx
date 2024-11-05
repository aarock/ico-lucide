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
  <Rect width="16" height="16" x="4" y="4" rx="2" />
  <Rect width="6" height="6" x="9" y="9" rx="1" />
  <Path d="M15 2v2" />
  <Path d="M15 20v2" />
  <Path d="M2 15h2" />
  <Path d="M2 9h2" />
  <Path d="M20 15h2" />
  <Path d="M20 9h2" />
  <Path d="M9 2v2" />
  <Path d="M9 20v2" />
</Svg>

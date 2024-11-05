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
  <Path d="M22 17h-3" />
  <Path d="M22 7h-5" />
  <Path d="M5 17H2" />
  <Path d="M7 7H2" />
  <Rect x="5" y="14" width="14" height="6" rx="2" />
  <Rect x="7" y="4" width="10" height="6" rx="2" />
</Svg>

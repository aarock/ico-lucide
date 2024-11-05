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
  <Path d="M2 6h4" />
  <Path d="M2 10h4" />
  <Path d="M2 14h4" />
  <Path d="M2 18h4" />
  <Rect width="16" height="20" x="4" y="2" rx="2" />
  <Path d="M9.5 8h5" />
  <Path d="M9.5 12H16" />
  <Path d="M9.5 16H14" />
</Svg>

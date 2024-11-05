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
  <Rect width="20" height="16" x="2" y="4" rx="2" />
  <Path d="M6 8h4" />
  <Path d="M14 8h.01" />
  <Path d="M18 8h.01" />
  <Path d="M2 12h20" />
  <Path d="M6 12v4" />
  <Path d="M10 12v4" />
  <Path d="M14 12v4" />
  <Path d="M18 12v4" />
</Svg>

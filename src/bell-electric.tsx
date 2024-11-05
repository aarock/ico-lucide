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
  <Path d="M18.8 4A6.3 8.7 0 0 1 20 9" />
  <Path d="M9 9h.01" />
  <Circle cx="9" cy="9" r="7" />
  <Rect width="10" height="6" x="4" y="16" rx="2" />
  <Path d="M14 19c3 0 4.6-1.6 4.6-1.6" />
  <Circle cx="20" cy="16" r="2" />
</Svg>

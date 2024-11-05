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
  <Path d="M16 10h2" />
  <Path d="M16 14h2" />
  <Path d="M6.17 15a3 3 0 0 1 5.66 0" />
  <Circle cx="9" cy="11" r="2" />
  <Rect x="2" y="5" width="20" height="14" rx="2" />
</Svg>

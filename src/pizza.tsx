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
  <Path d="M15 11h.01" />
  <Path d="M11 15h.01" />
  <Path d="M16 16h.01" />
  <Path d="m2 16 20 6-6-20A20 20 0 0 0 2 16" />
  <Path d="M5.71 17.11a17.04 17.04 0 0 1 11.4-11.4" />
</Svg>

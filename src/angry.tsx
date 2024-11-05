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
  <Circle cx="12" cy="12" r="10" />
  <Path d="M16 16s-1.5-2-4-2-4 2-4 2" />
  <Path d="M7.5 8 10 9" />
  <Path d="m14 9 2.5-1" />
  <Path d="M9 10h.01" />
  <Path d="M15 10h.01" />
</Svg>

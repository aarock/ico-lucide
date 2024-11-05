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
  <Path d="M16 4H9a3 3 0 0 0-2.83 4" />
  <Path d="M14 12a4 4 0 0 1 0 8H6" />
  <Line x1="4" x2="20" y1="12" y2="12" />
</Svg>

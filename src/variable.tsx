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
  <Path d="M8 21s-4-3-4-9 4-9 4-9" />
  <Path d="M16 3s4 3 4 9-4 9-4 9" />
  <Line x1="15" x2="9" y1="9" y2="15" />
  <Line x1="9" x2="15" y1="9" y2="15" />
</Svg>

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
  <Line x1="8" x2="16" y1="15" y2="15" />
  <Line x1="9" x2="9.01" y1="9" y2="9" />
  <Line x1="15" x2="15.01" y1="9" y2="9" />
</Svg>

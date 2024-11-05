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
  <Circle cx="11" cy="11" r="8" />
  <Line x1="21" x2="16.65" y1="21" y2="16.65" />
  <Line x1="11" x2="11" y1="8" y2="14" />
  <Line x1="8" x2="14" y1="11" y2="11" />
</Svg>

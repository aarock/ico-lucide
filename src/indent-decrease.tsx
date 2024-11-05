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
  <polyline points="7 8 3 12 7 16" />
  <Line x1="21" x2="11" y1="12" y2="12" />
  <Line x1="21" x2="11" y1="6" y2="6" />
  <Line x1="21" x2="11" y1="18" y2="18" />
</Svg>

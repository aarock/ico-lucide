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
  <Line x1="4" x2="4" y1="21" y2="14" />
  <Line x1="4" x2="4" y1="10" y2="3" />
  <Line x1="12" x2="12" y1="21" y2="12" />
  <Line x1="12" x2="12" y1="8" y2="3" />
  <Line x1="20" x2="20" y1="21" y2="16" />
  <Line x1="20" x2="20" y1="12" y2="3" />
  <Line x1="2" x2="6" y1="14" y2="14" />
  <Line x1="10" x2="14" y1="8" y2="8" />
  <Line x1="18" x2="22" y1="16" y2="16" />
</Svg>

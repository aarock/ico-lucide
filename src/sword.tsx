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
  <polyline points="14.5 17.5 3 6 3 3 6 3 17.5 14.5" />
  <Line x1="13" x2="19" y1="19" y2="13" />
  <Line x1="16" x2="20" y1="16" y2="20" />
  <Line x1="19" x2="21" y1="21" y2="19" />
</Svg>

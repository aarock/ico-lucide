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
  <polyline points="5 9 2 12 5 15" />
  <polyline points="9 5 12 2 15 5" />
  <polyline points="15 19 12 22 9 19" />
  <polyline points="19 9 22 12 19 15" />
  <Line x1="2" x2="22" y1="12" y2="12" />
  <Line x1="12" x2="12" y1="2" y2="22" />
</Svg>

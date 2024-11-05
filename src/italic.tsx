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
  <Line x1="19" x2="10" y1="4" y2="4" />
  <Line x1="14" x2="5" y1="20" y2="20" />
  <Line x1="15" x2="9" y1="4" y2="20" />
</Svg>

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
  <Line x1="5" x2="19" y1="9" y2="9" />
  <Line x1="5" x2="19" y1="15" y2="15" />
  <Line x1="19" x2="5" y1="5" y2="19" />
</Svg>
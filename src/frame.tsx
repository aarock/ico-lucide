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
  <Line x1="22" x2="2" y1="6" y2="6" />
  <Line x1="22" x2="2" y1="18" y2="18" />
  <Line x1="6" x2="6" y1="2" y2="22" />
  <Line x1="18" x2="18" y1="2" y2="22" />
</Svg>

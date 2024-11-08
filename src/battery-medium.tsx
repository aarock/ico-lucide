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
  <Rect width="16" height="10" x="2" y="7" rx="2" ry="2" />
  <Line x1="22" x2="22" y1="11" y2="13" />
  <Line x1="6" x2="6" y1="11" y2="13" />
  <Line x1="10" x2="10" y1="11" y2="13" />
</Svg>

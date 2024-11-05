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
  <Line x1="6" x2="10" y1="12" y2="12" />
  <Line x1="8" x2="8" y1="10" y2="14" />
  <Line x1="15" x2="15.01" y1="13" y2="13" />
  <Line x1="18" x2="18.01" y1="11" y2="11" />
  <Rect width="20" height="12" x="2" y="6" rx="2" />
</Svg>

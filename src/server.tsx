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
  <Rect width="20" height="8" x="2" y="2" rx="2" ry="2" />
  <Rect width="20" height="8" x="2" y="14" rx="2" ry="2" />
  <Line x1="6" x2="6.01" y1="6" y2="6" />
  <Line x1="6" x2="6.01" y1="18" y2="18" />
</Svg>

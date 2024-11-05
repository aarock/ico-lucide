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
  <Circle cx="12" cy="12" r="8" />
  <Line x1="3" x2="6" y1="3" y2="6" />
  <Line x1="21" x2="18" y1="3" y2="6" />
  <Line x1="3" x2="6" y1="21" y2="18" />
  <Line x1="21" x2="18" y1="21" y2="18" />
</Svg>
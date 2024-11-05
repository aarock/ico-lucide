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
  <Circle cx="12" cy="12" r="10" />
  <Line x1="22" x2="18" y1="12" y2="12" />
  <Line x1="6" x2="2" y1="12" y2="12" />
  <Line x1="12" x2="12" y1="6" y2="2" />
  <Line x1="12" x2="12" y1="22" y2="18" />
</Svg>

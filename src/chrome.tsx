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
  <Circle cx="12" cy="12" r="4" />
  <Line x1="21.17" x2="12" y1="8" y2="8" />
  <Line x1="3.95" x2="8.54" y1="6.06" y2="14" />
  <Line x1="10.88" x2="15.46" y1="21.94" y2="14" />
</Svg>

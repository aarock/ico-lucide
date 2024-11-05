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
  <polyline points="3.5 2 6.5 12.5 18 12.5" />
  <Line x1="9.5" x2="5.5" y1="12.5" y2="20" />
  <Line x1="15" x2="18.5" y1="12.5" y2="20" />
  <Path d="M2.75 18a13 13 0 0 0 18.5 0" />
</Svg>

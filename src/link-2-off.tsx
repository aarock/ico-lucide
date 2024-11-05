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
  <Path d="M9 17H7A5 5 0 0 1 7 7" />
  <Path d="M15 7h2a5 5 0 0 1 4 8" />
  <Line x1="8" x2="12" y1="12" y2="12" />
  <Line x1="2" x2="22" y1="2" y2="22" />
</Svg>

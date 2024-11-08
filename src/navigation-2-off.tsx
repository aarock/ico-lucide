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
  <Path d="M9.31 9.31 5 21l7-4 7 4-1.17-3.17" />
  <Path d="M14.53 8.88 12 2l-1.17 3.17" />
  <Line x1="2" x2="22" y1="2" y2="22" />
</Svg>

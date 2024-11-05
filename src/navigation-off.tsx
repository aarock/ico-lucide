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
  <Path d="M8.43 8.43 3 11l8 2 2 8 2.57-5.43" />
  <Path d="M17.39 11.73 22 2l-9.73 4.61" />
  <Line x1="2" x2="22" y1="2" y2="22" />
</Svg>

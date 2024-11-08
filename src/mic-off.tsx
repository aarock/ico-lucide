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
  <Line x1="2" x2="22" y1="2" y2="22" />
  <Path d="M18.89 13.23A7.12 7.12 0 0 0 19 12v-2" />
  <Path d="M5 10v2a7 7 0 0 0 12 5" />
  <Path d="M15 9.34V5a3 3 0 0 0-5.68-1.33" />
  <Path d="M9 9v3a3 3 0 0 0 5.12 2.12" />
  <Line x1="12" x2="12" y1="19" y2="22" />
</Svg>

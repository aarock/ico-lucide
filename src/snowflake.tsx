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
  <Line x1="2" x2="22" y1="12" y2="12" />
  <Line x1="12" x2="12" y1="2" y2="22" />
  <Path d="m20 16-4-4 4-4" />
  <Path d="m4 8 4 4-4 4" />
  <Path d="m16 4-4 4-4-4" />
  <Path d="m8 20 4-4 4 4" />
</Svg>

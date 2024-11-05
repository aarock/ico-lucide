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
  <Path d="m2 8 2 2-2 2 2 2-2 2" />
  <Path d="m22 8-2 2 2 2-2 2 2 2" />
  <Path d="M8 8v10c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2" />
  <Path d="M16 10.34V6c0-.55-.45-1-1-1h-4.34" />
  <Line x1="2" x2="22" y1="2" y2="22" />
</Svg>

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
  <Circle cx="18" cy="18" r="3" />
  <Circle cx="6" cy="6" r="3" />
  <Path d="M18 6V5" />
  <Path d="M18 11v-1" />
  <Line x1="6" x2="6" y1="9" y2="21" />
</Svg>
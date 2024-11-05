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
  <Line x1="10" x2="21" y1="6" y2="6" />
  <Line x1="10" x2="21" y1="12" y2="12" />
  <Line x1="10" x2="21" y1="18" y2="18" />
  <Path d="M4 6h1v4" />
  <Path d="M4 10h2" />
  <Path d="M6 18H4c0-1 2-2 2-3s-1-1.5-2-1" />
</Svg>

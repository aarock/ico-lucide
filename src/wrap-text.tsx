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
  <Line x1="3" x2="21" y1="6" y2="6" />
  <Path d="M3 12h15a3 3 0 1 1 0 6h-4" />
  <polyline points="16 16 14 18 16 20" />
  <Line x1="3" x2="10" y1="18" y2="18" />
</Svg>
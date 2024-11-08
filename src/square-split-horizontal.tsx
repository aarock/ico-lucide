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
  <Path d="M8 19H5c-1 0-2-1-2-2V7c0-1 1-2 2-2h3" />
  <Path d="M16 5h3c1 0 2 1 2 2v10c0 1-1 2-2 2h-3" />
  <Line x1="12" x2="12" y1="4" y2="20" />
</Svg>

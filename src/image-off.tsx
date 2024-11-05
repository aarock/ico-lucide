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
  <Path d="M10.41 10.41a2 2 0 1 1-2.83-2.83" />
  <Line x1="13.5" x2="6" y1="13.5" y2="21" />
  <Line x1="18" x2="21" y1="12" y2="15" />
  <Path d="M3.59 3.59A1.99 1.99 0 0 0 3 5v14a2 2 0 0 0 2 2h14c.55 0 1.052-.22 1.41-.59" />
  <Path d="M21 15V5a2 2 0 0 0-2-2H9" />
</Svg>

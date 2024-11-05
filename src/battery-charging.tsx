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
  <Path d="M15 7h1a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-2" />
  <Path d="M6 7H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h1" />
  <Path d="m11 7-3 5h4l-3 5" />
  <Line x1="22" x2="22" y1="11" y2="13" />
</Svg>

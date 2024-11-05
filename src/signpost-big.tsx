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
  <Path d="M10 9H4L2 7l2-2h6" />
  <Path d="M14 5h6l2 2-2 2h-6" />
  <Path d="M10 22V4a2 2 0 1 1 4 0v18" />
  <Path d="M8 22h8" />
</Svg>

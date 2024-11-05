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
  <Path d="M14 2v4a2 2 0 0 0 2 2h4" />
  <Path d="M4 7V4a2 2 0 0 1 2-2 2 2 0 0 0-2 2" />
  <Path d="M4.063 20.999a2 2 0 0 0 2 1L18 22a2 2 0 0 0 2-2V7l-5-5H6" />
  <Path d="m5 11-3 3" />
  <Path d="m5 17-3-3h10" />
</Svg>
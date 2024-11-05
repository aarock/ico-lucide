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
  <Path d="M3 3h.01" />
  <Path d="M7 5h.01" />
  <Path d="M11 7h.01" />
  <Path d="M3 7h.01" />
  <Path d="M7 9h.01" />
  <Path d="M3 11h.01" />
  <Rect width="4" height="4" x="15" y="5" />
  <Path d="m19 9 2 2v10c0 .6-.4 1-1 1h-6c-.6 0-1-.4-1-1V11l2-2" />
  <Path d="m13 14 8-2" />
  <Path d="m13 19 8-2" />
</Svg>

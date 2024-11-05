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
  <Path d="M13 7 9 3 5 7l4 4" />
  <Path d="m17 11 4 4-4 4-4-4" />
  <Path d="m8 12 4 4 6-6-4-4Z" />
  <Path d="m16 8 3-3" />
  <Path d="M9 21a6 6 0 0 0-6-6" />
</Svg>

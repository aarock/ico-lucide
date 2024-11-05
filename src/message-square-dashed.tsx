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
  <Path d="M10 17H7l-4 4v-7" />
  <Path d="M14 17h1" />
  <Path d="M14 3h1" />
  <Path d="M19 3a2 2 0 0 1 2 2" />
  <Path d="M21 14v1a2 2 0 0 1-2 2" />
  <Path d="M21 9v1" />
  <Path d="M3 9v1" />
  <Path d="M5 3a2 2 0 0 0-2 2" />
  <Path d="M9 3h1" />
</Svg>

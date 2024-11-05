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
  <Circle cx="12" cy="13" r="8" />
  <Path d="M5 3 2 6" />
  <Path d="m22 6-3-3" />
  <Path d="M6.38 18.7 4 21" />
  <Path d="M17.64 18.67 20 21" />
  <Path d="m9 13 2 2 4-4" />
</Svg>

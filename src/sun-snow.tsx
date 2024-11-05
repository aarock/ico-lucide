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
  <Path d="M10 9a3 3 0 1 0 0 6" />
  <Path d="M2 12h1" />
  <Path d="M14 21V3" />
  <Path d="M10 4V3" />
  <Path d="M10 21v-1" />
  <Path d="m3.64 18.36.7-.7" />
  <Path d="m4.34 6.34-.7-.7" />
  <Path d="M14 12h8" />
  <Path d="m17 4-3 3" />
  <Path d="m14 17 3 3" />
  <Path d="m21 15-3-3 3-3" />
</Svg>

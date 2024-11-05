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
  <Path d="m14.5 12.5-8 8a2.119 2.119 0 1 1-3-3l8-8" />
  <Path d="m16 16 6-6" />
  <Path d="m8 8 6-6" />
  <Path d="m9 7 8 8" />
  <Path d="m21 11-8-8" />
</Svg>

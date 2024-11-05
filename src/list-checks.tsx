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
  <Path d="m3 17 2 2 4-4" />
  <Path d="m3 7 2 2 4-4" />
  <Path d="M13 6h8" />
  <Path d="M13 12h8" />
  <Path d="M13 18h8" />
</Svg>

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
  <Path d="m3 10 2.5-2.5L3 5" />
  <Path d="m3 19 2.5-2.5L3 14" />
  <Path d="M10 6h11" />
  <Path d="M10 12h11" />
  <Path d="M10 18h11" />
</Svg>

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
  <Path d="M13 12h8" />
  <Path d="M13 18h8" />
  <Path d="M13 6h8" />
  <Path d="M3 12h1" />
  <Path d="M3 18h1" />
  <Path d="M3 6h1" />
  <Path d="M8 12h1" />
  <Path d="M8 18h1" />
  <Path d="M8 6h1" />
</Svg>

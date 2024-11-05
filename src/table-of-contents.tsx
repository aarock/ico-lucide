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
  <Path d="M16 12H3" />
  <Path d="M16 18H3" />
  <Path d="M16 6H3" />
  <Path d="M21 12h.01" />
  <Path d="M21 18h.01" />
  <Path d="M21 6h.01" />
</Svg>

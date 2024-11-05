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
  <Path d="M15 12h6" />
  <Path d="M15 6h6" />
  <Path d="m3 13 3.553-7.724a.5.5 0 0 1 .894 0L11 13" />
  <Path d="M3 18h18" />
  <Path d="M4 11h6" />
</Svg>

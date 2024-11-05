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
  <Path d="M6 3h12" />
  <Path d="M6 8h12" />
  <Path d="m6 13 8.5 8" />
  <Path d="M6 13h3" />
  <Path d="M9 13c6.667 0 6.667-10 0-10" />
</Svg>

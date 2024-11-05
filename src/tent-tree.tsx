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
  <Circle cx="4" cy="4" r="2" />
  <Path d="m14 5 3-3 3 3" />
  <Path d="m14 10 3-3 3 3" />
  <Path d="M17 14V2" />
  <Path d="M17 14H7l-5 8h20Z" />
  <Path d="M8 14v8" />
  <Path d="m9 14 5 8" />
</Svg>

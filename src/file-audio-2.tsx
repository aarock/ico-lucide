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
  <Path d="M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v2" />
  <Path d="M14 2v4a2 2 0 0 0 2 2h4" />
  <Circle cx="3" cy="17" r="1" />
  <Path d="M2 17v-3a4 4 0 0 1 8 0v3" />
  <Circle cx="9" cy="17" r="1" />
</Svg>

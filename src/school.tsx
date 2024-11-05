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
  <Path d="M14 22v-4a2 2 0 1 0-4 0v4" />
  <Path d="m18 10 4 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-8l4-2" />
  <Path d="M18 5v17" />
  <Path d="m4 6 8-4 8 4" />
  <Path d="M6 5v17" />
  <Circle cx="12" cy="9" r="2" />
</Svg>

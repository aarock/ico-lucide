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
  <Circle cx="12" cy="10" r="1" />
  <Path d="M22 20V8h-4l-6-4-6 4H2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2" />
  <Path d="M6 17v.01" />
  <Path d="M6 13v.01" />
  <Path d="M18 17v.01" />
  <Path d="M18 13v.01" />
  <Path d="M14 22v-5a2 2 0 0 0-2-2a2 2 0 0 0-2 2v5" />
</Svg>

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
  <Circle cx="12" cy="12" r="10" />
  <Path d="M6 12c0-1.7.7-3.2 1.8-4.2" />
  <Circle cx="12" cy="12" r="2" />
  <Path d="M18 12c0 1.7-.7 3.2-1.8 4.2" />
</Svg>

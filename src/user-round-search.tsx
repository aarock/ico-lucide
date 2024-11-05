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
  <Circle cx="10" cy="8" r="5" />
  <Path d="M2 21a8 8 0 0 1 10.434-7.62" />
  <Circle cx="18" cy="18" r="3" />
  <Path d="m22 22-1.9-1.9" />
</Svg>

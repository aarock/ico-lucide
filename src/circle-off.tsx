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
  <Path d="m2 2 20 20" />
  <Path d="M8.35 2.69A10 10 0 0 1 21.3 15.65" />
  <Path d="M19.08 19.08A10 10 0 1 1 4.92 4.92" />
</Svg>

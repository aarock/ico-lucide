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
  <Path d="m7 11 4.08 10.35a1 1 0 0 0 1.84 0L17 11" />
  <Path d="M17 7A5 5 0 0 0 7 7" />
  <Path d="M17 7a2 2 0 0 1 0 4H7a2 2 0 0 1 0-4" />
</Svg>

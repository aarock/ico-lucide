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
  <Path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
  <Path d="m10 15-3-3 3-3" />
  <Path d="M7 12h7a2 2 0 0 1 2 2v1" />
</Svg>

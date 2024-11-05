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
  <Path d="m2 9 3-3 3 3" />
  <Path d="M13 18H7a2 2 0 0 1-2-2V6" />
  <Path d="m22 15-3 3-3-3" />
  <Path d="M11 6h6a2 2 0 0 1 2 2v10" />
</Svg>

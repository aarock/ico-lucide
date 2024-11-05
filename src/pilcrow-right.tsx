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
  <Path d="M10 3v11" />
  <Path d="M10 9H7a1 1 0 0 1 0-6h8" />
  <Path d="M14 3v11" />
  <Path d="m18 14 4 4H2" />
  <Path d="m22 18-4 4" />
</Svg>
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
  <Path d="M8.7 3A6 6 0 0 1 18 8a21.3 21.3 0 0 0 .6 5" />
  <Path d="M17 17H3s3-2 3-9a4.67 4.67 0 0 1 .3-1.7" />
  <Path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
  <Path d="m2 2 20 20" />
</Svg>

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
  <Path d="M9.26 9.26 3 11v3l14.14 3.14" />
  <Path d="M21 15.34V6l-7.31 2.03" />
  <Path d="M11.6 16.8a3 3 0 1 1-5.8-1.6" />
  <Line x1="2" x2="22" y1="2" y2="22" />
</Svg>

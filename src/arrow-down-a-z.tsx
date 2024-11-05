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
  <Path d="m3 16 4 4 4-4" />
  <Path d="M7 20V4" />
  <Path d="M20 8h-5" />
  <Path d="M15 10V6.5a2.5 2.5 0 0 1 5 0V10" />
  <Path d="M15 14h5l-5 6h5" />
</Svg>

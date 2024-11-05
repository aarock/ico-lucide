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
  <Path d="m5 8 6 6" />
  <Path d="m4 14 6-6 2-3" />
  <Path d="M2 5h12" />
  <Path d="M7 2h1" />
  <Path d="m22 22-5-10-5 10" />
  <Path d="M14 18h6" />
</Svg>

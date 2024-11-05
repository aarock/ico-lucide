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
  <Path d="M10 2v7.31" />
  <Path d="M14 9.3V1.99" />
  <Path d="M8.5 2h7" />
  <Path d="M14 9.3a6.5 6.5 0 1 1-4 0" />
  <Path d="M5.52 16h12.96" />
</Svg>

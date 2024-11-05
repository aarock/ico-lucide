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
  <Path d="M22 18H2a4 4 0 0 0 4 4h12a4 4 0 0 0 4-4Z" />
  <Path d="M21 14 10 2 3 14h18Z" />
  <Path d="M10 2v16" />
</Svg>

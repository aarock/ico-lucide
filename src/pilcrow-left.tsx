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
  <Path d="M14 3v11" />
  <Path d="M14 9h-3a3 3 0 0 1 0-6h9" />
  <Path d="M18 3v11" />
  <Path d="M22 18H2l4-4" />
  <Path d="m6 22-4-4" />
</Svg>

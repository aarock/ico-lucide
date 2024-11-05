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
  <Circle cx="18" cy="18" r="3" />
  <Circle cx="6" cy="6" r="3" />
  <Path d="M13 6h3a2 2 0 0 1 2 2v7" />
  <Path d="M11 18H8a2 2 0 0 1-2-2V9" />
</Svg>

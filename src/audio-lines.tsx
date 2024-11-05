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
  <Path d="M2 10v3" />
  <Path d="M6 6v11" />
  <Path d="M10 3v18" />
  <Path d="M14 8v7" />
  <Path d="M18 5v13" />
  <Path d="M22 10v3" />
</Svg>

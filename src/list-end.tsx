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
  <Path d="M16 12H3" />
  <Path d="M16 6H3" />
  <Path d="M10 18H3" />
  <Path d="M21 6v10a2 2 0 0 1-2 2h-5" />
  <Path d="m16 16-2 2 2 2" />
</Svg>

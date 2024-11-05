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
  <Path d="m14 12-8.5 8.5a2.12 2.12 0 1 1-3-3L11 9" />
  <Path d="M15 13 9 7l4-4 6 6h3a8 8 0 0 1-7 7z" />
</Svg>

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
  <Path d="M5.5 8.5 9 12l-3.5 3.5L2 12l3.5-3.5Z" />
  <Path d="m12 2 3.5 3.5L12 9 8.5 5.5 12 2Z" />
  <Path d="M18.5 8.5 22 12l-3.5 3.5L15 12l3.5-3.5Z" />
  <Path d="m12 15 3.5 3.5L12 22l-3.5-3.5L12 15Z" />
</Svg>

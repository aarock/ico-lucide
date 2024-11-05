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
  <Path d="M21 14h-5" />
  <Path d="M16 16v-3.5a2.5 2.5 0 0 1 5 0V16" />
  <Path d="M4.5 13h6" />
  <Path d="m3 16 4.5-9 4.5 9" />
</Svg>
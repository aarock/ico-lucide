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
  <Path d="M17 12H3a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h14" />
  <Path d="M18 8c0-2.5-2-2.5-2-5" />
  <Path d="M21 16a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1" />
  <Path d="M22 8c0-2.5-2-2.5-2-5" />
  <Path d="M7 12v4" />
</Svg>

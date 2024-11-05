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
  <Path d="m3 8 4-4 4 4" />
  <Path d="M7 4v16" />
  <Rect x="15" y="4" width="4" height="6" ry="2" />
  <Path d="M17 20v-6h-2" />
  <Path d="M15 20h4" />
</Svg>

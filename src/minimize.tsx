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
  <Path d="M8 3v3a2 2 0 0 1-2 2H3" />
  <Path d="M21 8h-3a2 2 0 0 1-2-2V3" />
  <Path d="M3 16h3a2 2 0 0 1 2 2v3" />
  <Path d="M16 21v-3a2 2 0 0 1 2-2h3" />
</Svg>

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
  <Path d="M8 3H5a2 2 0 0 0-2 2v3" />
  <Path d="M21 8V5a2 2 0 0 0-2-2h-3" />
  <Path d="M3 16v3a2 2 0 0 0 2 2h3" />
  <Path d="M16 21h3a2 2 0 0 0 2-2v-3" />
</Svg>

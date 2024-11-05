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
  <polyline points="7 17 2 12 7 7" />
  <polyline points="12 17 7 12 12 7" />
  <Path d="M22 18v-2a4 4 0 0 0-4-4H7" />
</Svg>

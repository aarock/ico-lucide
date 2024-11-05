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
  <Path d="M3 7V5c0-1.1.9-2 2-2h2" />
  <Path d="M17 3h2c1.1 0 2 .9 2 2v2" />
  <Path d="M21 17v2c0 1.1-.9 2-2 2h-2" />
  <Path d="M7 21H5c-1.1 0-2-.9-2-2v-2" />
  <Rect width="7" height="5" x="7" y="7" rx="1" />
  <Rect width="7" height="5" x="10" y="12" rx="1" />
</Svg>

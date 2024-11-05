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
  <Path d="M3 2v6h6" />
  <Path d="M21 12A9 9 0 0 0 6 5.3L3 8" />
  <Path d="M21 22v-6h-6" />
  <Path d="M3 12a9 9 0 0 0 15 6.7l3-2.7" />
  <Circle cx="12" cy="12" r="1" />
</Svg>

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
  <Rect width="14" height="6" x="5" y="14" rx="2" />
  <Rect width="10" height="6" x="7" y="4" rx="2" />
  <Path d="M2 20h20" />
  <Path d="M2 10h20" />
</Svg>
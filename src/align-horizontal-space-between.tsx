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
  <Rect width="6" height="14" x="3" y="5" rx="2" />
  <Rect width="6" height="10" x="15" y="7" rx="2" />
  <Path d="M3 2v20" />
  <Path d="M21 2v20" />
</Svg>

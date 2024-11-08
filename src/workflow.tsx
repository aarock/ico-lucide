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
  <Rect width="8" height="8" x="3" y="3" rx="2" />
  <Path d="M7 11v4a2 2 0 0 0 2 2h4" />
  <Rect width="8" height="8" x="13" y="13" rx="2" />
</Svg>

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
  <Path d="M12 17v4" />
  <Path d="M8 21h8" />
  <Rect x="2" y="3" width="20" height="14" rx="2" />
  <Rect x="9" y="7" width="6" height="6" rx="1" />
</Svg>

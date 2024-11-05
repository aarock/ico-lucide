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
  <Path d="M8 2v4" />
  <Path d="M16 2v4" />
  <Rect width="18" height="18" x="3" y="4" rx="2" />
  <Path d="M3 10h18" />
  <Path d="M10 16h4" />
  <Path d="M12 14v4" />
</Svg>

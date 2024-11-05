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
  <Path d="M10 8h.01" />
  <Path d="M12 12h.01" />
  <Path d="M14 8h.01" />
  <Path d="M16 12h.01" />
  <Path d="M18 8h.01" />
  <Path d="M6 8h.01" />
  <Path d="M7 16h10" />
  <Path d="M8 12h.01" />
  <Rect width="20" height="16" x="2" y="4" rx="2" />
</Svg>

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
  <Rect width="16" height="20" x="4" y="2" rx="2" />
  <Line x1="8" x2="16" y1="6" y2="6" />
  <Line x1="16" x2="16" y1="14" y2="18" />
  <Path d="M16 10h.01" />
  <Path d="M12 10h.01" />
  <Path d="M8 10h.01" />
  <Path d="M12 14h.01" />
  <Path d="M8 14h.01" />
  <Path d="M12 18h.01" />
  <Path d="M8 18h.01" />
</Svg>

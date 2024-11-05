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
  <Path d="M12 6h.01" />
  <Circle cx="12" cy="14" r="4" />
  <Path d="M12 14h.01" />
</Svg>

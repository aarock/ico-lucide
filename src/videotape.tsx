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
  <Rect width="20" height="16" x="2" y="4" rx="2" />
  <Path d="M2 8h20" />
  <Circle cx="8" cy="14" r="2" />
  <Path d="M8 12h8" />
  <Circle cx="16" cy="14" r="2" />
</Svg>

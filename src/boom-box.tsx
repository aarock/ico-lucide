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
  <Path d="M4 9V5a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4" />
  <Path d="M8 8v1" />
  <Path d="M12 8v1" />
  <Path d="M16 8v1" />
  <Rect width="20" height="12" x="2" y="9" rx="2" />
  <Circle cx="8" cy="15" r="2" />
  <Circle cx="16" cy="15" r="2" />
</Svg>
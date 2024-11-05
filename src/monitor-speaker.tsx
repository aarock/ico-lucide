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
  <Path d="M5.5 20H8" />
  <Path d="M17 9h.01" />
  <Rect width="10" height="16" x="12" y="4" rx="2" />
  <Path d="M8 6H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h4" />
  <Circle cx="17" cy="15" r="1" />
</Svg>

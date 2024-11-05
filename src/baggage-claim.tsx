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
  <Path d="M22 18H6a2 2 0 0 1-2-2V7a2 2 0 0 0-2-2" />
  <Path d="M17 14V4a2 2 0 0 0-2-2h-1a2 2 0 0 0-2 2v10" />
  <Rect width="13" height="8" x="8" y="6" rx="1" />
  <Circle cx="18" cy="20" r="2" />
  <Circle cx="9" cy="20" r="2" />
</Svg>

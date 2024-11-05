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
  <Path d="M16 2v2" />
  <Path d="M17.915 22a6 6 0 0 0-12 0" />
  <Path d="M8 2v2" />
  <Circle cx="12" cy="12" r="4" />
  <Rect x="3" y="4" width="18" height="18" rx="2" />
</Svg>

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
  <Path d="M10 10.01h.01" />
  <Path d="M10 14.01h.01" />
  <Path d="M14 10.01h.01" />
  <Path d="M14 14.01h.01" />
  <Path d="M18 6v11.5" />
  <Path d="M6 6v12" />
  <Rect x="2" y="6" width="20" height="12" rx="2" />
</Svg>

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
  <Path d="M5.42 9.42 8 12" />
  <Circle cx="4" cy="8" r="2" />
  <Path d="m14 6-8.58 8.58" />
  <Circle cx="4" cy="16" r="2" />
  <Path d="M10.8 14.8 14 18" />
  <Path d="M16 12h-2" />
  <Path d="M22 12h-2" />
</Svg>

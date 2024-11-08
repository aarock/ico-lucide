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
  <Rect width="18" height="18" x="3" y="3" rx="2" />
  <Circle cx="7.5" cy="7.5" r=".5" fill="currentColor" />
  <Path d="m7.9 7.9 2.7 2.7" />
  <Circle cx="16.5" cy="7.5" r=".5" fill="currentColor" />
  <Path d="m13.4 10.6 2.7-2.7" />
  <Circle cx="7.5" cy="16.5" r=".5" fill="currentColor" />
  <Path d="m7.9 16.1 2.7-2.7" />
  <Circle cx="16.5" cy="16.5" r=".5" fill="currentColor" />
  <Path d="m13.4 13.4 2.7 2.7" />
  <Circle cx="12" cy="12" r="2" />
</Svg>

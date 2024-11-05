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
  <Path d="M2 12c0-2.8 2.2-5 5-5s5 2.2 5 5 2.2 5 5 5 5-2.2 5-5" />
  <Path d="M7 20.7a1 1 0 1 1 5-8.7 1 1 0 1 0 5-8.6" />
  <Path d="M7 3.3a1 1 0 1 1 5 8.6 1 1 0 1 0 5 8.6" />
  <Circle cx="12" cy="12" r="10" />
</Svg>

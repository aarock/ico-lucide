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
  <ellipse cx="12" cy="5" rx="9" ry="3" />
  <Path d="M3 5V19A9 3 0 0 0 15 21.84" />
  <Path d="M21 5V8" />
  <Path d="M21 12L18 17H22L19 22" />
  <Path d="M3 12A9 3 0 0 0 14.59 14.87" />
</Svg>

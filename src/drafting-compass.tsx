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
  <Path d="m12.99 6.74 1.93 3.44" />
  <Path d="M19.136 12a10 10 0 0 1-14.271 0" />
  <Path d="m21 21-2.16-3.84" />
  <Path d="m3 21 8.02-14.26" />
  <Circle cx="12" cy="5" r="2" />
</Svg>

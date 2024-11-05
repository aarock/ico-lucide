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
  <Path d="M2 21a8 8 0 0 1 10.434-7.62" />
  <Circle cx="10" cy="8" r="5" />
  <Circle cx="18" cy="18" r="3" />
  <Path d="m19.5 14.3-.4.9" />
  <Path d="m16.9 20.8-.4.9" />
  <Path d="m21.7 19.5-.9-.4" />
  <Path d="m15.2 16.9-.9-.4" />
  <Path d="m21.7 16.5-.9.4" />
  <Path d="m15.2 19.1-.9.4" />
  <Path d="m19.5 21.7-.4-.9" />
  <Path d="m16.9 15.2-.4-.9" />
</Svg>
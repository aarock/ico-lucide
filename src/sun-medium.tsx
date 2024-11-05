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
  <Circle cx="12" cy="12" r="4" />
  <Path d="M12 3v1" />
  <Path d="M12 20v1" />
  <Path d="M3 12h1" />
  <Path d="M20 12h1" />
  <Path d="m18.364 5.636-.707.707" />
  <Path d="m6.343 17.657-.707.707" />
  <Path d="m5.636 5.636.707.707" />
  <Path d="m17.657 17.657.707.707" />
</Svg>

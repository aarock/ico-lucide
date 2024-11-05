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
  <Path d="M15 4V2" />
  <Path d="M15 16v-2" />
  <Path d="M8 9h2" />
  <Path d="M20 9h2" />
  <Path d="M17.8 11.8 19 13" />
  <Path d="M15 9h.01" />
  <Path d="M17.8 6.2 19 5" />
  <Path d="m3 21 9-9" />
  <Path d="M12.2 6.2 11 5" />
</Svg>

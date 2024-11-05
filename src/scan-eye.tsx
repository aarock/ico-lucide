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
  <Path d="M3 7V5a2 2 0 0 1 2-2h2" />
  <Path d="M17 3h2a2 2 0 0 1 2 2v2" />
  <Path d="M21 17v2a2 2 0 0 1-2 2h-2" />
  <Path d="M7 21H5a2 2 0 0 1-2-2v-2" />
  <Circle cx="12" cy="12" r="1" />
  <Path d="M18.944 12.33a1 1 0 0 0 0-.66 7.5 7.5 0 0 0-13.888 0 1 1 0 0 0 0 .66 7.5 7.5 0 0 0 13.888 0" />
</Svg>

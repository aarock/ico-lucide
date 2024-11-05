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
  <Circle cx="12" cy="12" r="2" />
  <Path d="M12 2v4" />
  <Path d="m6.8 15-3.5 2" />
  <Path d="m20.7 7-3.5 2" />
  <Path d="M6.8 9 3.3 7" />
  <Path d="m20.7 17-3.5-2" />
  <Path d="m9 22 3-8 3 8" />
  <Path d="M8 22h8" />
  <Path d="M18 18.7a9 9 0 1 0-12 0" />
</Svg>

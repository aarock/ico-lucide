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
  <Circle cx="12" cy="12" r="8" />
  <Path d="M12 2v7.5" />
  <Path d="m19 5-5.23 5.23" />
  <Path d="M22 12h-7.5" />
  <Path d="m19 19-5.23-5.23" />
  <Path d="M12 14.5V22" />
  <Path d="M10.23 13.77 5 19" />
  <Path d="M9.5 12H2" />
  <Path d="M10.23 10.23 5 5" />
  <Circle cx="12" cy="12" r="2.5" />
</Svg>

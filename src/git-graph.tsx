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
  <Circle cx="5" cy="6" r="3" />
  <Path d="M5 9v6" />
  <Circle cx="5" cy="18" r="3" />
  <Path d="M12 3v18" />
  <Circle cx="19" cy="6" r="3" />
  <Path d="M16 15.7A9 9 0 0 0 19 9" />
</Svg>
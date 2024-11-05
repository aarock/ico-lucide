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
  <Circle cx="6" cy="6" r="3" />
  <Path d="M8.12 8.12 12 12" />
  <Path d="M20 4 8.12 15.88" />
  <Circle cx="6" cy="18" r="3" />
  <Path d="M14.8 14.8 20 20" />
</Svg>

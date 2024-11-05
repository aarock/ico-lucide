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
  <Path d="M17.7 7.7a2.5 2.5 0 1 1 1.8 4.3H2" />
  <Path d="M9.6 4.6A2 2 0 1 1 11 8H2" />
  <Path d="M12.6 19.4A2 2 0 1 0 14 16H2" />
</Svg>

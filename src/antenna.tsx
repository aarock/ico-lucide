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
  <Path d="M2 12 7 2" />
  <Path d="m7 12 5-10" />
  <Path d="m12 12 5-10" />
  <Path d="m17 12 5-10" />
  <Path d="M4.5 7h15" />
  <Path d="M12 16v6" />
</Svg>

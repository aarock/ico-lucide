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
  <Path d="M 20 4 A2 2 0 0 1 22 6" />
  <Path d="M 22 6 L 22 16.41" />
  <Path d="M 7 16 L 16 16" />
  <Path d="M 9.69 4 L 20 4" />
  <Path d="M14 8h.01" />
  <Path d="M18 8h.01" />
  <Path d="m2 2 20 20" />
  <Path d="M20 20H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2" />
  <Path d="M6 8h.01" />
  <Path d="M8 12h.01" />
</Svg>
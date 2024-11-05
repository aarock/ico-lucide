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
  <Path d="M13.67 8H18a2 2 0 0 1 2 2v4.33" />
  <Path d="M2 14h2" />
  <Path d="M20 14h2" />
  <Path d="M22 22 2 2" />
  <Path d="M8 8H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 1.414-.586" />
  <Path d="M9 13v2" />
  <Path d="M9.67 4H12v2.33" />
</Svg>
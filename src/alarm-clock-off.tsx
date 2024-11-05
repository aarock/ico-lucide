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
  <Path d="M6.87 6.87a8 8 0 1 0 11.26 11.26" />
  <Path d="M19.9 14.25a8 8 0 0 0-9.15-9.15" />
  <Path d="m22 6-3-3" />
  <Path d="M6.26 18.67 4 21" />
  <Path d="m2 2 20 20" />
  <Path d="M4 4 2 6" />
</Svg>

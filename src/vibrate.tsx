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
  <Path d="m2 8 2 2-2 2 2 2-2 2" />
  <Path d="m22 8-2 2 2 2-2 2 2 2" />
  <Rect width="8" height="14" x="8" y="5" rx="1" />
</Svg>

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
  <Path d="M10.5 5H19a2 2 0 0 1 2 2v8.5" />
  <Path d="M17 11h-.5" />
  <Path d="M19 19H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2" />
  <Path d="m2 2 20 20" />
  <Path d="M7 11h4" />
  <Path d="M7 15h2.5" />
</Svg>
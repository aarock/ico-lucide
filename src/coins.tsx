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
  <Circle cx="8" cy="8" r="6" />
  <Path d="M18.09 10.37A6 6 0 1 1 10.34 18" />
  <Path d="M7 6h1v4" />
  <Path d="m16.71 13.88.7.71-2.82 2.82" />
</Svg>
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
  <Path d="M10.5 17h1.227a2 2 0 0 0 1.345-.52L18 12" />
  <Path d="m12 13.5 3.75.5" />
  <Path d="m4.5 8 10.58-5.06a1 1 0 0 1 1.342.488L18.5 8" />
  <Path d="M6 10V8" />
  <Path d="M6 14v1" />
  <Path d="M6 19v2" />
  <Rect x="2" y="8" width="20" height="13" rx="2" />
</Svg>
